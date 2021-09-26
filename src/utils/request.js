import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

const service = axios.create({
    baseURL: "/api",
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //   }, // 设置传输内容的类型和编码
    timeout: 60000 // request timeout
})

service.interceptors.request.use(
    config => {
        // console.log(config);
        if (
          config.data &&
          config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8'
        ) {
          config.data = qs.stringify(config.data)
        }
        return config
    },
    error => {
        console.log('request',error) // for debug
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response
        if(res.success || res.status == 200 || res.code === 200){
            return response
        }else{
            return Promise.reject(res)
        }
    },
    error => {
        console.log('responese',error) // for debug
        Vue.prototype.$baseMessage(error.message, 'error')
        return Promise.reject(error)
    }
)

export default service