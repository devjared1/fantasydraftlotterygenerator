import axios from 'axios'

const contentTypeKey = 'Content-Type'
const acceptKey = 'Accept'
const ibsTokenKey = 'ibstoken'
let axiosInstance = null
// const runQueryRequestMethod = 'RunQuery'

const QueryService = {

  init (baseURL, token) {
    // axios.defaults.baseURL = baseURL
    console.log('Axios Init: ', token)
    axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        ContentTypeKey: 'application/json',
        AcceptKey: 'application/json',
        ibstoken: token
      }
    })
  },

  applyToken (token) {
    axios.defaults.headers.common[contentTypeKey] = 'application/json'
    axios.defaults.headers.common[acceptKey] = 'application/json'
    axios.defaults.headers.common[ibsTokenKey] = token
  },

  clearHeader () {
    axios.defaults.headers.common = {}
    axios.defaults.headers.common[contentTypeKey] = 'application/json'
    axios.defaults.headers.common[acceptKey] = 'application/json'
  },

  async runQuery (actionCode, queryParms) {
    const requestDto = {
      ActionCode: actionCode,
      RequestData: queryParms
    }
    const response = await axiosInstance.post('/query/postactionrequest/', requestDto)
    // const responseDto = response.data
    return response
  },

  async runAction (actionCode, queryParms) {
    const requestDto = {
      ActionCode: actionCode,
      RequestData: queryParms
    }
    const response = await axiosInstance.post('/action/postactionrequest/', requestDto)
    // const responseDto = response.data
    return response
  }
}

export default QueryService
