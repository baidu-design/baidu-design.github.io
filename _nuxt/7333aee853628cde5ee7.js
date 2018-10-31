(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "angle-right": {
    "width": "14",
    "height": "14",
    "paths": [{
      "d": "M10.84 7.13l.47-.47L5.66 1l-.95.94 4.72 4.72-4.72 4.71.95.94 5.18-5.18z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "angle-left": {
    "width": "14",
    "height": "14",
    "paths": [{
      "d": "M3.16 7.13l-.47-.47L8.34 1l.95.94-4.72 4.72 4.72 4.71-.95.94-5.18-5.18z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "angle-down-small": {
    "width": "12",
    "height": "12",
    "paths": [{
      "d": "M6 7.15L2.8 3.96l-.8.8 3.97 3.98.03-.02.02.02 3.97-3.97-.8-.8-3.2 3.18z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(624);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("c19d8e14", content, true, {"sourceMap":false});

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Calendar.vue?vue&type=template&id=ed9bacbe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veui-calendar",attrs:{"ui":_vm.realUi,"role":"application","aria-label":"日历","aria-disabled":_vm.realDisabled,"aria-readonly":_vm.realReadonly},on:{"mouseleave":function($event){_vm.markEnd()}}},[_vm._t("before"),_vm._v(" "),_vm._l((_vm.panels),function(p,pIndex){return _c('div',{key:pIndex,class:['veui-calendar-panel', ("veui-calendar-" + (p.view))]},[_c('div',{staticClass:"veui-calendar-head",attrs:{"aria-hidden":String(pIndex > 0)}},[_c('button',{ref:"prev",refInFor:true,class:{
          'veui-calendar-prev': true,
          'veui-sr-only': pIndex !== 0 && p.view === 'days'
        },attrs:{"type":"button","disabled":_vm.disabled || _vm.readonly,"aria-hidden":String(pIndex > 0),"aria-label":_vm.getStepLabel(p.view, 'prev'),"aria-controls":(_vm.id + ":panel-title:" + pIndex)},on:{"click":function($event){_vm.step(false, p.view)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.prev}})],1),_vm._v(" "),(p.view === 'days')?[_c('button',{ref:"year-select",refInFor:true,staticClass:"veui-calendar-select",attrs:{"type":"button","disabled":_vm.disabled || _vm.readonly,"aria-label":("选择年份，现在是 " + (p.year) + " 年")},on:{"click":function($event){_vm.setView(pIndex, 'years')}}},[_c('b',[_vm._v(_vm._s(p.year))]),_vm._v(" 年 "),_c('veui-icon',{attrs:{"name":_vm.icons.expand}})],1),_vm._v(" "),_c('button',{ref:"month-select",refInFor:true,staticClass:"veui-calendar-select",attrs:{"type":"button","id":(_vm.id + ":panel-title:" + pIndex),"disabled":_vm.disabled || _vm.readonly,"aria-label":("选择月份，现在是 " + (p.month + 1) + " 月")},on:{"click":function($event){_vm.setView(pIndex, 'months')}}},[_c('b',[_vm._v(_vm._s(p.month + 1))]),_vm._v(" 月 "),_c('veui-icon',{attrs:{"name":_vm.icons.expand}})],1)]:(p.view === 'months')?[_c('span',{staticClass:"veui-calendar-label",attrs:{"id":(_vm.id + ":panel-title:" + pIndex)}},[_c('b',[_vm._v(_vm._s(p.year))]),_vm._v(" 年\n        ")])]:(p.view === 'years')?[_c('span',{staticClass:"veui-calendar-label",attrs:{"id":(_vm.id + ":panel-title:" + pIndex)}},[_c('b',[_vm._v(_vm._s(p.year - p.year % 10)+"–"+_vm._s(p.year - p.year % 10 + 9))]),_vm._v(" 年\n        ")])]:_vm._e(),_vm._v(" "),_c('button',{ref:"next",refInFor:true,class:{
          'veui-calendar-next': true,
          'veui-sr-only': pIndex !== _vm.panels.length - 1 && p.view === 'days'
        },attrs:{"type":"button","disabled":_vm.disabled || _vm.readonly,"aria-label":_vm.getStepLabel(p.view, 'next'),"aria-controls":(_vm.id + ":panel-title:" + pIndex)},on:{"click":function($event){_vm.step(true, p.view)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.next}})],1)],2),_vm._v(" "),_c('div',{ref:"body",refInFor:true,staticClass:"veui-calendar-body",class:{ 'veui-calendar-multiple-range': _vm.multiple && _vm.range }},[_c('table',[(p.view === 'days')?[_c('thead',[_c('tr',_vm._l((_vm.dayNames),function(dayName,index){return _c('th',{key:index,attrs:{"aria-label":_vm.dayFullNames[index]}},[_vm._v(_vm._s(dayName))])}))]),_vm._v(" "),_c('tbody',_vm._l((p.weeks),function(week,index){return _c('tr',{key:index},_vm._l((week),function(day){return _c('td',{key:((day.year) + "-" + (day.month + 1) + "-" + (day.date)),class:_vm.getDateClass(day, p)},[(_vm.fillMonth && _vm.panel === 1 || day.month === p.month)?_c('button',{attrs:{"type":"button","disabled":_vm.realDisabled || _vm.realReadonly || day.isDisabled,"autofocus":day.isFocus,"aria-label":_vm.getLocaleString(day),"aria-current":day.isToday ? 'date' : null,"tabindex":day.isFocus ? null : '-1'},on:{"click":function($event){_vm.selectDay(day)},"mouseenter":function($event){_vm.markEnd(day)},"focus":function($event){_vm.markEnd(day)},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();_vm.moveFocus(p.view, -7)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }$event.preventDefault();_vm.moveFocus(p.view, 1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();_vm.moveFocus(p.view, 7)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();_vm.moveFocus(p.view, -1)}]}},[_vm._t("date",[_vm._v(_vm._s(day.date))],null,{
                    year: day.year,
                    month: day.month,
                    date: day.date
                  })],2):_vm._e()])}))}))]:(p.view === 'months')?_c('tbody',_vm._l((3),function(i){return _c('tr',{key:i},_vm._l((4),function(j){return _c('td',{key:j,class:_vm.getMonthClass(p, i, j)},[_c('button',{attrs:{"type":"button","tabindex":i === 1 && j === 1 ? null : '-1'},on:{"click":function($event){_vm.selectMonth(pIndex, (i - 1) * 4 + j - 1)},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();_vm.moveFocus(p.view, -4)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }$event.preventDefault();_vm.moveFocus(p.view, 1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();_vm.moveFocus(p.view, 4)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();_vm.moveFocus(p.view, -1)}]}},[_vm._v("\n                "+_vm._s((i - 1) * 4 + j)+" 月\n              ")])])}))})):(p.view === 'years')?_c('tbody',_vm._l((3),function(i){return _c('tr',{key:i},_vm._l((4),function(j){return _c('td',{key:j,class:_vm.getYearClass(p, i, j)},[((i - 1) * 4 + j - 1 < 10)?_c('button',{attrs:{"type":"button","tabindex":i === 1 && j === 1 ? null : '-1'},on:{"click":function($event){_vm.selectYear(pIndex, p.year - p.year % 10 + (i - 1) * 4 + j - 1)},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();_vm.moveFocus(p.view, _vm.getYearOffset(i, j, false))},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }$event.preventDefault();_vm.moveFocus(p.view, 1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();_vm.moveFocus(p.view, _vm.getYearOffset(i, j, true))},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();_vm.moveFocus(p.view, -1)}]}},[_vm._v("\n                "+_vm._s(p.year - p.year % 10 + (i - 1) * 4 + j - 1)+"\n              ")]):_vm._e()])}))})):_vm._e()],2)])])}),_vm._v(" "),_vm._t("after")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Calendar.vue?vue&type=template&id=ed9bacbe&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(43);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(124);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);

