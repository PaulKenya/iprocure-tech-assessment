import { createWebHistory, createRouter } from 'vue-router';
import LoginPage from "./Views/LoginPage";
import AllCountries from "./Views/Country/AllCountries";
import CreateCountry from "./Views/Country/CreateCountry";
import store from './store';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { guest: true },
  },
  {
    path: '/',
    name: 'AllCountries',
    component: AllCountries,
    meta: {requiresAuth: true},
    children: [
      {
        path: '/create',
        name: 'CreateCountry',
        component: CreateCountry,
        meta: {requiresAuth: true},
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/countries");
      return;
    }
    next();
  } else {
    next();
  }
});


export default router;