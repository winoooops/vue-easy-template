/*********************************************************************************
 * defines basic config for axios instance and intercept requeset and response behaviors
 * see `./src/api/README.md` for more
 *********************************************************************************/
import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

const request: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 180000,
})

request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // should catch token here  

    return config
  },
  error => {
    if (axios.isAxiosError(error)) {
      console.log('http error occurs')
    }
    console.error(error)
  }
)

request.interceptors.response.use(
  (response: AxiosResponse) => {
    // should catch the error message

    return response
  },
  error => {
    if (axios.isAxiosError(error)) {
      console.log('http error occurs')
    }
    console.error(error)
  }
)

export default request