// EXTERNAL MODULE: ./node_modules/lodash/findIndex.js
var findIndex = __webpack_require__(22);
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex);

// EXTERNAL MODULE: ./node_modules/lodash/flattenDeep.js
var flattenDeep = __webpack_require__(622);
var flattenDeep_default = /*#__PURE__*/__webpack_require__.n(flattenDeep);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-left.js
var angle_left = __webpack_require__(458);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-down-small.js
var angle_down_small = __webpack_require__(461);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-right.js
var angle_right = __webpack_require__(444);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Calendar.js




config["a" /* default */].defaults({
  icons: {
    prev: 'angle-left',
    next: 'angle-right',
    expand: 'angle-down-small'
  }
}, 'calendar');
// EXTERNAL MODULE: ./node_modules/veui/utils/date.js
var utils_date = __webpack_require__(558);

// EXTERNAL MODULE: ./node_modules/veui/utils/dom.js
var dom = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/veui/utils/math.js
var math = __webpack_require__(488);

// EXTERNAL MODULE: ./node_modules/veui/utils/helper.js
var helper = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/mixins/input.js
var input = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Calendar.vue?vue&type=script&lang=js&








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









config["a" /* default */].defaults({
  'calendar.weekStart': 1
});
var CELL_SELECTOR = {
  days: '.veui-calendar-day',
  months: '.veui-calendar-month',
  years: '.veui-calendar-year'
  /**
   *  展开写，后面可能要拆出去放到语言包
   */

};
var DAY_NAMES = ['一', '二', '三', '四', '五', '六', '日'];
var DAY_FULL_NAMES = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
var MONTH_NAMES = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
var STEP_LABELS = {
  prev: {
    days: '上个月',
    months: '上一年',
    years: '上十年'
  },
  next: {
    days: '下个月',
    months: '下一年',
    years: '下十年'
  }
};
/* harmony default export */ var Calendarvue_type_script_lang_js_ = ({
  name: 'veui-calendar',
  mixins: [ui["a" /* default */], input["a" /* default */]],
  model: {
    prop: 'selected',
    event: 'select'
  },
  components: {
    'veui-icon': Icon["a" /* default */]
  },
  props: {
    panel: {
      type: Number,
      default: 1
    },
    today: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    selected: {
      type: [Array, Date],
      default: function _default() {
        return null;
      }
    },
    weekStart: {
      type: Number,
      default: config["a" /* default */].get('calendar.weekStart'),
      validator: function validator(val) {
        return val >= 0 && val <= 6;
      }
    },
    range: Boolean,
    multiple: Boolean,
    fillMonth: {
      type: Boolean,
      default: true
    },
    disabledDate: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    dateClass: {
      type: [String, Array, Object, Function],
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    var views = [];

    for (var i = 0; i < this.panel; i++) {
      views[i] = 'days';
    }

    var current = this.getDefaultDate();

    var id = uniqueId_default()('veui-calendar-');

    return {
      year: current.getFullYear(),
      month: current.getMonth(),
      views: views,
      id: id,
      monthNames: MONTH_NAMES,
      picking: null,
      pickingRanges: null
    };
  },
  computed: {
    viewMonth: function viewMonth() {
      return "".concat(this.year, "/").concat(this.month);
    },
    realSelected: function realSelected() {
      return this.selected ? this.selected : this.multiple ? [] : null;
    },
    realPicking: function realPicking() {
      var _ref = this.picking || [],
          _ref2 = slicedToArray_default()(_ref, 2),
          from = _ref2[0],
          to = _ref2[1];

      if (to && to - from < 0) {
        return [to, from];
      }

      return this.picking;
    },
    panels: function panels() {
      var panels = [];

      for (var i = 0; i < this.panel; i++) {
        var year = this.year + Math.floor((this.month + i) / 12);
        var month = (this.month + i) % 12;
        var view = this.views[i];
        var firstDayInMonth = new Date(year, month);
        var offset = (firstDayInMonth.getDay() + 7 - this.weekStart) % 7;
        var daysInMonth = Object(utils_date["b" /* getDaysInMonth */])(year, month);
        var daysInPreviousMonth = Object(utils_date["b" /* getDaysInMonth */])(year, month - 1);
        var weekCount = Math.ceil((offset + daysInMonth) / 7);
        var weeks = []; // 默认 focus 入口顺序：
        // 选中日 -> 当天 -> 本月第一天

        var selectedDay = null;
        var today = null;
        var firstDay = null;

        for (var _i = 0; _i < weekCount; _i++) {
          if (!weeks[_i]) {
            weeks[_i] = [];
          }

          for (var j = 0; j < 7; j++) {
            if (_i === 0 && j < offset) {
              weeks[_i][j] = {
                date: daysInPreviousMonth + j + 1 - offset,
                month: (month + 11) % 12,
                year: month === 0 ? year - 1 : year
              };
            } else if (_i * 7 + j - offset < daysInMonth) {
              weeks[_i][j] = {
                date: _i * 7 + j + 1 - offset,
                month: month,
                year: year
              };
            } else {
              weeks[_i][j] = {
                date: _i * 7 + j + 1 - offset - daysInMonth,
                month: (month + 1) % 12,
                year: month === 11 ? year + 1 : year
              };
            }

            var day = weeks[_i][j];
            day.isDisabled = typeof this.disabledDate === 'function' ? this.disabledDate(Object(utils_date["a" /* fromDateData */])(day)) : false;

            if (day.month === month) {
              day.isToday = Object(utils_date["c" /* isSameDay */])(day, this.today);
              day.isSelected = this.isSelected(day);
              day.rangePosition = this.getRangePosition(day);

              if (!firstDay) {
                firstDay = day;
              } // 如果本月已找到选中的日子就无需再处理了


              if (!selectedDay) {
                if (day.isSelected) {
                  day.isFocus = true;
                  selectedDay = day;
                } else if (!today && day.isToday) {
                  today = day;
                }
              }
            }
          }
        } // 如果本月没有选中的日期时再选择当天或第一天


        if (!selectedDay) {
          if (today) {
            today.isFocus = true;
          } else {
            firstDay.isFocus = true;
          }
        }

        panels.push({
          year: year,
          month: month,
          weeks: weeks,
          view: view
        });
      }

      return panels;
    },
    dayNames: function dayNames() {
      var names = DAY_NAMES.concat();
      return names.splice(this.weekStart - 1).concat(names);
    },
    dayFullNames: function dayFullNames() {
      var names = DAY_FULL_NAMES.concat();
      return names.splice(this.weekStart - 1).concat(names);
    }
  },
  methods: {
    getLocaleString: function getLocaleString(day) {
      return Object(utils_date["a" /* fromDateData */])(day).toLocaleDateString('zh-CN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    getDateClass: function getDateClass(day, panel) {
      var extraClass = typeof this.dateClass === 'function' ? this.dateClass(Object(utils_date["a" /* fromDateData */])(day)) : this.dateClass;
      return objectSpread_default()({
        'veui-calendar-day': day.month === panel.month,
        'veui-calendar-aux': day.month !== panel.month,
        'veui-calendar-today': day.isToday,
        'veui-calendar-selected': day.isSelected,
        'veui-calendar-in-range': day.rangePosition && day.rangePosition.within,
        'veui-calendar-range-start': day.rangePosition && day.rangePosition.start,
        'veui-calendar-range-end': day.rangePosition && day.rangePosition.end
      }, Object(helper["l" /* normalizeClass */])(extraClass));
    },
    getMonthClass: function getMonthClass(panel, i, j) {
      var month = (i - 1) * 4 + j - 1;
      return {
        'veui-calendar-month': true,
        'veui-calendar-today': month === this.today.getMonth() && panel.year === this.today.getFullYear(),
        'veui-calendar-selected': this.realSelected && !this.multiple && !this.range ? month === this.realSelected.getMonth() && panel.year === this.realSelected.getFullYear() : false
      };
    },
    getYearClass: function getYearClass(panel, i, j) {
      var offset = (i - 1) * 4 + j - 1;
      var year = panel.year - panel.year % 10 + offset;
      return {
        'veui-calendar-year': offset < 10,
        'veui-calendar-today': year === this.today.getFullYear(),
        'veui-calendar-selected': this.realSelected && !this.multiple && !this.range ? year === this.realSelected.getFullYear() : false
      };
    },
    getStepLabel: function getStepLabel(view, type) {
      return STEP_LABELS[type][view];
    },
    getYearOffset: function getYearOffset(i, j, isNext) {
      return isNext ? i === 2 && j > 2 ? 6 : i === 3 ? 2 : 4 : i === 1 ? j < 3 ? -2 : -6 : -4;
    },
    selectDay: function selectDay(day) {
      // switch month in days view if dates in previous/next months are visible
      if (this.fillMonth && this.panel === 1) {
        this.year = day.year;
        this.month = day.month;
      }

      var selected = new Date(day.year, day.month, day.date);

      if (!this.range) {
        if (!this.multiple) {
          // single day selection
          this.$emit('select', selected);
          return;
        } // multiple single days selection


        var result = toConsumableArray_default()(this.realSelected);

        var pos = findIndex_default()(result, function (date) {
          return Object(utils_date["c" /* isSameDay */])(date, selected);
        });

        if (pos === -1) {
          result.push(selected);
        } else {
          result.splice(pos, 1);
        }

        this.$emit('select', result);
        return;
      } // range selection


      if (!this.picking) {
        this.picking = [selected];
        this.$emit('selectstart', selected);
        this.markEnd(day);
        return;
      } // prepare to select


      this.$set(this.picking, 1, selected);
      var picking = this.picking.sort(function (d1, d2) {
        return d1 - d2;
      });

      if (!this.multiple) {
        // single range selection
        this.picking = null;
        this.$emit('select', toConsumableArray_default()(picking));
        return;
      } // multiple ranges selection


      this.picking = null;

      var ranges = toConsumableArray_default()(this.pickingRanges);

      this.pickingRanges = null;
      this.$emit('select', ranges);
    },
    markEnd: function markEnd(day) {
      if (this.range && this.picking) {
        var marked = day ? new Date(day.year, day.month, day.date) : null;
        this.$set(this.picking, 1, marked);

        if (this.multiple) {
          if (!marked) {
            this.$set(this.picking, 1, this.picking[0]);
          }

          this.pickingRanges = Object(utils_date["d" /* mergeRange */])(this.picking, this.realSelected);
        }

        this.$emit('selectprogress', this.pickingRanges || this.picking);
      }
    },
    moveFocus: function moveFocus(view, delta) {
      var _this = this;

      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      // 不走数据流了，直接查找 DOM 元素最简单
      var selector = CELL_SELECTOR[view];

      var cells = toConsumableArray_default()(this.$el.querySelectorAll(selector)); // 查一下当前聚焦元素的偏移量，归一化以后再处理


      if (offset === null) {
        var current = document.activeElement;

        if (!current) {
          return;
        }

        var pos = findIndex_default()(cells, function (cell) {
          return cell === Object(dom["a" /* closest */])(current, selector);
        });

        if (pos === -1) {
          return;
        }

        offset = pos;
      }

      var nextIndex = offset + delta;
      var target = cells[nextIndex]; // 如果目标格子存在，尝试 focus 一下
      // 如果已经禁用，就按方向向前/后找到最近的一个未禁用的

      if (target) {
        var button = target.querySelector('button');
        var buttons = cells.map(function (cell) {
          return cell.querySelector('button');
        });

        do {
          if (!button.disabled) {
            button.focus();
            return;
          } else {
            nextIndex += Object(math["e" /* sign */])(delta);
            button = buttons[nextIndex];
          }
        } while (button); // 按方向取本月目标格子均为禁用，尝试移动一天


        delta += Object(math["e" /* sign */])(delta);
      } // 目标格子不在当前视图，需要翻页
      //
      // 对于月视图：
      // * 往前翻页偏移量要加入进入视图的月的天数
      // * 往后翻页偏移量要减去离开视图的月的天数
      //
      // 对于年/十年视图，直接增减 12/10 即可


      var inc = Object(math["b" /* isPositive */])(delta);
      var year;
      var month;

      if (view === 'days' && inc) {
        year = this.panels[0].year;
        month = this.panels[0].month;
      }

      this.step(inc, view);

      if (view === 'days' && !inc) {
        year = this.panels[0].year;
        month = this.panels[0].month;
      }

      this.$nextTick(function () {
        var count = view === 'days' ? Object(utils_date["b" /* getDaysInMonth */])(year, month) : view === 'months' ? 12 : 10;

        _this.moveFocus(view, delta, offset - Object(math["e" /* sign */])(delta) * count);
      });
    },
    setFocus: function setFocus(part, index) {
      var _this2 = this;

      this.$nextTick(function () {
        var ref = _this2.$refs[part][index];

        if (ref) {
          ref.focus();
        }
      });
    },
    setView: function setView(i, value) {
      var _this3 = this;

      if (value) {
        this.$set(this.views, i, value);
        this.$nextTick(function () {
          Object(dom["d" /* focusIn */])(_this3.$refs.body[i]);
        });
      } else {
        value = i;
        this.views.forEach(function (view, i) {
          _this3.$set(_this3.views, i, value);
        });
      }
    },
    selectMonth: function selectMonth(i, month) {
      // yearDiff = ⌊(currentMonth + monthDiff) / 12⌋
      this.year += Math.floor((this.month + month - this.panels[i].month) / 12);
      this.month = (month - i + 12) % 12;
      this.setView('days');
      this.setFocus('month-select', i);
    },
    selectYear: function selectYear(i, year) {
      this.year = year + Math.floor((this.panels[i].month - i) / 12);
      this.setView('days');
      this.setFocus('year-select', i);
    },
    isSelected: function isSelected(day) {
      if (!this.realSelected && !this.picking) {
        return false;
      }

      if (!this.range) {
        if (!this.multiple) {
          // single day
          return Object(utils_date["c" /* isSameDay */])(this.realSelected, day);
        } // multiple single days


        return (this.realSelected || []).some(function (d) {
          return Object(utils_date["c" /* isSameDay */])(d, day);
        });
      }

      if (!this.multiple) {
        // single range
        var range = this.picking || this.realSelected;
        return Object(utils_date["c" /* isSameDay */])(range[0], day) || Object(utils_date["c" /* isSameDay */])(range[1], day);
      } // multiple ranges


      return (this.pickingRanges || this.realSelected || []).some(function (selected) {
        return Object(utils_date["c" /* isSameDay */])(selected[0], day) || Object(utils_date["c" /* isSameDay */])(selected[1], day);
      });
    },
    getRangePosition: function getRangePosition(day) {
      if (!this.range) {
        return false;
      }

      if (!this.multiple) {
        // single range
        var range = this.realPicking || this.realSelected;
        return _getRangePosition(day, range);
      } // multiple ranges


      var ranges = this.pickingRanges || this.realSelected || [];
      var position = false;

      for (var i = 0, j = ranges.length; i < j; i++) {
        position = _getRangePosition(day, ranges[i]);

        if (position) {
          break;
        }
      }

      return position;
    },
    step: function step(isNext, view) {
      var sign = isNext ? 1 : -1;

      switch (view) {
        case 'days':
          var newMonth = this.month + sign;

          if (newMonth === -1 || newMonth === 12) {
            this.year += sign;
          }

          this.month = (newMonth + 12) % 12;
          break;

        case 'months':
          this.year += sign;
          break;

        case 'years':
          this.year += sign * 10;
          break;
      }
    },
    getDefaultDate: function getDefaultDate() {
      return flattenDeep_default()([this.selected])[0] || this.today;
    }
  },
  watch: {
    month: function month(val) {
      this.$emit('viewchange', {
        year: this.year,
        month: this.month
      });
    },
    selected: function selected(val) {
      this.picking = this.pickingRanges = null;
    }
  }
});

function _getRangePosition(day, range) {
  if (!range || !range[1]) {
    return false;
  }

  var date = new Date(day.year, day.month, day.date);
  var within = (range[0] - date) * (range[1] - date) <= 0;

  if (!within) {
    return false;
  }

  return {
    within: within,
    start: range[0] - date === 0,
    end: range[1] - date === 0
  };
}
// CONCATENATED MODULE: ./node_modules/veui/components/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/calendar.less?vue&type=style&index=0&lang=less&
var calendarvue_type_style_index_0_lang_less_ = __webpack_require__(623);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Calendar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Calendarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Calendar.vue"
/* harmony default export */ var Calendar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return toDateData; });
/* unused harmony export toDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromDateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isSameDay; });
/* unused harmony export isInRange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mergeRange; });
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);


function getDaysInMonth(year, month) {
  var day;

  if (year instanceof Date) {
    day = new Date(year);
  } else {
    day = new Date(year, month + 1);
  }

  day.setDate(0);
  return day.getDate();
}
function toDateData(date) {
  if (typeof date === 'number') {
    date = new Date(date);
  }

  if (date instanceof Date) {
    return {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }

  return date;
}
function toDate(date) {
  if (typeof date === 'number') {
    return new Date(date);
  } else if ('date' in date && 'month' in date && 'year' in date) {
    return fromDateData(date);
  }

  return date;
}
function fromDateData(_ref) {
  var year = _ref.year,
      month = _ref.month,
      date = _ref.date;
  return new Date(year, month, date);
}
function isSameDay(src, target) {
  if (!src || !target) {
    return false;
  }

  var srcData = toDateData(src);
  var targetData = toDateData(target);
  return srcData.date === targetData.date && srcData.month === targetData.month && srcData.year === targetData.year;
}
function isInRange(day, range) {
  return Object(_range__WEBPACK_IMPORTED_MODULE_1__[/* includes */ "a"])(range.map(toDate), toDate(day));
}
function mergeRange(r1, r2) {
  r1 = lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default()(r1).map(toDate);
  r2 = lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default()(r2).map(toDate);
  return Object(_range__WEBPACK_IMPORTED_MODULE_1__[/* merge */ "b"])(r1, r2, {
    inc: addDays
  });
}
var ONE_DAY = 24 * 60 * 60 * 1000;

