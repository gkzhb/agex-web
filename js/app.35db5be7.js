(function(t){function e(e){for(var r,a,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function u(t){return s.p+"js/"+({history:"history",login:"login"}[t]||t)+"."+{history:"22e863e8",login:"b9aa04b1"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={login:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({history:"history",login:"login"}[t]||t)+"."+{history:"31d6cfe0",login:"b25eb6dc"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01ea":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r="http://122.51.248.81:3000",a="https://www.agefans.tv/detail/"},4360:function(t,e,n){"use strict";var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]),e["a"]=new a["a"].Store({state:{user:{},token:"",title:""},getters:{loggedIn:function(t){return t.token.length||localStorage.token&&localStorage.token.length},userId:function(t){return t.user.id||parseInt(localStorage.userId)},websiteTitle:function(t){return t.title}},mutations:{setUser:function(t,e){t.user=e,localStorage.userId=e.id},setTitle:function(t,e){t.title=e},setToken:function(t,e){localStorage.token=e,t.token=e},logout:function(t){localStorage.token="",localStorage.userId="",t.user={}}},actions:{},modules:{}})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("be3b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("div",[t._v(t._s(t.title))]),n("v-spacer")],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:""}},[t._l(t.navList,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to}},[t._v(t._s(e.title))])})),t.loggedIn?n("v-list-item",{on:{click:t.clickLogout}},[t._v("登出")]):n("v-list-item",{attrs:{to:{name:"Login"}}},[t._v("登录")])],2)],1),n("v-main",[n("router-view")],1)],1)}),o=[],i=n("5530"),u=n("2f62"),s={name:"App",components:{},data:function(){return{drawer:!1}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(u["d"])(["title"])),Object(u["b"])(["loggedIn"])),Object(u["c"])(["logout"])),{},{navList:function(){return this.loggedIn?[{title:"收藏",to:{name:"Home"}},{title:"历史",to:{name:"History"}}]:[]}}),methods:{clickLogout:function(){this.logout(),this.$router.push({name:"Login"})}}},c=s,l=n("2877"),f=n("6544"),d=n.n(f),p=n("7496"),m=n("40dc"),g=n("5bc1"),v=n("8860"),h=n("da13"),b=n("f6c4"),y=n("f774"),w=n("2fa4"),k=Object(l["a"])(c,a,o,!1,null,null,null),j=k.exports;d()(k,{VApp:p["a"],VAppBar:m["a"],VAppBarNavIcon:g["a"],VList:v["a"],VListItem:h["a"],VMain:b["a"],VNavigationDrawer:y["a"],VSpacer:w["a"]});n("d3b7");var x=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",[t._v("我的收藏")]),n("v-container",[n("v-row",{attrs:{dense:""}},t._l(t.favList,(function(e){return n("v-col",{key:e.id,attrs:{xs:"12",md:"6",lg:"4"}},[n("v-card",{attrs:{href:t.detailUrl+e.BangumiData.fanId}},[n("v-row",{attrs:{justify:"space-between"}},[n("v-col",[n("v-img",{attrs:{src:e.BangumiData.cover}})],1),n("v-col",[n("v-card-title",{attrs:{to:t.detailUrl+e.BangumiData.fanId},domProps:{textContent:t._s(e.BangumiData.name)}}),n("v-card-subtitle",{staticClass:"pb-0",domProps:{textContent:t._s(e.BangumiData.region+" | "+e.BangumiData.state)}}),n("v-card-text",{staticClass:"text--primary des",domProps:{textContent:t._s(e.BangumiData.description)}}),n("v-card-actions",[e.lastTime?n("v-btn",{attrs:{text:"",color:"primary",href:e.lastUrl+"&"+e.lastTime},domProps:{textContent:t._s("继续看"+e.lastPos)}}):t._e()],1)],1)],1)],1)],1)})),1)],1)],1)},O=[],P=n("7c15"),C=n("01ea"),T={name:"Home",components:{},data:function(){return{favList:[]}},methods:{getFavs:function(){var t=this;Object(P["a"])().then((function(e){t.favList=e}))}},computed:{detailUrl:function(){return C["a"]}},created:function(){this.getFavs()}},S=T,I=(n("aa00"),n("8336")),L=n("b0af"),V=n("99d9"),B=n("62ad"),A=n("a523"),E=n("adda"),D=n("0fd9"),U=Object(l["a"])(S,_,O,!1,null,"2d5d631e",null),R=U.exports;d()(U,{VBtn:I["a"],VCard:L["a"],VCardActions:V["a"],VCardSubtitle:V["b"],VCardText:V["c"],VCardTitle:V["d"],VCol:B["a"],VContainer:A["a"],VImg:E["a"],VRow:D["a"]});var N=n("4360");r["a"].use(x["a"]);var H=[{path:"/",name:"Home",component:R,meta:{title:"收藏"}},{path:"/history",name:"History",component:function(){return n.e("history").then(n.bind(null,"e4bb"))},meta:{title:"历史"}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{title:"登录"}}],M=new x["a"]({routes:H});M.beforeEach((function(t,e,n){t.meta.title&&(N["a"].commit("setTitle",t.meta.title),document.title=N["a"].getters.websiteTitle),n()}));var $=M,F=n("f309");r["a"].use(F["a"]);var q=new F["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:$,store:N["a"],vuetify:q,render:function(t){return t(j)}}).$mount("#app")},"7c15":function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));n("d3b7"),n("96cf");var r=n("1da1"),a=n("be3b"),o=n("4328"),i=n.n(o),u=n("4360");function s(t){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r={headers:{"Content-Type":"application/x-www-form-urlencoded"}};a["a"].post("/users/login",i.a.stringify(e),r).then((function(e){u["a"].commit("setToken",e.data.token),u["a"].commit("setUser",e.data.data),t(e.data)})).catch((function(t){return n(t)}))})));case 1:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return f=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){a["a"].post("/favorite/list",{userId:u["a"].getters.userId}).then((function(e){t(e.data)})).catch((function(t){return e(t)}))})));case 1:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function d(){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){a["a"].post("/history/list",{userId:u["a"].getters.userId}).then((function(e){t(e.data)})).catch((function(t){return e(t)}))})));case 1:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}},"9e5c":function(t,e,n){},aa00:function(t,e,n){"use strict";var r=n("9e5c"),a=n.n(r);a.a},be3b:function(t,e,n){"use strict";n("d3b7"),n("8a79");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),i=n("01ea"),u=n("4360");o.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",o.a.defaults.baseURL=i["b"];var s={timeout:6e4},c=o.a.create(s);c.interceptors.request.use((function(t){return console.log(t),t.url.endsWith("login")||(t.headers["Authorization"]=localStorage.token),t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return console.log(t),t}),(function(t){if(console.log(t),t.response)switch(t.response.status){case 401:u["a"].commit("logout")}return Promise.reject(t)})),Plugin.install=function(t){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},r["a"].use(Plugin),e["a"]=c}});
//# sourceMappingURL=app.35db5be7.js.map