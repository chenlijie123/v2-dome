import * as Lockr from 'lockr'

export function getToken() {
  return Lockr.get('Admin-Token')
}

export function removeToken(){
  return Lockr.rm('Admin-Token')
}