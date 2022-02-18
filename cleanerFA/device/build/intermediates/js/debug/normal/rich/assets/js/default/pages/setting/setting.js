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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.hml?entry":
/*!***********************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.hml?entry ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../../common/navbar/navbar.hml?name=nav */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.hml?name=nav")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./setting.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./setting.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./setting.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.js")

$app_define$('@app-component/setting', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/setting',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "height": "53px",
    "width": "100%",
    "alignItems": "center",
    "position": "fixed"
  },
  ".back_icon": {
    "width": "48px",
    "height": "48px",
    "paddingTop": "12px",
    "paddingRight": "12px",
    "paddingBottom": "12px",
    "paddingLeft": "12px",
    "marginLeft": "12px"
  },
  ".menu_icon": {
    "width": "48px",
    "height": "48px",
    "paddingTop": "12px",
    "paddingRight": "12px",
    "paddingBottom": "12px",
    "paddingLeft": "12px",
    "marginRight": "12px",
    "objectFit": "contain"
  },
  ".title": {
    "marginLeft": "2px",
    "flexGrow": 1,
    "fontSize": "20px",
    "color": "#000000",
    "lineHeight": "24px",
    "maxLines": 1
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".option-flag": {
    "marginLeft": "10px",
    "marginRight": "10px",
    "fontSize": "15px",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "flexGrow": 0
  },
  ".option-text": {
    "marginLeft": "10px",
    "marginRight": "10px",
    "fontSize": "15px",
    "textAlign": "right",
    "flexGrow": 1
  },
  ".option-item-container": {
    "display": "flex"
  },
  ".line": {
    "backgroundColor": "#D3D3D3",
    "marginLeft": "10px",
    "marginRight": "10px",
    "height": "1px",
    "width": "100%"
  },
  ".option-container": {
    "backgroundColor": "#FFFFFF",
    "marginLeft": "15px",
    "marginRight": "15px",
    "borderBottomLeftRadius": "20px",
    "borderBottomRightRadius": "20px",
    "borderTopLeftRadius": "20px",
    "borderTopRightRadius": "20px",
    "flexDirection": "column",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px"
  },
  ".top-margin-70": {
    "marginTop": "70px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.hml":
/*!************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.hml ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "common/navbar/navbar:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "common/navbar/navbar:2",
        "className": "back_icon",
        "src": "/common/images/ic_back.png"
      },
      "type": "image",
      "classList": [
        "back_icon"
      ],
      "events": {
        "click": "backClick"
      }
    },
    {
      "attr": {
        "debugLine": "common/navbar/navbar:3",
        "className": "title",
        "value": function () {return this.title}
      },
      "type": "text",
      "classList": [
        "title"
      ]
    },
    {
      "attr": {
        "debugLine": "common/navbar/navbar:4",
        "id": "menu_icon",
        "className": "menu_icon",
        "src": "/common/images/ic_more.png",
        "show": function () {return this.showMenu}
      },
      "type": "image",
      "id": "menu_icon",
      "classList": [
        "menu_icon"
      ],
      "events": {
        "click": "menuClick"
      }
    },
    {
      "attr": {
        "debugLine": "common/navbar/navbar:6",
        "id": "menu_opts",
        "target": "menu_icon"
      },
      "type": "menu",
      "id": "menu_opts",
      "events": {
        "selected": "itemClick"
      },
      "children": [
        {
          "attr": {
            "debugLine": "common/navbar/navbar:7",
            "value": function () {return this.$item.value},
            "action": "popup",
            "content": function () {return this.$item.text}
          },
          "type": "option",
          "repeat": function () {return this.menu}
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.hml":
/*!*************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.hml ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/setting/setting:2",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/setting/setting:3",
        "title": "设置",
        "showMenu": "false"
      },
      "type": "nav"
    },
    {
      "attr": {
        "debugLine": "pages/setting/setting:4",
        "className": "option-container top-margin-70"
      },
      "type": "div",
      "classList": [
        "option-container",
        "top-margin-70"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/setting/setting:5",
            "className": "option-item-container"
          },
          "type": "div",
          "classList": [
            "option-item-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/setting/setting:6",
                "className": "option-flag",
                "value": function () {return this.$t('strings.deviceName')}
              },
              "type": "text",
              "classList": [
                "option-flag"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/setting/setting:7",
                "className": "option-text",
                "value": function () {return this.deviceName}
              },
              "type": "text",
              "classList": [
                "option-text"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/setting/setting:9",
            "className": "line"
          },
          "type": "div",
          "classList": [
            "line"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/setting/setting:10",
            "className": "option-item-container"
          },
          "type": "div",
          "classList": [
            "option-item-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/setting/setting:11",
                "className": "option-flag",
                "value": function () {return this.$t('strings.location')}
              },
              "type": "text",
              "classList": [
                "option-flag"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/setting/setting:12",
                "className": "option-text",
                "value": function () {return this.roomName}
              },
              "type": "text",
              "classList": [
                "option-text"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.hml?name=nav":
/*!*****************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.hml?name=nav ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./navbar.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./navbar.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./navbar.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.js")

$app_define$('@app-component/nav', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _default = {
  props: {
    title: {
      "default": ''
    },
    showMenu: {
      "default": false
    },
    menu: {
      "default": []
    }
  },
  onInit: function onInit() {},
  backClick: function backClick() {
    _system["default"].back();
  },
  menuClick: function menuClick() {
    this.$element('menu_opts').show();
  },
  itemClick: function itemClick(e) {
    this.$emit('menuItemClick', e);
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/setting/setting.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    deviceName: '',
    roomName: ''
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

/***/ })

/******/ });
//# sourceMappingURL=setting.js.map