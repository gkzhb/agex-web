(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat"],{"0c46":function(t,e,i){},1681:function(t,e,i){},"17b3":function(t,e,i){},"1e4c":function(t,e,i){"use strict";var n=i("0c46"),a=i.n(n);a.a},"293a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mb-12"},[i("v-dialog",{attrs:{persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",fab:"",fixed:"",bottom:"",right:""}},"v-btn",a,!1),n),[i("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.topicDialog,callback:function(e){t.topicDialog=e},expression:"topicDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"headline"},[t._v("新主题")])]),i("v-card-text",[i("v-container",[i("v-textarea",{attrs:{label:"内容",placeholder:"阿巴阿巴~",rows:"4",dense:"","hide-details":"",outlined:"","auto-grow":""},model:{value:t.topicContent,callback:function(e){t.topicContent=e},expression:"topicContent"}})],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary darken-1",text:""},on:{click:function(e){return t.submitTopic()}}},[t._v("确定")]),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.topicDialog=!1}}},[t._v("取消")])],1)],1)],1),i("v-list",[t._l(t.chatList,(function(e,n){return[0!=n?i("v-divider",{key:"d-"+n}):t._e(),i("a-topic",{key:n,attrs:{topic:e}})]}))],2),i("div",{staticClass:"text-center my-4"},[i("v-pagination",{attrs:{length:t.total,circle:""},on:{input:t.changePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),i("to-top-fab",{attrs:{bottom:!1}})],1)},a=[],s=(i("498a"),i("7c15")),o=i("5634"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-list-item",{key:t.topic.id},[i("v-list-item-content",[i("div",{staticClass:"mt-2 chat_content",domProps:{innerHTML:t._s(t.topic.content)}}),i("div",{staticClass:"mt-2 text--secondary d-flex justify-space-between"},[i("div",{staticClass:"d-flex align-center"},[i("span",{staticClass:"mr-4",domProps:{textContent:t._s(t.topic.userName)}}),i("span",{domProps:{textContent:t._s(t.toDate(t.topic.updatedAt))}})]),i("div",[i("v-btn",{attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.showReply=!t.showReply}}},[t._v("回复("+t._s(t.topic.Comments?t.topic.Comments.length:0)+")")])],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showReply,expression:"showReply"}],staticClass:"mt-2"},[i("div",{staticClass:"mb-2 d-flex justify-space-between"},[i("div",{staticClass:"flex-grow-1"},[i("v-text-field",{staticClass:"reply_input",attrs:{label:"回复",dense:"","hide-details":"",outlined:"",color:"primary"},model:{value:t.replyContent,callback:function(e){t.replyContent=e},expression:"replyContent"}})],1),i("v-btn",{staticClass:"ml-2 primary--text",attrs:{text:""},on:{click:function(e){return e.stopPropagation(),t.submitReply()}}},[t._v("提交")])],1),i("v-list",{staticClass:"pl-4"},[t._l(t.topic.Comments,(function(e,n){return[i("v-divider",{key:"d"+n}),i("v-list-item",{key:n},[i("v-list-item-content",[i("div",{staticClass:"chat_content",domProps:{innerHTML:t._s(e.content)}}),i("div",{staticClass:"mt-2 text--secondary d-flex justify-space-between"},[i("div",[i("span",{staticClass:"mr-4",domProps:{textContent:t._s(e.userName)}}),i("span",{domProps:{textContent:t._s(t.toDate(e.updatedAt))}})]),i("div",[i("span",{domProps:{textContent:t._s("#"+(n+1))}})])])])],1)]}))],2)],1)])],1)},c=[],l={name:"ATopic",props:{topic:Object},data:function(){return{showReply:!1,replyContent:""}},methods:{toDate:function(t){return Object(o["a"])(t)},submitReply:function(){var t=this;this.replyContent.trim().length>0?Object(s["a"])(this.topic.id,this.replyContent).then((function(e){t.replyContent="",t.$store.dispatch("message/success","回复成功"),t.topic.comments.push(e)})):this.$store.dispatch("message/error","回复内容不能为空")}},watch:{"topic.id":function(){this.showReply=!1}}},u=l,h=(i("1e4c"),i("2877")),d=i("6544"),v=i.n(d),p=i("8336"),f=i("5530"),m=(i("8ce9"),i("7560")),g=m["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(f["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(f["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),b=i("8860"),y=i("da13"),x=i("5d23"),C=i("8654"),A=Object(h["a"])(u,r,c,!1,null,"98c9786a",null),w=A.exports;v()(A,{VBtn:p["a"],VDivider:g,VList:b["a"],VListItem:y["a"],VListItemContent:x["a"],VTextField:C["a"]});var $=i("3e17"),O={components:{ATopic:w,ToTopFab:$["a"]},data:function(){return{topicDialog:!1,topicContent:"",chatList:[],total:0,page:1}},methods:{getChatTopics:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;Object(s["c"])(e).then((function(e){t.chatList=e.articles.rows,t.total=Math.ceil(e.pagination.total/e.pagination.pageSize)}))},toDate:function(t){return Object(o["a"])(t)},toggleReplies:function(t){this.show[t]=!this.show[t]},submitTopic:function(){var t=this;this.topicContent.trim().length>0?Object(s["b"])(this.topicContent).then((function(){t.$store.dispatch("message/success","主题创建成功")})):this.$store.dispatch("message/error","主题内容不能为空")},changePage:function(t){this.getChatTopics(t)}},created:function(){this.getChatTopics()}},k=O,j=(i("5fbf"),i("b0af")),_=i("99d9"),I=i("a523"),N=(i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("2909")),T=i("ade3"),D=(i("368e"),m["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:m["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})),E=(i("b0c0"),i("b64b"),i("53ca")),S=i("2b0e"),L=S["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}}),B=i("f2e7"),V=i("58df"),P=i("80d2"),M=i("d9bd"),R=Object(V["a"])(L,B["a"]),H=R.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(E["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(P["m"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(M["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(P["l"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){if(this.activatorElement)return this.activatorElement;var e=null;if(this.activator){var i=this.internalActivator?this.$el:document;e="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var n=this.activatorNode[0].componentInstance;e=n&&n.$options.mixins&&n.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?n.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=e,this.activatorElement},getContentSlot:function(){return Object(P["l"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),z=i("b848"),F=(i("4160"),i("159b"),i("9d65"));function Z(t){var e=Object(E["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var G=Object(V["a"])(F["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:Z},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(P["k"])(this.$vnode,"context.$options._scopeId");return t&&Object(T["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(M["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}}),W=i("e707"),q=S["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}}),K=(i("99af"),S["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(P["n"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(P["n"])(e)],n=[].concat(Object(N["a"])(document.getElementsByClassName("v-menu__content--active")),Object(N["a"])(document.getElementsByClassName("v-dialog__content--active"))),a=0;a<n.length;a++)t.includes(n[a])||i.push(Object(P["n"])(n[a]));return Math.max.apply(Math,i)}}})),J=i("a293"),U=Object(V["a"])(H,z["a"],G,W["a"],q,K,B["a"]),Q=U.extend({name:"v-dialog",directives:{ClickOutside:J["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(T["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(T["a"])(t,"v-dialog--active",this.isActive),Object(T["a"])(t,"v-dialog--persistent",this.persistent),Object(T["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(T["a"])(t,"v-dialog--scrollable",this.scrollable),Object(T["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(M["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):W["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===P["p"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(N["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(D,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(f["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(f["a"])(Object(f["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(P["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(P["f"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),X=i("132d"),Y=(i("d81d"),i("d3b7"),i("25f0"),i("17b3"),i("9d26")),tt=i("dc22"),et=i("a9ad"),it=i("de2c"),nt=Object(V["a"])(et["a"],Object(it["a"])({onVisible:["init"]}),m["a"]).extend({name:"v-pagination",directives:{Resize:tt["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(f["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var i=e%2===0?1:0,n=Math.floor(e/2),a=this.length-n+1+i;if(this.value>n&&this.value<a){var s=this.value-n+2,o=this.value+n-2-i;return[1,"..."].concat(Object(N["a"])(this.range(s,o)),["...",this.length])}if(this.value===n){var r=this.value+n-1-i;return[].concat(Object(N["a"])(this.range(1,r)),["...",this.length])}if(this.value===a){var c=this.value-n+1;return[1,"..."].concat(Object(N["a"])(this.range(c,this.length)))}return[].concat(Object(N["a"])(this.range(1,n)),["..."],Object(N["a"])(this.range(a,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var i=[];t=t>0?t:1;for(var n=t;n<=e;n++)i.push(n);return i},genIcon:function(t,e,i,n,a){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{type:"button","aria-label":a},on:i?{}:{click:n}},[t(Y["a"],[e])])])},genItem:function(t,e){var i=this,n=e===this.value&&(this.color||"primary"),a=e===this.value,s=a?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":a,"aria-label":this.$vuetify.lang.t(s,e)},on:{click:function(){return i.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),at=i("2fa4"),st=(i("1681"),Object(V["a"])(C["a"])),ot=st.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(f["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},C["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=C["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){C["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),rt=Object(h["a"])(k,n,a,!1,null,null,null);e["default"]=rt.exports;v()(rt,{VBtn:p["a"],VCard:j["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:I["a"],VDialog:Q,VDivider:g,VIcon:X["a"],VList:b["a"],VPagination:nt,VSpacer:at["a"],VTextarea:ot})},"368e":function(t,e,i){},"5fbf":function(t,e,i){"use strict";var n=i("8a0a"),a=i.n(n);a.a},"8a0a":function(t,e,i){},"8ce9":function(t,e,i){}}]);
//# sourceMappingURL=chat.61aa37cb.js.map