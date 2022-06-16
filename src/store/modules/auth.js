import axios from "axios";

export const auth = {
  state: () => ({
    user: null,
  }),

  actions: {
    async LogIn({commit}, User) {
      await axios.post('login', User)
      await commit('setUser', User.get('username'))
    },

    async LogOut({commit}){
      let user = null
      commit('logout', user)
    }
  },

  mutations: {
    setUser(state, username){
      state.user = username
    },
    LogOut(state){
      state.user = null
    },
  },

  getters: {
    isAuthenticated: state => !!state.user,
    loggedInUser: state => state.user,
  }
}
