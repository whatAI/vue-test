import { defineStore } from 'pinia'
export const userStore = defineStore({
    id: 'user',
    state: () => {
        return {
            title: '',
            token:'',
            menuList:[],
            authoritys:[],
            hasRoutes:false,
            editableTabsValue: 0,
            editableTabs: [
                {
                    title: '首页',
                    content: '/index',
                    key: 0,
                    closable: false,
                }
            ],
            tabIndex:2
        }
    },
    getters: {
        getTitle: (state) => state.title,
        getMenuList:(state) => state.menuList,
        getAuthoritysList:(state) => state.authoritys,
        getHasRoutes: (state) => state.hasRoutes,
        getEditableTabsValue: (state) => state.editableTabsValue,
        getEditableTabs: (state) => state.editableTabs,
    },
    actions: {
        SET_TOKEN(token:string ){
            this.token = token
            localStorage.setItem("token",token)
        },
        resetState(){
            this.token = ""
        },
        setTitle(title:string) {
            this.title= title
        },
        setMenuList(menuList:any) {
            this.menuList = menuList
        },
        setAuthoritys(authoritys:any) {
            this.authoritys = authoritys
        },
        changeRouteStatus(hasRoutes:any){
            this.hasRoutes = hasRoutes;
        },
        addTab(tab:any) {
            let index = this.editableTabs.findIndex(e => e.title === tab.title )
            if(index === -1){
                this.editableTabs.push({
                    title: tab.title,
                    content: tab.path,
                    key: tab.key,
                    closable: true,
                });
            }
            this.editableTabsValue = tab.key;
        },
        setEditableTabs(tab:any){
            this.editableTabs = tab;
        },
        setEditableTabsIndex0(){
            this.editableTabsValue = 0;
        },
        setEditableTabsIndexClearALL(){
            this.editableTabs  = [
                {
                    title: '首页',
                    content: '/index',
                    key: 0,
                    closable: false,
                }
            ]
        },
        setEditableTabsValue(tabValue:number){
            this.editableTabsValue = tabValue;
        }

    },
    // 开启数据缓存
    // @ts-ignore
    persist: { //数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key
        enabled: true
    }
})

