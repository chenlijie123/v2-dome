const getters = {
  nums : state => state.num,
  counts : state => state.app.count,
  // user
  token : state => state.user.token,
  userInfo : state => state.user.userInfo,
  allAuth : state => state.user.allAuth,
  crm : state => state.user.crm,
  addRouters : state => state.permission.addRouters,
  routers : state => state.permission.routers,
  sidebar : state => state.app.sidebar
}

export default getters