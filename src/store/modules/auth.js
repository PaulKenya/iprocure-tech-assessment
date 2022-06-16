import axios from "axios";

export const auth = {
  state: () => ({
    user: null,
    errors: []
  }),

  actions: {
    LogIn({commit}, user) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', user)
          .then(resp => {
            console.log('logged in successfully', resp);
            commit('setUser', user.get('username'))
            resolve(resp)
          }).catch(err => {
          if (err.response) {
            commit('setErrors', err.response.data.errors)
          } else {
            commit('setErrors', {'message': 'An unknown error occurred'})
          }
          reject(err)
        })
      })
    },

    clearErrors({commit}) {
      commit('setErrors', [])
    },

    async LogOut({commit}){
      let user = 'test'
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
    setErrors(state, errors){
      state.errors = errors
    }
  },

  getters: {
    isAuthenticated: state => !!state.user,
    loggedInUser: state => state.user,
    errors: state => state.errors
  }
}
