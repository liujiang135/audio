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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.hml?entry":
/*!********************************************************************************************************************!*\
  !*** /Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.hml?entry ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../../common/navbar/navbar.hml?name=nav */ "./lib/loader.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.hml?name=nav")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.js")

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

/***/ "../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/share/js/hilink-device.js":
/*!**********************************************************************************************************!*\
  !*** /Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/share/js/hilink-device.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Constants = {
  SUBSCRIBE: 1001,
  UNSUBSCRIBE: 1002,
  SEND_COMMAND: 1003,
  NOTIFY_DEVICE_ID: 1006
};

var getParams = function getParams(code) {
  return {
    messageCode: code,
    bundleName: 'com.huawei.suitedemo',
    abilityName: 'com.huawei.suitedemo.device.service.BleServiceAbility',
    abilityType: 0
  };
};

var HiLinkDevice = {
  DATA_TYPE_BLE_CONNECT: 10,
  DATA_TYPE_BLE_CHARACTERISTIC_CHANGED: 11,
  DATA_TYPE_BLE_CONNECTION_STATE_CHANGED: 12,
  DATA_TYPE_BLE_UNCONNECT: 13,
  connect: function () {
    var _connect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(callback) {
      var params;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = getParams(Constants.SUBSCRIBE);
              _context.next = 3;
              return FeatureAbility.subscribeAbilityEvent(params, callback);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function connect(_x) {
      return _connect.apply(this, arguments);
    }

    return connect;
  }(),
  disConnect: function disConnect() {
    var params = getParams(Constants.UNSUBSCRIBE);
    FeatureAbility.unsubscribeAbilityEvent(params);
  },
  sendCommand: function sendCommand(serviceId, param) {
    var params = getParams(Constants.SEND_COMMAND);
    params.data = {
      serviceId: serviceId,
      param: param
    };
    params.syncOption = 1;
    FeatureAbility.callAbility(params);
  },
  notifyDeviceId: function notifyDeviceId(deviceId) {
    var params = getParams(Constants.NOTIFY_DEVICE_ID);
    params.data = deviceId;
    params.syncOption = 0;
    FeatureAbility.callAbility(params);
  },
  getDataTypeDes: function getDataTypeDes(type) {
    switch (type) {
      case this.DATA_TYPE_BLE_CONNECT:
        return 'DATA_TYPE_BLE_CONNECT';

      case this.DATA_TYPE_BLE_CHARACTERISTIC_CHANGED:
        return 'DATA_TYPE_BLE_CHARACTERISTIC_CHANGED';

      case this.DATA_TYPE_BLE_CONNECTION_STATE_CHANGED:
        return 'DATA_TYPE_BLE_CONNECTION_STATE_CHANGED';
    }
  }
};
var _default = HiLinkDevice;
exports["default"] = _default;

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.css ***!
  \**********************************************************************************************************************************************/
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

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".device-img": {
    "width": "150px",
    "height": "150px",
    "borderBottomLeftRadius": "10px",
    "borderBottomRightRadius": "10px",
    "borderTopLeftRadius": "10px",
    "borderTopRightRadius": "10px",
    "marginTop": "20px"
  },
  ".device-name-text": {
    "marginTop": "15px",
    "fontSize": "15px"
  },
  ".logo-img": {
    "height": "10px",
    "marginTop": "10px",
    "objectFit": "contain"
  },
  ".progress-container": {
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "10px",
    "height": "20px"
  },
  ".progress": {
    "width": "20px",
    "height": "20px"
  },
  ".progress-text": {
    "fontSize": "12px",
    "marginLeft": "5px"
  },
  ".option-container": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#FFFFFF",
    "borderBottomLeftRadius": "20px",
    "borderBottomRightRadius": "20px",
    "borderTopLeftRadius": "20px",
    "borderTopRightRadius": "20px",
    "opacity": 1,
    "opacity:disabled": 0.3
  },
  ".option-top": {
    "marginTop": "20px",
    "marginLeft": "20px",
    "marginRight": "20px",
    "paddingTop": "15px",
    "paddingRight": "15px",
    "paddingBottom": "15px",
    "paddingLeft": "15px",
    "justifyContent": "flex-start"
  },
  ".switch-text": {
    "fontSize": "15px",
    "width": "80%",
    "fontWeight": "600"
  },
  ".switch-icon": {
    "width": "48px",
    "height": "48px"
  },
  ".option-full-width-container": {
    "marginTop": "20px",
    "marginLeft": "20px",
    "marginRight": "10px",
    "width": "100%"
  },
  ".half-width": {
    "width": "50%"
  },
  ".option-half": {
    "paddingTop": "25px",
    "paddingBottom": "25px",
    "marginRight": "10px"
  },
  ".view-more": {
    "textAlign": "center",
    "width": "100%",
    "fontSize": "16px",
    "textColor": "#0a59f7",
    "marginTop": "16px",
    "marginBottom": "20px",
    "marginLeft": "4px",
    "marginRight": "4px",
    "backgroundColor": "#00000000",
    "opacity": 1,
    "opacity:disabled": 0.3
  },
  ".option-font-normal": {
    "fontSize": "15px"
  },
  ".container-bg-color": {
    "backgroundColor": "#E8E8E8"
  },
  ".top-margin-90": {
    "marginTop": "90px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.hml":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.hml ***!
  \*************************************************************************************************************************************************/
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

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.hml":
/*!**********************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.hml ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:2",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:3"
      },
      "type": "div",
      "shown": function () {return this.isFullWindow},
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:4",
            "title": function () {return this.deviceName},
            "showMenu": "true",
            "menu": function () {return this.menu}
          },
          "type": "nav",
          "events": {
            "menu-item-click": "menuClick"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:6",
        "className": "device-img top-margin-90",
        "src": function () {return this.deviceImage}
      },
      "type": "image",
      "classList": [
        "device-img",
        "top-margin-90"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:7",
        "className": "device-name-text",
        "show": function () {return !this.isFullWindow},
        "value": function () {return this.deviceName}
      },
      "type": "text",
      "classList": [
        "device-name-text"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:8",
        "className": "logo-img",
        "src": function () {return this.$t('files.logo')}
      },
      "type": "image",
      "classList": [
        "logo-img"
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:9",
        "className": "option-container option-top"
      },
      "type": "div",
      "classList": [
        "option-container",
        "option-top"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:10",
            "className": "switch-text",
            "value": function () {return this.linkStatus}
          },
          "type": "text",
          "classList": [
            "switch-text"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:14",
        "className": "option-container option-top",
        "disabled": function () {return this.switchDisable}
      },
      "type": "div",
      "classList": [
        "option-container",
        "option-top"
      ],
      "events": {
        "click": "switchClick"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:15",
            "className": "switch-text",
            "value": function () {return this.switchText}
          },
          "type": "text",
          "classList": [
            "switch-text"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:18",
            "src": function () {return this.switchTextImg},
            "className": "switch-icon"
          },
          "type": "image",
          "classList": [
            "switch-icon"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:20",
        "className": "view-more",
        "show": function () {return !this.isFullWindow},
        "value": function () {return this.$t('strings.view_more')}
      },
      "type": "button",
      "classList": [
        "view-more"
      ],
      "events": {
        "click": "viewMoreClick"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.hml?name=nav":
/*!******************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.hml?name=nav ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./navbar.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./navbar.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./navbar.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.js")

$app_define$('@app-component/nav', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/common/navbar/navbar.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/default/pages/index/index.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _hilinkDevice = _interopRequireDefault(__webpack_require__(/*! ../../../share/js/hilink-device.js */ "../../../../../../../Documents/00.?????????/????????????(ZCG)/L0SuiteFourDemo/device/src/main/js/share/js/hilink-device.js"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.app"));

var _default = {
  data: {
    showProgress: true,
    isFullWindow: false,
    deviceId: '',
    progressText: '',
    switchText: '??????',
    linkStatus: '',
    switchTextImg: '',
    deviceImage: '/common/images/ic_device.png',
    deviceName: 'XXX????????????',
    menu: [{
      value: 'setting',
      text: '????????????'
    }],
    device: {
      on: '/common/images/ic_on.png',
      off: '/common/images/ic_off.png',
      linked: '?????????',
      unlinked: '?????????',
      linking: '?????????'
    },
    currentSwitch: 0,
    switchDisable: false
  },
  onInit: function onInit() {
    this.switchTextImg = this.device.off;
    this.linkStatus = this.device.linking;
    this.optionDisabled();
  },
  menuClick: function menuClick(e) {
    switch (e.detail.value) {
      case 'setting':
        _system["default"].push({
          uri: 'pages/setting/setting',
          params: {
            deviceName: this.deviceName,
            roomName: this.roomName
          }
        });

        break;
    }
  },
  onShow: function onShow() {
    var _this = this;

    console.log("full page onShow");
    setTimeout(function () {
      (0, _newArrowCheck2["default"])(this, _this);
      this.notifyDeviceId();
    }.bind(this), 500);
  },
  notifyDeviceId: function () {
    var _notifyDeviceId = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _this2 = this;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.info("deviceId is " + this.deviceId);
              _context.next = 3;
              return _hilinkDevice["default"].notifyDeviceId(this.deviceId);

            case 3:
              _hilinkDevice["default"].connect(function (ret) {
                (0, _newArrowCheck2["default"])(this, _this2);
                var result = JSON.parse(ret);
                this.handleEvents(result);
              }.bind(this));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function notifyDeviceId() {
      return _notifyDeviceId.apply(this, arguments);
    }

    return notifyDeviceId;
  }(),
  handleEvents: function handleEvents(result) {
    console.log("handleEvents result is" + result.data.type);

    if (result.data.state == 'fail') {
      this.linkStatus = this.device.unlinked;
    } else {
      console.log("handleEvents result is" + result.data.result);

      switch (result.data.type) {
        case _hilinkDevice["default"].DATA_TYPE_BLE_CONNECT:
          this.linkStatus = this.device.linked;
          break;

        case _hilinkDevice["default"].DATA_TYPE_BLE_UNCONNECT:
          this.linkStatus = this.device.unlinked;
          break;

        case _hilinkDevice["default"].DATA_TYPE_BLE_CHARACTERISTIC_CHANGED:
          break;

        case _hilinkDevice["default"].DATA_TYPE_BLE_CONNECTION_STATE_CHANGED:
          break;
      }
    }

    this.currentStateSet();
  },
  onHide: function onHide() {
    console.log("full page onHide");

    _hilinkDevice["default"].disConnect();
  },
  onDestroy: function onDestroy() {
    console.log("full page onDestroy");
  },
  currentStateSet: function currentStateSet() {
    console.log("currentStateSet is" + this.linkStatus);

    if (this.linkStatus == this.device.linked) {
      this.optionEnabled();
    } else {
      this.optionDisabled();
    }
  },
  switchClick: function switchClick() {
    if (this.currentSwitch == 0) {
      _hilinkDevice["default"].sendCommand('lampswitch', {
        'on': 1
      });
    } else {
      _hilinkDevice["default"].sendCommand('lampswitch', {
        'on': 0
      });
    }
  },
  optionDisabled: function optionDisabled() {
    this.switchDisable = true;
  },
  optionEnabled: function optionEnabled() {
    this.switchDisable = false;
  },
  viewMoreClick: function viewMoreClick() {
    if (!this.isFullWindow) {
      this.isFullWindow = true;

      _system2["default"].requestFullWindow();

      console.info("isFullWindow = " + this.isFullWindow);
    }
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