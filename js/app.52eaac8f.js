(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about","chat~comments~login~register":"chat~comments~login~register","chat~comments":"chat~comments",chat:"chat",comments:"comments",login:"login",register:"register",history:"history"}[t]||t)+"."+{about:"78f7b9a0","chat~comments~login~register":"499b104e","chat~comments":"1e6f4a5a",chat:"865b9edd",comments:"d8545133",login:"517e3979",register:"d6abe5de",history:"ac11e93c"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chat~comments~login~register":1,"chat~comments":1,chat:1,login:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about","chat~comments~login~register":"chat~comments~login~register","chat~comments":"chat~comments",chat:"chat",comments:"comments",login:"login",register:"register",history:"history"}[t]||t)+"."+{about:"31d6cfe0","chat~comments~login~register":"c3dd5322","chat~comments":"af88e757",chat:"43e007d3",comments:"31d6cfe0",login:"12a767db",register:"31d6cfe0",history:"31d6cfe0"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],m.parentNode.removeChild(m),n(i)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3e17":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],style:{bottom:t.bottom?"":"80px"},attrs:{"aria-label":"Scroll to top",bottom:"",color:t.bottom?"primary":"red",dark:"",fab:"",fixed:"",right:"",title:"返回顶部"},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-chevron-up")])],1)],1)},a=[],o={name:"ToTopFab",props:{bottom:{type:Boolean,default:!0}},data:function(){return{fab:!1}},methods:{onScroll:function(){if("undefined"!==typeof window){var t=window.pageYOffset||document.documentElement.offsetTop||0;this.fab=t>300}},toTop:function(){this.$vuetify.goTo(0)}}},i=o,s=n("2877"),c=n("6544"),u=n.n(c),l=n("8336"),d=n("0789"),m=n("132d"),f=n("269a"),g=n.n(f),h=n("f977"),p=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=p.exports;u()(p,{VBtn:l["a"],VFabTransition:d["b"],VIcon:m["a"]}),g()(p,{Scroll:h["b"]})},4360:function(t,e,n){"use strict";var r=n("2b0e"),a=n("2f62"),o=n("5634"),i={namespaced:!0,state:{content:"",color:"",timeout:""},mutations:{showMessage:function(t,e){Object(o["c"])("show message "),t.content=e.content,t.color=e.color,t.timeout=e.timeout},closeMessage:function(t){t.content=""}},actions:{info:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"info",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4e3;Object(o["c"])("message info"),e("showMessage",{content:n,color:r,timeout:a})},success:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4e3;e("showMessage",{content:n,color:r,timeout:a})},error:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4e3;e("showMessage",{content:n,color:r,timeout:a})}}},s=(n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d"),n("60fe")),c={namespaced:!0,state:{darkMode:null,ageBaseUrl:null},getters:{darkMode:function(t){return t.darkMode||"true"===localStorage.darkMode},ageBaseUrl:function(t){return t.ageBaseUrl||localStorage.ageBaseUrl||s["a"]},ageDetailUrl:function(t,e){return new URL(s["b"],e.ageBaseUrl).toString()}},mutations:{setDarkMode:function(t,e){t.darkMode=e,localStorage.darkMode=e},setAgeBaseUrl:function(t,e){if(e===s["a"])return localStorage.ageBaseUrl="",void(t.ageBaseUrl=e);localStorage.ageBaseUrl=t.ageBaseUrl=e}}},u=n("a18c");r["a"].use(a["a"]);e["a"]=new a["a"].Store({state:{user:{id:null,username:null},token:"",title:"",debug:void 0},getters:{loggedIn:function(t){return t.token.length>0||localStorage.token&&localStorage.token.length>0},userId:function(t){return t.user.id||parseInt(localStorage.userId)},username:function(t){return t.user.username||localStorage.username},websiteTitle:function(t){return t.title},debugMode:function(t){return t.debug||!!localStorage.debugMode}},mutations:{setUser:function(t,e){t.user=e,localStorage.userId=e.id,localStorage.username=e.username},setTitle:function(t,e){t.title=e},setToken:function(t,e){localStorage.token=e,t.token=e},setLogout:function(t){t.user={},t.token=""},setDebugMode:function(t,e){t.debug=e,localStorage.debug=e?"1":""}},actions:{logout:function(t){var e=t.commit;localStorage.token="",localStorage.userId="",e("setLogout"),u["a"].push({name:"Login"})}},modules:{message:i,config:c}})},"452a":function(t,e,n){"use strict";n("6cad")},5634:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return m}));n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("99af"),n("25f0");var r=n("5a0c"),a=n.n(r),o=n("4208"),i=n.n(o);n("a471");a.a.extend(i.a),a.a.locale("zh-cn");var s=a.a,c=n("4360"),u=s().startOf("day");function l(t){var e=s(t),n=u.diff(e,"day");return n>5?e.format("YYYY-MM-DD"):n>1?e.format("dddd HH:mm"):e.fromNow()}function d(){var t;c["a"].getters.debugMode&&(t=console).log.apply(t,arguments)}function m(t,e,n){if(!n||!e)return"";var r;if(/agefans/.test(e))try{r=new URL(e);var a=new URL(t);r.host=a.host}catch(o){console.error(o),r=new URL(e,t)}else r=new URL(e,t);return"".concat(r.toString(),"&").concat(n)}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("be3b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v(t._s(t.title))]),n("v-spacer"),n("v-btn",{attrs:{icon:"",href:"https://github.com/gkzhb/agex-web",target:"_blank"}},[n("v-icon",[t._v("mdi-github")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.setDarkMode()}}},[n("v-icon",{domProps:{textContent:t._s(t.darkMode?"mdi-power-sleep":"mdi-weather-sunny")}})],1)],1),n("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:"",flat:""}},[n("h3",{staticClass:"my-2 ml-2",domProps:{textContent:t._s(t.loggedIn?t.username:"游客")}}),n("v-list-item-group",{attrs:{color:"primary",disabled:""},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[t._l(t.navList,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to,exact:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),n("v-list-item-title",[t._v(t._s(e.title))])],1)})),t.loggedIn?n("v-list-item",{on:{click:t.clickLogout}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-arrow-right")])],1),n("v-list-item-title",[t._v("登出")])],1):[n("v-list-item",{attrs:{to:{name:"Login"}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-title",[t._v("登录")])],1),n("v-list-item",{attrs:{to:{name:"Register"}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-plus")])],1),n("v-list-item-title",[t._v("注册")])],1)]],2)],1)],1),n("v-main",[n("router-view"),n("message",{ref:"message"})],1)],1)}),o=[],i=n("5530"),s=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{app:"",color:t.color,timeout:t.timeout,top:""},on:{input:t.update},scopedSlots:t._u([{key:"action",fn:function(e){return[t.queue.length>0?n("v-btn",{attrs:{icon:""},domProps:{textContent:t._s(t.queue.length)},on:{click:t.showNext}}):t._e(),n("v-btn",t._b({attrs:{icon:""},on:{click:t.close}},"v-btn",e.attrs,!1),[n("v-icon",{domProps:{textContent:t._s("mdi-close-circle")}})],1)]}}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v(t._s(t.content)+" ")])},u=[],l=n("1da1"),d=(n("96cf"),{name:"Message",data:function(){return{show:!1,toShow:!1,content:"",color:"",timeout:-1,queue:[]}},created:function(){var t=this;this.$store.subscribe((function(e,n){switch(e.type){case"message/showMessage":t.addMessage(n.message);break;case"message/closeMessage":t.close();break}}))},computed:{},methods:{close:function(){this.queue=[],this.show=!1},addMessage:function(t){this.queue.push(t),!this.toShow&&!this.show&&this.queue.length>0&&this.showNext()},showNext:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.queue.length>0&&(n=t.queue.shift(),t.content=n.content,t.color=n.color,t.timeout=n.timeout,t.show=!1,t.toShow=!0,t.$nextTick((function(){t.show=!0,t.toShow=!1})));case 1:case"end":return e.stop()}}),e)})))()},logState:function(){console.log("msg state:"),console.log("current show",this.show),console.log("queue",JSON.stringify(this.queue)),console.log("timeout",this.timeout)},update:function(t){!t&&this.queue.length>0&&this.showNext()}}}),m=d,f=n("2877"),g=n("6544"),h=n.n(g),p=n("8336"),b=n("132d"),v=n("2db4"),w=Object(f["a"])(m,c,u,!1,null,null,null),y=w.exports;h()(w,{VBtn:p["a"],VIcon:b["a"],VSnackbar:v["a"]});var k=n("60fe"),x={name:"App",components:{Message:y},data:function(){return{drawer:!1,group:0}},created:function(){this.$vuetify.theme.dark=this.darkMode,r["a"].prototype.$message=this.$refs.message},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(s["e"])(["title"])),Object(s["c"])(["loggedIn","username"])),Object(s["c"])("config",["darkMode"])),{},{navList:function(){return this.loggedIn?[k["d"].fav,k["d"].history,k["d"].chat,k["d"].settings,k["d"].about]:[k["d"].settings,k["d"].chat,k["d"].about]}}),methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["logout"])),{},{clickLogout:function(){this.logout()},setDarkMode:function(){this.dark=!this.dark,this.$vuetify.theme.dark=this.dark,this.$store.commit("config/setDarkMode",this.dark)}})},_=x,j=(n("cf25"),n("7496")),O=n("40dc"),S=n("5bc1"),C=n("8860"),P=n("da13"),I=n("1baa"),U=n("34c3"),M=n("5d23"),T=n("f6c4"),L=n("f774"),R=n("2fa4"),V=n("2a7f"),B=Object(f["a"])(_,a,o,!1,null,null,null),D=B.exports;h()(B,{VApp:j["a"],VAppBar:O["a"],VAppBarNavIcon:S["a"],VBtn:p["a"],VIcon:b["a"],VList:C["a"],VListItem:P["a"],VListItemGroup:I["a"],VListItemIcon:U["a"],VListItemTitle:M["b"],VMain:T["a"],VNavigationDrawer:L["a"],VSpacer:R["a"],VToolbarTitle:V["a"]});var A=n("a18c"),N=n("4360"),E=n("f309");r["a"].use(E["a"]);var $=new E["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:A["a"],store:N["a"],vuetify:$,render:function(t){return t(D)}}).$mount("#app")},"60fe":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var r={fav:{title:"追番",icon:"mdi-heart",to:{name:"Home"}},history:{title:"历史",icon:"mdi-clock-fast",to:{name:"History"}},chat:{title:"交流",icon:"mdi-chat-processing",to:{name:"Chat"}},settings:{title:"设置",icon:"mdi-cog",to:{name:"Settings"}},about:{title:"关于",icon:"mdi-information",to:{name:"About"}}},a="http://122.51.248.81:3000",o="https://www.agefans.vip/",i="detail/"},"6cad":function(t,e,n){},"7c15":function(t,e,n){"use strict";n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"e",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return w})),n.d(e,"d",(function(){return k})),n.d(e,"b",(function(){return _}));var r=n("1da1"),a=(n("96cf"),n("d3b7"),n("be3b")),o=n("4328"),i=n.n(o),s=n("4360"),c=n("5634");function u(t){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r={headers:{"Content-Type":"application/x-www-form-urlencoded"}};a["a"].post("/users/login",i.a.stringify(e),r).then((function(e){Object(c["c"])("login result:",e.data),e.data.success?(s["a"].commit("setToken",e.data.token),s["a"].commit("setUser",e.data.data),t(e.data)):n(e.data)})).catch((function(t){return n(t)}))})));case 1:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return m=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r={headers:{"Content-Type":"application/x-www-form-urlencoded"}};a["a"].post("/users/register",i.a.stringify(e),r).then((function(e){t(e.data)})).catch((function(t){return n(t)}))})));case 1:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){a["a"].post("/favorite/list",{userId:s["a"].getters.userId}).then((function(e){t(e.data)})).catch((function(t){return e(t)}))})));case 1:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function h(){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){a["a"].post("/history/list",{userId:s["a"].getters.userId}).then((function(e){t(e.data)})).catch((function(t){return e(t)}))})));case 1:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function b(t,e){return v.apply(this,arguments)}function v(){return v=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){a["a"].post("/comment/create",{userId:s["a"].getters.userId,userName:s["a"].getters.username,articleId:e,content:n}).then((function(e){t(e.data)})).catch((function(t){return r(t)}))})));case 1:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function w(t){return y.apply(this,arguments)}function y(){return y=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){a["a"].post("/articles/getArticles",{fanId:e}).then((function(e){t(e.data)})).catch((function(t){return n(t)}))})));case 1:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}function k(){return x.apply(this,arguments)}function x(){return x=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t.abrupt("return",new Promise((function(t,n){a["a"].post("/articles/list",{userId:s["a"].getters.userId,currentPage:e}).then((function(e){t(e.data)})).catch((function(t){return n(t)}))})));case 2:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}function _(t,e){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){a["a"].post("/articles/create",{userId:s["a"].getters.userId,userName:s["a"].getters.username,content:e,pin:n}).then((function(e){t(e.data)})).catch((function(t){return r(t)}))})));case 1:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}},"8db2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-2",attrs:{"max-width":"350",height:"190"}},[n("v-row",{staticClass:"full-height align-center ma-0"},[n("v-col",{staticClass:"d-flex align-center pa-0",attrs:{cols:"4"}},[n("a",{staticClass:"full-width px-2",attrs:{href:t.getDetailUrl(t.anime.fanId),target:"_blank"}},[n("v-img",{attrs:{width:"100%",src:t.anime.cover}})],1)]),n("v-col",{staticClass:"full-height pa-0 d-flex flex-column justify-space-between",attrs:{cols:"8"}},[n("v-card-text",{staticClass:"pb-0 pl-0"},[n("a",{staticClass:"text-subtitle-1 font-weight-medium d-inline-block text-truncate",staticStyle:{"max-width":"100%"},attrs:{href:t.getDetailUrl(t.anime.fanId),target:"_blank"}},[t._v(t._s(t.anime.name))]),t._t("default")],2),n("v-card-actions",[t._t("actions")],2)],1)],1)],1)},a=[],o=n("5530"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("2f62")),s={name:"ACard",props:{anime:Object},data:function(){return{}},computed:Object(o["a"])({},Object(i["c"])({ageDetailUrl:"config/ageDetailUrl"})),methods:{getDetailUrl:function(t){return new URL(t,this.ageDetailUrl)}}},c=s,u=n("2877"),l=n("6544"),d=n.n(l),m=n("b0af"),f=n("99d9"),g=n("62ad"),h=n("adda"),p=n("0fd9"),b=Object(u["a"])(c,r,a,!1,null,null,null);e["a"]=b.exports;d()(b,{VCard:m["a"],VCardActions:f["a"],VCardText:f["b"],VCol:g["a"],VImg:h["a"],VRow:p["a"]})},a18c:function(t,e,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("2b0e"),a=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mb-12"},[n("h2",{staticClass:"mt-2"},[t._v("我的追番")]),n("v-container",{staticClass:"d-flex flex-wrap"},t._l(t.favList,(function(e){return n("a-card",{key:e.id,attrs:{anime:e.BangumiData},scopedSlots:t._u([{key:"actions",fn:function(){return[e.lastTime?n("v-btn",{attrs:{text:"",color:"primary",href:t.getLastUrl(e.lastUrl,e.lastTime)},domProps:{textContent:t._s("继续看"+e.lastPos)}}):n("v-btn",{attrs:{text:"",disabled:""},domProps:{textContent:t._s("未观看")}})]},proxy:!0}],null,!0)},[n("div",{staticClass:"text--secondary",domProps:{textContent:t._s(e.BangumiData.region+" | "+e.BangumiData.state)}}),n("div",{staticClass:"text--primary des",staticStyle:{"max-width":"100%"},domProps:{textContent:t._s(e.BangumiData.description)}})])})),1),n("to-top-fab")],1)},i=[],s=n("5530"),c=(n("2b3d"),n("2f62")),u=n("7c15"),l=n("8db2"),d=n("3e17"),m=n("5634"),f={name:"Home",components:{ACard:l["a"],ToTopFab:d["a"]},data:function(){return{favList:[]}},computed:Object(s["a"])({},Object(c["c"])({ageBaseUrl:"config/ageBaseUrl"})),methods:{getDetailUrl:function(t){return new URL(t,this.ageDetailUrl)},getLastUrl:function(t,e){return Object(m["b"])(this.ageBaseUrl,t,e)},getFavs:function(){var t=this;Object(u["e"])().then((function(e){t.favList=e}))}},created:function(){this.getFavs()}},g=f,h=(n("452a"),n("2877")),p=n("6544"),b=n.n(p),v=n("8336"),w=n("a523"),y=Object(h["a"])(g,o,i,!1,null,"652244a3",null),k=y.exports;b()(y,{VBtn:v["a"],VContainer:w["a"]});var x=n("4360");r["a"].use(a["a"]);var _=[{path:"/",name:"Home",component:k,meta:{title:"追番",auth:!0}},{path:"/history",name:"History",component:function(){return n.e("history").then(n.bind(null,"e4bb"))},meta:{title:"历史",auth:!0}},{path:"/chat",name:"Chat",component:function(){return Promise.all([n.e("chat~comments~login~register"),n.e("chat~comments"),n.e("chat")]).then(n.bind(null,"293a"))},meta:{title:"交流区",auth:!0}},{path:"/comments/:animeId",name:"Comments",component:function(){return Promise.all([n.e("chat~comments~login~register"),n.e("chat~comments"),n.e("comments")]).then(n.bind(null,"3498"))},meta:{title:"留言区",auth:!0}},{path:"/settings",name:"Settings",component:function(){return Promise.all([n.e("chat~comments~login~register"),n.e("login")]).then(n.bind(null,"26d3"))},meta:{title:"设置"}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chat~comments~login~register"),n.e("login")]).then(n.bind(null,"a55b"))},meta:{title:"登录"}},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chat~comments~login~register"),n.e("register")]).then(n.bind(null,"73cf"))},meta:{title:"注册"}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{title:"关于"}}],j=new a["a"]({routes:_});j.beforeEach((function(t,e,n){t.meta.auth&&!x["a"].getters.loggedIn&&(x["a"].commit("setTitle","登录"),n({name:"Login"})),t.meta.title&&(x["a"].commit("setTitle",t.meta.title),document.title=x["a"].getters.websiteTitle),n()}));e["a"]=j},be3b:function(t,e,n){"use strict";n("8a79"),n("d3b7");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),i=n("60fe"),s=n("5634"),c=n("4360");o.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",o.a.defaults.baseURL=i["c"];var u={timeout:6e4},l=o.a.create(u);l.interceptors.request.use((function(t){return Object(s["c"])(t),t.url.endsWith("login")||(t.headers["Authorization"]=localStorage.token),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return Object(s["c"])(t),!1===t.data.success&&("999999"==t.data.code?(c["a"].dispatch("logout"),c["a"].dispatch("message/info","登录超时，请重新登录！")):t.data.massage&&(Object(s["c"])("error in response"),c["a"].dispatch("message/error",t.data.massage))),t}),(function(t){if(Object(s["c"])(t),t.response){switch(t.response.status){case 401:c["a"].dispatch("logout"),c["a"].dispatch("message/info","登录超时，请重新登录！");break}t.response.message&&c["a"].dispatch("message/error",t.response.message)}return Promise.reject(t)})),Plugin.install=function(t){t.axios=l,window.axios=l,Object.defineProperties(t.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},r["a"].use(Plugin),e["a"]=l},cf25:function(t,e,n){"use strict";n("fea6")},fea6:function(t,e,n){}});
//# sourceMappingURL=app.52eaac8f.js.map