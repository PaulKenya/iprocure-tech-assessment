import axios from "axios";

export const countries = {
  state: () => ({
    countries: [],
    country: {}
  }),

  actions: {
    fetchCountries({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('/auth/countries')
          .then(resp => {
            commit('setCountries', resp.data.data);
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
    editCountry({commit}, country) {
      return new Promise((resolve, reject) => {
        axios.get(`/auth/edit-country/${country}`)
          .then(resp => {
            commit('setCountries', resp.data);
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
  },

  mutations: {
    setCountries(state, countries){
      state.countries = countries
    },
    setCountry(state, country){
      state.country = country
    }
  },

  getters: {
    countries: state => state.countries,
  }
}
