import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss' // global css

import './premission'

import VueElementUISkeleton from 'vue-elementui-skeleton';

Vue.use(VueElementUISkeleton, {
  directiveName: 'skeleton',
  rows: 10,
  radius: 3,
  bg: '#f0f2f5'
});

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
