import  { createRouter,createWebHashHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import Menu from '../views/sys/Menu.vue'
import Role from '../views/sys/Role.vue'
import User from '../views/sys/User.vue'
// @ts-ignore
import UserCenter from '../views/UserCenter.vue'
// @ts-ignore
import {nav} from "@/api";
// @ts-ignore
import { userStore} from '@/store/store'

//2、定义一些路由
//每个路由都需要映射到一个组件
//我们后面再讨论嵌套路由
const routes = [
    {
        path:"/",
        component:Home,
        name:"Home",
        children:[
            {
                path:'',
                name:'Index',
                component:Index
            },
            {
                path:'/index',
                name:'Index',
                component:Index
            },
            {
                path:'/userCenter',
                name:'UserCenter',
                component:UserCenter
            },
            {
                path:'/sys/users',
                name:'SysUser',
                component:User
            },
            {
                path:'/sys/roles',
                name:'SysRole',
                component:Role
            },
            {
                path:'/sys/menus',
                name:'SysMenu',
                component:Menu
            }

        ]
    },
    {path:"/login",component:Login,name:"Login"},
];
//3、创建路由实例并传递‘routes’配置
//你可以在这里输入更多的配置，但是我们在这里
const router = createRouter({
    //4、内部提供了 history 模式的实现。为了简单起见，我们在这里使用hash模式
    history:createWebHashHistory(),
    routes, //routes:routes 的缩写
})
router.beforeEach((to,from,next)=>{
    let hasRoutes = userStore().getHasRoutes;
    nav().then(res => {
        //拿到menuList
        userStore().setMenuList(res.data.data.nav)
        userStore().setAuthoritys(res.data.data.authoritys)
        hasRoutes = true
        userStore().changeRouteStatus(hasRoutes)
    })
    next()
})

export default router

