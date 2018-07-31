webpackJsonp([113],{LJem:function(a,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=o("ohra"),i=o("XyMi"),s=!1;var c=function(a){s||o("P4+R")},r=Object(i.a)(null,e.a,e.b,!1,c,"data-v-1caf94b3",null);r.options.__file="pages/design/complex/panel-3.vue",t.default=r.exports},"P4+R":function(a,t,o){var e=o("uQpB");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,o("rjj0").default)("5889ae54",e,!1,{sourceMap:!1})},ohra:function(a,t,o){"use strict";o.d(t,"a",function(){return e}),o.d(t,"b",function(){return i});var e=function(){var a=this.$createElement;this._self._c;return this._m(0)},i=[function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("article",{staticClass:"content post"},[o("h1",{attrs:{id:"抽屉全局浮层"}},[a._v("抽屉全局浮层")]),o("h3",{attrs:{id:"概念"}},[a._v("概念")]),o("p",[a._v("点击相应触发按钮，抽屉内容从屏幕右侧或下方滑出模态面板；\n用户不用离开原界面就可以完成某些操作，减少页面跳转.")]),o("p",[a._v("与其它面板关系：\n抽屉面板，可出现非模态、嵌入式面板，不建议使用模态对话框")]),o("hr"),o("h4",{attrs:{id:"抽屉"}},[a._v("抽屉")]),o("ol",[o("li",[a._v("承载信息量相对较大，并与上级页面关系相对紧密，可以快速回到原页面；")]),o("li",[a._v("当前页面需要调用一些相对复杂内容，并希望不影响当前主流程，快速回到原页面时，建议使用抽屉，比如北斗新建推广单元页调用关键词工具；")]),o("li",[a._v("如查看相对复杂内容的详情页，内容不会调用其它内容或其它操作。")])]),o("h4",{attrs:{id:"不适合场景"}},[a._v("不适合场景")]),o("ol",[o("li",[a._v("若内容区需要多次调用复杂内容时，建议使用新页面，避免出现多层级抽屉情况；")]),o("li",[a._v("多步骤或内容特别哟，建议不要使用抽屉，而使用新页面。")])]),o("h4",{attrs:{id:"组成元素"}},[a._v("组成元素")]),o("p",[a._v("抽屉的组成元素与模态对话框类似，包括：")]),o("ul",[o("li",[a._v("标题：顶部显示；")]),o("li",[a._v("内容区：主要区域，内容如太长，则出现纵向滚动条，滚动显示更多内容；")]),o("li",[a._v("关闭按钮；点击关闭按钮，则抽屉滑出“屏幕”并隐藏；\n（如果有特殊情况，点击左侧遮罩，是否需要关闭浮层抽屉内容）")]),o("li",[o("p",[a._v("底部操作区（可选）：")]),o("ul",[o("li",[a._v("底部如需“确认/取消”操作，则固定于底部，点击确认操作后，进入相应提示界面；")]),o("li",[a._v("点击取消后可根据业务选择是否进行二次确认后取消相应操作。")])])])]),o("p",[a._v("组成元素-示意图：")]),o("figure",{staticClass:"hero"},[o("div",{staticClass:"preview"},[o("img",{staticClass:"hero",attrs:{src:"/images/content/panel/面板-抽屉-1.png",srcset:"/images/content/panel/面板-抽屉-1.png 2x"}})])]),o("p",[a._v("注释：抽屉的动效、时长等")]),o("h3",{attrs:{id:"交互规则"}},[a._v("交互规则")]),o("h4",{attrs:{id:"操作区"}},[a._v("操作区")]),o("p",[a._v("底部操作栏，如果需要二次确认，则采用非模态气泡浮层的交互方式")]),o("p",[a._v("点击取消（可选）-示意图：")]),o("figure",{staticClass:"hero"},[o("div",{staticClass:"preview"},[o("img",{staticClass:"hero",attrs:{src:"/images/content/panel/面板-抽屉-2.png",srcset:"/images/content/panel/面板-抽屉-2.png 2x"}})])]),o("h4",{attrs:{id:"关闭操作"}},[a._v("关闭操作")]),o("ul",[o("li",[a._v("前提：由于抽屉介于新建页面和弹出框两者之间；\n所以针对它的关闭所需要的二次确认规则也是存在特殊性；")]),o("li",[a._v("关闭退出：属于用户主动进行的操作，用户有意识进行关闭操作，所以此时关闭抽屉不进行二次确认；")]),o("li",[a._v("取消退出：取消退出属于用户操作流程“结束”操作，由于存在与“确定”相关的误操作可能，所以这里根据业务需求选择是否进行二次确认；")]),o("li",[a._v("当该浮层纯查看信息内容类，点击左侧白色地带（视觉给出区别），可关闭抽屉内容。")])]),o("h4",{attrs:{id:"多层抽屉"}},[a._v("多层抽屉")]),o("p",[a._v("一般不建议使用多层抽屉，若必须新增或调用模块时，同时不愿打断当前流程操作，则采用新一个抽屉从屏幕一侧滑出，放在之前的抽屉的上面，之前的抽屉用半透明图层遮盖；\n新抽屉，顶部是返回按钮；点击返回按钮，则新抽屉关闭；（不需要二次确认）；\n如有需求可多层叠加，叠加动效请参考线上："),o("a",{attrs:{href:"http://tympanus.net/Development/MultiLevelPushMenu/index3.html"}},[a._v("\n参考链接")])]),o("p",[a._v("不建议使用多层抽屉:")]),o("figure",{staticClass:"hero"},[o("div",{staticClass:"preview"},[o("img",{staticClass:"hero",attrs:{src:"/images/content/panel/面板-抽屉-3.png",srcset:"/images/content/panel/面板-抽屉-3.png 2x"}})])]),o("p",[a._v("不建议使用上出现模态弹窗:")]),o("figure",{staticClass:"hero"},[o("div",{staticClass:"preview"},[o("img",{staticClass:"hero",attrs:{src:"/images/content/panel/面板-抽屉-4.png",srcset:"/images/content/panel/面板-抽屉-4.png 2x"}})])]),o("h3",{attrs:{id:"分类"}},[a._v("分类")]),o("h4",{attrs:{id:"左右式抽屉"}},[a._v("左右式抽屉")]),o("p",[a._v("点击触发按钮，抽屉内容从屏幕右侧滑出")]),o("p",[a._v("示意图:")]),o("figure",{staticClass:"hero"},[o("div",{staticClass:"preview"},[o("img",{staticClass:"hero",attrs:{src:"/images/content/panel/面板-抽屉-5.png",srcset:"/images/content/panel/面板-抽屉-5.png 2x"}})])]),o("h4",{attrs:{id:"上下式抽屉"}},[a._v("上下式抽屉")]),o("p",[a._v("点击触发按钮，抽屉内容从屏幕下侧滑出")]),o("figure",{staticClass:"hero"},[o("div",{staticClass:"preview"},[o("img",{staticClass:"hero",attrs:{src:"/images/content/panel/面板-抽屉-6.png",srcset:"/images/content/panel/面板-抽屉-6.png 2x"}})])])])}];e._withStripped=!0},uQpB:function(a,t,o){(a.exports=o("FZ+f")(!1)).push([a.i,'@media screen and (min-resolution:2dppx){html[data-v-1caf94b3]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}}[data-v-1caf94b3],[data-v-1caf94b3]:after,[data-v-1caf94b3]:before{box-sizing:border-box}html[data-v-1caf94b3]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-weight:400;color:#333}#__layout[data-v-1caf94b3],#__nuxt[data-v-1caf94b3],body[data-v-1caf94b3],html[data-v-1caf94b3]{height:100%}button[data-v-1caf94b3],input[data-v-1caf94b3]{font:inherit;color:inherit}a[data-v-1caf94b3]:focus{outline:none}main[data-v-1caf94b3]{line-height:1.5}menu[data-v-1caf94b3]{margin:0;padding:0}.menu-item[data-v-1caf94b3]{list-style:none;line-height:1}.menu-link[data-v-1caf94b3]{display:block;position:relative;text-decoration:none;cursor:default}a.menu-link[data-v-1caf94b3]{cursor:pointer}.menu-link[data-v-1caf94b3]:after{content:"";position:absolute;bottom:2px;left:50%;width:0;height:2px;transition:width .2s,left .2s}a.menu-link[data-v-1caf94b3]:focus:after,a.menu-link[data-v-1caf94b3]:hover:after{width:100%;left:0}.hljs[data-v-1caf94b3]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment[data-v-1caf94b3],.hljs-quote[data-v-1caf94b3]{color:#5c6370;font-style:italic}.hljs-doctag[data-v-1caf94b3],.hljs-formula[data-v-1caf94b3],.hljs-keyword[data-v-1caf94b3]{color:#c678dd}.hljs-deletion[data-v-1caf94b3],.hljs-name[data-v-1caf94b3],.hljs-section[data-v-1caf94b3],.hljs-selector-tag[data-v-1caf94b3],.hljs-subst[data-v-1caf94b3]{color:#e06c75}.hljs-literal[data-v-1caf94b3]{color:#56b6c2}.hljs-addition[data-v-1caf94b3],.hljs-attribute[data-v-1caf94b3],.hljs-meta-string[data-v-1caf94b3],.hljs-regexp[data-v-1caf94b3],.hljs-string[data-v-1caf94b3]{color:#98c379}.hljs-built_in[data-v-1caf94b3],.hljs-class .hljs-title[data-v-1caf94b3]{color:#e6c07b}.hljs-attr[data-v-1caf94b3],.hljs-number[data-v-1caf94b3],.hljs-selector-attr[data-v-1caf94b3],.hljs-selector-class[data-v-1caf94b3],.hljs-selector-pseudo[data-v-1caf94b3],.hljs-template-variable[data-v-1caf94b3],.hljs-type[data-v-1caf94b3],.hljs-variable[data-v-1caf94b3]{color:#d19a66}.hljs-bullet[data-v-1caf94b3],.hljs-link[data-v-1caf94b3],.hljs-meta[data-v-1caf94b3],.hljs-selector-id[data-v-1caf94b3],.hljs-symbol[data-v-1caf94b3],.hljs-title[data-v-1caf94b3]{color:#61aeee}.hljs-emphasis[data-v-1caf94b3]{font-style:italic}.hljs-strong[data-v-1caf94b3]{font-weight:700}.hljs-link[data-v-1caf94b3]{text-decoration:underline}.post[data-v-1caf94b3]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400}.post .post[data-v-1caf94b3]{min-height:100%;margin-bottom:-192px}.post .post[data-v-1caf94b3]:after{content:"";display:block;height:192px}.post.no-links .post[data-v-1caf94b3]{margin-bottom:-58px}.no-links .post[data-v-1caf94b3]:after{height:58px}.post h1[data-v-1caf94b3]{margin-top:0;margin-bottom:1.25em;font-size:36px}.post h1 small[data-v-1caf94b3]{vertical-align:.1em;color:#999}.post h2[data-v-1caf94b3]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px}.post h2[data-v-1caf94b3]:before{content:"#";margin-right:5px;color:#ccc}.post h2+h3[data-v-1caf94b3]{margin-top:2em}.post h3[data-v-1caf94b3]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px}.post h4[data-v-1caf94b3]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px}.post h5[data-v-1caf94b3]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px}.post h6[data-v-1caf94b3]{margin-top:1em;margin-bottom:1em;font-size:12px}.post h1[data-v-1caf94b3],.post h2[data-v-1caf94b3],.post h3[data-v-1caf94b3]{font-weight:500;clear:both}.post h1[data-v-1caf94b3],.post h2[data-v-1caf94b3],.post h3[data-v-1caf94b3],.post h4[data-v-1caf94b3],.post h5[data-v-1caf94b3],.post h6[data-v-1caf94b3]{color:#333;line-height:1}.post br[data-v-1caf94b3]{clear:both}.post p[data-v-1caf94b3]{margin-top:.5em;margin-bottom:.5em}.post ol[data-v-1caf94b3],.post ul[data-v-1caf94b3]{padding-left:1.5em}.post blockquote[data-v-1caf94b3]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999}.post table[data-v-1caf94b3]{width:100%;border-collapse:collapse;border:1px solid #f1f1f1;border-style:none solid;margin-top:1.5em;margin-bottom:1.5em}.post td[data-v-1caf94b3],.post th[data-v-1caf94b3]{min-width:90px;padding:7px 14px;border:1px solid #f1f1f1;border-style:solid none;text-align:left}.post td[data-v-1caf94b3]>:first-child,.post th[data-v-1caf94b3]>:first-child{margin-top:5px}.post td[data-v-1caf94b3]>:last-child,.post th[data-v-1caf94b3]>:last-child{margin-bottom:5px}.post td pre[data-v-1caf94b3],.post th pre[data-v-1caf94b3]{padding:10px 15px}.post td table[data-v-1caf94b3],.post th table[data-v-1caf94b3]{margin-top:.2em;margin-bottom:.5em}.post td[data-v-1caf94b3]:first-child{white-space:nowrap}.post a[data-v-1caf94b3]:link:not([class^=veui-]),.post a[data-v-1caf94b3]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s}.post a[data-v-1caf94b3]:link:not([class^=veui-]):hover,.post a[data-v-1caf94b3]:visited:not([class^=veui-]):hover{color:#3389e3}.post a[data-v-1caf94b3]:link:not([class^=veui-]):active,.post a[data-v-1caf94b3]:visited:not([class^=veui-]):active{color:#2e7aca}.post code[data-v-1caf94b3]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%}.post hr[data-v-1caf94b3]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both}.post figure[data-v-1caf94b3]{float:right;width:60%;margin:0 0 30px 20px}.post figure+h1[data-v-1caf94b3],.post figure+h2[data-v-1caf94b3],.post figure+h3[data-v-1caf94b3],.post figure+h4[data-v-1caf94b3],.post figure+h5[data-v-1caf94b3],.post figure+h6[data-v-1caf94b3]{margin-top:0}.post figure img[data-v-1caf94b3]{display:block;margin:auto}.post figure .preview[data-v-1caf94b3]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center}.post figure .preview[data-v-1caf94b3]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)}.post figure.hero[data-v-1caf94b3]{width:100%}.post figcaption[data-v-1caf94b3]{margin-top:10px;font-size:12px}.post figcaption p[data-v-1caf94b3]{margin:0;line-height:20px}.post figcaption .caption[data-v-1caf94b3]{font-weight:500}.post figcaption .desc[data-v-1caf94b3]{color:#999}.post .comparison[data-v-1caf94b3]{float:right;width:60%;margin:0 0 30px 20px}.post .comparison figure[data-v-1caf94b3]{width:calc(50% - 5px);margin:0}.post .comparison .good[data-v-1caf94b3]{float:left}.post .comparison .bad[data-v-1caf94b3]{float:right}.post .comparison .bad .caption[data-v-1caf94b3]{color:#ff5b5b}.post img[data-v-1caf94b3]{max-width:100%;max-height:100%}.post pre[data-v-1caf94b3]{border:1px solid #eee;padding:30px;background-color:#f9f9f9}.post pre code[data-v-1caf94b3]{background-color:transparent;padding:0}.post var[data-v-1caf94b3]{font-family:PT Serif,Georgia,serif}.post kbd[data-v-1caf94b3]{display:inline-block;padding:3px 5px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5}.post .custom-block[data-v-1caf94b3]{border:1px solid;margin:1em 0;padding:.75em 1em}.post .custom-block[data-v-1caf94b3]>:first-child{margin-top:0}.post .custom-block[data-v-1caf94b3]>:last-child{margin-bottom:0}.post .alert[data-v-1caf94b3],.post .tip[data-v-1caf94b3],.post .warning[data-v-1caf94b3]{font-size:13px}.post .alert[data-v-1caf94b3]{border-color:#fee;background-color:#fff6f6}.post .warning[data-v-1caf94b3]{border-color:#fef4e6;background-color:#fef9f2}.post .tip[data-v-1caf94b3]{border-color:#d8ebff;background-color:#ebf5ff}.post .badges[data-v-1caf94b3]{border:none;padding:0}.post .badges code[data-v-1caf94b3]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%}.post .one-demo[data-v-1caf94b3]{margin:1em 0 1.25em}',""])}});