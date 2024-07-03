import axios from 'axios'
import config from "./config";
import {Message} from 'element-ui'

// 创建axios实例
const service = axios.create({
    baseURL: config.apiHost, // api 的 base_url
    // baseURL: '/api', // api 的 base_url
    timeout: 10 * 1000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        // console.log(config)
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
        if (response.data.error_code) {
            Message({
                showClose: true,
                message: response.data.error_msg,
                type: 'warning'
            });
        } else {
            return response.data
        }

    },
    error => {
        return Promise.reject(error)
    }
)

export default service

