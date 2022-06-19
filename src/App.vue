<template>
  <div>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";
import axios from "axios";
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['authToken', 'permissions', 'loggedInUser'])
  },
  methods: {
    hasPermission(){
      if(this.permissions){
        if(this.permissions.includes(this.$route.meta.permission)){
          this.$swal.fire({
            icon: 'error',
            title: '401',
            text: 'Unautharized to Perform this action!',
          })
        } else{
          return console.log('haiwezi', this.loggedInUser.permissions)
        }
      }
    }
  },
  mounted(){
    // this.hasPermission();
  },
  created(){
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = this.authToken;
      return config;
    });
  }
}
</script>

<style>
</style>
