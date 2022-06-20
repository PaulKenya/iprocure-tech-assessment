import axios from "axios";

export const auth = {
  state: () => ({
    user: null,
    authToken: '',
    permissions: [],
    errors: []
  }),

  actions: {
    LogIn({commit}, user) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', user)
          .then(resp => {
            commit('setAuthToken', `Bearer ${resp.data.data.token}`);
            commit('setUser', resp.data.data.user)
            commit('setPermissions', resp.data.data.user.permissions);
            // set token
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

    Register({commit}, user) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/register', user)
          .then(resp => {
            console.log('registered successfully', resp);
            // commit('setUser', user.get('username'))
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

    updateProfile({commit}, user) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/update-profile', user)
            .then(resp => {
              console.log('profile updated successfully', resp);
              commit('setUser', resp.data)
              resolve(resp)
            }).catch(err => {
          if (err.response?.data?.errors) {
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
      commit('LogOut', null)
    }
  },

  mutations: {
    setUser(state, username){
      state.user = username;
    },
    LogOut(state){
      state.user = null;
    },
    setErrors(state, errors){
      state.errors = errors;
    },
    setAuthToken(state, token){
      state.authToken = token;
    },
    setPermissions(state, permissions){
      state.permissions = permissions;
    }
  },

  getters: {
    isAuthenticated: state => !!state.user,
    loggedInUser: state => state.user,
    errors: state => state.errors,
    authToken: state => state.authToken,
    permissions: state => state.permissions
  }
}
