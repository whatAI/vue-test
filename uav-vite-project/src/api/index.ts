import request from '../utils/request'

/* 无参  */
export const getCaptchaImg = ( ) => {
    return request({
        method: "GET",
        url: "/captcha",
    });
};
/*登录请求*/
export const userLogin = (data:any) => {
    return request({
        url: '/login',
        method: 'post',
        data: data
    })
};
/*查询用户接口*/
export const getUserInfo = () => {
    return request({
        url: '/sys/userInfo',
        method: 'get',
    })
};
/*退出登录接口*/
export const logout = () => {
    return request({
        url: '/logout',
        method: 'get',
    })
};
/*发送获取菜单的请求*/
export const nav = () => {
    return request({
        url: '/sys/menu/nav',
        method: 'get',
    })
};

