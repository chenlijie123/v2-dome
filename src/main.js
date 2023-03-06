import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';

Vue.use(ElementUI);

import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$message.success = function(msg) {
  return Message({
    message: msg,
    duration: 1500,
    type: 'success'
  })
}

Vue.prototype.$message.error = function(msg) {
  return Message({
    message: msg,
    duration: 1500,
    type: 'error'
  })
}

import '@/styles/index.scss' // global css

import './premission'

import VueElementUISkeleton from 'vue-elementui-skeleton';

Vue.use(VueElementUISkeleton, {
  directiveName: 'skeleton',
  rows: 10,
  radius: 3,
  bg: '#f0f2f5',
  animated:true
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
