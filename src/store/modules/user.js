import { login } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import * as jwtDecode from 'jwt-decode'
const user = {
  state: {
    token: getToken(),
    name: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetInfo({ commit, state }) {
      const userInfo = jwtDecode(getToken())
      return new Promise(resolve => {
        if (userInfo) {
          commit('SET_NAME', userInfo.username)
        }
        commit('SET_ROLES', ['admin'])
        resolve()
      })
    },
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_NAME', '')
        removeToken()
        resolve()
      })
    },
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
