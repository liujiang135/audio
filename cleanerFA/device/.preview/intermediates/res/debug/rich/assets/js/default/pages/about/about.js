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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.hml?entry":
/*!*******************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.hml?entry ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../../common/navbar/navbar.hml?name=nav */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.hml?name=nav")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./about.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./about.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./about.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.js")

$app_define$('@app-component/about', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/about',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/common/navbar/navbar.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "height": "56px",
    "width": "100%",
    "alignItems": "center",
    "position": "fixed"
  },
  ".back_icon_box": {
    "width": "48px",
    "height": "56px",
    "lineHeight": "56px",
    "paddingTop": "12px",
    "paddingRight": "12px",
    "paddingBottom": "12px",
    "paddingLeft": "12px",
    "marginLeft": "12px",
    "alignItems": "center"
  },
  ".back_icon": {
    "width": "24px",
    "height": "24px"
  },
  ".menu_icon": {
    "width": "24px",
    "height": "24px",
    "marginRight": "24px",
    "objectFit": "contain"
  },
  ".title": {
    "marginLeft": "2px",
    "flexGrow": 1,
    "fontSize": "20px",
    "color": "#000000",
    "maxLines": 1,
    "opacity": 0.9
  },
  ".popup_btn": {
    "fontSize": "14px",
    "backgroundColor": "rgba(0,0,0,0)"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".bg-color": {
    "height": "100%",
    "backgroundColor": "#f1f3f5"
  },
  ".text-center": {
    "alignContent": "center",
    "justifyContent": "center",
    "textAlign": "center",
    "alignItems": "center"
  },
  ".flex-column": {
    "flexDirection": "column"
  },
  ".logo-img-top": {
    "marginTop": "102px"
  },
  ".logo-img": {
    "width": "72px",
    "height": "72px",
    "borderBottomLeftRadius": "12px",
    "borderBottomRightRadius": "12px",
    "borderTopLeftRadius": "12px",
    "borderTopRightRadius": "12px",
    "objectFit": "contain"
  },
  ".fa-name": {
    "marginTop": "8px",
    "color": "#000000",
    "fontSize": "18px",
    "opacity": 0.9
  },
  ".fa-version": {
    "fontSize": "14px",
    "color": "#000000",
    "opacity": 0.6
  },
  ".protocol-tip-link": {
    "fontSize": "10px",
    "color": "#0A59F7",
    "allowScale": "false"
  },
  ".protocol-tip": {
    "fontSize": "10px",
    "color": "#000000",
    "opacity": 0.6
  },
  ".company-Rights": {
    "fontSize": "10px",
    "color": "#000000",
    "opacity": 0.6
  },
  ".protocol-msg": {
    "marginTop": "440px"
  },
  ".company-msg": {
    "marginBottom": "48px"
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
        "className": "back_icon_box"
      },
      "type": "div",
      "classList": [
        "back_icon_box"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "common/navbar/navbar:3",
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
        }
      ]
    },
    {
      "attr": {
        "debugLine": "common/navbar/navbar:5",
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
        "debugLine": "common/navbar/navbar:6",
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
        "click": "showpopup"
      }
    },
    {
      "attr": {
        "debugLine": "common/navbar/navbar:7",
        "id": "popup",
        "className": "popup",
        "target": "menu_icon",
        "placement": "bottom",
        "keepalive": "true",
        "clickable": "true",
        "arrowoffset": "100px"
      },
      "type": "popup",
      "id": "popup",
      "classList": [
        "popup"
      ],
      "events": {
        "click": "hidepopup"
      },
      "children": [
        {
          "attr": {
            "debugLine": "common/navbar/navbar:9",
            "className": "popup_btn",
            "value": function () {return this.$item.text}
          },
          "type": "button",
          "classList": [
            "popup_btn"
          ],
          "repeat": function () {return this.menu},
          "events": {
            "click": "itemClick"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.hml":
/*!*********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.hml ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/about/about:2",
    "className": "container bg-color"
  },
  "type": "div",
  "classList": [
    "container",
    "bg-color"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/about/about:3",
        "title": function () {return this.$t('strings.about_title')},
        "showMenu": "false"
      },
      "type": "nav"
    },
    {
      "attr": {
        "debugLine": "pages/about/about:4",
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
            "debugLine": "pages/about/about:5",
            "className": "text-center"
          },
          "type": "div",
          "classList": [
            "text-center"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/about/about:6",
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
            "debugLine": "pages/about/about:8",
            "className": "fa-name",
            "value": function () {return this.$t('strings.faName')}
          },
          "type": "text",
          "classList": [
            "fa-name"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/about/about:9",
            "className": "fa-version",
            "value": function () {return this.$t('strings.faVersion')}
          },
          "type": "text",
          "classList": [
            "fa-version"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/about/about:11",
        "className": "text-center protocol-msg"
      },
      "type": "div",
      "classList": [
        "text-center",
        "protocol-msg"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/about/about:12",
            "className": "protocol-tip-link",
            "value": function () {return this.$t('strings.protocolUserAgreement')}
          },
          "type": "text",
          "classList": [
            "protocol-tip-link"
          ],
          "events": {
            "click": "protocolUserAgreementLink"
          }
        },
        {
          "attr": {
            "debugLine": "pages/about/about:13",
            "className": "protocol-tip",
            "value": function () {return this.$t('strings.and')}
          },
          "type": "text",
          "classList": [
            "protocol-tip"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/about/about:14",
            "className": "protocol-tip-link",
            "value": function () {return this.$t('strings.protocolPrivacyStatement')}
          },
          "type": "text",
          "classList": [
            "protocol-tip-link"
          ],
          "events": {
            "click": "protocolPrivacyStatementLink"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/about/about:16",
        "className": "text-center company-msg"
      },
      "type": "div",
      "classList": [
        "text-center",
        "company-msg"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/about/about:17",
            "className": "company-Rights",
            "value": function () {return this.$t('strings.rightOwned')}
          },
          "type": "text",
          "classList": [
            "company-Rights"
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
  itemClick: function itemClick() {
    var e = {
      value: 'setting'
    };
    this.$element("popup").hide();
    this.$emit('menuItemClick', e);
  },
  showpopup: function showpopup() {
    this.$element("popup").show();
  },
  hidepopup: function hidepopup() {
    this.$element("popup").hide();
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/about/about.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    roomName: '',
    aboutImg: '/common/images/ic_right.png'
  },
  protocolUserAgreementLink: function protocolUserAgreementLink() {},
  protocolPrivacyStatementLink: function protocolPrivacyStatementLink() {}
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
//# sourceMappingURL=about.js.map