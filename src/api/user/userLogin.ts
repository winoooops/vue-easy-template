import request from '@/utils/request.js'

export const login = (params: any):Promise<object> => {
    return request({
        method: 'POST',
        url: '/login',
        params,
    })
}