(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1141:function(t,s,a){"use strict";var e=a(796);a.n(e).a},1143:function(t,s,a){"use strict";var e=a(797);a.n(e).a},1539:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"content post"},[t._m(0),t._v(" "),a("h2",{attrs:{id:"示例"}},[t._v("示例")]),t._v(" "),a("p",[t._v("自定义标题和内容区。")]),t._v(" "),a("one-demo",[a("one-demo-5c5a678"),a("template",{slot:"source"},[a("div",{pre:!0},[a("pre",[a("code",{attrs:{class:"hljs language-vue"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),a("span",{attrs:{class:"html"}},[t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("article")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("veui-button")]),t._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("删除"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("veui-button")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("veui-confirm-box")]),t._v("\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"系统提示"')]),t._v("\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":open.sync")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v("\n    @"),a("span",{attrs:{class:"hljs-attr"}},[t._v("ok")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"ok"')]),t._v("\n    @"),a("span",{attrs:{class:"hljs-attr"}},[t._v("cancel")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"cancel"')]),t._v("\n  >")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("删除后不可恢复，确认删除？"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("veui-confirm-box")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("article")]),t._v(">")]),t._v("\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { ConfirmBox, Button } "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'veui'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" toastManager "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'veui/managers/toast'")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": {\n    "),a("span",{attrs:{class:"hljs-string"}},[t._v("'veui-confirm-box'")]),t._v(": ConfirmBox,\n    "),a("span",{attrs:{class:"hljs-string"}},[t._v("'veui-button'")]),t._v(": Button\n  },\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    ok () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".open = "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n      toastManager.info("),a("span",{attrs:{class:"hljs-string"}},[t._v("'已确认'")]),t._v(")\n    },\n    cancel () {\n      toastManager.info("),a("span",{attrs:{class:"hljs-string"}},[t._v("'已取消'")]),t._v(")\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")])])])])]),a("template",{slot:"desc"})],2),t._v(" "),a("h2",{attrs:{id:"api"}},[t._v("API")]),t._v(" "),a("h3",{attrs:{id:"属性"}},[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),a("h3",{attrs:{id:"插槽"}},[t._v("插槽")]),t._v(" "),t._m(2),t._v(" "),a("h3",{attrs:{id:"事件"}},[t._v("事件")]),t._v(" "),t._m(3)],1)};e._withStripped=!0;var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",[a("veui-button",{on:{click:function(s){t.open=!0}}},[t._v("删除")]),t._v(" "),a("veui-confirm-box",{attrs:{title:"系统提示",open:t.open},on:{"update:open":function(s){t.open=s},ok:t.ok,cancel:t.cancel}},[a("p",[t._v("删除后不可恢复，确认删除？")])])],1)};n._withStripped=!0;var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("veui-dialog",{attrs:{ui:t.ui,"overlay-class":t.mergeOverlayClass("veui-confirm-box"),open:t.localOpen,priority:t.priority,closable:!1,"before-close":t.beforeClose,role:"alertdialog"},on:{"update:open":function(s){t.localOpen=s}},scopedSlots:t._u([{key:"foot",fn:function(s){return t.$slots.foot||t.$scopedSlots.foot?[t._t("foot",null,null,s)]:void 0}}])},[a("template",{slot:"title"},[t._t("title",[t._v(t._s(t.title))])],2),t._v(" "),t._t("default")],2)};o._withStripped=!0;var i=a(102),r=a.n(i),l=a(555),c=a(448),v=a(137),_=a(138),u=a(451);v.a.defaults({"confirmbox.priority":100});var p={name:"veui-confirm-box",components:{"veui-dialog":l.a,"veui-button":c.a},mixins:[_.a,u.a],props:r()(l.a.props,["open","title","beforeClose"]),data:function(){return{localOpen:this.open,localTitle:this.title,priority:v.a.get("confirmbox.priority")}},watch:{open:function(t){this.localOpen=t},localOpen:function(t){this.$emit("update:open",t)}}},h=(a(1141),a(1)),d=Object(h.a)(p,o,[],!1,null,null,null).exports,f=a(493),m={components:{"veui-confirm-box":d,"veui-button":c.a},data:function(){return{open:!1}},methods:{ok:function(){this.open=!1,f.a.info("已确认")},cancel:function(){f.a.info("已取消")}}},g={components:{"one-demo-5c5a678":Object(h.a)(m,n,[],!1,null,null,null).exports,OneDemo:a(442).a}},y=(a(1143),Object(h.a)(g,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"confirmbox-small确认弹框small"}},[this._v("ConfirmBox "),s("small",[this._v("确认弹框")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),a("th",[t._v("类型")]),a("th",[t._v("默认值")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("open")])]),a("td",[a("code",[t._v("boolean")])]),a("td",[a("code",[t._v("false")])]),a("td",[a("div",{staticClass:"badges custom-block"},[a("p",[a("code",[t._v(".sync")])])]),t._v(" "),a("p",[t._v("是否显示确认弹框。")])])]),a("tr",[a("td",[a("code",[t._v("title")])]),a("td",[a("code",[t._v("string")])]),a("td",[t._v("-")]),a("td",[t._v("标题。")])]),a("tr",[a("td",[a("code",[t._v("overlay-class")])]),a("td",[a("code",[t._v("string|Array|Object")])]),a("td",[t._v("-")]),a("td",[t._v("参考 "),a("a",{attrs:{href:"./overlay"}},[t._v("Overlay")]),t._v(" 组件的 "),a("code",[t._v("overlay-class")]),t._v(" 属性。")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("default")])]),a("td",[t._v("内容区。")])]),a("tr",[a("td",[a("code",[t._v("title")])]),a("td",[t._v("标题区。若同时指定了 "),a("code",[t._v("title")]),t._v(" 属性和 "),a("code",[t._v("title")]),t._v(" 插槽，以后者为准。")])]),a("tr",[a("td",[a("code",[t._v("foot")])]),a("td",[t._v("底部区域，默认会展示“确定”、“取消”按钮。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("名称")]),s("th",[this._v("描述")])])]),s("tbody",[s("tr",[s("td",[s("code",[this._v("ok")])]),s("td",[this._v("点击“确定”按钮时触发。")])]),s("tr",[s("td",[s("code",[this._v("cancel")])]),s("td",[this._v("点击“取消”按钮时触发。")])])])])}],!1,null,"4711d3ca",null));s.default=y.exports},437:function(t,s,a){},442:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"one-demo",class:{expanded:t.localExpanded}},[a("section",{staticClass:"demo"},[t._t("default")],2),t._v(" "),t.$slots.desc?a("section",{staticClass:"desc"},[t._t("desc")],2):t._e(),t._v(" "),t.$slots.source?a("section",{ref:"source",staticClass:"source",style:{height:t.localExpanded?(t.sourceHeight||0)+"px":"0"}},[t._t("source")],2):t._e(),t._v(" "),a("button",{staticClass:"toggle",on:{click:function(s){t.localExpanded=!t.localExpanded}}},[a("veui-icon",{staticClass:"arrow",attrs:{name:"angle-right-small"}}),t._v(" "+t._s(t.localExpanded?"隐藏代码":"显示代码"))],1)])};e._withStripped=!0;var n=a(55),o=(a(438),{name:"one-demo",components:{"veui-icon":n.a},props:{expanded:Boolean},data:function(){return{sourceHeight:0,localExpanded:this.expanded}},watch:{expanded:function(t){this.localExpanded=t},localExpanded:function(t){this.$emit("update:expanded",t)}},mounted:function(){var t=this.$refs.source,s=t.style;s.height="",s.height=t.offsetHeight,this.sourceHeight=t.offsetHeight,s.height="0"}}),i=(a(443),a(1)),r=Object(i.a)(o,e,[],!1,null,"60514566",null);s.a=r.exports},443:function(t,s,a){"use strict";var e=a(437);a.n(e).a},459:function(t,s,a){var e=a(26),n=a(14),o="[object Number]";t.exports=function(t){return"number"==typeof t||n(t)&&e(t)==o}},461:function(t,s,a){"use strict";a(55).a.register({"exclamation-circle-o":{width:"16",height:"16",paths:[{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 9.13v-5h2v5H7zm1 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"}]}})},463:function(t,s,a){},464:function(t,s,a){},469:function(t,s,a){"use strict";a(55).a.register({"check-circle-o":{width:"16",height:"16",paths:[{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm-.93-5L4.5 8.19l.98-1.06 1.59 1.75L10.47 5l1.03 1.08L7.07 11z"}]}})},470:function(t,s,a){"use strict";a(55).a.register({"info-circle-o":{width:"16",height:"16",paths:[{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.87v5h2v-5H7zm1-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}]}})},471:function(t,s,a){"use strict";a(55).a.register({"cross-circle-o":{width:"16",height:"16",paths:[{d:"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.17 4l.83.83L4.83 12 4 11.17 11.17 4zM4.83 4L12 11.17l-.83.83L4 4.83 4.83 4z"}]}})},493:function(t,s,a){"use strict";var e=a(57),n=a.n(e),o=a(58),i=a.n(o),r=a(459),l=a.n(r),c=a(3),v=a.n(c),_=a(17),u=a.n(_),p=a(0),h=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("veui-overlay",{attrs:{open:!0,"overlay-class":t.mergeOverlayClass("veui-toast-list"),priority:t.priority}},t._l(t.messages,function(s,e){return a("veui-toast",{key:s.__message_id__,style:"top: "+s.top+"px",attrs:{open:"",type:s.type,message:s.message,duration:s.duration},on:{close:function(a){t.remove(s)},ready:function(a){t.updateHeight(s,e,a)}}})}))};h._withStripped=!0;var d=a(140),f=a.n(d),m=a(27),g=a.n(m),y=a(103),j=a.n(y),b=a(458),x=a(496),w=a(137),k=a(451);w.a.defaults({"toast.priority":101});var $={name:"toast-list",mixins:[k.a],components:{"veui-overlay":b.a,"veui-toast":x.a},data:function(){return{messages:[],priority:w.a.get("toast.priority")}},methods:{add:function(t){this.messages.unshift(j()({height:0,top:0},t,{__message_id__:f()("veui-toast-")}))},remove:function(t){var s=g()(this.messages,function(s){return s.__message_id__===t.__message_id__});this.messages.splice(s,1),this.updateLayout()},updateHeight:function(t,s,a){t.height=a,this.updateLayout()},updateLayout:function(){var t=this;this.messages.forEach(function(s,a){if(0!==a){var e=t.messages[a-1];s.top=e.top+e.height+10}else s.top=0})}}},E=(a(499),a(1)),C=Object(E.a)($,h,[],!1,null,null,null).exports,O=a(143),z=p.a.extend(C),A=new(function(){function t(){n()(this,t),this.container=new z}return i()(t,[{key:"init",value:function(){var t=document.createElement("div");document.body.appendChild(t),this.container.$mount(t),this.el=t}},{key:"add",value:function(t){var s=this;this.el||this.init(),Array.isArray(t)?t.forEach(function(t){s.container.add(t)}):v()(t)?this.container.add(t):Object(O.a)("[toast-manager] Invalid arguments for Toasts.")}},{key:"remove",value:function(t){var s=this.container;if(l()(t))s.remove(s.messages[t]);else for(;s.messages.length;)this.remove(0)}},{key:"_show",value:function(t,s){var a=t;u()(t)&&(a={message:t}),a.type=s,this.add(a)}},{key:"success",value:function(t){this._show(t,"success")}},{key:"warn",value:function(t){this._show(t,"warning")}},{key:"info",value:function(t){this._show(t,"info")}},{key:"error",value:function(t){this._show(t,"error")}}]),t}());s.a=A},496:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"veui-toast"}},[t.open?a("div",{staticClass:"veui-toast",class:"veui-toast-"+t.type,attrs:{ui:t.ui,role:"alert"}},[a("veui-icon",{staticClass:"veui-toast-icon",attrs:{name:t.icons[t.type]}}),t._v(" "),a("span",{staticClass:"veui-toast-message"},[t._t("default",[t._v(t._s(t.message))])],2)],1):t._e()])};e._withStripped=!0;var n=a(24),o=a.n(n),i=(a(469),a(461),a(470),a(471),a(137));i.a.defaults({icons:{success:"check-circle-o",warning:"exclamation-circle-o",info:"info-circle-o",error:"cross-circle-o"}},"toast");var r=a(55),l=a(138);i.a.defaults({duration:3e3},"toast");var c=["success","warning","info","error"],v={name:"toast",mixins:[l.a],components:{"veui-icon":r.a},props:{type:{type:String,default:"success",validator:function(t){return o()(c,t)}},message:String,open:Boolean,duration:{type:Number,default:i.a.get("toast.duration")}},mounted:function(){var t=this;this.timer=setTimeout(function(){t.$emit("update:open",!1),t.$emit("close")},this.duration),this.$emit("ready",this.$el.offsetHeight)},beforeDestroy:function(){clearTimeout(this.timer)}},_=(a(497),a(1)),u=Object(_.a)(v,e,[],!1,null,null,null);s.a=u.exports},497:function(t,s,a){"use strict";var e=a(463);a.n(e).a},499:function(t,s,a){"use strict";var e=a(464);a.n(e).a},796:function(t,s,a){},797:function(t,s,a){}}]);