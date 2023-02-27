const getter = {
  nums : state => state.num *2,
  counts : state => state.app.count *2,
  token: state => state.user.token,
}

export default getter