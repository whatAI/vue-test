import axios from 'axios'
import {  message as Message} from 'ant-design-vue';
import { useRouter } from "vue-router";
// @ts-ignore
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: "/bilibili-api",
    // 超时
    timeout: 10000
})
service.interceptors.request.use(config => {
    // @ts-ignore
    config.headers['Authorization'] = localStorage.getItem("token")
    return config;
});
service.interceptors.response.use(response => {
        let res = response.data
        if (res.code === 200) {
            return response
        } else {
            Message.error(!res.msg ? '系统异常' : res.msg)
            return Promise.reject(response.data.msg)
        }
    }, error => {
        if (error.response.data) {
            error.message = error.response.data.msg
        }
        if (error.response.status === 401) {
            useRouter().push("/login")
        }
        Message.error(error.message)
        return Promise.reject(error)
    }
)
export default service