function addDays(date, days) {
  return new Date(date - 0 + days * ONE_DAY);
}

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return merge; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(205);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_1__);


function includes(range, value) {
  if (!range || range.length < 2) {
    return false;
  }

  for (var i = 0; i < range.length / 2; i++) {
    if (value - range[i * 2] >= 0 && range[i * 2 + 1] - value >= 0) {
      return true;
    }
  }

  return false;
}

var DEFAULT_COMPARE = function DEFAULT_COMPARE(v1, v2) {
  return v1 - v2;
};

var DEFAULT_INC = function DEFAULT_INC(v1, v2) {
  return v1 + v2;
};

function merge(r1, r2) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$compare = _ref.compare,
      compare = _ref$compare === void 0 ? DEFAULT_COMPARE : _ref$compare,
      _ref$inc = _ref.inc,
      inc = _ref$inc === void 0 ? DEFAULT_INC : _ref$inc;

  r1 = lodash_flatten__WEBPACK_IMPORTED_MODULE_1___default()(r1).sort(compare);
  r2 = lodash_flatten__WEBPACK_IMPORTED_MODULE_1___default()(r2).sort(compare);

  var range = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(r1).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(r2)).sort(compare).map(function (value, i) {
    if (includes(r1, value) && includes(r2, value)) {
      return inc(value, i % 2 ? -1 : 1);
    }

    return value;
  });

  for (var i = 0; i < range.length / 2; i++) {
    if (range[i * 2 + 1] - range[i * 2] < 0) {
      range[i * 2 + 1] = range[i * 2] = null;
    } else if (range[i * 2 - 1] !== null && range[i * 2] - inc(range[i * 2 - 1], 1) === 0) {
      range[i * 2] = range[i * 2 - 1] = null;
    }
  }

  range = range.filter(function (date) {
    return date !== null;
  });
  var result = [];

  while (range.length) {
    result.push(range.splice(0, 2));
  }

  return result;
}

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(200);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY) : [];
}

