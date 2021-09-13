
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/', // api 的 base_url
  // baseURL: 'http://172.16.24.248:8480', // api 的 base_url
  baseURL: '/api', // api 的 base_url
  timeout: 10 * 1000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

