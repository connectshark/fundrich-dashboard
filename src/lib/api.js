import axios from 'axios'

const api = {
  login (id, password) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        baseURL: import.meta.env.VITE_LOGIN_URL,
        url: '/fund/login',
        data: {
          Id: id,
          Password: password
        }
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },

  getTradeInfo (token, BFNo) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        baseURL: import.meta.env.VITE_FUNDRICH_URL,
        url: '/ECGWToApi2/api2/GetTradeInfo',
        data: {
          BF_NO: BFNo,
          BaseData: {
            AccountId: 'SW',
            AccountKey: '70539165',
            BrowserInfo: 'string',
            HostName: 'string',
            LangCode: 'string',
            LocalTime: '2019-01-24T01:44:45.197Z',
            RequestValue: 'string',
            SessionId: 'string',
            TokenId: token,
            UserCode: BFNo,
          },
          VENDER_ID: ''
        }
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
}

export default api