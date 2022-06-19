import { createStore } from 'vuex'
import { auth } from "./modules/auth";
import { countries } from "./modules/countries";
import createPersistedState from "vuex-persistedstate"

const store = createStore({
  modules: {
    auth,
    countries
  },
  plugins: [createPersistedState()]
});

export default store;