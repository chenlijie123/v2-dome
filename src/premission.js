/*
 * @Author: chenlijie chen.lijie@hxss.com.cn
 * @Date: 2023-03-01 14:26:01
 * @LastEditors: chenlijie chen.lijie@hxss.com.cn
 * @LastEditTime: 2023-03-16 13:33:45
 * @FilePath: \v2-dome\src\premission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import router from "./router";
import store from "./store";
// import * as lockr from 'lockr'
import { getToken } from "./utils/auth";
import { Message  } from "element-ui";
let loadAsyncRouter = false
const whiteList = ['/login']  // no redirect whiteList

router.beforeEach((to, from, next) => {
  nProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next()
      nProgress.done()
    } else {
      if (!loadAsyncRouter) { // 判断是否有权限

        if (store.getters.allAuth) { // 是否获取菜单权限

          store.dispatch('permission/generateRouters', store.getters.allAuth).then((res) => {
            for (let index = 0; index < res.length; index++) {
              const element = res[index];
              router.addRoute(element)
            }
            if (to.path === '/404') {
              next({
                path: '/login',
                replace: true
              })
            } else {
              next({
                ...to,
                replace: true
              })
            }
          })

        } else {
          
          store.dispatch('user/getAllAuth')  // 菜单权限
            .then(auth => {
              loadAsyncRouter = true

              // 根据权限生成路由表
              store.dispatch('permission/generateRouters', auth).then((res) => {
                for (let index = 0; index < res.length; index++) {
                  const element = res[index];
                  
                  router.addRoute(element)
                }

                if (to.path === '/404') {
                  next({
                    path: to.redirectedFrom || '/login',
                    replace: true
                  })
                } else {
                  next({
                    ...to,
                    replace: true
                  })
                }
              })
            })
            .catch((err)=>{
              loadAsyncRouter = false
              Message.error(err.msg || '获取用户信息失败')
              store.dispatch('user/resetToken')
              next(`/login`)
              nProgress.done()
              // next({
              //   path: '/'
              // })
              // store.dispatch('LogOut').then(() => {
              // })
            })
          // next()
        }
      } else {
        next()
      }

      // const hasRoles = store.getters.roles && store.getters.roles.length > 0
    }
  } else {
    if (whiteList.indexOf(to.path) != -1) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
    nProgress.done()
  }
})

router.afterEach(() => {
  nProgress.done()
})