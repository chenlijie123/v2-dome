import axios from 'axios'
import { MessageBox , Message } from 'element-ui'
import store from '@/store'
import { debounce } from 'throttle-debounce'
import * as Lockr from 'lockr'
const errorMessage = debounce(500, (message) => {
  Message({
    message: message,
    duration: 1500,
    type: 'error',
    offset: 60
  })
})

const confirmMessage = debounce(1000, (message) => {
  MessageBox.confirm(message, '提示', {
    confirmButtonText: '确定',
    showCancelButton: false,
    type: 'warning'
  }).then(() => {
    // clearCacheEnterLogin()
  }).catch(() => {})
})

const service = axios.create({
  baseURL: 'http://crm-gateway.test.hxss.com.cn', // baseurl + requestUrl
  timeout: 60000 // 请求超时时间
})


// 添加请求拦截器
service.interceptors.request.use(
  config => {
    Lockr.set('Admin-Token','4edc16dc898f408e993aeb7e8ed3201b')
    config.headers['Admin-Token'] = '4edc16dc898f408e993aeb7e8ed3201b'
    for (const key in config.data) {
      const val = config.data[key]
      if (val === undefined || val == null) {
        delete config.data[key]
      }
    }
    if(config.data === undefined || config.data === null) {
      config.data = {}
    }

    return config
  },
  error => {
    return Promise.reject( error )
  }
)

// 添加响应拦截器
service.interceptors.response.use(
    response => {
      const res = response.data
      if(res.code !== 200 && res.code !== 0){
        // 302 登陆失效
        if( res.code == 302 && res.data && res.data.extra == 1) {
          confirmMessage(`您的账号${res.data.extraTime}在别处登录。如非本人操作，则密码可能已泄漏，建议修改密码`)
          store.dispatch('resetToken').then(() => {
            location.reload()
          })
        }else {
          errorMessage('登录超时，请重新登录')
        }


      }else {
        return res
      }
    },
    error => {
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
)

export default service