import request from '@/utils/request'


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