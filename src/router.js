import { createWebHistory, createRouter } from 'vue-router';
import LoginPage from "./Views/Auth/LoginPage";
import AllCountries from "./Views/Country/AllCountries";
import CreateCountry from "./Views/Country/CreateCountry";
import RegisterPage from "./Views/Auth/RegisterPage";
import UpdateAccount from "./Views/Auth/UpdateAccount";
import store from './store';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: { guest: true },
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: { guest: true },
  },
  {
    path: '/update-account',
    name: 'UpdateAccount',
    component: UpdateAccount,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/',
    name: 'AllCountries',
    component: AllCountries,
    meta: {
      requiresAuth: true,
      permission: 'view_country'
    },
    children: [
      {
        path: '/edit',
        name: 'CountryForm',
        component: CreateCountry,
        meta: {
          requiresAuth: true,
          permission: 'edit_country'
        },
        props: (x) => ({
          action: x.params.action,
          verb: x.params.verb
        })
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
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});


export default router;