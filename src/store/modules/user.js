
import { Login , userInfo,getAllAuth} from '@/api/login'
import* as lockr from 'lockr'
const user = {
  namespaced: true,
  state: {
    token: '',
    userInfo: null,
    allAuth:null,
    crm:null
  },
  mutations: {
    // set token
    SET_TOKEN: (state, token) => {
      state.token = token
      lockr.set('Admin-Token',token)
    },

    //set userinfo
    SET_USERINFO: (state,userInfo) => {
      state.userInfo = userInfo
      lockr.set('userInfo',userInfo)
    },
    
    // set allAuth
    SET_ALLAUTH(state,allAuth){
      state.allAuth = allAuth
    },
    
    // set crm
    SET_CRM(state,crm){
      state.crm = crm
    }
  },
  actions: {
    /**
     * @description: 登录
     * @param {*} commit
     * @param {*} dispatch
     * @param {*} formdata
     * @return {*}
     */    
    login({commit,dispatch},formdata){
      return new Promise((resolve,reject) =>{

        Login(formdata).then(res=>{
          let data = res.data || res
          commit('SET_TOKEN',data.adminToken || '')
          dispatch('getUserInfo')
          resolve(res)
        }).catch(err => {
          reject(err)
        })
               
      })
    },
    /**
     * @description: 用户信息
     * @param {*} commit
     * @return {*}
     */    
    getUserInfo({commit}){
      return new Promise((resolve,reject) => {
          userInfo().then(res => {
            commit('SET_USERINFO',res.data)
            resolve(res)
          }).catch(err =>{
             reject(err)
          })
      })
    },
    /**
     * @description: 用户绑定角色返回的菜单权限
     * @return {*}
     */    
    getAllAuth({commit}){
      return new Promise((resolve, reject) => {
        getAllAuth().then(res=>{
          const data = res.data || res
          commit('SET_ALLAUTH',data)
          commit('SET_CRM',data.crm)

          resolve(data)
        }).catch(err => {
          reject(err)
        })
       
      })
    }

  },
}



export default user