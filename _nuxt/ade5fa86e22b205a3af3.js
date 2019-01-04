(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/components/overlay.vue?vue&type=template&id=2f46ac6b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_vm._m(0),_c('h2',{attrs:{"id":"示例"}},[_vm._v("示例")]),_c('h3',{attrs:{"id":"以坐标值方式定位"}},[_vm._v("以坐标值方式定位")]),_c('p',[_vm._v("浮层可以在页面内按照自定义方式定位。")]),_c('one-demo',[_c('one-demo-0073cf9'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"centerVisible = !centerVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ centerVisible ? '关闭' : '打开' }}居中浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"centerVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center-overlay\"")]),_vm._v("\n  >")]),_vm._v("居中浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Overlay, Button } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-overlay'")]),_vm._v(": Overlay,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-button'")]),_vm._v(": Button\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("centerVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("lang")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"less\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".center-overlay")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("position")]),_vm._v(": fixed;\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("top")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("50%")]),_vm._v(";\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("left")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("50%")]),_vm._v(";\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("transform")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("translate")]),_vm._v("(-50%, -50%);\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("width")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("200px")]),_vm._v(";\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("height")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("100px")]),_vm._v(";\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"},[_c('p',[_vm._v("点击按钮，会出现视口范围内居中的浮层。")])])],2),_c('h3',{attrs:{"id":"相对已有元素定位"}},[_vm._v("相对已有元素定位")]),_c('p',[_vm._v("浮层可以相对于某个已存在的 DOM 节点定位。")]),_c('one-demo',[_c('one-demo-6783283'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative\"")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relativeVisible = !relativeVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ relativeVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n      attachment: 'bottom left',\n      targetAttachment: 'top left'\n    }\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relativeVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v(">")]),_vm._v("相对定位浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Overlay, Button } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-overlay'")]),_vm._v(": Overlay,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-button'")]),_vm._v(": Button\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("relativeVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"},[_c('p',[_vm._v("点击按钮，会出现一个紧贴按钮显示的浮层。")])])],2),_c('h3',{attrs:{"id":"层叠顺序管理"}},[_vm._v("层叠顺序管理")]),_c('p',[_vm._v("越靠后显示的浮层，对应的层叠顺序越高。")]),_c('one-demo',[_c('one-demo-df43739'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstTarget\"")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstVisible = !firstVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ firstVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstTarget\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n      attachment: 'bottom left',\n      targetAttachment: 'top left'\n    }\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n  >")]),_vm._v("1"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondTarget\"")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondVisible = !secondVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ secondVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondTarget\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n      attachment: 'bottom left',\n      targetAttachment: 'top left'\n    }\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n  >")]),_vm._v("2"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"thirdTarget\"")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"thirdVisible = !thirdVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ thirdVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"thirdTarget\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n      attachment: 'bottom left',\n      targetAttachment: 'top left'\n    }\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"thirdVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n  >")]),_vm._v("3"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Overlay, Button } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-overlay'")]),_vm._v(": Overlay,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-button'")]),_vm._v(": Button\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("firstVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("secondVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("thirdVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"},[_c('p',[_vm._v("点击每个按钮，都会弹出对应的浮层，后弹出的浮层会覆盖之前弹出的浮层。")])])],2),_c('p',[_vm._v("浮层之上弹出的浮层，对应的层叠顺序较高。")]),_c('one-demo',[_c('one-demo-eac3c85'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstTarget\"")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstVisible = !firstVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ firstVisible ? '关闭' : '打开' }}基础浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstTarget\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n      attachment: 'bottom left',\n      targetAttachment: 'top left'\n    }\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n  >")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondTarget\"")]),_vm._v("\n      @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondVisible = !secondVisible\"")]),_vm._v("\n    >")]),_vm._v("{{ secondVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondTarget\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n        attachment: 'bottom left',\n        targetAttachment: 'top left'\n      }\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondVisible\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n    >")]),_vm._v("浮层之上的浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Overlay, Button } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-overlay'")]),_vm._v(": Overlay,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-button'")]),_vm._v(": Button\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("firstVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("secondVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("watch")]),_vm._v(": {\n    firstVisible (val) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("if")]),_vm._v(" (!val) {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".secondVisible = "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n      }\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"},[_c('p',[_vm._v("点击按钮，出现浮层，在浮层之上会再次看到一个按钮，点击该按钮，弹出子浮层，可发现子浮层始终位于父级浮层之上。")])])],2),_c('p',[_vm._v("靠后显示的浮层应当遮盖之前显示浮层的所有子级浮层。")]),_c('one-demo',[_c('one-demo-8c123a5'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstTarget\"")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstVisible = !firstVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ firstVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstTarget\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n      attachment: 'bottom left',\n      targetAttachment: 'top left'\n    }\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"firstVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n  >")]),_vm._v("A"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondTarget\"")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondVisible = !secondVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ secondVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondTarget\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n      attachment: 'bottom left',\n      targetAttachment: 'top left'\n    }\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"secondVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n  >")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("span")]),_vm._v(">")]),_vm._v("B"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("span")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ui")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"small\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"forthTarget\"")]),_vm._v("\n      @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"forthVisible = !forthVisible\"")]),_vm._v("\n    >")]),_vm._v("{{ forthVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"forthTarget\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n        attachment: 'bottom left',\n        targetAttachment: 'top left'\n      }\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"forthVisible\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n    >")]),_vm._v("B-A"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"thirdTarget\"")]),_vm._v("\n    @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"thirdVisible = !thirdVisible\"")]),_vm._v("\n  >")]),_vm._v("{{ thirdVisible ? '关闭' : '打开' }}浮层"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"thirdTarget\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":options")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{\n      attachment: 'bottom left',\n      targetAttachment: 'top left'\n    }\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":open.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"thirdVisible\"")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("overlay-class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"relative-overlay\"")]),_vm._v("\n  >")]),_vm._v("C"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-overlay")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Overlay, Button } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-overlay'")]),_vm._v(": Overlay,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-button'")]),_vm._v(": Button\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("firstVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("secondVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("thirdVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("forthVisible")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"},[_c('p',[_vm._v("第二个按钮对应的浮层里面有一个按钮，点击该按钮，会弹出子浮层。按照如下操作：")]),_c('ol',[_c('li',[_vm._v("点击第二个按钮，弹出浮层 B；")]),_c('li',[_vm._v("点击浮层 B 上面的小按钮，弹出浮层 B-A；")]),_c('li',[_vm._v("点击第三个按钮，弹出浮层 C；")]),_c('li',[_vm._v("此时会发现浮层 C 覆盖于浮层 B-A 之上。")])]),_c('p',[_vm._v("只要保证 B 浮层在 C 浮层之前显示出来，那么 B-A 浮层就始终会位于 C 浮层之下。")])])],2),_c('h2',{attrs:{"id":"api"}},[_vm._v("API")]),_c('h3',{attrs:{"id":"属性"}},[_vm._v("属性")]),_c('table',[_vm._m(1),_c('tbody',[_vm._m(2),_vm._m(3),_c('tr',[_vm._m(4),_vm._m(5),_c('td',[_vm._v("-")]),_c('td',[_vm._m(6),_c('one-details',{attrs:{"summary":"类型详情"}},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("类型")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("在当前浮层组件所在上下文中，通过匹配 "),_c('code',[_vm._v("$refs")]),_vm._v(" 中的键名查找 DOM 节点或对应组件实例的根节点。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("Vue")])]),_c('td',[_vm._v("如果传入的是组件实例，就直接返回该组件的根节点。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("Node")])]),_c('td',[_vm._v("如果已经是一个 DOM 节点了，就直接使用该节点。")])])])])])],1)]),_vm._m(7),_vm._m(8),_vm._m(9),_vm._m(10),_vm._m(11)])]),_c('h3',{attrs:{"id":"插槽"}},[_vm._v("插槽")]),_vm._m(12),_c('h3',{attrs:{"id":"事件"}},[_vm._v("事件")]),_vm._m(13),_c('h3',{attrs:{"id":"全局配置"}},[_vm._v("全局配置")]),_vm._m(14)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{attrs:{"id":"overlay-small浮层small"}},[_vm._v("Overlay "),_c('small',[_vm._v("浮层")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("默认值")]),_c('th',[_vm._v("描述")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("ui")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("浮层的主题。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("open")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_c('div',{staticClass:"badges custom-block"},[_c('p',[_c('code',[_vm._v(".sync")])])]),_c('p',[_vm._v("是否显示对话框。")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("target")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("string|Vue|Node")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("允许通过 "),_c('a',{attrs:{"href":"https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0"}},[_c('code',[_vm._v("ref")])]),_vm._v("、"),_c('a',{attrs:{"href":"https://cn.vuejs.org/v2/guide/instance.html"}},[_vm._v("Vue 组件实例")]),_vm._v("、"),_c('a',{attrs:{"href":"https://developer.mozilla.org/zh-CN/docs/Web/API/Node"}},[_c('code',[_vm._v("Node")])]),_vm._v(" 的方式指定目标元素。如果目标元素存在，浮层会相对于该元素进行定位，具体定位参数由 "),_c('code',[_vm._v("options")]),_vm._v(" 属性指定。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("options")])]),_c('td',[_c('code',[_vm._v("Object")])]),_c('td',[_c('code',[_vm._v("{}")])]),_c('td',[_c('p',[_vm._v("指定定位参数。仅当通过 "),_c('code',[_vm._v("target")]),_vm._v(" 成功找到 DOM 节点时才有效。具体设置，可参考 "),_c('a',{attrs:{"href":"http://tether.io/#options"}},[_vm._v("Tether 的文档")]),_vm._v(" 。")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("priority")])]),_c('td',[_c('code',[_vm._v("number")])]),_c('td',[_vm._v("-")]),_c('td',[_c('p',[_vm._v("当前浮层组件实例与其它实例在层叠关系上的权重，数值越大，越靠上。")]),_c('div',{staticClass:"tip custom-block"},[_c('p',[_vm._v("由于所有浮层组件的浮层根元素都会放置到 "),_c('code',[_vm._v("<body>")]),_vm._v(" 元素下，所以为了更好地控制浮层层叠顺序，浮层模块内部实现了全局的层叠上下文。组件的父子关系决定了浮层的嵌套关系，在同层级内的每个浮层组件实例都可以通过指定 "),_c('code',[_vm._v("priority")]),_vm._v(" 来实现不同实例间的相对层叠顺序。相同 "),_c('code',[_vm._v("priority")]),_vm._v(" 数值的组件实例，按照实例化的先后顺序来决定层叠顺序，后实例化的组件在之前组件的上面。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("autofocus")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("是否自动抢占焦点到浮层内的第一个可聚焦元素。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("modal")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_vm._v("是否是模态对话框。模态对话框默认遮挡底层（无法点击）且抢占焦点（关闭后焦点会回归）。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("overlay-class")])]),_c('td',[_c('code',[_vm._v("string|Array|Object")])]),_c('td',[_vm._v("-")]),_c('td',[_c('p',[_vm._v("浮层根元素类名，数据格式为所有 "),_c('a',{attrs:{"href":"https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A-HTML-Class"}},[_vm._v("Vue 支持的 "),_c('code',[_vm._v("class")]),_vm._v(" 表达式")]),_vm._v("。")]),_c('div',{staticClass:"tip custom-block"},[_c('p',[_vm._v("由于浮层根元素会放置在 "),_c('code',[_vm._v("<body>")]),_vm._v(" 元素下，所以通过这个属性给浮层根元素设置类名之后，便于写样式。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("default")])]),_c('td',[_vm._v("浮层内容。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("locate")])]),_c('td',[_vm._v("浮层定位发生变化时触发。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("afterclose")])]),_c('td',[_vm._v("浮层关闭后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("配置项")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("默认值")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("overlay.ovrerlayClass")])]),_c('td',[_c('code',[_vm._v("string|Array|Object")])]),_c('td',[_c('code',[_vm._v("[]")])]),_c('td',[_vm._v("全局配置需要添加到浮层容器上的类名，数据格式为所有 "),_c('a',{attrs:{"href":"https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A-HTML-Class"}},[_vm._v("Vue 支持的 "),_c('code',[_vm._v("class")]),_vm._v(" 表达式")]),_vm._v("。")])])])])}]


// CONCATENATED MODULE: ./pages/development/components/overlay.vue?vue&type=template&id=2f46ac6b&scoped=true&

// EXTERNAL MODULE: ./components/OneDetails.vue + 4 modules
var OneDetails = __webpack_require__(428);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/position.vue?vue&type=template&id=2ede938e&
var positionvue_type_template_id_2ede938e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-button',{on:{"click":function($event){_vm.centerVisible = !_vm.centerVisible}}},[_vm._v(_vm._s(_vm.centerVisible ? '关闭' : '打开')+"居中浮层")]),_c('veui-overlay',{attrs:{"open":_vm.centerVisible,"overlay-class":"center-overlay"},on:{"update:open":function($event){_vm.centerVisible=$event}}},[_vm._v("居中浮层")])],1)}
var positionvue_type_template_id_2ede938e_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/overlay/position.vue?vue&type=template&id=2ede938e&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 334 modules
var veui = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/position.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var positionvue_type_script_lang_js_ = ({
  components: {
    'veui-overlay': veui["D" /* Overlay */],
    'veui-button': veui["d" /* Button */]
  },
  data: function data() {
    return {
      centerVisible: false
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/overlay/position.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlay_positionvue_type_script_lang_js_ = (positionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/overlay/position.vue?vue&type=style&index=0&lang=less&
var positionvue_type_style_index_0_lang_less_ = __webpack_require__(903);

// EXTERNAL MODULE: ./components/demos/development/demo/overlay/position.vue?vue&type=style&index=1&lang=less&docs=true&
var positionvue_type_style_index_1_lang_less_docs_true_ = __webpack_require__(905);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// EXTERNAL MODULE: ./components/demos/development/demo/overlay/position.vue?vue&type=custom&index=0&blockType=docs
var positionvue_type_custom_index_0_blockType_docs = __webpack_require__(907);
var positionvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(positionvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./components/demos/development/demo/overlay/position.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  overlay_positionvue_type_script_lang_js_,
  positionvue_type_template_id_2ede938e_render,
  positionvue_type_template_id_2ede938e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof positionvue_type_custom_index_0_blockType_docs_default.a === 'function') positionvue_type_custom_index_0_blockType_docs_default()(component)

component.options.__file = "position.vue"
/* harmony default export */ var position = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/relative-base.vue?vue&type=template&id=2572bb99&
var relative_basevue_type_template_id_2572bb99_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-button',{ref:"relative",on:{"click":function($event){_vm.relativeVisible = !_vm.relativeVisible}}},[_vm._v(_vm._s(_vm.relativeVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"relative","options":{
      attachment: 'bottom left',
      targetAttachment: 'top left'
    },"open":_vm.relativeVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.relativeVisible=$event}}},[_vm._v("相对定位浮层")])],1)}
var relative_basevue_type_template_id_2572bb99_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/overlay/relative-base.vue?vue&type=template&id=2572bb99&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/relative-base.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var relative_basevue_type_script_lang_js_ = ({
  components: {
    'veui-overlay': veui["D" /* Overlay */],
    'veui-button': veui["d" /* Button */]
  },
  data: function data() {
    return {
      relativeVisible: false
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/overlay/relative-base.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlay_relative_basevue_type_script_lang_js_ = (relative_basevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/overlay/relative.less?vue&type=style&index=0&lang=less&docs=true&
var relativevue_type_style_index_0_lang_less_docs_true_ = __webpack_require__(908);

// EXTERNAL MODULE: ./components/demos/development/demo/overlay/relative-base.vue?vue&type=custom&index=0&blockType=docs
var relative_basevue_type_custom_index_0_blockType_docs = __webpack_require__(910);
var relative_basevue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(relative_basevue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./components/demos/development/demo/overlay/relative-base.vue






/* normalize component */

var relative_base_component = Object(componentNormalizer["a" /* default */])(
  overlay_relative_basevue_type_script_lang_js_,
  relative_basevue_type_template_id_2572bb99_render,
  relative_basevue_type_template_id_2572bb99_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof relative_basevue_type_custom_index_0_blockType_docs_default.a === 'function') relative_basevue_type_custom_index_0_blockType_docs_default()(relative_base_component)

relative_base_component.options.__file = "relative-base.vue"
/* harmony default export */ var relative_base = (relative_base_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/stack-display-order.vue?vue&type=template&id=ea677d30&scoped=true&
var stack_display_ordervue_type_template_id_ea677d30_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-button',{ref:"firstTarget",on:{"click":function($event){_vm.firstVisible = !_vm.firstVisible}}},[_vm._v(_vm._s(_vm.firstVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"firstTarget","options":{
      attachment: 'bottom left',
      targetAttachment: 'top left'
    },"open":_vm.firstVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.firstVisible=$event}}},[_vm._v("1")]),_c('veui-button',{ref:"secondTarget",on:{"click":function($event){_vm.secondVisible = !_vm.secondVisible}}},[_vm._v(_vm._s(_vm.secondVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"secondTarget","options":{
      attachment: 'bottom left',
      targetAttachment: 'top left'
    },"open":_vm.secondVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.secondVisible=$event}}},[_vm._v("2")]),_c('veui-button',{ref:"thirdTarget",on:{"click":function($event){_vm.thirdVisible = !_vm.thirdVisible}}},[_vm._v(_vm._s(_vm.thirdVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"thirdTarget","options":{
      attachment: 'bottom left',
      targetAttachment: 'top left'
    },"open":_vm.thirdVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.thirdVisible=$event}}},[_vm._v("3")])],1)}
var stack_display_ordervue_type_template_id_ea677d30_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-display-order.vue?vue&type=template&id=ea677d30&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/stack-display-order.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var stack_display_ordervue_type_script_lang_js_ = ({
  components: {
    'veui-overlay': veui["D" /* Overlay */],
    'veui-button': veui["d" /* Button */]
  },
  data: function data() {
    return {
      firstVisible: false,
      secondVisible: false,
      thirdVisible: false
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-display-order.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlay_stack_display_ordervue_type_script_lang_js_ = (stack_display_ordervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/overlay/stack-display-order.vue?vue&type=style&index=0&id=ea677d30&lang=less&docs=true&scoped=true&
var stack_display_ordervue_type_style_index_0_id_ea677d30_lang_less_docs_true_scoped_true_ = __webpack_require__(911);

// EXTERNAL MODULE: ./components/demos/development/demo/overlay/relative.less?vue&type=style&index=1&lang=less&docs=true&
var relativevue_type_style_index_1_lang_less_docs_true_ = __webpack_require__(522);

// EXTERNAL MODULE: ./components/demos/development/demo/overlay/stack-display-order.vue?vue&type=custom&index=0&blockType=docs
var stack_display_ordervue_type_custom_index_0_blockType_docs = __webpack_require__(914);
var stack_display_ordervue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(stack_display_ordervue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-display-order.vue







/* normalize component */

var stack_display_order_component = Object(componentNormalizer["a" /* default */])(
  overlay_stack_display_ordervue_type_script_lang_js_,
  stack_display_ordervue_type_template_id_ea677d30_scoped_true_render,
  stack_display_ordervue_type_template_id_ea677d30_scoped_true_staticRenderFns,
  false,
  null,
  "ea677d30",
  null
  
)

/* custom blocks */

if (typeof stack_display_ordervue_type_custom_index_0_blockType_docs_default.a === 'function') stack_display_ordervue_type_custom_index_0_blockType_docs_default()(stack_display_order_component)

stack_display_order_component.options.__file = "stack-display-order.vue"
/* harmony default export */ var stack_display_order = (stack_display_order_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/stack-on-overlay.vue?vue&type=template&id=1ba6c24e&scoped=true&
var stack_on_overlayvue_type_template_id_1ba6c24e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-button',{ref:"firstTarget",on:{"click":function($event){_vm.firstVisible = !_vm.firstVisible}}},[_vm._v(_vm._s(_vm.firstVisible ? '关闭' : '打开')+"基础浮层")]),_c('veui-overlay',{attrs:{"target":"firstTarget","options":{
      attachment: 'bottom left',
      targetAttachment: 'top left'
    },"open":_vm.firstVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.firstVisible=$event}}},[_c('veui-button',{ref:"secondTarget",on:{"click":function($event){_vm.secondVisible = !_vm.secondVisible}}},[_vm._v(_vm._s(_vm.secondVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"secondTarget","options":{
        attachment: 'bottom left',
        targetAttachment: 'top left'
      },"open":_vm.secondVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.secondVisible=$event}}},[_vm._v("浮层之上的浮层")])],1)],1)}
var stack_on_overlayvue_type_template_id_1ba6c24e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-on-overlay.vue?vue&type=template&id=1ba6c24e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/stack-on-overlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var stack_on_overlayvue_type_script_lang_js_ = ({
  components: {
    'veui-overlay': veui["D" /* Overlay */],
    'veui-button': veui["d" /* Button */]
  },
  data: function data() {
    return {
      firstVisible: false,
      secondVisible: false
    };
  },
  watch: {
    firstVisible: function firstVisible(val) {
      if (!val) {
        this.secondVisible = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-on-overlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlay_stack_on_overlayvue_type_script_lang_js_ = (stack_on_overlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/overlay/stack-on-overlay.vue?vue&type=style&index=0&id=1ba6c24e&lang=less&docs=true&scoped=true&
var stack_on_overlayvue_type_style_index_0_id_1ba6c24e_lang_less_docs_true_scoped_true_ = __webpack_require__(915);

// EXTERNAL MODULE: ./components/demos/development/demo/overlay/stack-on-overlay.vue?vue&type=custom&index=0&blockType=docs
var stack_on_overlayvue_type_custom_index_0_blockType_docs = __webpack_require__(917);
var stack_on_overlayvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(stack_on_overlayvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-on-overlay.vue







/* normalize component */

var stack_on_overlay_component = Object(componentNormalizer["a" /* default */])(
  overlay_stack_on_overlayvue_type_script_lang_js_,
  stack_on_overlayvue_type_template_id_1ba6c24e_scoped_true_render,
  stack_on_overlayvue_type_template_id_1ba6c24e_scoped_true_staticRenderFns,
  false,
  null,
  "1ba6c24e",
  null
  
)

/* custom blocks */

if (typeof stack_on_overlayvue_type_custom_index_0_blockType_docs_default.a === 'function') stack_on_overlayvue_type_custom_index_0_blockType_docs_default()(stack_on_overlay_component)

stack_on_overlay_component.options.__file = "stack-on-overlay.vue"
/* harmony default export */ var stack_on_overlay = (stack_on_overlay_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/stack-display-order-with-on-overlay.vue?vue&type=template&id=32e23b54&scoped=true&
var stack_display_order_with_on_overlayvue_type_template_id_32e23b54_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-button',{ref:"firstTarget",on:{"click":function($event){_vm.firstVisible = !_vm.firstVisible}}},[_vm._v(_vm._s(_vm.firstVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"firstTarget","options":{
      attachment: 'bottom left',
      targetAttachment: 'top left'
    },"open":_vm.firstVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.firstVisible=$event}}},[_vm._v("A")]),_c('veui-button',{ref:"secondTarget",on:{"click":function($event){_vm.secondVisible = !_vm.secondVisible}}},[_vm._v(_vm._s(_vm.secondVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"secondTarget","options":{
      attachment: 'bottom left',
      targetAttachment: 'top left'
    },"open":_vm.secondVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.secondVisible=$event}}},[_c('span',[_vm._v("B")]),_c('veui-button',{ref:"forthTarget",attrs:{"ui":"small"},on:{"click":function($event){_vm.forthVisible = !_vm.forthVisible}}},[_vm._v(_vm._s(_vm.forthVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"forthTarget","options":{
        attachment: 'bottom left',
        targetAttachment: 'top left'
      },"open":_vm.forthVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.forthVisible=$event}}},[_vm._v("B-A")])],1),_c('veui-button',{ref:"thirdTarget",on:{"click":function($event){_vm.thirdVisible = !_vm.thirdVisible}}},[_vm._v(_vm._s(_vm.thirdVisible ? '关闭' : '打开')+"浮层")]),_c('veui-overlay',{attrs:{"target":"thirdTarget","options":{
      attachment: 'bottom left',
      targetAttachment: 'top left'
    },"open":_vm.thirdVisible,"overlay-class":"relative-overlay"},on:{"update:open":function($event){_vm.thirdVisible=$event}}},[_vm._v("C")])],1)}
var stack_display_order_with_on_overlayvue_type_template_id_32e23b54_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-display-order-with-on-overlay.vue?vue&type=template&id=32e23b54&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/overlay/stack-display-order-with-on-overlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var stack_display_order_with_on_overlayvue_type_script_lang_js_ = ({
  components: {
    'veui-overlay': veui["D" /* Overlay */],
    'veui-button': veui["d" /* Button */]
  },
  data: function data() {
    return {
      firstVisible: false,
      secondVisible: false,
      thirdVisible: false,
      forthVisible: false
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-display-order-with-on-overlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var overlay_stack_display_order_with_on_overlayvue_type_script_lang_js_ = (stack_display_order_with_on_overlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/overlay/stack-display-order-with-on-overlay.vue?vue&type=style&index=0&id=32e23b54&lang=less&docs=true&scoped=true&
var stack_display_order_with_on_overlayvue_type_style_index_0_id_32e23b54_lang_less_docs_true_scoped_true_ = __webpack_require__(918);

// EXTERNAL MODULE: ./components/demos/development/demo/overlay/stack-display-order-with-on-overlay.vue?vue&type=custom&index=0&blockType=docs
var stack_display_order_with_on_overlayvue_type_custom_index_0_blockType_docs = __webpack_require__(920);
var stack_display_order_with_on_overlayvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(stack_display_order_with_on_overlayvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./components/demos/development/demo/overlay/stack-display-order-with-on-overlay.vue







/* normalize component */

var stack_display_order_with_on_overlay_component = Object(componentNormalizer["a" /* default */])(
  overlay_stack_display_order_with_on_overlayvue_type_script_lang_js_,
  stack_display_order_with_on_overlayvue_type_template_id_32e23b54_scoped_true_render,
  stack_display_order_with_on_overlayvue_type_template_id_32e23b54_scoped_true_staticRenderFns,
  false,
  null,
  "32e23b54",
  null
  
)

/* custom blocks */

if (typeof stack_display_order_with_on_overlayvue_type_custom_index_0_blockType_docs_default.a === 'function') stack_display_order_with_on_overlayvue_type_custom_index_0_blockType_docs_default()(stack_display_order_with_on_overlay_component)

stack_display_order_with_on_overlay_component.options.__file = "stack-display-order-with-on-overlay.vue"
/* harmony default export */ var stack_display_order_with_on_overlay = (stack_display_order_with_on_overlay_component.exports);
// EXTERNAL MODULE: ./components/OneDemo.vue + 4 modules
var OneDemo = __webpack_require__(427);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/components/overlay.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var overlayvue_type_script_lang_js_ = ({
  components: {
    OneDetails: OneDetails["a" /* default */],
    'one-demo-0073cf9': position,
    'one-demo-6783283': relative_base,
    'one-demo-df43739': stack_display_order,
    'one-demo-eac3c85': stack_on_overlay,
    'one-demo-8c123a5': stack_display_order_with_on_overlay,
    OneDemo: OneDemo["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/development/components/overlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_overlayvue_type_script_lang_js_ = (overlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=2f46ac6b&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_2f46ac6b_lang_stylus_scoped_true_ = __webpack_require__(921);

// CONCATENATED MODULE: ./pages/development/components/overlay.vue






/* normalize component */

var overlay_component = Object(componentNormalizer["a" /* default */])(
  components_overlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2f46ac6b",
  null
  
)

overlay_component.options.__file = "overlay.vue"
/* harmony default export */ var overlay = __webpack_exports__["default"] = (overlay_component.exports);

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(430);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("4a8630a4", content, true, {});

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(434);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("5ad61634", content, true, {});

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(436);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("3ee6f8b7", content, true, {});

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  'angle-right': {
    paths: [{
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M19 14l10 10-10 10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDemo.vue?vue&type=template&id=d145da86&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"one-demo",class:{ expanded: _vm.localExpanded }},[_c('section',{staticClass:"demo"},[(_vm.browser)?_c('browser-window',{attrs:{"url":_vm.browser,"width":"80%","height":"400px"}},[_vm._t("default")],2):_vm._t("default")],2),(_vm.$slots.desc)?_c('section',{staticClass:"desc"},[_vm._t("desc")],2):_vm._e(),(_vm.$slots.source)?_c('section',{ref:"source",staticClass:"source",style:({ height: _vm.localExpanded ? ((_vm.sourceHeight || 0) + "px") : '0' })},[_vm._t("source")],2):_vm._e(),_c('button',{staticClass:"toggle",on:{"click":function($event){_vm.localExpanded = !_vm.localExpanded}}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right"}}),_vm._v(" "+_vm._s(_vm.localExpanded ? '隐藏代码' : '显示代码'))],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDemo.vue?vue&type=template&id=d145da86&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 334 modules
var veui = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/vue-windows/dist/vue-windows.es.js
var vue_windows_es = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/angle-right.js
var angle_right = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDemo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var OneDemovue_type_script_lang_js_ = ({
  name: 'one-demo',
  components: {
    'veui-icon': veui["w" /* Icon */],
    BrowserWindow: vue_windows_es["a" /* BrowserWindow */]
  },
  props: {
    expanded: Boolean,
    browser: String
  },
  data: function data() {
    return {
      sourceHeight: 0,
      localExpanded: this.expanded
    };
  },
  watch: {
    expanded: function expanded(val) {
      this.localExpanded = val;
    },
    localExpanded: function localExpanded(val) {
      this.$emit('update:expanded', val);
    }
  },
  mounted: function mounted() {
    var source = this.$refs.source;
    var style = source.style;
    style.height = '';
    style.height = source.offsetHeight;
    this.sourceHeight = source.offsetHeight;
    style.height = '0';
  }
});
// CONCATENATED MODULE: ./components/OneDemo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OneDemovue_type_script_lang_js_ = (OneDemovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-windows/dist/vue-windows.css?vue&type=style&index=0&lang=css&
var vue_windowsvue_type_style_index_0_lang_css_ = __webpack_require__(433);

// EXTERNAL MODULE: ./components/OneDemo.vue?vue&type=style&index=1&id=d145da86&lang=stylus&scoped=true&
var OneDemovue_type_style_index_1_id_d145da86_lang_stylus_scoped_true_ = __webpack_require__(435);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OneDemo.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OneDemovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d145da86",
  null
  
)

component.options.__file = "OneDemo.vue"
/* harmony default export */ var OneDemo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=template&id=66b3dd00&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'one-details': true,
    expanded: _vm.expanded
  }},[_c('button',{staticClass:"summary",on:{"click":_vm.toggle}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right"}}),_vm._v(" "+_vm._s(_vm.summary))],1),_c('div',{ref:"content",staticClass:"content",style:(_vm.style),on:{"transitionend":function($event){_vm.stable = true}}},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDetails.vue?vue&type=template&id=66b3dd00&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 334 modules
var veui = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/angle-right.js
var angle_right = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var OneDetailsvue_type_script_lang_js_ = ({
  name: 'one-details',
  components: {
    'veui-icon': veui["w" /* Icon */]
  },
  data: function data() {
    return {
      expanded: false,
      intrinsicHeight: 0,
      height: 0,
      stable: true
    };
  },
  props: {
    summary: {
      type: String,
      required: true,
      default: '详细信息'
    }
  },
  computed: {
    style: function style() {
      return this.stable ? this.expanded ? null : 'height: 0' : "height: ".concat(this.height, "px");
    }
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      this.expanded = !this.expanded;
      this.stable = false;
      this.height = this.intrinsicHeight;

      if (!this.expanded) {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            _this.height = 0;
          });
        });
      }
    },
    updateHeight: function updateHeight() {
      var content = this.$refs.content;
      this.intrinsicHeight = content.scrollHeight;
    }
  },
  mounted: function mounted() {
    this.updateHeight();
  }
});
// CONCATENATED MODULE: ./components/OneDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OneDetailsvue_type_script_lang_js_ = (OneDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/OneDetails.vue?vue&type=style&index=0&id=66b3dd00&lang=stylus&scoped=true&
var OneDetailsvue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true_ = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OneDetails.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OneDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "66b3dd00",
  null
  
)

component.options.__file = "OneDetails.vue"
/* harmony default export */ var OneDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.one-details[data-v-66b3dd00]{overflow:hidden\n}\n.summary[data-v-66b3dd00]{border:none;background:none;padding-left:0;cursor:help;outline:none\n}\n.summary[data-v-66b3dd00]:hover{color:#333\n}\n.content[data-v-66b3dd00]{overflow:hidden;transition:height .3s\n}\n.arrow[data-v-66b3dd00]{vertical-align:top;margin-top:.35em;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s\n}\n.expanded>.summary>.arrow[data-v-66b3dd00]{-webkit-transform:rotate(90deg);transform:rotate(90deg)\n}", ""]);

// exports


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EditorWindow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserWindow; });
/* harmony import */ var nano_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
/* harmony import */ var nano_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nano_assign__WEBPACK_IMPORTED_MODULE_0__);


var styles = {"window":"style-module_window__283Ok","body":"style-module_body__14MV-","shadow":"style-module_shadow__3RfWD","dark":"style-module_dark__fHT4T","safe":"style-module_safe__202Ig"};

var style = {"header":"style-module_header__2fZK7","title":"style-module_title__3cIVr","bullets":"style-module_bullets__79QN2","bullet":"style-module_bullet__Ce0rQ","bullet-red":"style-module_bullet-red__3UfbN","bullet-yellow":"style-module_bullet-yellow__2GzZ-","bullet-green":"style-module_bullet-green__1JY6W","isUrl":"style-module_isUrl__2Iqlr","dark":"style-module_dark__2yIKV"};

var Header = {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    isURL: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String
    }
  },
  render: function render(h, _ref) {
    var _ref$props = _ref.props,
        title = _ref$props.title,
        isURL = _ref$props.isURL,
        theme = _ref$props.theme;
    return h("div", {
      "class": [style.header, isURL && style.isUrl, style[theme]]
    }, [h("div", {
      "class": style.bullets
    }, [h("span", {
      "class": [style.bullet, style['bullet-red']]
    }), h("span", {
      "class": [style.bullet, style['bullet-yellow']]
    }), h("span", {
      "class": [style.bullet, style['bullet-green']]
    })]), h("span", {
      "class": style.title,
      domProps: {
        "innerHTML": title
      }
    })]);
  }
};

var sharedProps = {
  browser: Boolean,
  height: [Number, String],
  width: [Number, String],
  theme: {
    type: String,
    validator: function validator(v) {
      return ['default', 'dark'].indexOf(v) > -1;
    }
  },
  shadow: {
    type: Boolean,
    default: false
  }
};
var EditorWindow = {
  functional: true,
  name: 'editor-window',
  props: nano_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    title: {
      required: true,
      type: String
    }
  }, sharedProps),
  render: function render(h, ctx) {
    var children = ctx.children;
    var _ctx$props = ctx.props,
        browser = _ctx$props.browser,
        title = _ctx$props.title,
        height = _ctx$props.height,
        width = _ctx$props.width,
        theme = _ctx$props.theme,
        shadow = _ctx$props.shadow;
    var className = [styles.window, theme && styles[theme], shadow && styles.shadow];
    var style = {
      height: Boolean(height) && (typeof height === 'number' ? "".concat(height, "px") : height),
      width: Boolean(width) && (typeof width === 'number' ? "".concat(width, "px") : width)
    };
    return h("div", {
      "class": className,
      style: style
    }, [h(Header, {
      attrs: {
        title: title,
        isURL: browser,
        theme: theme
      }
    }), h("div", {
      "class": styles.body
    }, [children])]);
  }
};
var BrowserWindow = {
  functional: true,
  name: 'browser-window',
  props: nano_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    url: {
      required: true,
      type: String
    }
  }, sharedProps),
  render: function render(h, ctx) {
    var _ctx$props2 = ctx.props,
        url = _ctx$props2.url,
        height = _ctx$props2.height,
        width = _ctx$props2.width,
        theme = _ctx$props2.theme,
        shadow = _ctx$props2.shadow;
    var children = ctx.children;

    if (url.substr(0, 8) === 'https://') {
      url = "<span class=\"".concat([styles.safe, theme && styles[theme]].join(' '), "\">https</span>").concat(url.substr(5));
    }

    return h(EditorWindow, {
      attrs: {
        title: url,
        browser: true,
        height: height,
        width: width,
        theme: theme,
        shadow: shadow
      }
    }, [children]);
  }
};




/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * nano-assign v1.0.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = function(obj) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (var p in arguments[i]) { obj[p] = arguments$1[i][p]; }
  }
  return obj
};

