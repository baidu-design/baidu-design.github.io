(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1382:function(t,e,o){"use strict";o.r(e);var r=o(50),n=o(421),l={mixins:[r.c],components:{OneDetails:n.a}},d=(o(965),o(3)),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"content post"},[o("h1",{attrs:{id:"自定义校验规则"}},[t._v("自定义校验规则")]),t._m(0),o("h2",{attrs:{id:"示例"}},[t._v("示例")]),t._m(1),t._m(2),o("h2",{attrs:{id:"api"}},[t._v("API")]),o("table",[t._m(3),o("tbody",[t._m(4),t._m(5),o("tr",[t._m(6),t._m(7),o("td",[o("p",[t._v("规则优先级。数值低优先级高。")]),o("one-details",{attrs:{summary:"目前内置的优先级"}},[o("table",[o("thead",[o("tr",[o("th",[t._v("名称")]),o("th",[t._v("优先级")]),o("th")])]),o("tbody",[o("tr",[o("td",[o("code",[t._v("required")])]),o("td",[o("code",[t._v("0")])]),o("td")]),o("tr",[o("td",[o("code",[t._v("numeric")])]),o("td",[o("code",[t._v("10")])]),o("td")]),o("tr",[o("td",[o("code",[t._v("pattern")])]),o("td",[o("code",[t._v("50")])]),o("td")]),o("tr",[o("td",[o("code",[t._v("maxLength")])]),o("td",[o("code",[t._v("100")])]),o("td")]),o("tr",[o("td",[o("code",[t._v("minLength")])]),o("td",[o("code",[t._v("100")])]),o("td")]),o("tr",[o("td",[o("code",[t._v("max")])]),o("td",[o("code",[t._v("200")])]),o("td")]),o("tr",[o("td",[o("code",[t._v("min")])]),o("td",[o("code",[t._v("200")])]),o("td")])])])])],1)])])])])},[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("对于多值校验，"),o("a",{attrs:{href:"../components/form#%E5%B1%9E%E6%80%A7"}},[t._v("表单 › validators 属性")]),t._v("提供了比较完善的功能来实现自定义校验。对于单值校验，"),o("code",[t._v("Field")]),t._v(" 组件内置了 7 种常见规则，具体参考"),o("a",{attrs:{href:"../components/field#%E5%B1%9E%E6%80%A7"}},[t._v("表单项 › rule 属性")]),t._v("。如果无法覆盖需求，"),o("code",[t._v("VEUI")]),t._v(" 校验规则模块允许你添加自定义规则。")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pre",[o("code",{staticClass:"hljs language-js"},[o("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" ruleManager "),o("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),o("span",{staticClass:"hljs-string"},[t._v("'veui/manager/rule'")]),t._v("\nruleManager.addRule("),o("span",{staticClass:"hljs-string"},[t._v("'range'")]),t._v(", {\n  validate (value, ruleValue) {\n    "),o("span",{staticClass:"hljs-comment"},[t._v("// 仅实现大小校验部分")]),t._v("\n    "),o("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" range = value.split("),o("span",{staticClass:"hljs-string"},[t._v("'-'")]),t._v(")\n    "),o("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" +range["),o("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("] >= ruleValue.floor && +range["),o("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("] <= ruleValue.ceil\n  },\n  "),o("span",{staticClass:"hljs-attr"},[t._v("message")]),t._v(": "),o("span",{staticClass:"hljs-string"},[t._v("'范围值必须在限定区间内'")]),t._v(",\n  "),o("span",{staticClass:"hljs-attr"},[t._v("priority")]),t._v(": "),o("span",{staticClass:"hljs-number"},[t._v("100")]),t._v("\n})")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("pre",[o("code",{staticClass:"hljs language-html"},[o("span",{staticClass:"hljs-tag"},[t._v("<"),o("span",{staticClass:"hljs-name"},[t._v("veui-field")]),t._v("\n  "),o("span",{staticClass:"hljs-attr"},[t._v(":rules")]),t._v("="),o("span",{staticClass:"hljs-string"},[t._v("[{")]),t._v("\n    "),o("span",{staticClass:"hljs-attr"},[t._v("triggers:")]),t._v(" '"),o("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("'\n    "),o("span",{staticClass:"hljs-attr"},[t._v("name:")]),t._v(" '"),o("span",{staticClass:"hljs-attr"},[t._v("range")]),t._v("',\n    "),o("span",{staticClass:"hljs-attr"},[t._v("value:")]),t._v(" {\n      "),o("span",{staticClass:"hljs-attr"},[t._v("ceil:")]),t._v(" "),o("span",{staticClass:"hljs-attr"},[t._v("100")]),t._v(",\n      "),o("span",{staticClass:"hljs-attr"},[t._v("floor:")]),t._v(" "),o("span",{staticClass:"hljs-attr"},[t._v("50")]),t._v("\n    }\n  }]\n  "),o("span",{staticClass:"hljs-attr"},[t._v("...")]),t._v("\n>")]),t._v("..."),o("span",{staticClass:"hljs-tag"},[t._v("</"),o("span",{staticClass:"hljs-name"},[t._v("veui-field")]),t._v(">")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("名称")]),e("th",[this._v("类型")]),e("th",[this._v("描述")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("td",[o("code",[t._v("validate")])]),o("td",[o("code",[t._v("function(value: *, ruleValue: ?*=)")])]),o("td",[t._v("校验逻辑，"),o("code",[t._v("value")]),t._v(" 为 "),o("code",[t._v("Field")]),t._v(" 需要校验的值，"),o("code",[t._v("ruleValue")]),t._v(" 可选，根据规则需要添加，表示规则的限定值。")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("td",[o("code",[t._v("message")])]),o("td",[o("code",[t._v("function|string")])]),o("td",[o("p",[t._v("默认出错信息。")]),o("p",[t._v("若类型为 "),o("code",[t._v("string")]),t._v("，可以通过 "),o("code",[t._v("{ruleValue}")]),t._v(" 引用 "),o("code",[t._v("ruleValue")]),t._v("、"),o("code",[t._v("{value}")]),t._v(" 引用 "),o("code",[t._v("value")]),t._v("。例如：")]),o("pre",[o("code",{staticClass:"hljs language-js"},[o("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" minLengthRule = {\n  validate (value, ruleValue) {\n    "),o("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" !isEmpty(value) ? val.length >= ruleValue : "),o("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n  },\n  "),o("span",{staticClass:"hljs-attr"},[t._v("message")]),t._v(": "),o("span",{staticClass:"hljs-string"},[t._v("'字符长度不能短于 {ruleValue}，当前长度 {value}'")]),t._v(",\n  "),o("span",{staticClass:"hljs-attr"},[t._v("priority")]),t._v(": "),o("span",{staticClass:"hljs-number"},[t._v("100")]),t._v("\n}")])]),o("p",[t._v("若类型为 "),o("code",[t._v("function")]),t._v("，参数为 "),o("code",[t._v("(ruleValue: ?*=, value: *)")]),t._v("。例如：")]),o("pre",[o("code",{staticClass:"hljs language-js"},[o("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" minLengthRule = {\n  validate (value, ruleValue) {\n    "),o("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" !isEmpty(value) ? val.length >= ruleValue : "),o("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n  },\n  message (ruleValue, value) {\n    "),o("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" "),o("span",{staticClass:"hljs-string"},[t._v("`字符长度不能短于"),o("span",{staticClass:"hljs-subst"},[t._v("${ruleValue}")]),t._v("，当前长度"),o("span",{staticClass:"hljs-subst"},[t._v("${value}")]),t._v("`")]),t._v("\n  },\n  "),o("span",{staticClass:"hljs-attr"},[t._v("priority")]),t._v(": "),o("span",{staticClass:"hljs-number"},[t._v("100")]),t._v("\n}")])]),o("div",{staticClass:"tip custom-block"},[o("p",[t._v("如果需要支持运行时切换语言，"),o("code",[t._v("message")]),t._v(" 必须使用 "),o("code",[t._v("function")]),t._v(" 类型。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("priority")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("number")])])}],!1,null,"35a6a030",null);e.default=component.exports},418:function(t,e,o){var content=o(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("71036587",content,!0,{sourceMap:!1})},419:function(t,e,o){"use strict";o(5).a.register({"angle-right":{paths:[{stroke:"currentColor","stroke-width":"4",d:"M19 14l10 10-10 10",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}],width:"48",height:"48"}})},421:function(t,e,o){"use strict";var r=o(185),n=(o(419),{name:"one-details",components:{"veui-icon":r.w},props:{summary:{type:String,required:!0,default:"详细信息"}},data:function(){return{expanded:!1,intrinsicHeight:0,height:0,stable:!0}},computed:{style:function(){return this.stable?this.expanded?null:"height: 0":"height: ".concat(this.height,"px")}},mounted:function(){this.updateHeight()},methods:{toggle:function(){var t=this;this.expanded=!this.expanded,this.stable=!1,this.height=this.intrinsicHeight,this.expanded||requestAnimationFrame(function(){requestAnimationFrame(function(){t.height=0})})},updateHeight:function(){var content=this.$refs.content;this.intrinsicHeight=content.scrollHeight}}}),l=(o(428),o(3)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:{"one-details":!0,expanded:t.expanded}},[o("button",{staticClass:"summary",on:{click:t.toggle}},[o("veui-icon",{staticClass:"arrow",attrs:{name:"angle-right"}}),t._v(" "+t._s(t.summary)+" ")],1),o("div",{ref:"content",staticClass:"content",style:t.style,on:{transitionend:function(e){t.stable=!0}}},[t._t("default")],2)])},[],!1,null,"1ec174e7",null);e.a=component.exports},428:function(t,e,o){"use strict";var r=o(418);o.n(r).a},429:function(t,e,o){(t.exports=o(10)(!1)).push([t.i,".one-details[data-v-1ec174e7]{overflow:hidden}.summary[data-v-1ec174e7]{border:none;background:none;padding-left:0;cursor:help;outline:none}.summary[data-v-1ec174e7]:hover{color:#333}.content[data-v-1ec174e7]{overflow:hidden;transition:height .3s}.arrow[data-v-1ec174e7]{vertical-align:top;margin-top:.35em;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.expanded>.summary>.arrow[data-v-1ec174e7]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}",""])},468:function(t,e,o){var content=o(966);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("3a5126f1",content,!0,{sourceMap:!1})},965:function(t,e,o){"use strict";var r=o(468);o.n(r).a},966:function(t,e,o){(t.exports=o(10)(!1)).push([t.i,'.hljs[data-v-35a6a030]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment[data-v-35a6a030],.hljs-quote[data-v-35a6a030]{color:#5c6370;font-style:italic}.hljs-doctag[data-v-35a6a030],.hljs-formula[data-v-35a6a030],.hljs-keyword[data-v-35a6a030]{color:#c678dd}.hljs-deletion[data-v-35a6a030],.hljs-name[data-v-35a6a030],.hljs-section[data-v-35a6a030],.hljs-selector-tag[data-v-35a6a030],.hljs-subst[data-v-35a6a030]{color:#e06c75}.hljs-literal[data-v-35a6a030]{color:#56b6c2}.hljs-addition[data-v-35a6a030],.hljs-attribute[data-v-35a6a030],.hljs-meta-string[data-v-35a6a030],.hljs-regexp[data-v-35a6a030],.hljs-string[data-v-35a6a030]{color:#98c379}.hljs-built_in[data-v-35a6a030],.hljs-class .hljs-title[data-v-35a6a030]{color:#e6c07b}.hljs-attr[data-v-35a6a030],.hljs-number[data-v-35a6a030],.hljs-selector-attr[data-v-35a6a030],.hljs-selector-class[data-v-35a6a030],.hljs-selector-pseudo[data-v-35a6a030],.hljs-template-variable[data-v-35a6a030],.hljs-type[data-v-35a6a030],.hljs-variable[data-v-35a6a030]{color:#d19a66}.hljs-bullet[data-v-35a6a030],.hljs-link[data-v-35a6a030],.hljs-meta[data-v-35a6a030],.hljs-selector-id[data-v-35a6a030],.hljs-symbol[data-v-35a6a030],.hljs-title[data-v-35a6a030]{color:#61aeee}.hljs-emphasis[data-v-35a6a030]{font-style:italic}.hljs-strong[data-v-35a6a030]{font-weight:700}.hljs-link[data-v-35a6a030]{text-decoration:underline}.mermaid[data-v-35a6a030]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:13px}.mermaid .label[data-v-35a6a030]{color:#333}.mermaid .node circle[data-v-35a6a030],.mermaid .node ellipse[data-v-35a6a030],.mermaid .node polygon[data-v-35a6a030],.mermaid .node rect[data-v-35a6a030]{fill:#eee;stroke:#999;stroke-width:1px}.mermaid .node.clickable[data-v-35a6a030]{cursor:pointer}.mermaid .arrowheadPath[data-v-35a6a030]{fill:#333}.mermaid .edgePath .path[data-v-35a6a030]{stroke:#666;stroke-width:1.5px}.mermaid .edgeLabel[data-v-35a6a030]{background-color:#fff}.mermaid .cluster rect[data-v-35a6a030]{fill:#eaf2fb!important;stroke:#26a!important;stroke-width:1px!important}.mermaid .cluster text[data-v-35a6a030]{fill:#333}.mermaid div.mermaidTooltip[data-v-35a6a030]{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:12px;background:#eaf2fb;border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100}.post[data-v-35a6a030]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.post-layout .post[data-v-35a6a030]{min-height:100%;margin-bottom:-192px}.post-layout .post[data-v-35a6a030]:after{content:"";display:block;height:192px}.post-layout.no-links .post[data-v-35a6a030]{margin-bottom:-58px}.no-links .post[data-v-35a6a030]:after{height:58px}.post h1[data-v-35a6a030]{margin-top:0;margin-bottom:1.25em;font-size:36px}.post h1 small[data-v-35a6a030]{vertical-align:.1em;color:#999}.post h2[data-v-35a6a030]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px}.post h2[data-v-35a6a030]:before{content:"#";margin-right:5px;color:#ccc}.post h2+h3[data-v-35a6a030]{margin-top:2em}.post h3[data-v-35a6a030]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px}.post h4[data-v-35a6a030]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px}.post h5[data-v-35a6a030]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px}.post h6[data-v-35a6a030]{margin-top:1em;margin-bottom:1em;font-size:12px}.post h1[data-v-35a6a030],.post h2[data-v-35a6a030],.post h3[data-v-35a6a030]{font-weight:500;clear:both}.post h1[data-v-35a6a030],.post h2[data-v-35a6a030],.post h3[data-v-35a6a030],.post h4[data-v-35a6a030],.post h5[data-v-35a6a030],.post h6[data-v-35a6a030]{color:#333;line-height:1}.post br[data-v-35a6a030]{clear:both}.post p[data-v-35a6a030]{margin-top:.5em;margin-bottom:.5em}.post ol[data-v-35a6a030],.post ul[data-v-35a6a030]{padding-left:1.5em}.post blockquote[data-v-35a6a030]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999}.post table[data-v-35a6a030]{width:100%;border-collapse:collapse;border-color:#f1f1f1;border-style:none solid;border-width:1px;margin-top:1.5em;margin-bottom:1.5em}.post table pre[data-v-35a6a030],.post table table[data-v-35a6a030]{max-width:480px}.post td[data-v-35a6a030],.post th[data-v-35a6a030]{min-width:90px;padding:7px 14px;border-color:#f1f1f1;border-style:solid none;border-width:1px;text-align:left}.post td[data-v-35a6a030]>:first-child,.post th[data-v-35a6a030]>:first-child{margin-top:5px}.post td[data-v-35a6a030]>:last-child,.post th[data-v-35a6a030]>:last-child{margin-bottom:5px}.post td pre[data-v-35a6a030],.post th pre[data-v-35a6a030]{padding:10px 15px}.post td table[data-v-35a6a030],.post th table[data-v-35a6a030]{margin-top:.2em;margin-bottom:.5em}.post td[data-v-35a6a030]:first-child{white-space:nowrap}.post a[data-v-35a6a030]:link:not([class^=veui-]),.post a[data-v-35a6a030]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s}.post a[data-v-35a6a030]:link:not([class^=veui-]):hover,.post a[data-v-35a6a030]:visited:not([class^=veui-]):hover{color:#3389e3}.post a[data-v-35a6a030]:link:not([class^=veui-]):active,.post a[data-v-35a6a030]:visited:not([class^=veui-]):active{color:#2e7aca}.post code[data-v-35a6a030]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%;overflow:visible;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}.post hr[data-v-35a6a030]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both}.post figure[data-v-35a6a030]{float:right;width:60%;margin:0 0 30px 20px}.post figure+h1[data-v-35a6a030],.post figure+h2[data-v-35a6a030],.post figure+h3[data-v-35a6a030],.post figure+h4[data-v-35a6a030],.post figure+h5[data-v-35a6a030],.post figure+h6[data-v-35a6a030]{margin-top:0}.post figure img[data-v-35a6a030]{display:block;margin:auto}.post figure .preview[data-v-35a6a030]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center}.post figure .preview[data-v-35a6a030]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)}.post figure.hero[data-v-35a6a030]{width:100%;float:none}.post figcaption[data-v-35a6a030]{margin-top:10px;font-size:12px}.post figcaption p[data-v-35a6a030]{margin:0;line-height:20px}.post figcaption .caption[data-v-35a6a030]{font-weight:500}.post figcaption .desc[data-v-35a6a030]{color:#999}.post .comparison[data-v-35a6a030]{float:right;width:60%;margin:0 0 30px 20px}.post .comparison figure[data-v-35a6a030]{width:calc(50% - 5px);margin:0}.post .comparison .good[data-v-35a6a030]{float:left}.post .comparison .bad[data-v-35a6a030]{float:right}.post .comparison .bad .caption[data-v-35a6a030]{color:#ff5b5b}.post img[data-v-35a6a030]{max-width:100%;max-height:100%}.post pre[data-v-35a6a030]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto}.post pre code[data-v-35a6a030]{background-color:transparent;padding:0}.post var[data-v-35a6a030]{font-family:"PT Serif",Georgia,serif}.post kbd[data-v-35a6a030]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5}.post .custom-block[data-v-35a6a030]{border:1px solid;margin:1em 0;padding:.75em 1em}.post .custom-block[data-v-35a6a030]>:first-child{margin-top:0}.post .custom-block[data-v-35a6a030]>:last-child{margin-bottom:0}.post .alert[data-v-35a6a030],.post .tip[data-v-35a6a030],.post .warning[data-v-35a6a030]{font-size:13px}.post .alert[data-v-35a6a030]{border-color:#fee;background-color:#fff6f6}.post .warning[data-v-35a6a030]{border-color:#fef4e6;background-color:#fef9f2}.post .tip[data-v-35a6a030]{border-color:#d8ebff;background-color:#ebf5ff}.post .badges[data-v-35a6a030]{border:none;padding:0}.post .badges code[data-v-35a6a030]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%}.post .oss-badges[data-v-35a6a030]{border:none;padding:0}.post .oss-badges a[data-v-35a6a030]{margin-right:10px}.post .one-demo[data-v-35a6a030]{margin:1em 0 1.25em}',""])}}]);