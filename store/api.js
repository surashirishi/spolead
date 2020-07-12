import axios from 'axios'
import apiEndpoint from '../webapi/api'

export const namespaced = true
// const getters = {}
export const actions = {
  apiRequest (context, reqData) {
    return new Promise((resolve, reject) => {
      const req = {}
      req.timeout = 10000
      if (
        apiEndpoint[reqData.api].method === 'post' ||
        apiEndpoint[reqData.api].method === 'delete' ||
        apiEndpoint[reqData.api].method === 'patch'
      ) {
        req.data = reqData.data
        req.method = apiEndpoint[reqData.api].method
      } else {
        req.params = reqData.params
        req.method = apiEndpoint[reqData.api].method
      }
      req.url = apiEndpoint[reqData.api].url
      req.headers = {
        Authorization: localStorage.getItem('token')
      }
      console.log('req', req)
      axios(req)
        .then((response) => {
          resolve(response)
          console.log('response', response)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }
}
