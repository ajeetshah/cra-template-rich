import axios from 'axios'
import {
  handlePreRequest,
  handleRequestError,
  handleResponseSuccess,
  handleResponseError,
} from './httpInterceptors'

const host = process.env.REACT_APP_API_HOST
const port = process.env.REACT_APP_API_PORT
const timeout = Number(process.env.REACT_APP_API_TIMEOUT || 2000)

const instance = axios.create({
  baseURL: `//${host}:${port}`,
  timeout
})

instance.interceptors.request.use(handlePreRequest, handleRequestError)

instance.interceptors.response.use(handleResponseSuccess, handleResponseError)

export default instance
