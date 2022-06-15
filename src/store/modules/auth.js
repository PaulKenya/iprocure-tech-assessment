import axios from 'axios'
import api from "@/api";
import {auth_url} from "@/utils/constants";
import {decodeToken} from "@/utils/methods";
import {refresh_token_url} from "@/utils/constants";


// eslint-disable-next-line no-unused-vars
const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  userInStorage: localStorage.getItem('user') || '',
  user: undefined,
  error: {},
}

// eslint-disable-next-line no-unused-vars
const getters = {
  isLoggedIn: state => !!state.token,
  getToken: state => state.token,
  getUserInStorage: state => state.userInStorage,
  authStatus: state => state.status,
  getError: state => state.error,
  getUser: state => state.user,
}

// eslint-disable-next-line no-unused-vars
const actions = {
  fetchCurrentUser({commit}) {
    return new Promise((resolve, reject) => {
      api({url: "/user", method: 'GET'}).then(
        resp => {
          commit('set_user', resp.data)
          resolve(resp)
        }
      ).catch(err => {
        reject(err)
      })
    })
  },
  login({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({url: auth_url, data: user, method: 'POST'})
        .then(resp => {
          let access_token = resp.data.access;
          let refresh_token = resp.data.refresh;
          localStorage.setItem('token', access_token)
          localStorage.setItem('refresh_token', refresh_token)
          axios.defaults.headers.common['Authorization'] = access_token
          commit('auth_success', access_token)
          localStorage.setItem('expiry', decodeToken(access_token).exp);
          resolve(resp)
        }).catch(err => {
        console.log("err", err)
        if (err.response) {
          commit('set_error', err.response.data)
        } else {
          commit('set_error', {'message': 'An unknown error occurred'})
        }
        commit('auth_error')
        localStorage.removeItem('token')

        reject(err)
      })
    })
  },
  refreshToken({commit}, payload) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      api({url: refresh_token_url, method: 'POST', data: payload}).then(resp => {
        console.log('token', resp.data)
        let access_token = resp.data.access;
        localStorage.setItem('token', access_token)
        axios.defaults.headers.common['Authorization'] = access_token
        commit('auth_success', access_token)
        localStorage.setItem('expiry', decodeToken(access_token).exp);
        resolve(resp)
      }).catch(err => {
        console.log("err", err)
        if (err.response) {
          commit('set_error', err.response.data)
        } else {
          commit('set_error', {'message': 'An unknown error occurred'})
        }
        commit('auth_error')
        localStorage.removeItem('token')

        reject(err)
      })
    })
  },
  logout({commit}) {
    return new Promise((resolve) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  },
  setError({commit}, err) {
    commit('set_error', err)
  },
  currentRoutePath(context) {
    return context.$route.path;
  },
  currentRouteName(context) {
    return context.$route.name;
  }
}

// eslint-disable-next-line no-unused-vars
const mutations = {
  auth_request(state) {
    state.status = 'loading'
  },
  set_user(state, user) {
    state.user = user
  },
  set_business(state, business) {
    state.business = business
  },
  auth_success(state, token) {
    state.status = 'success'
    state.token = token
  },
  auth_error(state) {
    state.status = 'error'
  },
  set_error(state, err) {
    if(err.toString().length >=800){
      state.error = {'detail':'An Unknown Error Occured'}
    }else{
      state.error = err
    }
  },
  logout(state) {
    state.status = ''
    state.token = ''
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}