// 公共接口
import request from '@/utils/request'

export function test(data){
    return request({
        url: '/mock',
        method: 'get',
        data
    })
}