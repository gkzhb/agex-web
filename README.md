# agex-web

本项目为 [leeggco/agefans_ex: agefans.net，AGE动漫追番扩展](https://github.com/leeggco/agefans_ex) 的一个网页前端。考虑到移动端不能使用插件，看不到收藏和历史数据，所以做了一个网页端方便在移动端查看。

目前的功能：
* 登录、注册
* 查看收藏记录、历史记录
* 查看、发布交流讨论
* 亮暗主题切换

项目使用 Vue.js, Vuetify.js, axios 等，托管于 GitHub Pages。

链接：[http://agex.gkzhb.tk](http://agex.gkzhb.tk) 

> 因为服务端使用 HTTP 而非 HTTPS，所以网页也必须用 HTTP 访问，否则浏览器会阻止不安全的 HTTP 请求。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
