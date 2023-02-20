import  request from '@/utils/request'


export function list (data){
  return request({
    url: 'project/basic/list',
    method: 'post',
    data : data ,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}