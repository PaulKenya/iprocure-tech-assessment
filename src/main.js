import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import store from './store';
import axios from "axios";

import 'flowbite';
import './assets/tailwind.css'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://gateway-service-5qo j75li4a-uc.a.run.app';

createApp(App).use(router).use(store).mount('#app')
