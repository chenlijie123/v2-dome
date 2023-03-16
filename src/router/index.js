// route 一组映射关系， key为路径， value为function或component

// 引入 vue vue-router

import Vue from 'vue'
import VueRouter from 'vue-router'

import charts from './modules/charts'
// import components from './modules/components'


import Layout from '@/layout'

// 1. 定义路由组件.
// 也可以从其他文件导入
// import Home from '../views/Home.vue'
// import note from '@/views/note/note1'
// 应用路有插件
Vue.use(VueRouter)


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const layout = function (meta = {}, path = '') {
  return {
    path: path,
    // component: Layout,
    meta: {
      requiresAuth: true,
      ...meta
    }
  }
}
export const constantRoutes = [
  {
    ...layout(
      {
        meta: {
          title: '工作台',
          // requiresAuth: true,
          permissionList: ['crm', 'leads', 'assigned']
        }
      },
      '/task',
      ),
      naem:'测试一',
    redirect: '/task/home',
    component: Layout,
    children: [
      {
        path: 'work',
        component: () => import('@/views/work/visit.vue'),
        name: 'visit',
        meta: {
          title: 'visit',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
        name: 'home',
        meta: {
          title: 'home',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
    // hidden:true
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: '测试二',
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/charts/lines.vue'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/charts/line.vue'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/login'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login')
  },
  {
    path: '/404',
    hidden: true,
    component: () => import(/* webpackChunkName: "about" */ '@/views/404/index.vue'),
  },
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRouters = [
  // ...components,
  ...charts
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
