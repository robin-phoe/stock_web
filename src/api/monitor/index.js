// 公共接口
import request from '@/utils/request'

function get_info(data){
    return request({
        url: '/monitor/algo_monitor',
        method: 'post',
        data
    })
}

function get_grade(data) {
    return request({
        url:'/monitor/grade_all_day',
        method: 'post',
        data
    })
}

function get_line(data) {
    return request({
        url:'/time_line',
        method: 'post',
        data
    })
}
function get_k(data) {
    return request({
        url:'/k_line',
        method: 'post',
        data
    })
}
export default ({
    get_info,
    get_grade,
    get_line,
    get_k,
})