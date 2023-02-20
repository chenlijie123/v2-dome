const user = {
  namespaced: true,
  state: {
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
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // login({commit},formdata){
    //   return new Promise((resolve,reject) =>{

    //   })
    // }
  },
}



export default user