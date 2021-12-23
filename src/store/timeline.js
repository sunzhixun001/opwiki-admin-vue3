const timeline = {
  namespaced: true,
  state: () => ({
    dataSource: []
  }),
  mutations: {
    changeState (state, payload) {
      for (let k in payload) {
        state[k] = payload[k]
      }
    }
  },
  actions: {  },
  getters: {  }
}

export default timeline