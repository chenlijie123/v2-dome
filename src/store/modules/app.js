const app = {
  namespaced: true,
  state: {
    token: '',
    roles: '',
    count: 2
  },
  mutations: {
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
    // remove token
    resetToken ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        // removeToken()
        resolve()
      })
    },

    syncAdd ({ commit }) {
      commit('DECREMENT', 3)
      // return {payload:
      //   reject(commit)
      // }) 
    },
    asynclogin ({ commit }, paylod) {
      return new Promise((resolve, reject) => {
        resolve(paylod)
        reject(commit)
      })
    }
  },
}
export default app