const test = {
  state:{
    num: 6,
    count:2
  },
  mutations: {
    increment(state){
        state.count++
    },
    decrement(state) {
     state.count-- 
    }
  },
  actions: {
  },
}
export default test