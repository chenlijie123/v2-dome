/*
 * @Author: chenlijie chen.lijie@hxss.com.cn
 * @Date: 2023-03-01 14:26:01
 * @LastEditors: chenlijie chen.lijie@hxss.com.cn
 * @LastEditTime: 2023-03-06 16:15:46
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

// nProgress.start()

// nProgress.set(0.9)


router.beforeEach((to, from, next) => {
  console.log('5555555555');
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
          // router.addRoute(store.getters.addRouters)
          store.dispatch('permission/generateRouters', store.getters.allAuth).then((res) => {
            console.log('generateRouters',res);
            for (let index = 0; index < res.length; index++) {
              const element = res[index];
              
              router.addRoute(element)
            }
            // console.log('addrouters',addRouters);
            if (to.path === '/404') {
              next({
                path: to.redirectedFrom || '/',
                replace: true
              })
            } else {
              next({
                ...to,
                replace: true
              })
            }
          })
          console.log('22222222222222');
          // console.log('store.getters.allAuth',store.getters.addRouters);
        } else {
          store.dispatch('user/getAllAuth')  // 菜单权限
            .then(auth => {
              loadAsyncRouter = true
              // 根据权限生成路由表
              store.dispatch('permission/generateRouters', auth).then((res) => {
                console.log('generateRouters',res);
                for (let index = 0; index < res.length; index++) {
                  const element = res[index];
                  
                  router.addRoute(element)
                }
                console.log('666666666666',to.path);
                // console.log('addrouters',addRouters);
                if (to.path === '/404') {
                  next({
                    path: '/'
                  })
                } else {
                  next({
                    ...to,
                    replace: true
                  })
                }
              })
              console.log('11111111111111');
            }).catch((err)=>{
              loadAsyncRouter = false
              // if (!err.hideMsg) {
                Message.error(err.msg || '获取用户信息失败')
              // }
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
        console.log('77777777');
        next()
      }

      // const hasRoles = store.getters.roles && store.getters.roles.length > 0
    }
  } else {
    console.log('33333333333333');
    console.log('topath',to.path);
    if (whiteList.indexOf(to.path) != -1) {
      next()
    } else {
      console.log('444444444444444');
      next({
        path: '/login'
      })
    }
    nProgress.done()
  }
  // console.log(to, from);
  // next()
  // nProgress.done()
})

router.afterEach(() => {
  // finish progress bar
  nProgress.done()
})