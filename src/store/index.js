import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: 'inside-dashboard'
  },
  mutations: {
    SET_LAYOUT (state, payload){
      state.layout = payload
    }
  },
  actions: {
  },
  getters:{
    layout (state){
      return state.layout
    }
  },
  modules: {
    auth,
  }
})