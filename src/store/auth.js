import apiClient from "../axios";
import axios from "axios"

export default {
namespaced: true,
  devtools: true,

  state: {
    token: null,
    user: null,
    message: [],
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USER(state, data) {
      state.user = data
    },
    SET_MSG(state, data) {
      state.message = data
    }

  },

  actions: {
    async login({ dispatch, commit }, data) {
      console.log(data)
      // let response = await apiClient.post('/login', data)
      // return dispatch('attempt', response.data.token)
      try {
        let response = await apiClient.post('/login', data)
        if (response.data.status) {
          return dispatch('attempt', response.data.token)
        } else {
          console.log(response.response.data);
          return Promise.reject(response.data)
        }
      } catch (error) {
        if (error.response) {
          commit('SET_MSG', error.response.data)
          
        }
          console.log(error.response);
          commit('SET_MSG', error.response.data)
        
        return Promise.reject(error)
      }
    },


    async attempt({ commit, state }, token) {
      // await axios.get('http://localhost:8000/sanctum/csrf-cookie')
      // await axios.get('https://scout.gulfytrend.com/sanctum/csrf-cookie')
      state.user = JSON.parse(localStorage.getItem('user'))
      if (token) {
        commit('SET_TOKEN', token)
      }
      if (!state.token) {
        return
      }

      let response = await apiClient.get('/user')
      try {
        // console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data))
        await commit('SET_USER', response.data)
      } catch (error) {
        await commit('SET_MSG', response.data.message)
        await commit('SET_TOKEN', null)
        await commit('SET_USER', null)
      }
    },

    async singout ({commit}) {
      return await apiClient.post('auth/signout').then(() => {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      })
    },

    async registerUser({ commit }, fields) {
      await apiClient.post("/register", fields).then((res) => {
        commit('USER', res.data)
      })
    },

  },

  getters: {
    authenticated (state) {
      return state.token && state.user
    },

    user (state) {
      return state.user
    }
  }

}