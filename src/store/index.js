import Vue from 'vue'
import Vuex from 'vuex'

import test from './modules/test'

import getter from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
   
  modules: {
    test,
  },
  getter
})

export default store