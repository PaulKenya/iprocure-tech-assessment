<template>
  <div class="flex justify-center">
    <div class="p-4 w-1/2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form @submit.prevent="submit" class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in</h5>
        <div>
          <label for="text" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your username</label>
          <input v-model="username" type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                 placeholder="username" required="">
        </div>
        <div>
          <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
          <input v-model="password" type="password" name="password" id="password" placeholder="••••••••"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                 required="">
        </div>
        <ErrorToaster v-if="errors.length"/>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <LoaderSVG v-if="loading" class="inline w-7 h-7"/>
          <span v-else>
            Login to your account
          </span>
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?
          <router-link to="/register" class="text-blue-700 hover:underline dark:text-blue-500">
            Create account
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ErrorToaster from "../../components/ErrorToaster";
import LoaderSVG from "../../components/LoaderSVG";
import axios from "axios";

export default {
  name: "LoginPage",
  components: {LoaderSVG, ErrorToaster},
  data(){
    return {
      username: 'frogman',
      password: '123456',
      clientType: 'web',
      loading: false
    }
  },
  computed: {
    ...mapGetters([
        'errors'
    ])
  },
  methods: {
    ...mapActions(['LogIn']),
    submit(){
      this.loading = true;
      this.LogIn({
        'username': this.username,
        'password': this.password,
        'clientType': this.clientType
        // eslint-disable-next-line no-unused-vars
      }).then(resp => {
        axios.defaults.headers.common['Authorization'] = resp.authToken;

        this.$router.push('/');

        this.$swal.fire({
          icon: 'success',
          title: 'Successful Login',
          showConfirmButton: false,
          timer: 1500
        })

        this.loading = false;
        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        this.loading = false;
      })
    }
  }
}
</script>

<style scoped>

</style>