module.exports = flattenDeep;


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_calendar_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(506);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_calendar_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_calendar_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_calendar_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.veui-calendar{display:inline-block;overflow:hidden;border:1px solid #e7e7e7;background-color:#fff;outline:none\n}\n.veui-calendar button{transition-property:border-color,background-color,color,opacity;transition-duration:.2s\n}\n.veui-calendar-panel{display:inline-block;position:relative\n}\n.veui-calendar-panel+.veui-calendar-panel .veui-calendar-head{margin-left:1px\n}\n.veui-calendar-panel+.veui-calendar-panel .veui-calendar-body{border-left:1px solid #fff\n}\n.veui-calendar-panel:before{content:\"\";position:absolute;top:36px;right:0;left:0;height:0;border-bottom:1px solid #e7e7e7\n}\n.veui-calendar-days+.veui-calendar-months .veui-calendar-body,.veui-calendar-days+.veui-calendar-years .veui-calendar-body,.veui-calendar-months+.veui-calendar-days .veui-calendar-body,.veui-calendar-years+.veui-calendar-days .veui-calendar-body{border-color:#e7e7e7\n}\n.veui-calendar-body{border-collapse:collapse;table-layout:fixed;padding-bottom:5px\n}\n.veui-calendar-body button{position:relative;width:100%;height:36px;margin-top:1px;border:none;padding:0;background-color:#fff;color:#666;text-align:center;outline:none\n}\n.veui-calendar-body button.focus-visible,.veui-calendar-body button:hover{background-color:#ebf5ff;color:#333\n}\n.veui-calendar-body button:active{background-color:#d7eafe\n}\n.veui-calendar-body button:disabled,.veui-calendar-body button:disabled:hover{background-color:#fff;color:#b8b8b8;cursor:not-allowed\n}\n.veui-calendar th{width:36px;height:34px;background-color:#f7f7f7;color:#999;font-weight:400\n}\n.veui-calendar td{position:relative;width:36px;height:36px;padding:0;color:#666\n}\n.veui-calendar td,.veui-calendar th{text-align:center\n}\n.veui-calendar-aux button{color:#b8b8b8\n}\n.veui-calendar-today button{color:#3998fc;font-weight:600\n}\n.veui-calendar-in-range button,.veui-calendar-selected button{background-color:#c4e0fe\n}\n.veui-calendar-in-range button.focus-visible,.veui-calendar-in-range button:hover,.veui-calendar-selected button.focus-visible,.veui-calendar-selected button:hover{background-color:#b0d6fe\n}\n.veui-calendar-in-range button:active,.veui-calendar-selected button:active{background-color:#88c1fd\n}\n.veui-calendar-head{border-bottom:1px solid #e7e7e7;text-align:center;color:#666\n}\n.veui-calendar-head:after,.veui-calendar-head:before{display:table;content:\"\"\n}\n.veui-calendar-head:after{clear:both\n}\n.veui-calendar-head button{height:36px;background:none;border:none;padding:0 7px;outline:none;cursor:pointer\n}\n.veui-calendar-head button .veui-icon{width:16px;vertical-align:middle;color:#999\n}\n.veui-calendar-head button.focus-visible,.veui-calendar-head button:hover{background-color:#f7f7f7;color:#333\n}\n.veui-calendar-head button.focus-visible .veui-icon,.veui-calendar-head button:hover .veui-icon{color:inherit\n}\n.veui-calendar-head button:active{background-color:#e7e7e7;color:#666\n}\n.veui-calendar-head button:active .veui-icon{color:inherit\n}\n.veui-calendar-head button:disabled,.veui-calendar-head button:disabled:hover{color:#b8b8b8;background:transparent;cursor:not-allowed\n}\n.veui-calendar-head button:disabled .veui-icon{color:inherit\n}\n.veui-calendar-label{line-height:36px;color:#333\n}\n.veui-calendar-next,.veui-calendar-prev{width:36px\n}\n.veui-calendar-prev{float:left\n}\n.veui-calendar-next{float:right\n}\n.veui-calendar-days td:first-child,.veui-calendar-days th:first-child{padding-left:5px\n}\n.veui-calendar-days td:last-child,.veui-calendar-days th:last-child{padding-right:5px\n}\n.veui-calendar-days td:first-child,.veui-calendar-days td:last-child,.veui-calendar-days th:first-child,.veui-calendar-days th:last-child{width:41px\n}\n.veui-calendar-months td,.veui-calendar-years td{width:60px;height:65px\n}\n.veui-calendar-months td button,.veui-calendar-years td button{width:54px;height:54px\n}\n.veui-calendar-months .veui-calendar-body,.veui-calendar-years .veui-calendar-body{padding:9px 11px 20px\n}", ""]);

// exports


/***/ })

}]);