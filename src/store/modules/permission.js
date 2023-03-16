/*
 * @Author: chenlijie chen.lijie@hxss.com.cn
 * @Date: 2023-03-02 13:28:23
 * @LastEditors: chenlijie chen.lijie@hxss.com.cn
 * @LastEditTime: 2023-03-15 16:05:12
 * @FilePath: \v2-dome\src\store\modules\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {constantRoutes,  asyncRouters} from '@/router' //constantRoutes
const forCheckPermission = function(permission,auth){
  console.log('permission',permission);
  for( let i =0 ; i< permission.length;i++){
    const key= permission[i]
    auth = auth[key]
    if(!auth){
      return false //permissions 数组每一项与auth对比，不存在返false打断循环
    }else if(permission.length - 1 === i){  // 如果最后一项匹配成功，返回true
      return true
    }
  }
}

const checkAuth = function(router,auth){
  if(router.meta){
    const mateinfo = router.meta
    if(!mateinfo.requiresAuth){
      return true  // 不存在requiresAuth不需要校验权限
    }else {
        if(mateinfo.permissions){ // 权限数组是否存在
          return  forCheckPermission(mateinfo.permissions,auth)  // 返回权限校验的结果是否匹配成功
        }else if (mateinfo.permissionList) {
          for (let index = 0; index < mateinfo.permissionList.length; index++) {
            // permiassionList: []  有一项满足匹配就返回 true
            const element = forCheckPermission(mateinfo.permissionList[index],auth) 
            if(element){
              return true
            }
          }
          // 都不匹配返回false 剔除路由
          return false
        }
    }
  }
  return true

}

const filterRouter = function (routers,auth) {
  const res=[]
  routers.forEach(router => {
    if(checkAuth(router,auth)){ // 权限校验
      if(router.children) {
        router.children = filterRouter(router.children,auth) // 存在children 递归遍历
      }
      res.push(router)
    }

  });
  // res.push({
  //   path:'/',
  //   redirect:'/task'
  // })
  return res  // 返回权限匹配成功的route
}

const perfectRoute = function (auth, result) {
  console.log('asyncRouters',asyncRouters);
  let accessedRoutes = filterRouter(asyncRouters,auth) // 成功匹配权限的路由
  if(result) {
    result (accessedRoutes) 
  }

}

const permission = {
  namespaced: true,
  state: {
    addRouters: [],
    routers:[]
  },
  mutations: {
    SET_ROUTERS:(state,data)=>{
      state.addRouters =  data
      state.routers = constantRoutes //.concat(data)
    }

  },
  actions: {
    // 接口菜单权限与本地路由表匹配
    generateRouters ({ commit }, auth) {
      return new Promise(resolve => {
        perfectRoute(auth, (routers) => {
          console.log('000000routers',routers);
          commit('SET_ROUTERS', routers)
          resolve(routers)
          // reject()
        })
      })
    }
  }
}

export default permission