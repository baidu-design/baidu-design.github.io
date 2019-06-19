(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1383:function(t,e,c){"use strict";c.r(e);var o={mixins:[c(50).c]},d=(c(963),c(3)),component=Object(d.a)(o,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("article",{staticClass:"content post"},[c("h1",{attrs:{id:"起步"}},[t._v("起步")]),c("div",{staticClass:"tip custom-block"},[c("p",[t._v("这篇文档基于 Vue CLI 3.x 撰写，需要在 Vue CLI 2.x 下初始化项目，请移步"),c("a",{attrs:{href:"/getting-started/vue-cli-2"}},[t._v("这里")]),t._v("。")])]),c("h2",{attrs:{id:"安装"}},[t._v("安装")]),c("p",[t._v("使用 CLI 创建项目以后，在项目根目录下运行：")]),c("pre",[c("code",{staticClass:"hljs language-sh"},[t._v("npm i --save veui veui-theme-one\nnpm i --save-dev veui-loader babel-plugin-veui babel-plugin-lodash")])]),c("h2",{attrs:{id:"配置"}},[t._v("配置")]),c("h3",{attrs:{id:"babel-插件"}},[t._v("Babel 插件")]),c("p",[t._v("VEUI 目前在 npm 上直接以源码方式进行发布，在使用时必须提前转译（其中的优缺点和取舍可以参考 "),c("a",{attrs:{href:"https://www.patreon.com/henryzhu"}},[t._v("Henry Zhu")]),t._v(" 在 Babel 的官方博客上发布的"),c("a",{attrs:{href:"https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages"}},[t._v("这篇文章")]),t._v("）。VEUI 的源代码依赖 Lodash 和 Vue JSX 相关的 Babel 插件才能正确转译。此外，VEUI 还提供了自己的 Babel 插件，以帮助应用书写更简单的 "),c("code",[t._v("import")]),t._v(" 语句的同时最小化代码的体积。")]),c("p",[t._v("将项目根目录中生成的 "),c("code",[t._v("babel.config.js")]),t._v(" 修改为：")]),c("pre",[c("code",{staticClass:"hljs language-js"},[c("span",{staticClass:"hljs-built_in"},[t._v("module")]),t._v(".exports = {\n  "),c("span",{staticClass:"hljs-attr"},[t._v("presets")]),t._v(": [\n    "),c("span",{staticClass:"hljs-string"},[t._v("'@vue/app'")]),t._v("\n  ],\n  "),c("span",{staticClass:"hljs-attr"},[t._v("plugins")]),t._v(": [\n    "),c("span",{staticClass:"hljs-string"},[t._v("'veui'")]),t._v(",\n    "),c("span",{staticClass:"hljs-string"},[t._v("'lodash'")]),t._v("\n  ]\n}")])]),c("p",[t._v("其中关于 babel-plugin-veui 的更详细信息请移步"),c("a",{attrs:{href:"/getting-started/babel-plugin-veui"}},[t._v("这里")]),t._v("。")]),c("h3",{attrs:{id:"webpack-loader"}},[t._v("webpack Loader")]),c("p",[t._v("VEUI 采取了样式主题与组件代码分离的开发、发布方式。组件代码对样式代码没有显式的依赖，故以源码方式引入时，需要使用 veui-loader 配置关联的主题包。")]),c("p",[t._v("如需使用默认的样式包 veui-theme-one，我们还需要确保在 webpack 配置中引入 "),c("code",[t._v("veui-loader")]),t._v("。同时由于 Less 3+ 不再默认开启内联 JavaScript 解析，而 veui-theme-one 依赖了这一功能，所以我们需要手动开启配置项。")]),c("p",[t._v("另外，由于我们采用将 VEUI 及其依赖与项目一起打包的策略，需要手动指定相关的依赖包进行转译。")]),c("p",[t._v("综上，我们需要在项目根目录下的 "),c("code",[t._v("vue.config.js")]),t._v(" 中进行如下配置")]),c("pre",[c("code",{staticClass:"hljs language-js"},[c("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" lessOptions = {\n  "),c("span",{staticClass:"hljs-attr"},[t._v("javascriptEnabled")]),t._v(": "),c("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n}\n\n"),c("span",{staticClass:"hljs-built_in"},[t._v("module")]),t._v(".exports = {\n  "),c("span",{staticClass:"hljs-attr"},[t._v("transpileDependencies")]),t._v(": [\n    "),c("span",{staticClass:"hljs-regexp"},[t._v("/[/\\\\]node_modules[/\\\\]veui[/\\\\]/")]),t._v(",\n    /["),c("span",{staticClass:"hljs-regexp"},[t._v("/\\\\]node_modules[/\\\\]vue-awesome[/\\\\]/")]),t._v(",\n    /["),c("span",{staticClass:"hljs-regexp"},[t._v("/\\\\]node_modules[/\\\\]resize-detector[/\\\\]/")]),t._v("\n  ],\n  "),c("span",{staticClass:"hljs-attr"},[t._v("chainWebpack")]),t._v(": "),c("span",{staticClass:"hljs-function"},[c("span",{staticClass:"hljs-params"},[t._v("config")]),t._v(" =>")]),t._v(" {\n    config.module\n      .rule("),c("span",{staticClass:"hljs-string"},[t._v("'veui'")]),t._v(")\n      .test("),c("span",{staticClass:"hljs-regexp"},[t._v("/\\.vue$/")]),t._v(")\n      .pre()\n      .use("),c("span",{staticClass:"hljs-string"},[t._v("'veui-loader'")]),t._v(")\n      .loader("),c("span",{staticClass:"hljs-string"},[t._v("'veui-loader'")]),t._v(")\n      .tap("),c("span",{staticClass:"hljs-function"},[c("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" {\n        "),c("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n          "),c("span",{staticClass:"hljs-attr"},[t._v("modules")]),t._v(": [\n            {\n              "),c("span",{staticClass:"hljs-attr"},[t._v("package")]),t._v(": "),c("span",{staticClass:"hljs-string"},[t._v("'veui-theme-one'")]),t._v(",\n              "),c("span",{staticClass:"hljs-attr"},[t._v("fileName")]),t._v(": "),c("span",{staticClass:"hljs-string"},[t._v("'{module}.less'")]),t._v("\n            },\n            {\n              "),c("span",{staticClass:"hljs-attr"},[t._v("package")]),t._v(": "),c("span",{staticClass:"hljs-string"},[t._v("'veui-theme-one'")]),t._v(",\n              "),c("span",{staticClass:"hljs-attr"},[t._v("fileName")]),t._v(": "),c("span",{staticClass:"hljs-string"},[t._v("'{module}.js'")]),t._v(",\n              "),c("span",{staticClass:"hljs-attr"},[t._v("transform")]),t._v(": "),c("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n            }\n          ]\n        }\n      })\n\n    "),c("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" types = ["),c("span",{staticClass:"hljs-string"},[t._v("'vue-modules'")]),t._v(", "),c("span",{staticClass:"hljs-string"},[t._v("'vue'")]),t._v(", "),c("span",{staticClass:"hljs-string"},[t._v("'normal-modules'")]),t._v(", "),c("span",{staticClass:"hljs-string"},[t._v("'normal'")]),t._v("]\n    types.forEach("),c("span",{staticClass:"hljs-function"},[c("span",{staticClass:"hljs-params"},[t._v("type")]),t._v(" =>")]),t._v(" {\n      config.module\n        .rule("),c("span",{staticClass:"hljs-string"},[t._v("'less'")]),t._v(")\n        .oneOf(type)\n        .use("),c("span",{staticClass:"hljs-string"},[t._v("'less-loader'")]),t._v(")\n        .tap("),c("span",{staticClass:"hljs-function"},[c("span",{staticClass:"hljs-params"},[t._v("options")]),t._v(" =>")]),t._v(" "),c("span",{staticClass:"hljs-built_in"},[t._v("Object")]),t._v(".assign({}, options, lessOptions))\n    })\n  }\n}")])]),c("p",[t._v("veui-loader 选项的详细配置请参考 "),c("a",{attrs:{href:"/getting-started/veui-loader"}},[t._v("veui-loader 文档")]),t._v("。")]),c("h3",{attrs:{id:"全局样式"}},[t._v("全局样式")]),c("p",[t._v("在使用 veui-theme-one 时，需要先全局引入基础样式，包括样式的 normalize 及一些基本元素的样式。可以自行选择引入的方式。")]),c("p",[t._v("从 JavaScript 引入：")]),c("pre",[c("code",{staticClass:"hljs language-js"},[c("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" "),c("span",{staticClass:"hljs-string"},[t._v("'veui-theme-one/common.less'")])])]),c("p",[t._v("或从样式中引入：")]),c("pre",[c("code",{staticClass:"hljs language-less"},[c("span",{staticClass:"hljs-keyword"},[t._v("@import")]),t._v(" "),c("span",{staticClass:"hljs-string"},[t._v('"~veui-theme-one/common.less"')]),t._v(";")])])])}],!1,null,"54ed9cbc",null);e.default=component.exports},467:function(t,e,c){var content=c(964);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(11).default)("268a938b",content,!0,{sourceMap:!1})},963:function(t,e,c){"use strict";var o=c(467);c.n(o).a},964:function(t,e,c){(t.exports=c(10)(!1)).push([t.i,'.hljs[data-v-54ed9cbc]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment[data-v-54ed9cbc],.hljs-quote[data-v-54ed9cbc]{color:#5c6370;font-style:italic}.hljs-doctag[data-v-54ed9cbc],.hljs-formula[data-v-54ed9cbc],.hljs-keyword[data-v-54ed9cbc]{color:#c678dd}.hljs-deletion[data-v-54ed9cbc],.hljs-name[data-v-54ed9cbc],.hljs-section[data-v-54ed9cbc],.hljs-selector-tag[data-v-54ed9cbc],.hljs-subst[data-v-54ed9cbc]{color:#e06c75}.hljs-literal[data-v-54ed9cbc]{color:#56b6c2}.hljs-addition[data-v-54ed9cbc],.hljs-attribute[data-v-54ed9cbc],.hljs-meta-string[data-v-54ed9cbc],.hljs-regexp[data-v-54ed9cbc],.hljs-string[data-v-54ed9cbc]{color:#98c379}.hljs-built_in[data-v-54ed9cbc],.hljs-class .hljs-title[data-v-54ed9cbc]{color:#e6c07b}.hljs-attr[data-v-54ed9cbc],.hljs-number[data-v-54ed9cbc],.hljs-selector-attr[data-v-54ed9cbc],.hljs-selector-class[data-v-54ed9cbc],.hljs-selector-pseudo[data-v-54ed9cbc],.hljs-template-variable[data-v-54ed9cbc],.hljs-type[data-v-54ed9cbc],.hljs-variable[data-v-54ed9cbc]{color:#d19a66}.hljs-bullet[data-v-54ed9cbc],.hljs-link[data-v-54ed9cbc],.hljs-meta[data-v-54ed9cbc],.hljs-selector-id[data-v-54ed9cbc],.hljs-symbol[data-v-54ed9cbc],.hljs-title[data-v-54ed9cbc]{color:#61aeee}.hljs-emphasis[data-v-54ed9cbc]{font-style:italic}.hljs-strong[data-v-54ed9cbc]{font-weight:700}.hljs-link[data-v-54ed9cbc]{text-decoration:underline}.mermaid[data-v-54ed9cbc]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:13px}.mermaid .label[data-v-54ed9cbc]{color:#333}.mermaid .node circle[data-v-54ed9cbc],.mermaid .node ellipse[data-v-54ed9cbc],.mermaid .node polygon[data-v-54ed9cbc],.mermaid .node rect[data-v-54ed9cbc]{fill:#eee;stroke:#999;stroke-width:1px}.mermaid .node.clickable[data-v-54ed9cbc]{cursor:pointer}.mermaid .arrowheadPath[data-v-54ed9cbc]{fill:#333}.mermaid .edgePath .path[data-v-54ed9cbc]{stroke:#666;stroke-width:1.5px}.mermaid .edgeLabel[data-v-54ed9cbc]{background-color:#fff}.mermaid .cluster rect[data-v-54ed9cbc]{fill:#eaf2fb!important;stroke:#26a!important;stroke-width:1px!important}.mermaid .cluster text[data-v-54ed9cbc]{fill:#333}.mermaid div.mermaidTooltip[data-v-54ed9cbc]{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:12px;background:#eaf2fb;border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100}.post[data-v-54ed9cbc]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.post-layout .post[data-v-54ed9cbc]{min-height:100%;margin-bottom:-192px}.post-layout .post[data-v-54ed9cbc]:after{content:"";display:block;height:192px}.post-layout.no-links .post[data-v-54ed9cbc]{margin-bottom:-58px}.no-links .post[data-v-54ed9cbc]:after{height:58px}.post h1[data-v-54ed9cbc]{margin-top:0;margin-bottom:1.25em;font-size:36px}.post h1 small[data-v-54ed9cbc]{vertical-align:.1em;color:#999}.post h2[data-v-54ed9cbc]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px}.post h2[data-v-54ed9cbc]:before{content:"#";margin-right:5px;color:#ccc}.post h2+h3[data-v-54ed9cbc]{margin-top:2em}.post h3[data-v-54ed9cbc]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px}.post h4[data-v-54ed9cbc]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px}.post h5[data-v-54ed9cbc]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px}.post h6[data-v-54ed9cbc]{margin-top:1em;margin-bottom:1em;font-size:12px}.post h1[data-v-54ed9cbc],.post h2[data-v-54ed9cbc],.post h3[data-v-54ed9cbc]{font-weight:500;clear:both}.post h1[data-v-54ed9cbc],.post h2[data-v-54ed9cbc],.post h3[data-v-54ed9cbc],.post h4[data-v-54ed9cbc],.post h5[data-v-54ed9cbc],.post h6[data-v-54ed9cbc]{color:#333;line-height:1}.post br[data-v-54ed9cbc]{clear:both}.post p[data-v-54ed9cbc]{margin-top:.5em;margin-bottom:.5em}.post ol[data-v-54ed9cbc],.post ul[data-v-54ed9cbc]{padding-left:1.5em}.post blockquote[data-v-54ed9cbc]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999}.post table[data-v-54ed9cbc]{width:100%;border-collapse:collapse;border-color:#f1f1f1;border-style:none solid;border-width:1px;margin-top:1.5em;margin-bottom:1.5em}.post table pre[data-v-54ed9cbc],.post table table[data-v-54ed9cbc]{max-width:480px}.post td[data-v-54ed9cbc],.post th[data-v-54ed9cbc]{min-width:90px;padding:7px 14px;border-color:#f1f1f1;border-style:solid none;border-width:1px;text-align:left}.post td[data-v-54ed9cbc]>:first-child,.post th[data-v-54ed9cbc]>:first-child{margin-top:5px}.post td[data-v-54ed9cbc]>:last-child,.post th[data-v-54ed9cbc]>:last-child{margin-bottom:5px}.post td pre[data-v-54ed9cbc],.post th pre[data-v-54ed9cbc]{padding:10px 15px}.post td table[data-v-54ed9cbc],.post th table[data-v-54ed9cbc]{margin-top:.2em;margin-bottom:.5em}.post td[data-v-54ed9cbc]:first-child{white-space:nowrap}.post a[data-v-54ed9cbc]:link:not([class^=veui-]),.post a[data-v-54ed9cbc]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s}.post a[data-v-54ed9cbc]:link:not([class^=veui-]):hover,.post a[data-v-54ed9cbc]:visited:not([class^=veui-]):hover{color:#3389e3}.post a[data-v-54ed9cbc]:link:not([class^=veui-]):active,.post a[data-v-54ed9cbc]:visited:not([class^=veui-]):active{color:#2e7aca}.post code[data-v-54ed9cbc]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%;overflow:visible;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}.post hr[data-v-54ed9cbc]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both}.post figure[data-v-54ed9cbc]{float:right;width:60%;margin:0 0 30px 20px}.post figure+h1[data-v-54ed9cbc],.post figure+h2[data-v-54ed9cbc],.post figure+h3[data-v-54ed9cbc],.post figure+h4[data-v-54ed9cbc],.post figure+h5[data-v-54ed9cbc],.post figure+h6[data-v-54ed9cbc]{margin-top:0}.post figure img[data-v-54ed9cbc]{display:block;margin:auto}.post figure .preview[data-v-54ed9cbc]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center}.post figure .preview[data-v-54ed9cbc]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)}.post figure.hero[data-v-54ed9cbc]{width:100%;float:none}.post figcaption[data-v-54ed9cbc]{margin-top:10px;font-size:12px}.post figcaption p[data-v-54ed9cbc]{margin:0;line-height:20px}.post figcaption .caption[data-v-54ed9cbc]{font-weight:500}.post figcaption .desc[data-v-54ed9cbc]{color:#999}.post .comparison[data-v-54ed9cbc]{float:right;width:60%;margin:0 0 30px 20px}.post .comparison figure[data-v-54ed9cbc]{width:calc(50% - 5px);margin:0}.post .comparison .good[data-v-54ed9cbc]{float:left}.post .comparison .bad[data-v-54ed9cbc]{float:right}.post .comparison .bad .caption[data-v-54ed9cbc]{color:#ff5b5b}.post img[data-v-54ed9cbc]{max-width:100%;max-height:100%}.post pre[data-v-54ed9cbc]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto}.post pre code[data-v-54ed9cbc]{background-color:transparent;padding:0}.post var[data-v-54ed9cbc]{font-family:"PT Serif",Georgia,serif}.post kbd[data-v-54ed9cbc]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5}.post .custom-block[data-v-54ed9cbc]{border:1px solid;margin:1em 0;padding:.75em 1em}.post .custom-block[data-v-54ed9cbc]>:first-child{margin-top:0}.post .custom-block[data-v-54ed9cbc]>:last-child{margin-bottom:0}.post .alert[data-v-54ed9cbc],.post .tip[data-v-54ed9cbc],.post .warning[data-v-54ed9cbc]{font-size:13px}.post .alert[data-v-54ed9cbc]{border-color:#fee;background-color:#fff6f6}.post .warning[data-v-54ed9cbc]{border-color:#fef4e6;background-color:#fef9f2}.post .tip[data-v-54ed9cbc]{border-color:#d8ebff;background-color:#ebf5ff}.post .badges[data-v-54ed9cbc]{border:none;padding:0}.post .badges code[data-v-54ed9cbc]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%}.post .oss-badges[data-v-54ed9cbc]{border:none;padding:0}.post .oss-badges a[data-v-54ed9cbc]{margin-right:10px}.post .one-demo[data-v-54ed9cbc]{margin:1em 0 1.25em}',""])}}]);