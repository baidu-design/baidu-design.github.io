(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1433:function(s,t,a){"use strict";var e=a(954);a.n(e).a},1435:function(s,t,a){"use strict";var e=a(955);a.n(e).a},1547:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",{staticClass:"content post"},[a("h1",{attrs:{id:"v-nudge"}},[s._v("v-nudge")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[s._v("简介")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),a("h2",{attrs:{id:"示例"}},[s._v("示例")]),s._v(" "),s._m(2),s._v(" "),a("one-demo",[a("one-demo-8f3de51"),a("template",{slot:"source"},[a("div",{pre:!0},[a("pre",[a("code",{attrs:{class:"hljs language-vue"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),a("span",{attrs:{class:"html"}},[s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("article")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box value"')]),s._v(">")]),s._v("{{ displayValue }}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tabindex")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"-1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-nudge.x")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{update: handleNudgeUpdate}"')]),s._v(">")]),s._v("点我，按"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("strong")]),s._v(">")]),s._v("左右"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("strong")]),s._v(">")]),s._v("方向键"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"box"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("tabindex")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"-1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-nudge.y")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"{update: handleNudgeUpdate}"')]),s._v(">")]),s._v("点我，按"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("strong")]),s._v(">")]),s._v("上下"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("strong")]),s._v(">")]),s._v("方向键"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("article")]),s._v(">")]),s._v("\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" nudge "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"hljs-string"}},[s._v("'veui/directives/nudge'")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("directives")]),s._v(": {\n    nudge\n  },\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("computed")]),s._v(": {\n    displayValue () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value.toFixed("),a("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(").replace("),a("span",{attrs:{class:"hljs-string"}},[s._v("'.0'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v(")\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    handleNudgeUpdate (increase) {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".value += increase\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")])])])])]),a("template",{slot:"desc"})],2),s._v(" "),a("h2",{attrs:{id:"api"}},[s._v("API")]),s._v(" "),s._m(3),s._v(" "),a("h3",{attrs:{id:"绑定值"}},[s._v("绑定值")]),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),a("h3",{attrs:{id:"修饰符"}},[s._v("修饰符")]),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),a("h3",{attrs:{id:"全局配置"}},[s._v("全局配置")]),s._v(" "),s._m(9)],1)};e._withStripped=!0;var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",[a("div",{staticClass:"box value"},[s._v(s._s(s.displayValue))]),s._v(" "),a("div",{directives:[{name:"nudge",rawName:"v-nudge.x",value:{update:s.handleNudgeUpdate},expression:"{update: handleNudgeUpdate}",modifiers:{x:!0}}],staticClass:"box",attrs:{tabindex:"-1"}},[s._v("点我，按"),a("strong",[s._v("左右")]),s._v("方向键")]),s._v(" "),a("div",{directives:[{name:"nudge",rawName:"v-nudge.y",value:{update:s.handleNudgeUpdate},expression:"{update: handleNudgeUpdate}",modifiers:{y:!0}}],staticClass:"box",attrs:{tabindex:"-1"}},[s._v("点我，按"),a("strong",[s._v("上下")]),s._v("方向键")])])};n._withStripped=!0;var v={directives:{nudge:a(489).a},data:function(){return{value:0}},computed:{displayValue:function(){return this.value.toFixed(1).replace(".0","")}},methods:{handleNudgeUpdate:function(s){this.value+=s}}},r=(a(1433),a(1)),l={components:{"one-demo-8f3de51":Object(r.a)(v,n,[],!1,null,"c85677f6",null).exports,OneDemo:a(442).a}},_=(a(1435),Object(r.a)(l,e,[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("v-nudge")]),this._v(" 指令用于使用键盘方向键对值进行调整。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",[s._v("应用 "),a("code",[s._v("v-nudge")]),s._v(" 的元素或组件根元素必须可以接收焦点。可以使用本身就会接收焦点的元素如 "),a("code",[s._v("<button>")]),s._v("、"),a("code",[s._v("<input>")]),s._v(" 或者使用 "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex"}},[a("code",[s._v("tabindex")]),s._v(" 属性")]),s._v("。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",[this._v("按方向键时如果同时按下了 "),t("kbd",[this._v("shift")]),this._v(" 或 "),t("kbd",[this._v("alt")]),this._v(" 键，则变化值会被放大 10 倍或缩小 10 倍。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",[this._v("指令的具体用法请参考"),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4"}},[this._v("官方文档")]),this._v("。更多详细参数请参考"),t("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0"}},[this._v("自定义指令")]),this._v("。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("类型："),t("code",[this._v("Object")]),this._v("。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("类型")]),a("th",[s._v("默认值")]),a("th",[s._v("描述")])])]),a("tbody",[a("tr",[a("td",[a("code",[s._v("axis")])]),a("td",[a("code",[s._v("string")])]),a("td",[a("code",[s._v("y")])]),a("td",[s._v("限制只能使用左右或上下方向键调整。取值为："),a("code",[s._v("x")]),s._v("、"),a("code",[s._v("y")]),s._v("。")])]),a("tr",[a("td",[a("code",[s._v("step")])]),a("td",[a("code",[s._v("number")])]),a("td",[a("code",[s._v("nudge.step")])]),a("td",[s._v("步进值。可进行"),a("a",{attrs:{href:"#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE"}},[s._v("全局配置")]),s._v("。")])]),a("tr",[a("td",[a("code",[s._v("update")])]),a("td",[a("code",[s._v("function")])]),a("td",[a("code",[s._v("function() {}")])]),a("td",[s._v("值发生变化时触发，传入变化值。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"warning custom-block"},[t("p",[t("code",[this._v("v-nudge")]),this._v(" 只生成按方向键得到的变化值，本身并不会对值进行修改，需要使用者在 "),t("code",[this._v("update")]),this._v(" 中自行处理。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("对应 "),t("code",[this._v("Object")]),this._v(" 类型绑定值中的 "),t("code",[this._v("axis")]),this._v("。例如：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("tabindex")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"-1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-nudge.x")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{ update: increase => this.val += increase }"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("配置项")]),a("th",[s._v("类型")]),a("th",[s._v("默认值")]),a("th",[s._v("描述")])])]),a("tbody",[a("tr",[a("td",[a("code",[s._v("nudge.step")])]),a("td",[a("code",[s._v("number")])]),a("td",[a("code",[s._v("1")])]),a("td",[s._v("步进值。")])])])])}],!1,null,"40356c6c",null));t.default=_.exports},437:function(s,t,a){},438:function(s,t,a){"use strict";a(55).a.register({"angle-right-small":{width:"12",height:"12",paths:[{d:"M7.62 6L4.43 2.8l.8-.8 3.98 3.97-.02.03.02.02-3.98 3.97-.8-.8 3.2-3.2z","fill-rule":"evenodd"}]}})},442:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("article",{staticClass:"one-demo",class:{expanded:s.localExpanded}},[a("section",{staticClass:"demo"},[s._t("default")],2),s._v(" "),s.$slots.desc?a("section",{staticClass:"desc"},[s._t("desc")],2):s._e(),s._v(" "),s.$slots.source?a("section",{ref:"source",staticClass:"source",style:{height:s.localExpanded?(s.sourceHeight||0)+"px":"0"}},[s._t("source")],2):s._e(),s._v(" "),a("button",{staticClass:"toggle",on:{click:function(t){s.localExpanded=!s.localExpanded}}},[a("veui-icon",{staticClass:"arrow",attrs:{name:"angle-right-small"}}),s._v(" "+s._s(s.localExpanded?"隐藏代码":"显示代码"))],1)])};e._withStripped=!0;var n=a(55),v=(a(438),{name:"one-demo",components:{"veui-icon":n.a},props:{expanded:Boolean},data:function(){return{sourceHeight:0,localExpanded:this.expanded}},watch:{expanded:function(s){this.localExpanded=s},localExpanded:function(s){this.$emit("update:expanded",s)}},mounted:function(){var s=this.$refs.source,t=s.style;t.height="",t.height=s.offsetHeight,this.sourceHeight=s.offsetHeight,t.height="0"}}),r=(a(443),a(1)),l=Object(r.a)(v,e,[],!1,null,"60514566",null);t.a=l.exports},443:function(s,t,a){"use strict";var e=a(437);a.n(e).a},489:function(s,t,a){"use strict";var e=a(35),n=a.n(e),v=a(104),r=a.n(v),l=a(25),_=a.n(l),i=a(15),c=a.n(i),d=a(137);function o(s,t,a){var e=t.modifiers,v=t.value,l=(t.oldValue,function(s,t,a){t.arg;var e=t.value,v=t.modifiers,l=c()(["x","y"],function(s){return v[s]});l||(l=_()(e,"axis","y"));var i=function(s){var t=_()(e,s,r.a);return n()(t)?t:r.a}("update");return{axis:l,step:_()(e,"step",d.a.get("nudge.step")),update:i}}(0,{arg:t.arg,value:v,modifiers:e}));if(s.__nudgeData__)s.__nudgeData__.setOptions(l);else{var i={options:{},setOptions:function(s){i.options=s},keydownHandler:function(s){var t=s.key,a=s.altKey,e=s.shiftKey,n=i.options,v=n.step;switch(a?v*=.1:e&&(v*=10),!0){case"x"===n.axis&&("ArrowRight"===t||"Right"===t):case"y"===n.axis&&("ArrowUp"===t||"Up"===t):v*=1;break;case"x"===n.axis&&("ArrowLeft"===t||"Left"===t):case"y"===n.axis&&("ArrowDown"===t||"Down"===t):v*=-1;break;default:v=0}0!==v&&(s.preventDefault(),n.update(v))}};s.addEventListener("keydown",i.keydownHandler),s.__nudgeData__=i,s.__nudgeData__.setOptions(l)}}d.a.defaults({"nudge.step":1}),t.a={bind:o,componentUpdated:o,unbind:function(s){var t=s.__nudgeData__;t&&(s.removeEventListener("keydown",t.keydownHandler),s.__nudgeData__=null)}}},954:function(s,t,a){},955:function(s,t,a){}}]);