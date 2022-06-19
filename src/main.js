import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import store from './store';
import axios from "axios";
import 'flowbite';
import './assets/tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

axios.defaults.withCredentials = true

axios.defaults.baseURL = 'https://gateway-service-5qoj75li4a-uc.a.run.app/api/v1';

createApp(App)
  .use(router)
  .use(store)
  .use(VueSweetalert2)
  .mount('#app')

