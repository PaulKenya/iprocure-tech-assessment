import { createStore } from 'vuex'
import { auth } from "./modules/auth";
import createPersistedState from "vuex-persistedstate"

const store = createStore({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});

export default store;