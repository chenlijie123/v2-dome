
import request from '@/utils/request'

/**
 * @description: 登录接口
 * @param {*} data
 * @return {*}
 */
export function Login (data) {
  return request({
    url: 'login',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * @description: 调用用户信息
 * @return {*}
 */

export function userInfo(data){
  return request({
    url:'adminUser/queryLoginUser',
    method:'post',
    data: data,
    headers:{
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * @description: 调用权限
 * @return {*}
 */

export function getAllAuth(data) {
  return request({
    url:'adminRole/auth',
    method:'post',
    data:data,
    headers:{
      'Content-Type':'application/json;charset=UTF-8'
    }
  })
}