(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({history:"history",login:"login"}[t]||t)+"."+{history:"550bb89c",login:"41b2d04f"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={login:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({history:"history",login:"login"}[t]||t)+"."+{history:"31d6cfe0",login:"b25eb6dc"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01ea":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r="http://122.51.248.81:3000",a="https://www.agefans.tv/detail/"},4360:function(t,e,n){"use strict";var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]),e["a"]=new a["a"].Store({state:{user:{},token:"",title:""},getters:{loggedIn:function(t){return t.token.length>0||localStorage.token&&localStorage.token.length>0},userId:function(t){return t.user.id||parseInt(localStorage.userId)},websiteTitle:function(t){return t.title},darkMode:function(t){return t.darkMode||"true"===localStorage.darkMode}},mutations:{setUser:function(t,e){t.user=e,localStorage.userId=e.id},setTitle:function(t,e){t.title=e},setToken:function(t,e){localStorage.token=e,t.token=e},setLogout:function(t){t.user={},t.token=""},setDarkMode:function(t,e){console.log("setDarkMode",e),t.darkMode=e,localStorage.darkMode=e}},actions:{logout:function(t){var e=t.commit;localStorage.token="",localStorage.userId="",e("setLogout")}},modules:{}})},5577:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("be3b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v(t._s(t.title))]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.setDarkMode()}}},[n("v-icon",{domProps:{textContent:t._s(t.dark?"mdi-power-sleep":"mdi-weather-sunny")}})],1)],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:"",flat:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[t._l(t.navList,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-title",[t._v(t._s(e.title))])],1)})),t.loggedIn?n("v-list-item",{key:2,on:{click:t.clickLogout}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-arrow-right")])],1),n("v-list-item-title",[t._v("登出")])],1):n("v-list-item",{key:3,attrs:{to:{name:"Login"}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-title",[t._v("登录")])],1)],2)],1)],1),n("v-main",[n("router-view")],1)],1)}),o=[],i=n("5530"),s=n("2f62"),c={name:"App",components:{},data:function(){return{drawer:!1,group:0,dark:!1}},created:function(){this.dark=this.darkMode,this.$vuetify.theme.dark=this.darkMode},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(s["d"])(["title"])),Object(s["c"])(["loggedIn","darkMode"])),{},{navList:function(){return this.loggedIn?[{title:"追番",icon:"mdi-heart",to:{name:"Home"}},{title:"历史",icon:"mdi-clock-fast",to:{name:"History"}}]:[]}}),methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["logout"])),{},{clickLogout:function(){this.logout(),this.$router.push({name:"Login"})},setDarkMode:function(){this.dark=!this.dark,this.$vuetify.theme.dark=this.dark,this.$store.commit("setDarkMode",this.dark)}})},u=c,l=n("2877"),d=n("6544"),f=n.n(d),p=n("7496"),m=n("40dc"),g=n("5bc1"),v=n("8336"),h=n("132d"),b=n("8860"),y=n("da13"),w=n("1baa"),k=n("34c3"),_=n("5d23"),j=n("f6c4"),x=n("f774"),C=n("2fa4"),O=n("2a7f"),P=Object(l["a"])(u,a,o,!1,null,null,null),I=P.exports;f()(P,{VApp:p["a"],VAppBar:m["a"],VAppBarNavIcon:g["a"],VBtn:v["a"],VIcon:h["a"],VList:b["a"],VListItem:y["a"],VListItemGroup:w["a"],VListItemIcon:k["a"],VListItemTitle:_["a"],VMain:j["a"],VNavigationDrawer:x["a"],VSpacer:C["a"],VToolbarTitle:O["a"]});n("d3b7");var T=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"mt-2"},[n("v-col",[n("h2",[t._v("我的追番")])])],1),n("v-row",{attrs:{dense:""}},t._l(t.favList,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"12",md:"6",lg:"4"}},[n("v-card",{attrs:{href:t.detailUrl+e.BangumiData.fanId}},[n("v-row",{attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"4"}},[n("v-img",{attrs:{width:"100%",src:e.BangumiData.cover}})],1),n("v-col",{staticClass:"pl-0",attrs:{cols:"8"}},[n("v-card-title",{staticClass:"pt-0",attrs:{to:t.detailUrl+e.BangumiData.fanId},domProps:{textContent:t._s(e.BangumiData.name)}}),n("v-card-subtitle",{staticClass:"pb-0",domProps:{textContent:t._s(e.BangumiData.region+" | "+e.BangumiData.state)}}),n("v-card-text",{staticClass:"text--primary des",domProps:{textContent:t._s(e.BangumiData.description)}}),n("v-card-text",{staticClass:"py-0"},[e.lastTime?n("v-btn",{attrs:{text:"",color:"primary",href:e.lastUrl+"&"+e.lastTime},domProps:{textContent:t._s("继续看"+e.lastPos)}}):t._e()],1)],1)],1)],1)],1)})),1)],1)},V=[],S=n("7c15"),M=n("01ea"),D={name:"Home",components:{},data:function(){return{favList:[]}},methods:{getFavs:function(){var t=this;Object(S["a"])().then((function(e){t.favList=e}))}},computed:{detailUrl:function(){return M["a"]}},created:function(){this.getFavs()}},B=D,E=(n("f848"),n("b0af")),A=n("99d9"),U=n("62ad"),R=n("a523"),$=n("adda"),N=n("0fd9"),H=Object(l["a"])(B,L,V,!1,null,"15c21fe7",null),F=H.exports;f()(H,{VBtn:v["a"],VCard:E["a"],VCardSubtitle:A["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:U["a"],VContainer:R["a"],VImg:$["a"],VRow:N["a"]});var q=n("4360");r["a"].use(T["a"]);var J=[{path:"/",name:"Home",component:F,meta:{title:"追番",auth:!0}},{path:"/history",name:"History",component:function(){return n.e("history").then(n.bind(null,"e4bb"))},meta:{title:"历史",auth:!0}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{title:"登录"}}],z=new T["a"]({routes:J});z.beforeEach((function(t,e,n){t.meta.auth&&!q["a"].getters.loggedIn&&(q["a"].commit("setTitle","登录"),n({name:"Login"})),t.meta.title&&(q["a"].commit("setTitle",t.meta.title),document.title=q["a"].getters.websiteTitle),n()}));var G=z,K=n("f309");r["a"].use(K["a"]);var W=new K["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:G,store:q["a"],vuetify:W,render:function(t){return t(I)}}).$mount("#app")},"7c15":function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n("d3b7"),n("96cf");var r=n("1da1"),a=n("be3b"),o=n("4328"),i=n.n(o),s=n("4360");function c(t){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r={headers:{"Content-Type":"application/x-www-form-urlencoded"}};a["a"].post("/users/login",i.a.stringify(e),r).then((function(e){s["a"].commit("setToken",e.data.token),s["a"].commit("setUser",e.data.data),t(e.data)})).catch((function(t){return n(t)}))})));case 1:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){a["a"].post("/favorite/list",{userId:s["a"].getters.userId}).then((function(e){t(e.data)})).catch((function(t){return e(t)}))})));case 1:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function f(){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){a["a"].post("/history/list",{userId:s["a"].getters.userId}).then((function(e){t(e.data)})).catch((function(t){return e(t)}))})));case 1:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}},be3b:function(t,e,n){"use strict";n("d3b7"),n("8a79");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),i=n("01ea"),s=n("4360");o.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",o.a.defaults.baseURL=i["b"];var c={timeout:6e4},u=o.a.create(c);u.interceptors.request.use((function(t){return console.log(t),t.url.endsWith("login")||(t.headers["Authorization"]=localStorage.token),t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return console.log(t),t}),(function(t){if(console.log(t),t.response)switch(t.response.status){case 401:s["a"].commit("logout")}return Promise.reject(t)})),Plugin.install=function(t){t.axios=u,window.axios=u,Object.defineProperties(t.prototype,{axios:{get:function(){return u}},$axios:{get:function(){return u}}})},r["a"].use(Plugin),e["a"]=u},f848:function(t,e,n){"use strict";var r=n("5577"),a=n.n(r);a.a}});
//# sourceMappingURL=app.76d0b33a.js.map