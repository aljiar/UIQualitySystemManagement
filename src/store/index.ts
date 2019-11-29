import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_dialog: ''
  },
  mutations: {
    updateLoginDialog (state, dialog) {
      state.login_dialog = dialog
    }
  },
  actions: {
    updateLoginDialog (state, dialog) {
      state.commit('updateLoginDialog', dialog)
    }
  },
  modules: {
  },
  getters: {
    getLoginDialog (state) {
      return state.login_dialog
    }
  }
})
