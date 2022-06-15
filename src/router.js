import { createWebHistory, createRouter } from 'vue-router';
import LoginPage from "./Views/LoginPage";
import AllCountries from "./Views/Country/AllCountries";
import CreateCountry from "./Views/Country/CreateCountry";

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/',
    name: 'AllCountries',
    component: AllCountries,
    children: [
      {
        path: '/create',
        name: 'CreateCountry',
        component: CreateCountry
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;