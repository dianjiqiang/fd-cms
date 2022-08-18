import { createStore } from 'vuex'
import home from './home'

const store = createStore({
  state() {
    return {
      userInfo: {
        id: '',
        userName: '',
        type: ''
      }
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    home
  }
})

export default store
