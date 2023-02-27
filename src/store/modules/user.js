import { Login } from '@/api/login'
import* as lockr from 'lockr'
const user = {
  namespaced: true,
  state: {
    token: '',

    userInfo: '',
    roles: '',
    count: 2
  },
  mutations: {
    USERINFO (state , userInfo) {
      state.userInfo = userInfo
    },
    SET_TOKEN: (state, token) => {
      state.token = token
      lockr.set('Admin-Token',token)
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    login({commit},formdata){
      return new Promise((resolve,reject) =>{

        Login(formdata).then(res=>{
          let data = res.data || res
          commit('SET_TOKEN',data.adminToken || '')
          resolve(res)
        }).catch(err => {
          reject(err)
        })
               
      })
    }
  },
}



export default user