module.exports = index;


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_css_loader_index_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var _vue_style_loader_index_js_css_loader_index_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_index_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_css_loader_index_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.style-module_window__283Ok{width:500px;height:340px;border-radius:4px;text-align:left;vertical-align:top;margin:0 20px;display:inline-block;background-color:#fff;z-index:1;overflow:hidden;border:1px solid #ccc\n}\n.style-module_body__14MV-{padding:10px 12px;position:relative;height:calc(100% - 40px);overflow:auto\n}\n.style-module_shadow__3RfWD{box-shadow:0 20px 68px rgba(0,0,0,.55)\n}\n.style-module_dark__fHT4T{color:#fff;border-color:#151515;background-color:#151515\n}\n.style-module_safe__202Ig{color:#40ad36\n}\n.style-module_safe__202Ig.style-module_dark__fHT4T{color:#45cc4b;background-color:transparent\n}\n.style-module_header__2fZK7{height:40px;padding-right:75px;display:flex;align-items:center\n}\n.style-module_title__3cIVr{flex:1 1 320px;text-align:center;font-size:12px;color:#766f79;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}\n.style-module_bullets__79QN2{margin-left:12px;display:flex;flex:0 0;align-items:center\n}\n.style-module_bullet__Ce0rQ{height:12px;width:12px;display:block;background:#ccc;border-radius:100%;border:1px solid\n}\n.style-module_bullet__Ce0rQ+.style-module_bullet__Ce0rQ{margin-left:5px\n}\n.style-module_bullet-red__3UfbN{background:#f85955;border-color:#d74246\n}\n.style-module_bullet-yellow__2GzZ-{background:#fbbe3f;border-color:#d7a32d\n}\n.style-module_bullet-green__1JY6W{background:#45cc4b;border-color:#40ad36\n}\n.style-module_header__2fZK7.style-module_isUrl__2Iqlr{background:#e8e8e8\n}\n.style-module_header__2fZK7.style-module_isUrl__2Iqlr .style-module_title__3cIVr{background:#fff;flex:1 1 320px;border-radius:4px;line-height:26px;margin-left:17px;padding:0 12px;text-align:left\n}\n.style-module_header__2fZK7.style-module_dark__2yIKV .style-module_title__3cIVr{color:#fff\n}\n.style-module_header__2fZK7.style-module_dark__2yIKV .style-module_bullet__Ce0rQ{border-color:transparent\n}\n.style-module_header__2fZK7.style-module_dark__2yIKV.style-module_isUrl__2Iqlr{background:hsla(0,0%,100%,.1)\n}\n.style-module_header__2fZK7.style-module_dark__2yIKV.style-module_isUrl__2Iqlr .style-module_title__3cIVr{background-color:hsla(0,0%,61.2%,.21)\n}", ""]);

// exports


/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_d145da86_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_d145da86_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_d145da86_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_d145da86_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.one-demo[data-v-d145da86]{overflow:hidden\n}\n.arrow[data-v-d145da86]{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;vertical-align:-2px;-webkit-transform:rotate(90deg);transform:rotate(90deg)\n}\n.one-demo.expanded .arrow[data-v-d145da86]{-webkit-transform:rotate(270deg);transform:rotate(270deg)\n}\n.demo[data-v-d145da86]{padding:30px\n}\n.demo[data-v-d145da86],.desc[data-v-d145da86]{border:1px solid #eee\n}\n.desc[data-v-d145da86]{padding:18px 20px;background-color:#fcfcfc\n}\n.source[data-v-d145da86]{transition:height .3s\n}\n.source[data-v-d145da86] pre{margin-top:0;margin-bottom:0\n}\n.desc[data-v-d145da86],.source[data-v-d145da86] pre,.toggle[data-v-d145da86]{margin-top:-1px\n}\n.toggle[data-v-d145da86]{position:relative;display:block;width:100%;height:40px;border:1px solid #eee;background-color:#fff;transition:background-color .3s;outline:none\n}\n.toggle.focus-visible[data-v-d145da86],.toggle[data-v-d145da86]:hover{background-color:#fafafa\n}", ""]);

// exports


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(904);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("782b6b2c", content, true, {});

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(906);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("4a3557f7", content, true, {});

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(909);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("90b06de4", content, true, {});

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(912);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("e1e97b78", content, true, {});

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_relative_less_vue_type_style_index_1_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_relative_less_vue_type_style_index_1_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_relative_less_vue_type_style_index_1_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_relative_less_vue_type_style_index_1_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(913);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("00b1b126", content, true, {});

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(916);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("84ba6b66", content, true, {});

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(919);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("13c211ae", content, true, {});

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(922);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("1ca762e9", content, true, {});

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.center-overlay{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:200px;height:100px\n}", ""]);

// exports


/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_style_index_1_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_style_index_1_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_style_index_1_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_position_vue_vue_type_style_index_1_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.center-overlay{line-height:100px;text-align:center;border:1px solid #dbdbdb;background-color:#fff\n}", ""]);

// exports


/***/ }),

/***/ 907:
/***/ (function(module, exports) {



/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_relative_less_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(520);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_relative_less_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_relative_less_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_relative_less_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.relative-overlay{width:200px;height:100px;line-height:100px;text-align:center;border:1px solid #dbdbdb;background-color:#fff\n}", ""]);

// exports


/***/ }),

/***/ 910:
/***/ (function(module, exports) {



/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_display_order_vue_vue_type_style_index_0_id_ea677d30_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(521);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_display_order_vue_vue_type_style_index_0_id_ea677d30_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_display_order_vue_vue_type_style_index_0_id_ea677d30_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_display_order_vue_vue_type_style_index_0_id_ea677d30_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.veui-overlay[data-v-ea677d30]{display:none\n}\n.veui-button[data-v-ea677d30]{margin-right:10px\n}", ""]);

// exports


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.relative-overlay{width:200px;height:100px;line-height:100px;text-align:center;border:1px solid #dbdbdb;background-color:#fff\n}", ""]);

// exports


/***/ }),

/***/ 914:
/***/ (function(module, exports) {



/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_on_overlay_vue_vue_type_style_index_0_id_1ba6c24e_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(524);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_on_overlay_vue_vue_type_style_index_0_id_1ba6c24e_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_on_overlay_vue_vue_type_style_index_0_id_1ba6c24e_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_on_overlay_vue_vue_type_style_index_0_id_1ba6c24e_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.veui-overlay[data-v-1ba6c24e]{display:none\n}\n.veui-button[data-v-1ba6c24e]{margin-right:10px\n}", ""]);

// exports


/***/ }),

/***/ 917:
/***/ (function(module, exports) {



/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_display_order_with_on_overlay_vue_vue_type_style_index_0_id_32e23b54_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(525);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_display_order_with_on_overlay_vue_vue_type_style_index_0_id_32e23b54_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_display_order_with_on_overlay_vue_vue_type_style_index_0_id_32e23b54_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_stack_display_order_with_on_overlay_vue_vue_type_style_index_0_id_32e23b54_lang_less_docs_true_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.veui-overlay[data-v-32e23b54]{display:none\n}\n.veui-button[data-v-32e23b54]{margin-right:10px\n}", ""]);

// exports


/***/ }),

/***/ 920:
/***/ (function(module, exports) {



/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_2f46ac6b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(526);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_2f46ac6b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_2f46ac6b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_2f46ac6b_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.hljs[data-v-2f46ac6b]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34\n}\n.hljs-comment[data-v-2f46ac6b],.hljs-quote[data-v-2f46ac6b]{color:#5c6370;font-style:italic\n}\n.hljs-doctag[data-v-2f46ac6b],.hljs-formula[data-v-2f46ac6b],.hljs-keyword[data-v-2f46ac6b]{color:#c678dd\n}\n.hljs-deletion[data-v-2f46ac6b],.hljs-name[data-v-2f46ac6b],.hljs-section[data-v-2f46ac6b],.hljs-selector-tag[data-v-2f46ac6b],.hljs-subst[data-v-2f46ac6b]{color:#e06c75\n}\n.hljs-literal[data-v-2f46ac6b]{color:#56b6c2\n}\n.hljs-addition[data-v-2f46ac6b],.hljs-attribute[data-v-2f46ac6b],.hljs-meta-string[data-v-2f46ac6b],.hljs-regexp[data-v-2f46ac6b],.hljs-string[data-v-2f46ac6b]{color:#98c379\n}\n.hljs-built_in[data-v-2f46ac6b],.hljs-class .hljs-title[data-v-2f46ac6b]{color:#e6c07b\n}\n.hljs-attr[data-v-2f46ac6b],.hljs-number[data-v-2f46ac6b],.hljs-selector-attr[data-v-2f46ac6b],.hljs-selector-class[data-v-2f46ac6b],.hljs-selector-pseudo[data-v-2f46ac6b],.hljs-template-variable[data-v-2f46ac6b],.hljs-type[data-v-2f46ac6b],.hljs-variable[data-v-2f46ac6b]{color:#d19a66\n}\n.hljs-bullet[data-v-2f46ac6b],.hljs-link[data-v-2f46ac6b],.hljs-meta[data-v-2f46ac6b],.hljs-selector-id[data-v-2f46ac6b],.hljs-symbol[data-v-2f46ac6b],.hljs-title[data-v-2f46ac6b]{color:#61aeee\n}\n.hljs-emphasis[data-v-2f46ac6b]{font-style:italic\n}\n.hljs-strong[data-v-2f46ac6b]{font-weight:700\n}\n.hljs-link[data-v-2f46ac6b]{text-decoration:underline\n}\n.mermaid[data-v-2f46ac6b]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:13px\n}\n.mermaid .label[data-v-2f46ac6b]{color:#333\n}\n.mermaid .node circle[data-v-2f46ac6b],.mermaid .node ellipse[data-v-2f46ac6b],.mermaid .node polygon[data-v-2f46ac6b],.mermaid .node rect[data-v-2f46ac6b]{fill:#eee;stroke:#999;stroke-width:1px\n}\n.mermaid .node.clickable[data-v-2f46ac6b]{cursor:pointer\n}\n.mermaid .arrowheadPath[data-v-2f46ac6b]{fill:#333\n}\n.mermaid .edgePath .path[data-v-2f46ac6b]{stroke:#666;stroke-width:1.5px\n}\n.mermaid .edgeLabel[data-v-2f46ac6b]{background-color:#fff\n}\n.mermaid .cluster rect[data-v-2f46ac6b]{fill:#eaf2fb!important;stroke:#26a!important;stroke-width:1px!important\n}\n.mermaid .cluster text[data-v-2f46ac6b]{fill:#333\n}\n.mermaid div.mermaidTooltip[data-v-2f46ac6b]{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:12px;background:#eaf2fb;border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100\n}\n.post[data-v-2f46ac6b]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400\n}\n.post-layout .post[data-v-2f46ac6b]{min-height:100%;margin-bottom:-192px\n}\n.post-layout .post[data-v-2f46ac6b]:after{content:\"\";display:block;height:192px\n}\n.post-layout.no-links .post[data-v-2f46ac6b]{margin-bottom:-58px\n}\n.no-links .post[data-v-2f46ac6b]:after{height:58px\n}\n.post h1[data-v-2f46ac6b]{margin-top:0;margin-bottom:1.25em;font-size:36px\n}\n.post h1 small[data-v-2f46ac6b]{vertical-align:.1em;color:#999\n}\n.post h2[data-v-2f46ac6b]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px\n}\n.post h2[data-v-2f46ac6b]:before{content:\"#\";margin-right:5px;color:#ccc\n}\n.post h2+h3[data-v-2f46ac6b]{margin-top:2em\n}\n.post h3[data-v-2f46ac6b]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px\n}\n.post h4[data-v-2f46ac6b]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px\n}\n.post h5[data-v-2f46ac6b]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px\n}\n.post h6[data-v-2f46ac6b]{margin-top:1em;margin-bottom:1em;font-size:12px\n}\n.post h1[data-v-2f46ac6b],.post h2[data-v-2f46ac6b],.post h3[data-v-2f46ac6b]{font-weight:500;clear:both\n}\n.post h1[data-v-2f46ac6b],.post h2[data-v-2f46ac6b],.post h3[data-v-2f46ac6b],.post h4[data-v-2f46ac6b],.post h5[data-v-2f46ac6b],.post h6[data-v-2f46ac6b]{color:#333;line-height:1\n}\n.post br[data-v-2f46ac6b]{clear:both\n}\n.post p[data-v-2f46ac6b]{margin-top:.5em;margin-bottom:.5em\n}\n.post ol[data-v-2f46ac6b],.post ul[data-v-2f46ac6b]{padding-left:1.5em\n}\n.post blockquote[data-v-2f46ac6b]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999\n}\n.post table[data-v-2f46ac6b]{width:100%;border-collapse:collapse;border-style:none solid;margin-top:1.5em;margin-bottom:1.5em\n}\n.post table[data-v-2f46ac6b],.post td[data-v-2f46ac6b],.post th[data-v-2f46ac6b]{border-color:#f1f1f1;border-width:1px\n}\n.post td[data-v-2f46ac6b],.post th[data-v-2f46ac6b]{min-width:90px;padding:7px 14px;border-style:solid none;text-align:left\n}\n.post td[data-v-2f46ac6b]>:first-child,.post th[data-v-2f46ac6b]>:first-child{margin-top:5px\n}\n.post td[data-v-2f46ac6b]>:last-child,.post th[data-v-2f46ac6b]>:last-child{margin-bottom:5px\n}\n.post td pre[data-v-2f46ac6b],.post th pre[data-v-2f46ac6b]{padding:10px 15px\n}\n.post td table[data-v-2f46ac6b],.post th table[data-v-2f46ac6b]{margin-top:.2em;margin-bottom:.5em\n}\n.post td[data-v-2f46ac6b]:first-child{white-space:nowrap\n}\n.post a[data-v-2f46ac6b]:link:not([class^=veui-]),.post a[data-v-2f46ac6b]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s\n}\n.post a[data-v-2f46ac6b]:link:not([class^=veui-]):hover,.post a[data-v-2f46ac6b]:visited:not([class^=veui-]):hover{color:#3389e3\n}\n.post a[data-v-2f46ac6b]:link:not([class^=veui-]):active,.post a[data-v-2f46ac6b]:visited:not([class^=veui-]):active{color:#2e7aca\n}\n.post code[data-v-2f46ac6b]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%\n}\n.post hr[data-v-2f46ac6b]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both\n}\n.post figure[data-v-2f46ac6b]{float:right;width:60%;margin:0 0 30px 20px\n}\n.post figure+h1[data-v-2f46ac6b],.post figure+h2[data-v-2f46ac6b],.post figure+h3[data-v-2f46ac6b],.post figure+h4[data-v-2f46ac6b],.post figure+h5[data-v-2f46ac6b],.post figure+h6[data-v-2f46ac6b]{margin-top:0\n}\n.post figure img[data-v-2f46ac6b]{display:block;margin:auto\n}\n.post figure .preview[data-v-2f46ac6b]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center\n}\n.post figure .preview[data-v-2f46ac6b]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)\n}\n.post figure.hero[data-v-2f46ac6b]{width:100%;float:none\n}\n.post figcaption[data-v-2f46ac6b]{margin-top:10px;font-size:12px\n}\n.post figcaption p[data-v-2f46ac6b]{margin:0;line-height:20px\n}\n.post figcaption .caption[data-v-2f46ac6b]{font-weight:500\n}\n.post figcaption .desc[data-v-2f46ac6b]{color:#999\n}\n.post .comparison[data-v-2f46ac6b]{float:right;width:60%;margin:0 0 30px 20px\n}\n.post .comparison figure[data-v-2f46ac6b]{width:calc(50% - 5px);margin:0\n}\n.post .comparison .good[data-v-2f46ac6b]{float:left\n}\n.post .comparison .bad[data-v-2f46ac6b]{float:right\n}\n.post .comparison .bad .caption[data-v-2f46ac6b]{color:#ff5b5b\n}\n.post img[data-v-2f46ac6b]{max-width:100%;max-height:100%\n}\n.post pre[data-v-2f46ac6b]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto\n}\n.post pre code[data-v-2f46ac6b]{background-color:transparent;padding:0\n}\n.post var[data-v-2f46ac6b]{font-family:\"PT Serif\",Georgia,serif\n}\n.post kbd[data-v-2f46ac6b]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5\n}\n.post .custom-block[data-v-2f46ac6b]{border:1px solid;margin:1em 0;padding:.75em 1em\n}\n.post .custom-block[data-v-2f46ac6b]>:first-child{margin-top:0\n}\n.post .custom-block[data-v-2f46ac6b]>:last-child{margin-bottom:0\n}\n.post .alert[data-v-2f46ac6b],.post .tip[data-v-2f46ac6b],.post .warning[data-v-2f46ac6b]{font-size:13px\n}\n.post .alert[data-v-2f46ac6b]{border-color:#fee;background-color:#fff6f6\n}\n.post .warning[data-v-2f46ac6b]{border-color:#fef4e6;background-color:#fef9f2\n}\n.post .tip[data-v-2f46ac6b]{border-color:#d8ebff;background-color:#ebf5ff\n}\n.post .badges[data-v-2f46ac6b]{border:none;padding:0\n}\n.post .badges code[data-v-2f46ac6b]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%\n}\n.post .oss-badges[data-v-2f46ac6b]{border:none;padding:0\n}\n.post .oss-badges a[data-v-2f46ac6b]{margin-right:10px\n}\n.post .one-demo[data-v-2f46ac6b]{margin:1em 0 1.25em\n}", ""]);

// exports


/***/ })

}]);