import request from '@/utils/request.js'

export const login = (params) => {
    return request({
        method: 'GET',
        url: '/login',
        params,
    })
}
export const logout = (params) => {
    return request({
        method: 'GET',
        url: '/logout',
        params,
    })
}