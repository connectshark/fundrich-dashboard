import { createStore } from 'vuex'
import LS from '../lib/ls'

const store = createStore({
  state: {
    token: '',
    BFNo: '',
    fundList: [],
  },
  mutations: {
    clearUserInfo: (state) => {
      state.token = ''
      state.BFNo = ''
      LS.remove('payload')
    },

    setUserInfo: (state, payload) => {
      state.token = payload.Token
      state.BFNo = payload.BFNo
      LS.save('payload', payload)
    },

    setFundList: (state, payload) => {
      state.fundList = payload.Data.TRADE_LISTS
    }
  },

  actions: {
    init ({ commit }) {
      commit('setUserInfo', LS.load('payload'))
    }
  },

  getters: {
    formatList (state) {
      return state.fundList.map(item => {
        return {
          name: item.FUND_SH_NM,
          risk: item.FUND_RISK_MSG,
          id: item.FUND_ID,
          type: item.PROF_TYPE_NM,
          day: item.NAV_DATE,
          total: item.TWD_BAL_COST,
          amt: item.GL_AMT,
          value: item.RSP_MARKET_VALUE,
          gain_all: item.ROI_RATE_DIV,
          gain: item.ROI_RATE
        }
      })
    }
  }
})

export default store