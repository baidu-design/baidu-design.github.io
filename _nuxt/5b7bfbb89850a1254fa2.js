(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1140:function(t,n,a){"use strict";var e=a(818);a.n(e).a},1141:function(t,n,a){(t.exports=a(9)(!1)).push([t.i,'/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n.hljs[data-v-783200ba] {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n.hljs-comment[data-v-783200ba],\n.hljs-quote[data-v-783200ba] {\n  color: #5c6370;\n  font-style: italic;\n}\n.hljs-doctag[data-v-783200ba],\n.hljs-keyword[data-v-783200ba],\n.hljs-formula[data-v-783200ba] {\n  color: #c678dd;\n}\n.hljs-section[data-v-783200ba],\n.hljs-name[data-v-783200ba],\n.hljs-selector-tag[data-v-783200ba],\n.hljs-deletion[data-v-783200ba],\n.hljs-subst[data-v-783200ba] {\n  color: #e06c75;\n}\n.hljs-literal[data-v-783200ba] {\n  color: #56b6c2;\n}\n.hljs-string[data-v-783200ba],\n.hljs-regexp[data-v-783200ba],\n.hljs-addition[data-v-783200ba],\n.hljs-attribute[data-v-783200ba],\n.hljs-meta-string[data-v-783200ba] {\n  color: #98c379;\n}\n.hljs-built_in[data-v-783200ba],\n.hljs-class .hljs-title[data-v-783200ba] {\n  color: #e6c07b;\n}\n.hljs-attr[data-v-783200ba],\n.hljs-variable[data-v-783200ba],\n.hljs-template-variable[data-v-783200ba],\n.hljs-type[data-v-783200ba],\n.hljs-selector-class[data-v-783200ba],\n.hljs-selector-attr[data-v-783200ba],\n.hljs-selector-pseudo[data-v-783200ba],\n.hljs-number[data-v-783200ba] {\n  color: #d19a66;\n}\n.hljs-symbol[data-v-783200ba],\n.hljs-bullet[data-v-783200ba],\n.hljs-link[data-v-783200ba],\n.hljs-meta[data-v-783200ba],\n.hljs-selector-id[data-v-783200ba],\n.hljs-title[data-v-783200ba] {\n  color: #61aeee;\n}\n.hljs-emphasis[data-v-783200ba] {\n  font-style: italic;\n}\n.hljs-strong[data-v-783200ba] {\n  font-weight: bold;\n}\n.hljs-link[data-v-783200ba] {\n  text-decoration: underline;\n}\n.post[data-v-783200ba] {\n  padding: 45px 60px;\n  font-size: 14px;\n  line-height: 1.8;\n  color: #666;\n  font-weight: 400;\n}\n.post-layout .post[data-v-783200ba] {\n  min-height: 100%;\n  margin-bottom: -192px;\n}\n.post-layout .post[data-v-783200ba]::after {\n  content: "";\n  display: block;\n  height: 192px;\n}\n.post-layout.no-links .post[data-v-783200ba] {\n  margin-bottom: -58px;\n}\n.no-links .post[data-v-783200ba]::after {\n  height: 58px;\n}\n.post h1[data-v-783200ba] {\n  margin-top: 0;\n  margin-bottom: 1.25em;\n  font-size: 36px;\n}\n.post h1 small[data-v-783200ba] {\n  vertical-align: 0.1em;\n  color: #999;\n}\n.post h2[data-v-783200ba] {\n  margin-top: 1.3em;\n  margin-bottom: 1.2em;\n  font-size: 30px;\n}\n.post h2[data-v-783200ba]::before {\n  content: "#";\n  margin-right: 5px;\n  color: #ccc;\n}\n.post h2 + h3[data-v-783200ba] {\n  margin-top: 2em;\n}\n.post h3[data-v-783200ba] {\n  margin-top: 1.25em;\n  margin-bottom: 1.15em;\n  font-size: 24px;\n}\n.post h4[data-v-783200ba] {\n  margin-top: 1.15em;\n  margin-bottom: 1.1em;\n  font-size: 18px;\n}\n.post h5[data-v-783200ba] {\n  margin-top: 1.05em;\n  margin-bottom: 1.05em;\n  font-size: 14px;\n}\n.post h6[data-v-783200ba] {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  font-size: 12px;\n}\n.post h1[data-v-783200ba],\n.post h2[data-v-783200ba],\n.post h3[data-v-783200ba] {\n  font-weight: 500;\n  clear: both;\n}\n.post h1[data-v-783200ba],\n.post h2[data-v-783200ba],\n.post h3[data-v-783200ba],\n.post h4[data-v-783200ba],\n.post h5[data-v-783200ba],\n.post h6[data-v-783200ba] {\n  color: #333;\n  line-height: 1;\n}\n.post br[data-v-783200ba] {\n  clear: both;\n}\n.post p[data-v-783200ba] {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.post ul[data-v-783200ba],\n.post ol[data-v-783200ba] {\n  padding-left: 1.5em;\n}\n.post blockquote[data-v-783200ba] {\n  margin: 1em 0;\n  padding-left: 1em;\n  border-left: 5px solid #f1f1f1;\n  color: #999;\n}\n.post table[data-v-783200ba] {\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #f1f1f1;\n  border-style: none solid;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n}\n.post th[data-v-783200ba],\n.post td[data-v-783200ba] {\n  min-width: 90px;\n  padding: 7px 14px;\n  border: 1px solid #f1f1f1;\n  border-style: solid none;\n  text-align: left;\n}\n.post th[data-v-783200ba] > :first-child,\n.post td[data-v-783200ba] > :first-child {\n  margin-top: 5px;\n}\n.post th[data-v-783200ba] > :last-child,\n.post td[data-v-783200ba] > :last-child {\n  margin-bottom: 5px;\n}\n.post th pre[data-v-783200ba],\n.post td pre[data-v-783200ba] {\n  padding: 10px 15px;\n}\n.post th table[data-v-783200ba],\n.post td table[data-v-783200ba] {\n  margin-top: 0.2em;\n  margin-bottom: 0.5em;\n}\n.post td[data-v-783200ba]:first-child {\n  white-space: nowrap;\n}\n.post a[data-v-783200ba]:link:not([class^="veui-"]),\n.post a[data-v-783200ba]:visited:not([class^="veui-"]) {\n  text-decoration: none;\n  color: #3998fc;\n  transition: color 0.2s;\n}\n.post a[data-v-783200ba]:link:not([class^="veui-"]):hover,\n.post a[data-v-783200ba]:visited:not([class^="veui-"]):hover {\n  color: #3389e3;\n}\n.post a[data-v-783200ba]:link:not([class^="veui-"]):active,\n.post a[data-v-783200ba]:visited:not([class^="veui-"]):active {\n  color: #2e7aca;\n}\n.post code[data-v-783200ba] {\n  padding: 2px 4px;\n  background-color: rgba(0,0,0,0.024);\n  font-size: 90%;\n}\n.post hr[data-v-783200ba] {\n  height: 1px;\n  margin: 2em 0;\n  padding: 0;\n  background-color: #eff0f1;\n  border: 0;\n  clear: both;\n}\n.post figure[data-v-783200ba] {\n  float: right;\n  width: 60%;\n  margin: 0 0 30px 20px;\n}\n.post figure + h1[data-v-783200ba],\n.post figure + h2[data-v-783200ba],\n.post figure + h3[data-v-783200ba],\n.post figure + h4[data-v-783200ba],\n.post figure + h5[data-v-783200ba],\n.post figure + h6[data-v-783200ba] {\n  margin-top: 0;\n}\n.post figure img[data-v-783200ba] {\n  display: block;\n  margin: auto;\n}\n.post figure .preview[data-v-783200ba] {\n  padding: 20px;\n  overflow: hidden;\n  border: 1px solid #e5e5e5;\n  transition: box-shadow 0.2s;\n  cursor: pointer;\n  text-align: center;\n}\n.post figure .preview[data-v-783200ba]:hover {\n  box-shadow: 0 0 5px rgba(0,0,0,0.2);\n}\n.post figure.hero[data-v-783200ba] {\n  width: 100%;\n}\n.post figcaption[data-v-783200ba] {\n  margin-top: 10px;\n  font-size: 12px;\n}\n.post figcaption p[data-v-783200ba] {\n  margin: 0;\n  line-height: 20px;\n}\n.post figcaption .caption[data-v-783200ba] {\n  font-weight: 500;\n}\n.post figcaption .desc[data-v-783200ba] {\n  color: #999;\n}\n.post .comparison[data-v-783200ba] {\n  float: right;\n  width: 60%;\n  margin: 0 0 30px 20px;\n}\n.post .comparison figure[data-v-783200ba] {\n  width: calc(50% - 5px);\n  margin: 0;\n}\n.post .comparison .good[data-v-783200ba] {\n  float: left;\n}\n.post .comparison .bad[data-v-783200ba] {\n  float: right;\n}\n.post .comparison .bad .caption[data-v-783200ba] {\n  color: #ff5b5b;\n}\n.post img[data-v-783200ba] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.post pre[data-v-783200ba] {\n  border: 1px solid #eee;\n  padding: 30px;\n  background-color: #f9f9f9;\n}\n.post pre code[data-v-783200ba] {\n  background-color: transparent;\n  padding: 0;\n}\n.post var[data-v-783200ba] {\n  font-family: "PT Serif", Georgia, serif;\n}\n.post kbd[data-v-783200ba] {\n  display: inline-block;\n  padding: 3px 5px 6px;\n  font-size: 90%;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: 1px;\n  background-color: #fafbfc;\n  border: solid 1px #c6cbd1;\n  border-bottom-color: #959da5;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #959da5;\n}\n.post .custom-block[data-v-783200ba] {\n  border: 1px solid;\n  margin: 1em 0;\n  padding: 0.75em 1em;\n}\n.post .custom-block[data-v-783200ba] > :first-child {\n  margin-top: 0;\n}\n.post .custom-block[data-v-783200ba] > :last-child {\n  margin-bottom: 0;\n}\n.post .alert[data-v-783200ba],\n.post .warning[data-v-783200ba],\n.post .tip[data-v-783200ba] {\n  font-size: 13px;\n}\n.post .alert[data-v-783200ba] {\n  border-color: #fee;\n  background-color: #fff6f6;\n}\n.post .warning[data-v-783200ba] {\n  border-color: #fef4e6;\n  background-color: #fef9f2;\n}\n.post .tip[data-v-783200ba] {\n  border-color: #d8ebff;\n  background-color: #ebf5ff;\n}\n.post .badges[data-v-783200ba] {\n  border: none;\n  padding: 0;\n}\n.post .badges code[data-v-783200ba] {\n  padding: 2px 3px;\n  background: #333;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 80%;\n}\n.post .oss-badges[data-v-783200ba] {\n  border: none;\n  padding: 0;\n}\n.post .oss-badges a[data-v-783200ba] {\n  margin-right: 10px;\n}\n.post .one-demo[data-v-783200ba] {\n  margin: 1em 0 1.25em;\n}\n',""])},1403:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("article",{staticClass:"content post"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("h2",{attrs:{id:"api"}},[t._v("API")]),t._v(" "),a("h3",{attrs:{id:"属性"}},[t._v("属性")]),t._v(" "),a("table",[t._m(2),a("tbody",[t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),a("tr",[t._m(9),t._m(10),a("td",[t._v("-")]),a("td",[a("p",[t._v("选项卡状态。")]),t._v(" "),a("one-details",{attrs:{summary:"枚举值"}},[a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("success")])]),a("td",[t._v("成功状态。")])]),a("tr",[a("td",[a("code",[t._v("warning")])]),a("td",[t._v("警示状态。")])]),a("tr",[a("td",[a("code",[t._v("info")])]),a("td",[t._v("普通信息状态。")])]),a("tr",[a("td",[a("code",[t._v("error")])]),a("td",[t._v("错误状态。")])])])])])],1)])])]),t._v(" "),a("h3",{attrs:{id:"插槽"}},[t._v("插槽")]),t._v(" "),t._m(11)])};e._withStripped=!0;var o={components:{OneDetails:a(433).a}},s=(a(1140),a(1)),i=Object(s.a)(o,e,[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"tab-small标签small"}},[this._v("Tab "),n("small",[this._v("标签")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",[n("code",[this._v("Tab")]),this._v(" 组件需要配合 "),n("a",{attrs:{href:"./tabs"}},[n("code",[this._v("Tabs")])]),this._v(" 组件使用。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("thead",[n("tr",[n("th",[this._v("名称")]),n("th",[this._v("类型")]),n("th",[this._v("默认值")]),n("th",[this._v("描述")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[n("code",[this._v("label")])]),n("td",[n("code",[this._v("string")])]),n("td",[this._v("-")]),n("td",[this._v("选项卡文本。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[n("code",[this._v("name")])]),n("td",[n("code",[this._v("string")])]),n("td",[this._v("-")]),n("td",[this._v("选项卡名称。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[n("code",[this._v("disabled")])]),n("td",[n("code",[this._v("boolean")])]),n("td",[n("code",[this._v("false")])]),n("td",[this._v("选项卡是否禁用。")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("tr",[a("td",[a("code",[t._v("to")])]),a("td",[a("code",[t._v("string|Object")])]),a("td",[t._v("-")]),a("td",[t._v("选项卡路由信息。类型见 "),a("a",{attrs:{href:"./link#%E5%B1%9E%E6%80%A7"}},[t._v("Link")]),t._v(" 组件的同名属性。如果 "),a("code",[t._v("to")]),t._v(" 存在，则 "),a("code",[t._v("name")]),t._v(" 属性会优先使用 "),a("code",[t._v("to")]),t._v(" 的值来指代。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[n("code",[this._v("native")])]),n("td",[n("code",[this._v("boolean")])]),n("td",[n("code",[this._v("false")])]),n("td",[this._v("路由模式是否强制使用原生的 "),n("code",[this._v("<a>")]),this._v(" 元素。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("td",[n("code",[this._v("removable")])]),n("td",[n("code",[this._v("boolean")])]),n("td"),n("td",[this._v("是否可删除。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",[n("code",[this._v("status")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("td",[n("code",[this._v("string")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("table",[a("thead",[a("tr",[a("th",[t._v("名称")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[a("code",[t._v("default")])]),a("td",[t._v("默认插槽。若未配置属性 "),a("code",[t._v("to")]),t._v("，无默认内容。若配置了属性 "),a("code",[t._v("to")]),t._v("，默认渲染 "),a("code",[t._v("router-view")]),t._v(" 组件，组件是否显示依赖标签在标签页中是否处于激活状态。")])])])])}],!1,null,"783200ba",null);n.default=i.exports},430:function(t,n,a){var e=a(435);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(10).default)("0c4445ac",e,!1,{sourceMap:!1})},432:function(t,n,a){"use strict";a(57).a.register({"angle-right-small":{width:"12",height:"12",paths:[{d:"M7.62 6L4.43 2.8l.8-.8 3.98 3.97-.02.03.02.02-3.98 3.97-.8-.8 3.2-3.2z","fill-rule":"evenodd"}]}})},433:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{class:{"one-details":!0,expanded:t.expanded}},[a("button",{staticClass:"summary",on:{click:t.toggle}},[a("veui-icon",{staticClass:"arrow",attrs:{name:"angle-right-small"}}),t._v(" "+t._s(t.summary))],1),t._v(" "),a("div",{ref:"content",staticClass:"content",style:t.style,on:{transitionend:function(n){t.stable=!0}}},[t._t("default")],2)])};e._withStripped=!0;var o=a(57),s=(a(432),{name:"one-details",components:{"veui-icon":o.a},data:function(){return{expanded:!1,intrinsicHeight:0,height:0,stable:!0}},props:{summary:{type:String,required:!0,default:"详细信息"}},computed:{style:function(){return this.stable?this.expanded?null:"height: 0":"height: "+this.height+"px"}},methods:{toggle:function(){var t=this;this.expanded=!this.expanded,this.stable=!1,this.height=this.intrinsicHeight,this.expanded||requestAnimationFrame(function(){requestAnimationFrame(function(){t.height=0})})},updateHeight:function(){var t=this.$refs.content;this.intrinsicHeight=t.scrollHeight}},mounted:function(){this.updateHeight()}}),i=(a(434),a(1)),d=Object(i.a)(s,e,[],!1,null,"1bf0130e",null);n.a=d.exports},434:function(t,n,a){"use strict";var e=a(430);a.n(e).a},435:function(t,n,a){(t.exports=a(9)(!1)).push([t.i,"\n.one-details[data-v-1bf0130e] {\n  overflow: hidden;\n}\n.summary[data-v-1bf0130e] {\n  border: none;\n  background: none;\n  padding-left: 0;\n  cursor: help;\n  outline: none;\n}\n.summary[data-v-1bf0130e]:hover {\n  color: #333;\n}\n.content[data-v-1bf0130e] {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.arrow[data-v-1bf0130e] {\n  vertical-align: top;\n  margin-top: 0.35em;\n  transition: transform 0.3s;\n}\n.expanded > .summary > .arrow[data-v-1bf0130e] {\n  transform: rotateZ(90deg);\n}\n",""])},818:function(t,n,a){var e=a(1141);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(10).default)("c3693066",e,!1,{sourceMap:!1})}}]);