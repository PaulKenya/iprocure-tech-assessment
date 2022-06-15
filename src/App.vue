<template>
  <router-view></router-view>
</template>

<script>
import api from "@/api";
import axios from "axios";
import router from "@/router";

export default {
  name: 'App',
  components: {
  },
  created: function () {
    console.log('test auth');
    //check if user is logged in
    api.interceptors.request.use((config) => {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      return config;
    });

    api.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.response.status === 401) {
          // if you ever get an unauthorized, logout the user
          localStorage.removeItem('token')
          delete axios.defaults.headers.common['Authorization']
          console.log("happened", router.currentRoute.path)
          if (router.currentRoute.path !== '/') {
            router.push('/')
          }
        }
        // if (err.response.status === 500) {
        //   console.log("err 500")
        //   store.dispatch('setError', {'data':'An Unknown Error Occurred'})
        // }
        throw err;
      });
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
