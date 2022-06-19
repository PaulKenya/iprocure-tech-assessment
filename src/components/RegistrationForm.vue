<template>
  <form @submit.prevent="submit">
    <h5 class="my-5 text-2xl font-medium text-gray-900 dark:text-white">{{ action }}</h5>
    <div class="grid gap-6 mb-6 lg:grid-cols-2">
      <div>
        <label for="firstName" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
        <input v-model="firstName" type="text" id="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required="">
      </div>
      <div>
        <label for="lastName" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
        <input v-model="lastName" type="text" id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required="">
      </div>
      <div>
        <label for="companyName" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
        <input v-model="companyName" type="text" id="companyName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
             rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required="">
      </div>
      <div>
        <label for="phoneNumber" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
        <input v-model="phoneNumber" type="tel" id="phoneNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
             rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="123-45-678" required="">
      </div>
      <div>
        <label for="website" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country Code</label>
        <input v-model="countryCode" type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Country Code" required="">
      </div>
      <div>
        <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
        <input v-model="email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm
           rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@companyName.com" required="">
      </div>
    </div>
    <div class="mb-6">
      <label for="username" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Name</label>
      <input v-model="username" type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user name" required="">
    </div>
    <div class="mb-6">
      <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
      <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
    </div>
    <div class="mb-6">
      <label for="confirm_password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
      <input v-model="confirmPassword" type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
    </div>
    <!--        <div class="flex items-start mb-6">-->
    <!--          <div class="flex items-center h-5">-->
    <!--            <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">-->
    <!--          </div>-->
    <!--          <label for="remember" class="text-left ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>-->
    <!--        </div>-->
    <ErrorToaster v-if="errors.length"/>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <LoaderSVG v-if="loading" class="inline w-7 h-7"/>
      <span v-else>
            {{ action }}
          </span>
    </button>
    <div v-if="action === 'Register'" class="text-sm font-medium text-gray-500 dark:text-gray-300 py-6">
      Already have an account?
      <router-link to="/login" class="text-blue-700 hover:underline dark:text-blue-500">
        Login
      </router-link>
    </div>
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ErrorToaster from "./ErrorToaster";
import LoaderSVG from "./LoaderSVG";

export default {
  name: "RegistrationForm",
  components: {LoaderSVG, ErrorToaster},
  props: {
    action: String
  },
  data(){
    return {
      firstName: 'Jane',
      lastName: 'Doe',
      companyName: 'JaneDTech',
      phoneNumber: '+25470000000',
      email: 'test@doe.com',
      countryCode: 'KE',
      password: '123456',
      confirmPassword: '123456',
      username: 'codeninja',
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'errors', 'loggedInUser'
    ])
  },
  methods: {
    ...mapActions(['Register']),
    setUser(){
      this.firstName = this.loggedInUser.firstName;
      this.lastName = this.loggedInUser.lastName;
      this.companyName = this.loggedInUser.companyName;
      this.phoneNumber = this.loggedInUser.phoneNumber;
      this.email = this.loggedInUser.email;
      this.countryCode = this.loggedInUser.countryCode;
      this.username = this.loggedInUser.username;
      this.password = this.loggedInUser.password;
    },

    submit(){
      this.loading = true;

      const user = {
        'firstName': this.firstName,
        'lastName': this.lastName,
        'companyName': this.companyName,
        'phoneNumber': this.phoneNumber,
        'email': this.email,
        'countryCode': this.countryCode,
        'username': this.username,
        'password': this.password,
        "userTypeId": 1
      };

      // eslint-disable-next-line no-unused-vars
      this.Register(user).then(resp => {
        this.$swal.fire({
          icon: 'success',
          title: 'Successful Registration',
          showConfirmButton: false,
          timer: 1500
        })

        this.loading = false;

        // Redirect to login
        this.$router.push('/login');

        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        this.loading = false;
      })
    }
  },
  mounted() {
    this.setUser();
  }
}
</script>

<style scoped>

</style>