import { createStore } from 'vuex'

const store = createStore({
  state: {
    token: '',
    BFNo: ''
  },
  mutations: {
    setUserInfo: (state, payload) => {
      state.token = payload.Token
      state.BFNo = payload.BFNo
    }
  }
})

export default store