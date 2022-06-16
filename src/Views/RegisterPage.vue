<template>
  <div class="flex justify-center">
    <div class="p-4 w-1/2 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">

      <form>
        <h5 class="my-5 text-2xl font-medium text-gray-900 dark:text-white">Register</h5>
        <div class="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label for="first_name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input v-model="first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required="">
          </div>
          <div>
            <label for="last_name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
            <input v-model="last_name" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required="">
          </div>
          <div>
            <label for="company" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
            <input v-model="company" type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
             rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required="">
          </div>
          <div>
            <label for="phone" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input v-model="phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
             rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required="">
          </div>
          <div>
            <label for="website" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country Code</label>
            <input v-model="countryCode" type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country Code" required="">
          </div>
          <div>
            <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
           rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="">
          </div>
        </div>
        <div class="mb-6">
          <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
          <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
        </div>
        <div class="mb-6">
          <label for="confirm_password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
          <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
          </div>
          <label for="remember" class="text-left ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>
        <ErrorToaster v-if="errors.length"/>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ErrorToaster from "../components/ErrorToaster";

export default {
  name: "RegisterPage",
  components: {ErrorToaster},
  data(){
    return {
      first_name: 'Jane',
      last_name: 'Doe',
      company: 'JaneDTech',
      phone: '+254712345678',
      email: 'test@doe.com',
      countryCode: 'KE',
      password: '123456',
      confirmPassword: '',
      username: 'codeninja',
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