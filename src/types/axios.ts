type Methods = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'post' | 'POST'
  | 'put' | 'PUT'

export default interface axiosRequestConfig {
  url: string,
  method?: Methods,
  params?: any,
  data?: any,
}
