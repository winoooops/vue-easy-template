import axios from 'axios'

const service = axios.create({
    // baseURL: process.env.VUE_APP_URL,
    // baseURL:'http://192.168.1.154:82',
    baseURL: '/api',
    timeout: 1800000 // 增加响应时间
})

export default service