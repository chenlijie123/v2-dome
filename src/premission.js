/*
 * @Author: chenlijie chen.lijie@hxss.com.cn
 * @Date: 2023-03-01 14:26:01
 * @LastEditors: chenlijie chen.lijie@hxss.com.cn
 * @LastEditTime: 2023-03-06 15:20:31
 * @FilePath: \v2-dome\src\premission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import router from "./router";
import store from "./store";
// import * as lockr from 'lockr'
import { getToken } from "./utils/auth";
let loadAsyncRouter = false
const whiteList = ['/login','/note']  // no redirect whiteList

// nProgress.start()

// nProgress.set(0.9)


router.beforeEach((to, from, next) => {
  nProgress.start()
  const authToken = getToken()
  // const getters = store.getters.token
  if (authToken) {
    if (to.path === '/login') {
      next()
      nProgress.done()
    } else {
      if (!loadAsyncRouter) { // 判断是否有权限
        if (store.getters.allAuth) { // 是否获取菜单权限
          router.addRoute(store.getters.addRouters)
          console.log('store.getters.allAuth',store.getters.addRouters);
        } else {
          store.dispatch('user/getAllAuth')  // 菜单权限
            .then(auth => {
              console.log('1111111111');
              loadAsyncRouter = true
              // 根据权限生成路由表
              store.dispatch('permission/generateRouters', auth).then((res) => {
                console.log('generateRouters',res);
                router.addRoute(...res)
                // console.log('addrouters',addRouters);
              })

            })
          next()
        }
      } else {
        next()
      }

      // const hasRoles = store.getters.roles && store.getters.roles.length > 0
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({
        path: '/login'
      })
      nProgress.done()
    }
  }
  // console.log(to, from);
  // next()
  // nProgress.done()
})

router.afterEach(() => {
  // finish progress bar
  nProgress.done()
})