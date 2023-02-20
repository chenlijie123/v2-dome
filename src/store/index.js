import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'

import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
  num: 3
  },
  modules: {
    app,
  },
  getters
})

export default store