const getters = {
  nums : state => state.num,
  counts : state => state.app.count,
  // user
  token : state => state.user.token,
  userInfo : state => state.user.userInfo,
  allAuth : state => state.user.allAuth,
  crm : state => state.user.crm,
  addRouters : state => state.permission.addRouters,
}

export default getters