import Vuex from 'vuex'
import Vue from 'vue'
import http from './http'
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

Vue.use(Vuex)

const estado = {
  token: null
}

const mutations = {
  DEFINIR_USUARIO_LOGADO(state, token) {
    state.token = token
  },
  DESLOGAR_USUARIO(state) {
    state.token = null
  }
}

const actions = {
  efetuarLogin({ commit }, usuario) {
    return new Promise((resolve, reject) => {
      http.login(usuario)
        .then(({ data }) => {
          commit('DEFINIR_USUARIO_LOGADO', data.token)
          resolve(data)
        }).catch((err) => {
          console.log(err)
          reject(err)
        })

    })
  }
}

const getters = {
  usuarioEstaLogado: state => Boolean(state.token)
}
export default new Vuex.Store({
  state: estado,
  mutations,
  actions,
  getters,
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key)
      }
    })
  ]
})