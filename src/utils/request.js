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
  baseURL: 'http://crm-gateway.dev.hxss.com.cn', // baseurl + requestUrl
  timeout: 60000 // 请求超时时间
})


// 添加请求拦截器
service.interceptors.request.use(
  config => {
    if(store.getters.counts) {
      let token = Lockr.get('Admin-Token')
      config.headers['Admin-Token'] = token
    }
  
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
      console.log('response',res);
      if (res.code !== 0 && res.code !== 200) {
        // 302	登录已失效
        if (res.code === 302) {
          if (res.data && res.data.extra === 1) {
            confirmMessage(`您的账号${res.data.extraTime}在别处登录。如非本人操作，则密码可能已泄漏，建议修改密码`)
          } else {
            errorMessage('登录超时，请重新登录')
            // clearCacheEnterLogin()
          }
        } else if (res.code === 503) { // 系统维护中
          // router.replace('/systemMaintenance')
        } else {
          if (res.message || res.msg) {
            errorMessage(res.message || res.msg || '系统处理失败')
          }
        }
        return Promise.reject(res)
      } else {
        return res
      }
    },
    error => {
      console.log('err' + error) // for debug
      // Message({
      //   message: error.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return Promise.reject(error)
    }
)

export default service