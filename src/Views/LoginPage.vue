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
<!--        <div class="flex items-start">-->
<!--          <div class="flex items-start">-->
<!--            <div class="flex items-center h-5">-->
<!--              <input id="remember" type="checkbox" value=""-->
<!--                     class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600-->
<!--                      dark:focus:ring-blue-600 dark:ring-offset-gray-800">-->
<!--            </div>-->
<!--            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>-->
<!--          </div>-->
<!--          <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>-->
<!--        </div>-->
        <ErrorToaster v-if="errors.length"/>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
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
import ErrorToaster from "../components/ErrorToaster";

export default {
  name: "LoginPage",
  components: {ErrorToaster},
  data(){
    return {
      username: 'frogman',
      password: '123456',
      clientType: 'web'
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
      this.LogIn({
        'username': this.username,
        'password': this.password,
        'clientType': this.clientType
        // eslint-disable-next-line no-unused-vars
      }).then(resp => {
        this.$swal('Hello Vue world!!!');
        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
      })
    }
  }
}
</script>

<style scoped>

</style>