(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comments"],{3498:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mb-12"},[n("v-dialog",{attrs:{persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",fab:"",fixed:"",bottom:"",right:""}},"v-btn",o,!1),a),[n("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.commentDialog,callback:function(e){t.commentDialog=e},expression:"commentDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("新评论")])]),n("v-card-text",[n("v-container",[n("v-textarea",{attrs:{label:"内容",placeholder:"阿巴阿巴~",rows:"4",dense:"","hide-details":"",outlined:"","auto-grow":""},model:{value:t.commentContent,callback:function(e){t.commentContent=e},expression:"commentContent"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:function(e){return t.submitComment()}}},[t._v("确定")]),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.commentDialog=!1}}},[t._v("取消")])],1)],1)],1),this.$route.query.animeName?n("h2",{staticClass:"mb-2"},[n("a",{attrs:{href:t.detailUrl+t.animeId}},[t._v(t._s(this.$route.query.animeName))])]):t._e(),n("v-list",[t._l(t.commentList,(function(e,a){return[0!=a?n("v-divider",{key:"d-"+a}):t._e(),n("a-topic",{key:a,attrs:{topic:e,showTopic:!1}})]}))],2),n("to-top-fab",{attrs:{bottom:!1}})],1)},o=[],i=(n("498a"),n("01ea")),c=n("5634"),r=n("bb75"),s=n("3e17"),m=n("7c15"),l={components:{ATopic:r["a"],ToTopFab:s["a"]},data:function(){return{commentDialog:!1,commentContent:"",commentList:[],total:0,page:1}},methods:{getAnimeComments:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(m["c"])(this.animeId,e).then((function(e){t.commentList=e.articles}))},toDate:function(t){return Object(c["a"])(t)},toggleReplies:function(t){this.show[t]=!this.show[t]},submitComment:function(){var t=this;this.commentContent.trim().length>0?Object(m["b"])(this.commentContent,this.animeId).then((function(e){t.$store.dispatch("message/success","评论成功"),t.commentDialog=!1,Object(c["b"])(e),t.$router.go()})):this.$store.dispatch("message/error","评论内容不能为空")},changePage:function(t){this.getAnimeComments(t)}},computed:{animeId:function(){return this.$route.params.animeId},detailUrl:function(){return i["a"]}},created:function(){this.getAnimeComments()}},u=l,d=n("2877"),h=n("6544"),v=n.n(h),b=n("8336"),p=n("b0af"),f=n("99d9"),g=n("a523"),C=n("169a"),_=n("ce7e"),V=n("132d"),k=n("8860"),w=n("2fa4"),x=n("a844"),D=Object(d["a"])(u,a,o,!1,null,null,null);e["default"]=D.exports;v()(D,{VBtn:b["a"],VCard:p["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VContainer:g["a"],VDialog:C["a"],VDivider:_["a"],VIcon:V["a"],VList:k["a"],VSpacer:w["a"],VTextarea:x["a"]})}}]);
//# sourceMappingURL=comments.0308de6c.js.map