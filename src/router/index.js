// route 一组映射关系， key为路径， value为function或component

// 引入 vue vue-router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '../views/Home.vue'

// 应用路有插件
Vue.use(VueRouter)


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/echart',
    name: 'echart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/charts/line.vue'),
    children:[
      {
        path:'line',
        name:'line',
        component: () => import(/* webpackChunkName: "about" */ '@/views/charts/echart-line/index.vue'),
      }
    ]
    // children:[
    //   {
    //     path:'/line',
    //     name:'line',
    //     component:()=> import ( '@/views/charts/line.vue')
    //   }

    // ]
  },
  {
    path: '/404',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/404/index.vue'),
    
  },
  { path: '*', redirect: '/404', hidden: true }
]


// 3.创建路由实例并出传递routers配置
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 4.暴露router实例
export default router
