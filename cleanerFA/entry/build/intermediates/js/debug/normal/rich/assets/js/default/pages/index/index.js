/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/entry-utils.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/entry-utils.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var EntryUtils = {
  goNetConfigOrDevicePage: function goNetConfigOrDevicePage() {
    var action = {};
    action.bundleName = 'com.newpower.ohoscleaner2';
    action.abilityName = 'com.newpower.ohoscleaner2.EntryInternalAbility';
    action.messageCode = 1002;
    action.abilityType = 1;
    action.syncOption = 0;
    FeatureAbility.callAbility(action);
  },
  openBrowser: function openBrowser(url) {
    var action = {};
    action.bundleName = 'com.newpower.ohoscleaner2';
    action.abilityName = 'com.newpower.ohoscleaner2.EntryInternalAbility';
    action.messageCode = 1001;
    action.data = {
      url: url
    };
    action.abilityType = 1;
    action.syncOption = 0;
    FeatureAbility.callAbility(action);
  }
};
var _default = EntryUtils;
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/fa-utils.js":
/*!**************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/fa-utils.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault(systemplugin.storage);

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TAG = 'tag # ';
var DEBUG = true;
var FaUtils = {
  storageGet: function storageGet(key, callback) {
    var _this = this;

    _system["default"].get({
      key: key,
      success: function success(value) {
        (0, _newArrowCheck2["default"])(this, _this);
        callback(value);
      }.bind(this)
    });
  },
  storageSet: function storageSet(key, value, callback) {
    var _this2 = this;

    _system["default"].set({
      key: key,
      value: value,
      success: function success() {
        (0, _newArrowCheck2["default"])(this, _this2);
        callback();
      }.bind(this)
    });
  },
  logInfo: function logInfo(msg) {
    if (DEBUG) {
      console.info(TAG + msg);
    }
  },
  logError: function logError(msg) {
    if (DEBUG) {
      console.error(TAG + msg);
    }
  },
  toast: function toast(msg) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    _system2["default"].showToast({
      message: msg,
      duration: time
    });
  }
};
var _default = FaUtils;
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.hml?entry":
/*!******************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../../common/header/header.hml?name=header */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.hml?name=header")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "../../../../../../../node_modules/@hmscore/hms-jsb-account/src/index.js":
/*!*********************************************************************!*\
  !*** /Users/joe/node_modules/@hmscore/hms-jsb-account/src/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";(function(e){var n,i=0;t.a={uniqueId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(e).concat(i++,"_").concat((new Date).getTime(),"_").concat(Math.random())},log:function(e){console.log("".concat("hmsjsb: "," ").concat(e))},error:function(e){console.error("".concat("hmsjsb: "," ").concat(e))},getJSCore:function(){return n||(this.isWeex()?n=weex.requireModule("JSCore"):this.isRN()?console.log("this is RN"):n=this.isOHOS()?ModuleGroup.getGroup("AceModuleGroup/HmsBridge"):this.isQickApp()?e.requireAPI("service.jsb"):window.JSCore,n)},setJSCore:function(e){n=e},isWebView:function(){return"function"==typeof Window&&window instanceof Window},isWeex:function(){return"undefined"!=typeof weex},isRN:function(){return"undefined"!=typeof GLOBAL},isCordova:function(){return"undefined"!=typeof window&&void 0!==window.cordova&&!this.isCapacitor()},isCapacitor:function(){return"undefined"!=typeof window&&void 0!==window.Capacitor&&void 0!==window.Capacitor.Plugins.JSBCapacitorPlugin},isOHOS:function(){return"undefined"!=typeof ModuleGroup},isQickApp:function(){return void 0!==e&&void 0!==e.quickapp},getPositionInfoById:function(e){var t=document.getElementById(e),n=t.getBoundingClientRect(),i=n.left+t.scrollLeft,r=n.top+t.scrollTop;return{left:i,top:r,width:n.right-i,height:n.bottom-r}}}}).call(this,n(2))},function(e,t,n){e.exports=n(3)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"hmsjsb",(function(){return d})),n.d(t,"callbackMap",(function(){return c})),n.d(t,"eventMap",(function(){return u})),n.d(t,"hmsbase",(function(){return m}));var i=n(0);function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var a,s,c={},u={};function p(e,t,n){var r={id:i.a.uniqueId("cb_"),success:e,fail:t,complete:n};return c[r.id]=r,r.id}function f(e){var t;try{t=JSON.parse(e)}catch(n){t={errCode:-1,errMsg:"callback result parsing error"},i.a.error("json parse failed, ".concat(e))}return t}var d={invoke:function(e){var t=this,n=e.apiName,r=e.args,o=e.success,a=e.fail,s=e.complete;if(i.a.log("invoke start, {apiName: ".concat(n)),n){var c=JSON.stringify(r);l();var u={};u.apiName=n,u.args=r;var g={bundleName:"com.huawei.hms.adapter",abilityName:"JsbInternalAbility"};if(!(o&&"function"==typeof o||a&&"function"==typeof a||s&&"function"==typeof s)){if(i.a.isOHOS())return g.messageCode=1002,g.data=u,g.abilityType=1,g.syncOption=0,function(e){return new Promise((function(t,n){e.then((function(e){t(f(e))})).catch((function(e){n(f(e))}))}))}(FeatureAbility.callAbility(g));if(i.a.isCordova())return new Promise((function(e,t){var i={method:n,data:r};window.cordova.exec((function(t){e(f(t))}),(function(e){t(f(e))}),"JSCore","invoke",i)}));if(i.a.isCapacitor()){var h={method:n,data:r};return window.Capacitor.Plugins.JSBCapacitorPlugin.invoke(h)}return new Promise((function(e){e(f(i.a.getJSCore().invoke(n,c)))}))}var y=p(o,a,s);if(i.a.log("invoke Async, callbackId:".concat(y)),i.a.isOHOS())u.callbackId=y,g.messageCode=1001,g.data=u,g.abilityType=1,g.syncOption=1,FeatureAbility.callAbility(g).then((function(e){var t=f(e);"callback result parsing error"!==t.errMsg&&d.callback(y,t.data)}),(function(e){i.a.error("call ability failed ".concat(e))}));else if(i.a.isQickApp())i.a.getJSCore().invokeAsync({apiName:n,args:c,callbackId:y,callback:this.callback});else if(i.a.isCordova()){var v={method:n,data:r};window.cordova.exec((function(e){t.callback(y,e)}),(function(e){t.callback(y,e)}),"JSCore","invokeAsync",v)}else if(i.a.isCapacitor()){var m={method:n,data:r};window.Capacitor.Plugins.JSBCapacitorPlugin.invokeAsync(m).then((function(e){d.callback(y,e.value)})).catch((function(e){i.a.error("capacitor adapter invokeAsync failed ".concat(JSON.stringify(e)))}))}else i.a.getJSCore().invokeAsync(n,c,y)}},callback:function(e,t){if(i.a.log("callback start, cbId: ".concat(e)),t){var n=c[e];if(n){!function(e){delete c[e.id]}(n);var r=f(t);if("callback result parsing error"===r.errMsg&&"function"==typeof n.fail)return void n.fail(r);var o={errCode:r.errCode,errMsg:r.errMsg||"",data:r.data,extras:r.extras};0===r.errCode?("function"==typeof n.success&&n.success(o),"function"==typeof n.complete&&n.complete(o)):("function"==typeof n.fail&&n.fail(o),"function"==typeof n.complete&&n.complete(o))}}else console.error("callback params is null")},on:function(e,t,n){if(i.a.log("on start, eventName: ".concat(e)),n&&i.a.isOHOS())return function(e,t,n){var r={id:i.a.uniqueId("ecb_"),eventName:e,callback:t};return n[r.id]=r,r.id}(e,t,n);if(!i.a.isWeex()){if(i.a.isRN())return s.addListener(e,(function(e){var n;try{n=JSON.parse(e)}catch(e){return}t(n)}));if(i.a.isCapacitor())return window.Capacitor.Plugins.JSBCapacitorPlugin.addListener(e,(function(e){t(e)}));i.a.isCordova()&&0===Object.keys(u).length&&window.cordova.exec(d.cordovaHandler,d.cordovaHandler,"JSCore","addEventListener",{eventName:e});var r=i.a.uniqueId("subscribeEvent_");i.a.log("on browser, offKey: ".concat(r));var o=u["event_"+e];return o||(o={},u["event_"+e]=o),o[r]=t,r}weex.requireModule("globalEvent").addEventListener(e,t)},off:function(e,t,n){if(i.a.log("off start, eventName: ".concat(e,", offKey: ").concat(t)),n&&i.a.isOHOS())delete n[t];else if(i.a.isWeex())weex.requireModule("globalEvent").removeEventListener(e);else if(i.a.isRN()||i.a.isCapacitor())t&&t.remove();else{var r=u["event_"+e];if(r)if("string"==typeof t)delete r[t];else if("function"==typeof t){var o=Object.keys(r).filter((function(e){return r[e]===t}));o&&o.length&&delete r[o[0]]}}},publishHandler:function(e,t){var n;i.a.log("publishHandler start, eventName: ".concat(e));try{n=JSON.parse(t)}catch(e){i.a.error("pushEvent data parsing error"),n=t}var r=u["event_"+e];r&&Object.keys(r).forEach((function(e){var t=r[e];"function"==typeof t&&t(n)}))},cordovaHandler:function(e){e&&d.publishHandler(e.event,e.data)},createView:function(e){var t=e.apiName,n=e.args,o=e.containerId,a=e.success,s=e.fail,c=e.complete,u=void 0!==n?JSON.stringify(n):"",f=p(a,s,c);if(i.a.isWebView()){var d,l=i.a.getPositionInfoById(o);(d=i.a.getJSCore()).createView.apply(d,[t,u,f,o].concat(r(l)))}else i.a.getJSCore().createView(t,u,f,o)},scrollViewToY:function(e,t){i.a.isWebView()&&i.a.getJSCore().scrollViewToY(e,t)},init:function(e){if(i.a.log("init start"),i.a.isRN()){var t=e.NativeModules;i.a.setJSCore(t.JSCore),s=e.DeviceEventEmitter,l(),this.utils=t.ModuleUtils}else i.a.isOHOS()&&FeatureAbility.subscribeAbilityEvent({bundleName:"com.huawei.hms.adapter",abilityName:"JsbInternalAbility",messageCode:1005,abilityType:1,syncOption:1},(function(t){var n;try{n=JSON.parse(t)}catch(e){return void i.a.error("subscribe event result parse error: ".concat(t))}var r=n.data.eventName;Object.keys(e).forEach((function(t){var i=e[t];r===i.eventName&&i.callback(n.data.eventResult)}))})).catch((function(e){return i.a.error("subscribe event fail, ".concat(e))}))},destroy:function(){i.a.log("destroy start"),i.a.isRN()?a&&a.remove():i.a.isCordova()&&window.cordova.exec(d.cordovaHandler,d.cordovaHandler,"JSCore","removeEventListener")}};function l(){i.a.isWebView()?window.JSBridge=d:i.a.isWeex()?d.on("weexJsbCallback",(function(e){var t=e.id,n=e.value;d.callback(t,n)})):i.a.isRN()?s&&(a&&a.remove(),a=d.on("rnJsbCallback",(function(e){var t=e.id,n=e.value;d.callback(t,n)}))):i.a.isQickApp()&&(i.a.getJSCore().onEventCallBack=d.publishHandler)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=e.apiName,n=e.args,i=e.success,r=e.fail,o=e.complete;return d.invoke({apiName:t,args:n,success:i,fail:r,complete:o})}l();var m={setSPvalue:function(e){var t=e.key,n=e.value,i=e.spname;return v(h(h({},e),{},{args:{key:t,value:n,spname:i},apiName:"sp.setSPvalue"}))},getSPvalue:function(e){var t=e.key,n=e.spname;return v(h(h({},e),{},{args:{key:t,spname:n},apiName:"sp.getSPvalue"}))},removeSPvalue:function(e){var t=e.key,n=e.spname;return v(h(h({},e),{},{args:{key:t,spname:n},apiName:"sp.removeSPvalue"}))},getMetadata:function(e){var t=e.key,n=e.packagename;return v(h(h({},e),{},{args:{key:t,packagename:n},apiName:"metadata.getvalue"}))},getPackageName:function(e){return v(h(h({},e),{},{apiName:"package.name"}))},getAppId:function(e){return v(h(h({},e),{},{apiName:"base.getappid"}))},getAaId:function(e){return v(h(h({},e),{},{apiName:"base.getaaid"}))},getUid:function(e){return v(h(h({},e),{},{apiName:"base.getUid"}))},getAppVersion:function(e){return v(h(h({},e),{},{apiName:"base.getAppVersion"}))},getAgcConfig:function(e){var t=e.key;return v(h(h({},e),{},{args:{key:t},apiName:"base.getAgcConfig"}))},reportEntry:function(e){var t=e.uri,n=e.kitSdkVersion;return v(h(h({},e),{},{args:{uri:t,kitSdkVersion:n},apiName:"analytics.reportEntry"}))},reportExit:function(e){var t=e.uri,n=e.transactId,i=e.statusCode,r=e.errorCode,o=e.kitSdkVersionName;return v(h(h({},e),{},{args:{uri:t,transactId:n,statusCode:i,errorCode:r,kitSdkVersionName:o},apiName:"analytics.reportExit"}))},encrypt:function(e){var t=e.encryptWord;return v(h(h({},e),{},{args:{encryptWord:t},apiName:"security.encrypter"}))},decrypt:function(e){var t=e.encryptWord;return v(h(h({},e),{},{args:{encryptWord:t},apiName:"security.decrypter"}))},config:function(e){var t=e.subId;return v(h(h({},e),{},{args:{subId:t},apiName:"config.auth"}))},isJsbKitAvailable:function(e){var t=e.min_api_level;return v(h(h({},e),{},{args:{min_api_level:t},apiName:"update.availability"}))},upgrade:function(e){return v(h(h({},e),{},{apiName:"update.upgrade"}))},reload:function(e){return v(h(h({},e),{},{apiName:"update.reload"}))}}}])},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t),n.d(t,"HuaweiIdGetTokenOptions",(function(){return v})),n.d(t,"HuaweiIdAuthParamsHelper",(function(){return g})),n.d(t,"DEFAULT_AUTH_REQUEST_PARAM",(function(){return h})),n.d(t,"DEFAULT_AUTH_REQUEST_PARAM_GAME",(function(){return y})),n.d(t,"Scope",(function(){return r})),n.d(t,"EMAIL",(function(){return o})),n.d(t,"OPENID",(function(){return a})),n.d(t,"GAMES",(function(){return s})),n.d(t,"PROFILE",(function(){return c})),n.d(t,"SHIPPING_ADDRESS",(function(){return u})),n.d(t,"AuthHuaweiId",(function(){return m})),n.d(t,"HuaweiIdAuthManager",(function(){return I}));var i=n(0);function r(e){this.mScopeUri=e}r.prototype.getScopeUri=function(){return this.mScopeUri},r.prototype.setScopeUri=function(e){this.mScopeUri=e};var o=new r("email"),a=new r("openid"),s=new r("https://www.huawei.com/auth/games"),c=new r("profile"),u=new r("https://www.huawei.com/auth/account/shipping.address");function p(){this.appId="",this.packageName="",this.permission=""}p.prototype.getAppId=function(){return this.appId},p.prototype.setAppId=function(e){this.appId=e},p.prototype.getPackageName=function(){return this.packageName},p.prototype.setPackageName=function(e){this.packageName=e},p.prototype.getPermission=function(){return this.permission},p.prototype.setPermission=function(e){this.permission=e};var f=new p;f.setPermission("com.huawei.android.hms.account.getUID");var d=f;function l(e,t){this.scopeArrayList=e,this.permissionArrayList=t}function g(){this.signInScopes=new Set,this.permissionSet=new Set}l.prototype.getRequestScopeList=function(){return this.scopeArrayList},l.prototype.setScopeArrayList=function(e){this.scopeArrayList=e},l.prototype.getPermissionInfos=function(){return this.permissionArrayList},l.prototype.setPermissionArrayList=function(e){this.permissionArrayList=e},g.prototype.setUid=function(){return this.permissionSet.add(d),this},g.prototype.setAuthorizationCode=function(){var e=new p;return e.setPermission("https://www.huawei.com/auth/account/base.profile/serviceauthcode"),this.permissionSet.add(e),this},g.prototype.setAccessToken=function(){var e=new p;return e.setPermission("https://www.huawei.com/auth/account/base.profile/accesstoken"),this.permissionSet.add(e),this},g.prototype.setDialogAuth=function(){var e=new p;return e.setPermission("setDialogAuth"),this.permissionSet.add(e),this},g.prototype.setScope=function(e){return this.signInScopes.add(e),this},g.prototype.setScopeList=function(e){if(Array.isArray(e)){console.info("add scopeList");for(var t=0;t<e.length;t++)console.info("add scope:"+JSON.stringify(e[t])),this.signInScopes.add(e[t])}return this},g.prototype.setEmail=function(){return this.setScope(o),this},g.prototype.setId=function(){return this.setScope(a),this},g.prototype.setIdToken=function(){var e=new p;return e.setPermission("idtoken"),this.permissionSet.add(e),this},g.prototype.setProfile=function(){return this.setScope(c),this},g.prototype.setShippingAddress=function(){return this.setAccessToken(),this.setId(),this.setScope(new r("https://www.huawei.com/auth/account/shipping.address")),this},g.prototype.setIncludeGranted=function(e){if(!e){var t=new p;t.setPermission("https://www.huawei.com/auth/account/nonincludegranted"),this.permissionSet.add(t)}return this},g.prototype.setMobileNumber=function(){return this.setAccessToken(),this.setId(),this.setScope(new r("https://www.huawei.com/auth/account/mobile.number")),this},g.prototype.build=function(){return new l(Array.from(this.signInScopes),Array.from(this.permissionSet))};var h=(new g).setId().setProfile().build(),y=(new g).setScope(s).build();function v(e,t){this.accountName=e,this.fromGetToken=t}function m(e){console.info("build AuthHuaweiId"),this.openId=e.signInHuaweiId.openId,this.displayName=e.signInHuaweiId.displayName,this.status=e.signInHuaweiId.status,this.gender=e.signInHuaweiId.gender,this.grantedScopes=e.signInHuaweiId.grantedScopes,this.serverAuthCode=e.signInHuaweiId.serverAuthCode,this.unionId=e.signInHuaweiId.unionId,this.expirationTimeSecs=e.signInHuaweiId.expirationTimeSecs,this.givenName=e.signInHuaweiId.givenName,this.familyName=e.signInHuaweiId.familyName,this.photoUriString=e.signInHuaweiId.photoUriString,this.homeZone=e.signInHuaweiId.homeZone,this.uid=e.signInHuaweiId.uid,this.accessToken=e.signInHuaweiId.accessToken,this.serviceCountryCode=e.signInHuaweiId.serviceCountryCode,this.countryCode=e.signInHuaweiId.countryCode,this.email=e.signInHuaweiId.email,this.extensionScopes=e.signInHuaweiId.extensionScopes,this.idToken=e.signInHuaweiId.idToken,this.ageRange=e.signInHuaweiId.ageRange,console.info("build AuthHuaweiId success")}m.prototype.getOpenId=function(){return this.openId},m.prototype.getUid=function(){return this.uid},m.prototype.getDisplayName=function(){return this.displayName},m.prototype.getAvatarUri=function(){return this.photoUriString},m.prototype.getAccessToken=function(){return this.accessToken},m.prototype.getStatus=function(){return this.status},m.prototype.getGender=function(){return this.gender},m.prototype.getServiceCountryCode=function(){return this.serviceCountryCode},m.prototype.getCountryCode=function(){return this.countryCode},m.prototype.getAuthorizedScopes=function(){return this.grantedScopes},m.prototype.getServerAuthCode=function(){return this.serverAuthCode},m.prototype.getUnionId=function(){return this.unionId},m.prototype.getEmail=function(){return this.email},m.prototype.getExtensionScopes=function(){return this.extensionScopes},m.prototype.setExtensionScopes=function(e){void 0!==this.extensionScopes&&null!==this.extensionScopes||(console.error("this extensionScopes is null or undefined"),this.extensionScopes=new Array),console.info("enter setExtensionScopes:"+JSON.stringify(this.extensionScopes)+" scopeList:"+JSON.stringify(e)+" scopeListLen:"+e.length);for(var t=0;t<e.length;t++)this.extensionScopes.push(e[t]);return console.info("exit setExtensionScopes:"+JSON.stringify(this.extensionScopes)),this},m.prototype.getIdToken=function(){return this.idToken},m.prototype.getExpirationTimeSecs=function(){return this.expirationTimeSecs},m.prototype.getGivenName=function(){return this.givenName},m.prototype.getFamilyName=function(){return this.familyName},m.prototype.getAgeRange=function(){return this.ageRange},m.prototype.getHomeZone=function(){return this.homeZone};var S={cache:{},saveAuth:function(e,t){console.info("saveAuth"),this.clear(),this.cache.HuaweiIdAuthParams=e,this.cache.HuaweiIdAccount=t,console.info("saveAuth success")},getAuthId:function(){var e=this.cache.HuaweiIdAccount;return null==e?(console.error("getAuthId return null"),null):(console.info("getAuthId return:"+e),new m(JSON.parse(e)))},getAuthParams:function(){var e=this.cache.HuaweiIdAuthParams;return null==e?(console.error("getAuthParams return null"),null):(console.info("getAuthParams return:"+e),JSON.parse(e))},clear:function(){console.info("clear"),delete this.cache.HuaweiIdAuthParams,delete this.cache.HuaweiIdAccount,console.info("clear success")}},w={kitSdkVersion:50000300,minApkVersion:3e7,getSignInIntent:function(e){return new Promise((function(t,n){var r=Date.now(),o={huaweiIdSignInOptions:e};console.info("api start invoke JSB Bridge"),console.info(JSON.stringify(o)),i.hmsjsb.invoke({apiName:"fg.request",args:{action:"com.huawei.hms.jos.signIn",request:JSON.stringify(o),result_key:"HUAWEIID_SIGNIN_RESULT"},success:function(n){var i=Date.now();console.info("api account signIn success. cost:"+(i-r)+"ms"),S.saveAuth(JSON.stringify(e),JSON.stringify(n.data)),t(new m(n.data))},fail:function(e){var t=Date.now();console.info("api account signIn failure. cost:"+(t-r)+"ms"),console.error(JSON.stringify(e)),n(e)}})}))},silentSignIn:function(){var e=arguments,t=this;return new Promise((function(n,r){(e.length<1||e.length>2)&&(console.error("api account silentSignIn input paramters number:"+e.length+" invalid"),console.error(JSON.stringify(error)),r());var o=function(t){console.info("api account silentSignIn success"),S.saveAuth(JSON.stringify(e[0]),JSON.stringify(t.data)),n(new m(t.data))},a=function(e){console.error("api account silentSignIn failure."),console.error(JSON.stringify(e)),r(e)},s=1==e.length?{huaweiIdSignInOptions:e[0]}:{huaweiIdSignInOptions:e[0],huaweiIdGetTokenOptions:e[1]};t.getTransactId("hwid.silentSignIn").then((function(e){console.info("api getTransactId silentSignIn done"+e.data),i.hmsjsb.invoke({apiName:"bg.request",args:Object.assign({uri:"hwid.silentSignIn",requestJson:JSON.stringify(s)},t.assignAdditionArgs(e.data)),success:o,fail:a})}))}))},signOut:function(){var e=this;return new Promise((function(t,n){var r=function(e){console.info("api account signOut success."),console.info(JSON.stringify(e)),S.clear(),t(e.data)},o=function(e){console.error("api account signOut failure."),console.error(JSON.stringify(e)),n(e)};e.getTransactId("hwid.signout").then((function(t){console.info("api getTransactId signOut done"+t.data),i.hmsjsb.invoke({apiName:"bg.request",args:Object.assign({uri:"hwid.signout",requestJson:"{}"},e.assignAdditionArgs(t.data)),success:r,fail:o})}))}))},cancelAuthorization:function(){var e=this;return new Promise((function(t,n){var r=function(e){console.info("api account revokeAccess success."),console.info(JSON.stringify(e.data)),S.clear(),t(e.data)},o=function(e){console.error("api account revokeAccess failure."),console.error(JSON.stringify(e)),n(e)};e.getTransactId("hwid.revokeAccess").then((function(t){console.info("api getTransactId revokeAccess done"+t.data),i.hmsjsb.invoke({apiName:"bg.request",args:Object.assign({uri:"hwid.revokeAccess",requestJson:"{}"},e.assignAdditionArgs(t.data)),success:r,fail:o})}))}))},getTransactId:function(e){return i.hmsjsb.invoke({apiName:"analytics.reportEntry",args:{uri:e,kitSdkVersion:this.kitSdkVersion}})},assignAdditionArgs:function(e){return{transactId:e,service_action:"",api_name:"HuaweiID.API",api_level:1,kit_sdk_version:this.kitSdkVersion,min_apk_version:this.minApkVersion}}},b=function(e){switch(e){case 2012:return"Auth canceled by subscriber";case 2013:return"Auth executing";case 2014:return"An unrecoverable auth failure occurred";default:return"unknown status code: "+e}},I={getAuthApi:function(){return w},addAuthScopes:function(e){if(null!=e&&Array.isArray(e)){var t=new g;e.length>0&&t.setScopeList(e);for(var n=0;n<e.length;n++)JSON.stringify(e[n])==JSON.stringify(u)&&t.setShippingAddress();var i=t.build();return w.getSignInIntent(i)}console.error("facade scopeList is invalid")},containScopes:function(e,t){if(null==e||!(e instanceof m))return console.error("facade authId is invalid"),!1;if(null==t||!Array.isArray(t))return console.error("facade scopeList is invalid"),!1;var n=e.getAuthorizedScopes();if(null==n)return console.error("facade grantedScopes is invalid"),!1;for(var i=0;i<t.length;i++){console.info("facade scope:"+JSON.stringify(t[i]));for(var r=!1,o=0;o<n.length;o++)console.info("facade grantedscope:"+JSON.stringify(n[o])),JSON.stringify(t[i])==JSON.stringify(n[o])&&(r=!0);if(!r)return console.error("facade scope:"+JSON.stringify(t[i])+" not in grantedScopes"),!1}return console.info("facade all scopeList in grantedScopes"),!0},getAuthResultWithScopes:function(e){var t=S.getAuthId();return t instanceof m?null!=e&&Array.isArray(e)?t.setExtensionScopes(e):(console.error("facade scopeList is invalid"),t):(console.error("facade authId invalid"),null)},getAuthResult:function(){return new Promise((function(e,t){var n=S.getAuthId();null===n&&(console.error("facade getAuthResult failed"),t("no login huawei account")),console.info("facade getAuthResult success:"+JSON.stringify(n)),e(n)}))},getResultDescription:function(e){return b(e)}},A={init:function(e,t){i.hmsjsb.init({NativeModules:e,DeviceEventEmitter:t})},getHelper:function(){return new g}};t.default=A}])}));

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "paddingLeft": "24px",
    "paddingRight": "24px",
    "backgroundColor": "rgba(247,247,247,1)"
  },
  ".flex-row": {
    "flexDirection": "row"
  },
  ".flex-column": {
    "flexDirection": "column"
  },
  ".text-center": {
    "alignContent": "center",
    "justifyContent": "center",
    "textAlign": "center",
    "alignItems": "center"
  },
  ".font-65ST": {
    "fontFamily": "HWtext-65ST,HWtext",
    "fontWeight": "normal",
    "allowScale": "false"
  },
  ".font-65ST-bold": {
    "fontFamily": "HWtext-65ST,HWtext",
    "fontWeight": "600",
    "allowScale": "false"
  },
  ".font-55ST": {
    "fontFamily": "HWtext-55ST,HWtext",
    "fontWeight": "normal",
    "allowScale": "false"
  },
  ".font-14": {
    "fontSize": "14px"
  },
  ".font-16": {
    "fontSize": "16px"
  },
  ".font-20": {
    "fontSize": "20px"
  },
  ".font-color-black": {
    "textColor": "#FF000000"
  },
  ".font-color-normal": {
    "textColor": "#9e000000"
  },
  ".font-color-light": {
    "textColor": "#000000",
    "opacity": 0.6
  },
  ".font-26": {
    "fontSize": "26px"
  },
  ".color-gray": {
    "color": "#999999"
  },
  ".common-button": {
    "color:active": "#FFFFFF",
    "backgroundColor:active": "#808080",
    "height": "40px",
    "width": "100%",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "color": "#358CFD",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".common-button-blue": {
    "color:active": "#FFFFFF",
    "backgroundColor:active": "#808080",
    "height": "40px",
    "width": "100%",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "backgroundColor": "#358CFD"
  },
  ".common-text-blue-color": {
    "color": "#FFFFFF",
    "fontSize": "16px"
  },
  ".common-text-color": {
    "color": "#254ff7",
    "fontSize": "16px"
  },
  ".bottom": {
    "marginTop": "20px",
    "marginBottom": "35px"
  },
  ".margin-top-4": {
    "marginTop": "4px"
  },
  ".margin-top-6": {
    "marginTop": "6px"
  },
  ".margin-top-16": {
    "marginTop": "16px"
  },
  ".margin-top-20": {
    "marginTop": "20px"
  },
  ".margin-top-24": {
    "marginTop": "24px"
  },
  ".margin-top-30": {
    "marginTop": "30px"
  },
  ".margin-top-40": {
    "marginTop": "40px"
  },
  ".margin-top-50": {
    "marginTop": "50px"
  },
  ".margin-top-64": {
    "marginTop": "64px"
  },
  ".common-input": {
    "height": "39px",
    "marginTop": "15px",
    "paddingLeft": "0px",
    "backgroundColor": "rgba(0,0,0,0)",
    "borderBottomColor": "#A9A9A9",
    "borderBottomWidth": "0.5px",
    "color": "#000000",
    "placeholderColor": "#A9A9A9"
  },
  ".common-input-special": {
    "height": "39px",
    "marginTop": "15px",
    "paddingLeft": "0px",
    "backgroundColor": "rgba(0,0,0,0)",
    "color": "#000000",
    "placeholderColor": "#A9A9A9",
    "width": "60%"
  },
  ".divider-horizontal": {
    "color": "#A9A9A9",
    "width": "100%",
    "height": "0.5px",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".number-space": {
    "justifyContent": "space-between"
  },
  ".confirm-button-base": {
    "height": "40px",
    "width": "144px",
    "textColor": "#007DFF",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "fontSize": "16px",
    "fontFamily": "HWtext-65ST,HWtext",
    "backgroundColor": "rgba(0,0,0,0)",
    "marginLeft": "4px",
    "marginRight": "4px"
  },
  ".confirm-button-base-active": {
    "height": "40px",
    "width": "144px",
    "textColor": "#ffffff",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "fontSize": "16px",
    "fontFamily": "HWtext-65ST,HWtext",
    "backgroundColor": "#007DFF",
    "marginLeft": "4px",
    "marginRight": "4px"
  },
  ".cancel-button-base": {
    "height": "22px",
    "width": "100%",
    "fontSize": "16px",
    "textColor": "#358CFD",
    "marginBottom": "24px",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".divider-vertical": {
    "height": "24px",
    "width": "2px",
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  ".fontTitle": {
    "fontSize": "40px",
    "color": "#000000",
    "marginTop": "30px"
  },
  ".fontContent": {
    "fontSize": "32px"
  },
  ".dialogContainer": {
    "flexDirection": "column",
    "marginLeft": "48px",
    "marginRight": "48px"
  },
  ".confirm-button-container": {
    "marginBottom": "16px",
    "marginLeft": "-8px",
    "marginRight": "-8px"
  },
  ".right-position": {
    "position": "absolute",
    "right": "0px"
  },
  ".logo-img-top": {
    "marginTop": "48px"
  },
  ".logo-img": {
    "width": "92px",
    "height": "92px",
    "borderBottomLeftRadius": "15px",
    "borderBottomRightRadius": "15px",
    "borderTopLeftRadius": "15px",
    "borderTopRightRadius": "15px"
  },
  ".fa-name": {
    "marginTop": "28px",
    "color": "#000000",
    "fontSize": "18px",
    "opacity": 0.9
  },
  ".net-name": {
    "marginTop": "28px",
    "color": "#000000",
    "fontSize": "20px",
    "opacity": 0.9
  },
  ".fa-version": {
    "marginTop": "4px",
    "fontSize": "14px",
    "color": "#000000",
    "opacity": 0.6
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "paddingLeft": "24px",
    "paddingRight": "24px",
    "backgroundColor": "rgba(247,247,247,1)"
  },
  ".flex-row": {
    "flexDirection": "row"
  },
  ".flex-column": {
    "flexDirection": "column"
  },
  ".text-center": {
    "alignContent": "center",
    "justifyContent": "center",
    "textAlign": "center",
    "alignItems": "center"
  },
  ".font-65ST": {
    "fontFamily": "HWtext-65ST,HWtext",
    "fontWeight": "normal",
    "allowScale": "false"
  },
  ".font-65ST-bold": {
    "fontFamily": "HWtext-65ST,HWtext",
    "fontWeight": "600",
    "allowScale": "false"
  },
  ".font-55ST": {
    "fontFamily": "HWtext-55ST,HWtext",
    "fontWeight": "normal",
    "allowScale": "false"
  },
  ".font-14": {
    "fontSize": "14px"
  },
  ".font-16": {
    "fontSize": "16px"
  },
  ".font-20": {
    "fontSize": "20px"
  },
  ".font-color-black": {
    "textColor": "#FF000000"
  },
  ".font-color-normal": {
    "textColor": "#9e000000"
  },
  ".font-color-light": {
    "textColor": "#000000",
    "opacity": 0.6
  },
  ".font-26": {
    "fontSize": "26px"
  },
  ".color-gray": {
    "color": "#999999"
  },
  ".common-button": {
    "color:active": "#FFFFFF",
    "backgroundColor:active": "#808080",
    "height": "40px",
    "width": "100%",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "color": "#358CFD",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".common-button-blue": {
    "color:active": "#FFFFFF",
    "backgroundColor:active": "#808080",
    "height": "40px",
    "width": "100%",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "backgroundColor": "#358CFD"
  },
  ".common-text-blue-color": {
    "color": "#FFFFFF",
    "fontSize": "16px"
  },
  ".common-text-color": {
    "color": "#254ff7",
    "fontSize": "16px"
  },
  ".bottom": {
    "marginTop": "20px",
    "marginBottom": "35px"
  },
  ".margin-top-4": {
    "marginTop": "4px"
  },
  ".margin-top-6": {
    "marginTop": "6px"
  },
  ".margin-top-16": {
    "marginTop": "16px"
  },
  ".margin-top-20": {
    "marginTop": "20px"
  },
  ".margin-top-24": {
    "marginTop": "24px"
  },
  ".margin-top-30": {
    "marginTop": "30px"
  },
  ".margin-top-40": {
    "marginTop": "40px"
  },
  ".margin-top-50": {
    "marginTop": "50px"
  },
  ".margin-top-64": {
    "marginTop": "64px"
  },
  ".common-input": {
    "height": "39px",
    "marginTop": "15px",
    "paddingLeft": "0px",
    "backgroundColor": "rgba(0,0,0,0)",
    "borderBottomColor": "#A9A9A9",
    "borderBottomWidth": "0.5px",
    "color": "#000000",
    "placeholderColor": "#A9A9A9"
  },
  ".common-input-special": {
    "height": "39px",
    "marginTop": "15px",
    "paddingLeft": "0px",
    "backgroundColor": "rgba(0,0,0,0)",
    "color": "#000000",
    "placeholderColor": "#A9A9A9",
    "width": "60%"
  },
  ".divider-horizontal": {
    "color": "#A9A9A9",
    "width": "100%",
    "height": "0.5px",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".number-space": {
    "justifyContent": "space-between"
  },
  ".confirm-button-base": {
    "height": "40px",
    "width": "144px",
    "textColor": "#007DFF",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "fontSize": "16px",
    "fontFamily": "HWtext-65ST,HWtext",
    "backgroundColor": "rgba(0,0,0,0)",
    "marginLeft": "4px",
    "marginRight": "4px"
  },
  ".confirm-button-base-active": {
    "height": "40px",
    "width": "144px",
    "textColor": "#ffffff",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "fontSize": "16px",
    "fontFamily": "HWtext-65ST,HWtext",
    "backgroundColor": "#007DFF",
    "marginLeft": "4px",
    "marginRight": "4px"
  },
  ".cancel-button-base": {
    "height": "22px",
    "width": "100%",
    "fontSize": "16px",
    "textColor": "#358CFD",
    "marginBottom": "24px",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".divider-vertical": {
    "height": "24px",
    "width": "2px",
    "backgroundColor": "rgba(0,0,0,0.2)"
  },
  ".fontTitle": {
    "fontSize": "40px",
    "color": "#000000",
    "marginTop": "30px"
  },
  ".fontContent": {
    "fontSize": "32px"
  },
  ".dialogContainer": {
    "flexDirection": "column",
    "marginLeft": "48px",
    "marginRight": "48px"
  },
  ".confirm-button-container": {
    "marginBottom": "16px",
    "marginLeft": "-8px",
    "marginRight": "-8px"
  },
  ".right-position": {
    "position": "absolute",
    "right": "0px"
  },
  ".content": {
    "marginTop": "84px"
  },
  "progress": {
    "width": "40px",
    "height": "40px",
    "marginTop": "30px",
    "marginRight": "30px",
    "marginBottom": "30px",
    "marginLeft": "30px",
    "color": "#FF000000"
  },
  ".authorizeDescription": {
    "fontSize": "10px",
    "color": "#000000",
    "opacity": 0.6
  },
  ".confirm-button-base-red": {
    "color:active": "#FFFFFF",
    "backgroundColor:active": "#808080",
    "height": "40px",
    "width": "240px",
    "marginLeft": "24px",
    "marginRight": "24px",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "color": "#FFFFFF",
    "backgroundColor": "#0D000000",
    "marginTop": "8px",
    "opacity": 1,
    "opacity:disabled": 0.3
  },
  ".cancel-button": {
    "color:active": "#FFFFFF",
    "backgroundColor:active": "#808080",
    "height": "40px",
    "width": "240px",
    "marginLeft": "24px",
    "marginRight": "24px",
    "borderBottomLeftRadius": "40px",
    "borderBottomRightRadius": "40px",
    "borderTopLeftRadius": "40px",
    "borderTopRightRadius": "40px",
    "color": "#358CFD",
    "backgroundColor": "#0D000000",
    "marginTop": "16px"
  },
  ".hw-img": {
    "width": "24px",
    "height": "24px"
  },
  ".cancel-text": {
    "color": "#000000",
    "fontSize": "14px",
    "opacity": 0.9
  },
  ".sign-text": {
    "color": "#000000",
    "marginLeft": "5px",
    "fontSize": "14px",
    "opacity": 0.9
  },
  ".protocol_tip": {
    "fontSize": "10px",
    "color": "#000000",
    "opacity": 0.6
  },
  ".protocol_tip_link": {
    "fontSize": "10px",
    "color": "#0A59F7",
    "allowScale": "false"
  },
  ".protocol_input": {
    "width": "32px",
    "height": "32px"
  },
  ".protocol_container": {
    "marginTop": "12px",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "12px",
    "allowScale": "false"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.hml":
/*!***********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.hml ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "common/header/header:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "common/header/header:2",
        "className": "text-center flex-column logo-img-top"
      },
      "type": "div",
      "classList": [
        "text-center",
        "flex-column",
        "logo-img-top"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "common/header/header:3",
            "className": "text-center"
          },
          "type": "div",
          "classList": [
            "text-center"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "common/header/header:4",
                "src": function () {return this.$t('files.cpLogo')},
                "className": "logo-img"
              },
              "type": "image",
              "classList": [
                "logo-img"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "common/header/header:7",
            "className": "{{ isNetValue ? 'net-name' : 'fa-name' }} font-65ST",
            "value": function () {return this.faNameValue}
          },
          "type": "text",
          "classList": function () {return [this.isNetValue?'net-name':'fa-name', 'font-65ST']}
        },
        {
          "attr": {
            "debugLine": "common/header/header:9",
            "className": "fa-version font-55ST",
            "value": function () {return this.versionValue}
          },
          "type": "text",
          "classList": [
            "fa-version",
            "font-55ST"
          ],
          "shown": function () {return this.actionType=='showVersion'}
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.hml":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.hml ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:3",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:4",
        "action": "showVersion",
        "version": function () {return this.version}
      },
      "type": "header"
    },
    {
      "attr": {
        "debugLine": "pages/index/index:6",
        "className": "content flex-column text-center"
      },
      "type": "div",
      "classList": [
        "content",
        "flex-column",
        "text-center"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:7",
            "className": "text-center flex-column"
          },
          "type": "div",
          "classList": [
            "text-center",
            "flex-column"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:8",
                "className": "text-center flex-column"
              },
              "type": "div",
              "classList": [
                "text-center",
                "flex-column"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:9",
                    "type": "circular",
                    "show": function () {return this.showProgress}
                  },
                  "type": "progress"
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:10",
                    "className": "flex-column text-center",
                    "show": function () {return !this.showProgress}
                  },
                  "type": "div",
                  "classList": [
                    "flex-column",
                    "text-center"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:11",
                        "className": "authorizeDescription font-55ST",
                        "value": function () {return this.$t('strings.authorizeDescription')}
                      },
                      "type": "text",
                      "classList": [
                        "authorizeDescription",
                        "font-55ST"
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:12",
                        "className": "confirm-button-base-red text-center",
                        "disabled": function () {return !this.protocolAgreed}
                      },
                      "type": "div",
                      "events": {
                        "click": "hwLoginClick"
                      },
                      "classList": [
                        "confirm-button-base-red",
                        "text-center"
                      ],
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:14",
                            "src": function () {return this.$t('files.hwSignLogo')},
                            "className": "hw-img"
                          },
                          "type": "image",
                          "classList": [
                            "hw-img"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:16",
                            "className": "sign-text font-65ST",
                            "value": function () {return this.$t('strings.hwAccountLoginValue')}
                          },
                          "type": "text",
                          "classList": [
                            "sign-text",
                            "font-65ST"
                          ]
                        }
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:19",
                        "className": "cancel-button text-center"
                      },
                      "type": "div",
                      "events": {
                        "click": "cancelLoginClick"
                      },
                      "classList": [
                        "cancel-button",
                        "text-center"
                      ],
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:20",
                            "className": "cancel-text font-65ST",
                            "value": function () {return this.$t('strings.cancelValue')}
                          },
                          "type": "text",
                          "classList": [
                            "cancel-text",
                            "font-65ST"
                          ]
                        }
                      ]
                    },
                    {
                      "attr": {
                        "debugLine": "pages/index/index:23",
                        "className": "protocol_container"
                      },
                      "type": "div",
                      "classList": [
                        "protocol_container"
                      ],
                      "children": [
                        {
                          "attr": {
                            "debugLine": "pages/index/index:24",
                            "type": "checkbox",
                            "className": "protocol_input"
                          },
                          "type": "input",
                          "classList": [
                            "protocol_input"
                          ],
                          "events": {
                            "change": "protocolAgreeCheck"
                          }
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:25",
                            "className": "protocol_tip",
                            "value": function () {return this.$t('strings.agree')}
                          },
                          "type": "text",
                          "classList": [
                            "protocol_tip"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:26",
                            "className": "protocol_tip_link",
                            "value": function () {return this.$t('strings.protocolUserAgreement')}
                          },
                          "type": "text",
                          "classList": [
                            "protocol_tip_link"
                          ],
                          "events": {
                            "click": "protocolUserAgreementLink"
                          }
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:27",
                            "className": "protocol_tip",
                            "value": function () {return this.$t('strings.and')}
                          },
                          "type": "text",
                          "classList": [
                            "protocol_tip"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "pages/index/index:28",
                            "className": "protocol_tip_link",
                            "value": function () {return this.$t('strings.protocolPrivacyStatement')}
                          },
                          "type": "text",
                          "classList": [
                            "protocol_tip_link"
                          ],
                          "events": {
                            "click": "protocolPrivacyStatementLink"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.hml?name=header":
/*!*******************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.hml?name=header ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./header.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./header.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./header.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.js")

$app_define$('@app-component/header', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/common/header/header.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: ['faName', 'action', 'isNet', 'version'],
  data: {
    faNameValue: '',
    versionValue: '',
    actionType: '',
    isNetValue: false,
    isNet: false,
    deviceName: '',
    action: ''
  },
  onInit: function onInit() {
    this.faNameValue = this.$t('strings.faName');
    this.versionValue = this.$t('strings.faVersion') + this.version;
    this.isNetValue = this.isNet;

    if (this.isNetValue) {
      this.deviceNameValue = this.deviceName;
    }

    this.actionType = this.action;
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/pages/index/index.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _system = _interopRequireDefault($app_require$("@app-module/system.app"));

var _faUtils = _interopRequireDefault(__webpack_require__(/*! ../../fa-utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/fa-utils.js"));

var _entryUtils = _interopRequireDefault(__webpack_require__(/*! ../../entry-utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/entry/src/main/js/default/entry-utils.js"));

var _hmsJsbAccount = __webpack_require__(/*! @hmscore/hms-jsb-account */ "../../../../../../../node_modules/@hmscore/hms-jsb-account/src/index.js");

