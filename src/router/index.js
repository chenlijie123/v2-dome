// route 一组映射关系， key为路径， value为function或component

// 引入 vue vue-router

import Vue from 'vue'
import VueRouter from 'vue-router'

// import charts from './modules/charts'
import components from './modules/components'


import Layout from '@/layout'

// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '../views/Home.vue'
import note from '@/views/note/note1'
// 应用路有插件
Vue.use(VueRouter)


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
export const constantRoutes = [
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
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
    path:'/note',
    name:'note',
    component: () => import('@/views/note/note1'),
    children:[
      {
        path:'note1',
        name:'note1',
        component:note
        // component:() => import('@/views/note/note1.vue')
      }
    ]
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

export const asyncRouters = [
  ...components,
  // ...charts
]

// 3.创建路由实例并出传递routers配置
const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题

// 方案一
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

//方案二
// 删除 node_modules ，到 package.json 中将 vue-router 改为 3.0.7 ，重新 npm i (未测试)
 

// 4.暴露router实例
export default router
