// @ts-ignore
import Mock from "mockjs";

const Random = Mock.Random

let Result = {
    code: 200,
    msg: '操作成功',
    data: null
}

Mock.mock('/bilibili-api/captcha','get',()=>{
    // @ts-ignore
    Result.data = {
        token: Random.string(32),
        captchaImg:Random.dataImage('120x40','p7n5w')
    }
    return Result;
})

Mock.mock('/bilibili-api/login','post',()=>{
    Result.code = 200
    Result.msg = "验证码错误"
    return Result;
})


Mock.mock('/bilibili-api/sys/userInfo','get',()=>{
    // @ts-ignore
    Result.data = {
        id:"1",
        username:"test",
        avatar:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
    return Result
})

Mock.mock('/bilibili-api/logout','get',()=>{
    return Result;
})

Mock.mock('/bilibili-api/sys/menu/nav', 'get', () => {
    let nav = [
        {
            key:101,
            title: '系统管理',
            name: 'SysMange',
            icon: 'setting-outlined',
            path: '',
            children: [
                {
                    key:102,
                    title: '用户管理',
                    name: 'SysUser',
                    icon: 'user-outlined',
                    path: '/sys/users',
                    children: []
                },
                {
                    key:103,
                    title: '角色管理',
                    name: 'SysUser',
                    icon: 'user-group-add-outlined',
                    path: '/sys/roles',
                    children: []
                },
                {
                    key:104,
                    title: '菜单管理',
                    name: 'SysMenu',
                    icon: 'menu-outlined',
                    path: '/sys/menus',
                    children: []
                }
            ]
        },
        {
            key:201,
            title: '系统工具',
            name: 'SysTools',
            icon: 'menu-outlined',
            path: '',
            children: [{
                title: '数字字典',
                name: 'SysDict',
                icon: 'container-outlined',
                path: '/sys/dicts',
                children: []
            }]
        }

    ];
    // @ts-ignore
    let authoritys = [];
    // @ts-ignore
    Result.data = {
        nav: nav,
        // @ts-ignore
        authoritys: authoritys
    }
    return Result;
})

