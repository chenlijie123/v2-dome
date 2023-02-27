import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'

import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
  num: 3
  },
  modules: {
    app,
    user
  },
  getters
})

export default store