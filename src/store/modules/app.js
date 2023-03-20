
const app = {
  namespaced: true,
  state: {
    count: 2,
    sidebar:{
      openBar:true
    }
  },
  mutations: {
    SET_SIDEBAR(state) {
      state.sidebar.openBar = !state.sidebar.openBar
      console.log('SET_SIDEBAR',state.openBar);
    },
    INCREMENT (state) {
      state.count++
    },
    DECREMENT (state) {
      state.count--
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    sidebar({commit}){
      // return 
      commit('SET_SIDEBAR')
    }
    // remove token
    // resetToken ({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '')
    //     commit('SET_ROLES', [])
    //     // removeToken()
    //     resolve()
    //   })
    // },

    // syncAdd ({ commit },paylod) {
    //   return new Promise((resolve, reject) => {
    //     resolve(paylod)
    //     reject(commit)
    //   })
    // },
    // asynclogin ({ commit }, paylod) {
    //   return new Promise((resolve, reject) => {
    //     resolve(paylod)
    //     reject(commit)
    //   })
    // }
  },
}
export default app