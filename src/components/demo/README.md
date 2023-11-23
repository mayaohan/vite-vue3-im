---
title: 03 登录登出切换用户
date: 2023-07-18 14:22:01
permalink: /pages/b764fc/
categories:
  - pages
  - 大商所需求
tags:
  - 大商所需求
author: 
  name: dds
  link: http://123.60.172.75/
---
## 一、登录登出切换用户(web)
#### 登录
登录及登录状态是导航组件的一部分，组件位置`src/components/navModel/component/navContainer.vue`,
示例代码：
```html
<li class="" v-if="getUser.user!=''&&getUser.user!=undefined"><SingleCenter /></li>
<li v-else><el-button @click="centerDialogVisible = true" type="primary">登录</el-button></li>
```
默认状态为未登录状态，判断`getUser.user`的值是否存在，如果存在表示已登录。未登录状态时，点击登录弹出登录表单弹窗，填写登录信息点击登录，登录成功后，将登录信息存储到cookie中，且将登录信息存储到localstorage的userlist中作为切换用户的数据缓存。
示例代码：
```js
this.user = view.split('/')[0]
Cookies.set('userKey',view)
let arr = store.get('userList')

...
arr.push(
  {
    user:view.split('/')[0],
    password:view.split('/')[1]
  }
)
store.set('userList',arr)
```
详见`src/stores/modules/user.js`

效果图：
![Local Image](/images/logo.png)
#### 登出
登出为登录状态下的下拉列表，组件位置`src/components/SingleCenter.vue`,点击登出需要清理很多状态，首先需要删除cookie状态及路由状态，置成未登录状态，示例代码：
```js
store.remove('route')
getUser.removeLoginKey()
authStore.delAllViews()
store.remove('routerList')
```
`src/stores/modules/user.js`
```js
...
removeLoginKey () {
  Cookies.remove('userKey')
  this.user = ''
  this.localhostUser = store.get('userList')
}
...
```
效果图：
![Local Image](/images/logout.png)
#### 切换用户
用户切换功能为多个用户在本机上登录过本应用，可以进行切换。本功能主要运用了localstorage缓存了用户登录记录，并存储到数据缓存`getUser.localhostUser`中，从而进行切换，示例代码：
```html
<!-- 每个用户 -->
<div v-for="size in getUser.localhostUser" :key="size" class="block" @click="changeUser(size)">
  <el-avatar :size="15" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
  <p class="font"> {{ size.user}}</p>
</div>
```
```js
const changeUser = (param)=>{
  getUser.changeUser(param)
  centerDialogVisible.value = false
  mockRoute()
}
function mockRoute() {
  get('/api/getRoute')
    .then((res) => {
      store.set('route',res[1].data.route)
      store.set('role',res[1].data.role)
      // 从localStorage取路由表和权限表
      let route = res[1].data.route
      const role = res[1].data.role
      let loginRole = ''
      if(route==undefined||route.length==0){
        route = []
      }
      // cookies里取用户登录信息
      const user = Cookies.get('userKey')
      if(user!=undefined&&role!=null){
        // 取用户权限（权限key值是用户名）
        loginRole = role.role[user.split('/')[0]]
      }
      // 过滤有权限的路由
      const relRoute = route.filter(obj=>loginRole>=obj.switch)
      // 做菜单结构
      let routes = luo(relRoute)
      // 这里存到localStorage缓存，导航会取
      store.set('routerList',routes)
      authStore.setRouterList(routes)
      // router.addRoute
    })
    .catch((err) => {
    });
}
```
`src/stores/modules/user.js`
```js
...
changeUser(param){
  this.user = param.user
  Cookies.set('userKey',param.user+'/'+param.password)
}
...
```
用户切换时首先弹出切换用户弹窗，展示登录历史，点击某条后，将本条历史设置成cookie信息，由于后续会有权限控制业务，所以做完这些，还需要将切换后的用户通过请求的方式获取该用户的拥有权限下的菜单列表，获取列表成功后，导航根据user的变化发生了改变，至此，切换用户功能形成闭环。

效果图：
![Local Image](/images/other.png)