var STORAGE_KEY_OPEN_ID = 'open_id';
var _default = {
  data: {
    protocolAgreed: false,
    openIdLocal: '',
    showProgress: true,
    version: ''
  },
  onInit: function onInit() {
    var _this = this;

    this.version = _system["default"].getInfo().versionName;

    _faUtils["default"].logError('version = ' + this.version);

    _faUtils["default"].storageGet(STORAGE_KEY_OPEN_ID, function (value) {
      (0, _newArrowCheck2["default"])(this, _this);

      if (value == '') {
        this.showProgress = false;
      } else {
        this.openIdLocal = value;
        this.silentSignIn();
      }
    }.bind(this));
  },
  hwLoginClick: function hwLoginClick() {
    _faUtils["default"].logError('signIn hwLoginClick = ');

    this.signIn();
  },
  signIn: function signIn() {
    var _this2 = this;

    _faUtils["default"].logError('signIn hwLoginClick in method 1111= ');

    var signInOption = new _hmsJsbAccount.HuaweiIdAuthParamsHelper().setId().setProfile().setDialogAuth().build();

    _hmsJsbAccount.HuaweiIdAuthManager.getAuthApi().getSignInIntent(signInOption).then(function (res) {
      var _this3 = this;

      (0, _newArrowCheck2["default"])(this, _this2);
      console.info("signIn success. " + JSON.stringify(res));

      _faUtils["default"].storageSet(STORAGE_KEY_OPEN_ID, res.openId, function () {
        (0, _newArrowCheck2["default"])(this, _this3);

        _entryUtils["default"].goNetConfigOrDevicePage();
      }.bind(this));
    }.bind(this))["catch"](function (error) {
      (0, _newArrowCheck2["default"])(this, _this2);
      console.error("signIn fail. " + JSON.stringify(error));
    }.bind(this));
  },
  silentSignIn: function silentSignIn() {
    var _this4 = this;

    _faUtils["default"].logError('silentSignIn hwLoginClick in method 2222= ');

    var signInOption = new _hmsJsbAccount.HuaweiIdAuthParamsHelper().setId().setProfile().setDialogAuth().build();

    _hmsJsbAccount.HuaweiIdAuthManager.getAuthApi().silentSignIn(signInOption).then(function (res) {
      (0, _newArrowCheck2["default"])(this, _this4);
      console.info("silentSignIn success. " + JSON.stringify(res));
      console.info("silentSignIn openIdLocal= " + this.openIdLocal);
      this.result = JSON.stringify(res);

      if (this.openIdLocal == res.openId) {
        _entryUtils["default"].goNetConfigOrDevicePage();
      } else {
        this.showProgress = false;
      }
    }.bind(this))["catch"](function (error) {
      (0, _newArrowCheck2["default"])(this, _this4);
      this.showProgress = false;
      console.error("silentSignIn fail. " + JSON.stringify(error));
    }.bind(this));
  },
  cancelLoginClick: function () {
    var _cancelLoginClick = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _system["default"].terminate();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function cancelLoginClick() {
      return _cancelLoginClick.apply(this, arguments);
    }

    return cancelLoginClick;
  }(),
  protocolAgreeCheck: function protocolAgreeCheck(e) {
    this.protocolAgreed = e.checked;
  },
  protocolUserAgreementLink: function protocolUserAgreementLink() {
    _entryUtils["default"].openBrowser('http://www.baidu.com');
  },
  protocolPrivacyStatementLink: function protocolPrivacyStatementLink() {
    _entryUtils["default"].openBrowser('http://www.baidu.com');
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map