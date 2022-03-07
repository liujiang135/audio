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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.js":
/*!**************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _display = _interopRequireDefault(__webpack_require__(/*! ./display/display.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.js"));

var _reversal = _interopRequireDefault(__webpack_require__(/*! ./reversal/reversal.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.js"));

var _enum = _interopRequireDefault(__webpack_require__(/*! ./enum/enum.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js"));

var _increasedecrease = _interopRequireDefault(__webpack_require__(/*! ./increasedecrease/increasedecrease.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.js"));

var _progress = _interopRequireDefault(__webpack_require__(/*! ./progress/progress.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.js"));

var _multifunction = _interopRequireDefault(__webpack_require__(/*! ./multifunction/multifunction.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.js"));

var UI_TYPE_DISPLAY = 'DISPLAY';
var UI_TYPE_REVERSAL = 'REVERSAL';
var UI_TYPE_ENUM = 'ENUM';
var UI_TYPE_INCREASE_DECREASE = 'INCREASE_DECREASE';
var UI_TYPE_PROGRESS = 'PROGRESS';
var UI_TYPE_MULTIFUNCTION = 'MULTIFUNCTION';
var DISPLAY_LINE = 0;
var REVERSAL_LINE = 1;
var ENUM_LINE = 2;
var INCREASE_DECREASE_LINE = 3;
var PROGRESS_LINE = 4;
var MULTIFUNCTION_LINE = 5;
var SHRINK_CONTROL_COUNT = 5;

var ControlObj = function ControlObj() {
  (0, _classCallCheck2["default"])(this, ControlObj);
  this.lines = [];
  this.model = [];
  this.fullLines = [];
  this.controlHeight = '0px';
};

var _default = {
  props: {
    controlData: {
      "default": {}
    }
  },
  convertJson: function convertJson(deviceInfo, isSpread) {
    var controlData = new ControlObj();

    _enum["default"].resetEnumDataList();

    _reversal["default"].resetReversalDataList();

    for (var idx in deviceInfo.templateUIInfo) {
      var component = deviceInfo.templateUIInfo[idx];

      if (component.uiType == UI_TYPE_DISPLAY) {
        var displayData = _display["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(displayData);
        controlData.fullLines.push(DISPLAY_LINE);
      } else if (component.uiType == UI_TYPE_REVERSAL) {
        var reversalData = _reversal["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(reversalData);
        controlData.fullLines.push(REVERSAL_LINE);
      } else if (component.uiType == UI_TYPE_ENUM) {
        var enumData = _enum["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(enumData);
        controlData.fullLines.push(ENUM_LINE);
      } else if (component.uiType == UI_TYPE_INCREASE_DECREASE) {
        var increasedecreaseData = _increasedecrease["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(increasedecreaseData);
        controlData.fullLines.push(INCREASE_DECREASE_LINE);
      } else if (component.uiType == UI_TYPE_PROGRESS) {
        var progressData = _progress["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(progressData);
        controlData.fullLines.push(PROGRESS_LINE);
      } else if (component.uiType == UI_TYPE_MULTIFUNCTION) {
        var multifunctionData = _multifunction["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(multifunctionData);
        controlData.fullLines.push(MULTIFUNCTION_LINE);
      }
    }

    this.updateControlLines(controlData, isSpread);
    this.setControlHeight(controlData);
    return controlData;
  },
  setControlHeight: function setControlHeight(controlData) {
    var controlHeight = 0;

    for (var i = 0; i < controlData.lines.length; i++) {
      if (controlData.lines[i] == DISPLAY_LINE) {
        controlHeight = controlHeight + _display["default"].getDisplayHeight();
      } else if (controlData.lines[i] == REVERSAL_LINE) {
        controlHeight = controlHeight + _reversal["default"].getReversalHeight(controlData.model[i]);
      } else if (controlData.lines[i] == ENUM_LINE) {
        controlHeight = controlHeight + _enum["default"].getEnumHeight(controlData.model[i]);
      } else if (controlData.lines[i] == INCREASE_DECREASE_LINE) {
        controlHeight = controlHeight + _increasedecrease["default"].getIncreasedecreaseHeight();
      } else if (controlData.lines[i] == PROGRESS_LINE) {
        controlHeight = controlHeight + _progress["default"].getProgressHeight();
      } else if (controlData.lines[i] == MULTIFUNCTION_LINE) {
        controlHeight = controlHeight + _multifunction["default"].getMultifunctionHeight();
      }
    }

    controlData.controlHeight = controlHeight + 'px';
  },
  updateControlLines: function updateControlLines(controlData, isSpread) {
    //Update the number of display controls(The length of the lines).
    //If isSpread is true, display up to three controls, otherwise display all controls.
    if (isSpread) {
      controlData.lines = [];
      var count = SHRINK_CONTROL_COUNT;

      if (controlData.fullLines.length < SHRINK_CONTROL_COUNT) {
        count = controlData.fullLines.length;
      }

      for (var i = 0; i < count; i++) {
        controlData.lines.push(controlData.fullLines[i]);
      }
    } else {
      controlData.lines = controlData.fullLines;
    }

    this.setControlHeight(controlData);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var GRAVITY_DEFAULT = 'default';
var BACKGROUND_COLOR = '#FFFFFF';
var DISPLAY_HEIGHT = 96;
var MARGIN = 8;

var DisplayObj = function DisplayObj(name, defaultGravity) {
  (0, _classCallCheck2["default"])(this, DisplayObj);
  this.name = name;
  this.defaultGravity = defaultGravity;
  this.leftItem = null;
  this.showLeftItem = false;
  this.centerItem = null;
  this.showCenterItem = false;
  this.rightItem = null;
  this.showRightItem = false;
  this.itemList = [];
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    displayData: {
      "default": ''
    }
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var displayData = this.initDisplayData(templateUIInfo[idx], url);
    return displayData;
  },
  initDisplayData: function initDisplayData(displayUIInfo, url) {
    var _this = this;

    var displayData = new DisplayObj(displayUIInfo.name, displayUIInfo.gravity == GRAVITY_DEFAULT);
    var uiList = displayUIInfo.uiList;

    if (displayUIInfo.gravity == GRAVITY_DEFAULT) {
      if (uiList.length == 1) {
        this.setItemLeft(displayData, uiList, url, displayUIInfo);
      } else if (uiList.length == 2) {
        this.setItemLeft(displayData, uiList, url, displayUIInfo);
        this.setItemRight(displayData, uiList, url, displayUIInfo);
      } else {
        this.setItemLeft(displayData, uiList, url, displayUIInfo);
        this.setItemCenter(displayData, uiList, url, displayUIInfo);
        this.setItemRight(displayData, uiList, url, displayUIInfo);
      }
    } else {
      for (var i = 0; i < uiList.length; i++) {
        displayData.itemList[i] = _item["default"].convertJson(uiList[i], url, displayUIInfo.gravity, displayUIInfo.heightType, 'center');
        displayData.itemList[i].type = 'DISPLAY';
      }
    }

    _observed["default"].addObserver(displayData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(displayData, value);
    }.bind(this));

    return displayData;
  },
  setItemLeft: function setItemLeft(displayData, uiList, url, displayUIInfo) {
    displayData.showLeft = true;
    displayData.itemLeft = _item["default"].convertJson(uiList[0], url, displayUIInfo.gravity, displayUIInfo.heightType, 'left');
    displayData.itemLeft.type = 'DISPLAY';
  },
  setItemCenter: function setItemCenter(displayData, uiList, url, displayUIInfo) {
    displayData.showCenter = true;
    displayData.itemCenter = _item["default"].convertJson(uiList[1], url, displayUIInfo.gravity, displayUIInfo.heightType, 'center');
    displayData.itemCenter.type = 'DISPLAY';
  },
  setItemRight: function setItemRight(displayData, uiList, url, displayUIInfo) {
    displayData.showRight = true;
    displayData.itemRight = _item["default"].convertJson(uiList[uiList.length - 1], url, displayUIInfo.gravity, displayUIInfo.heightType, 'right');
    displayData.itemRight.type = 'DISPLAY';
  },
  getDisplayHeight: function getDisplayHeight() {
    return DISPLAY_HEIGHT + MARGIN;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js":
/*!****************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js ***!
  \****************************************************************************************************************/
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

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var GRAVITY_DEFAULT = 'default';
var BACKGROUND_COLOR = '#FFFFFF';
var HIGH_ENUM_HEIGHT = 192;
var LOW_ENUM_HEIGHT = 96;
var MARGIN = 8;

var EnumItemObj = function EnumItemObj(item, value, sid, characteristic, disableNameList) {
  (0, _classCallCheck2["default"])(this, EnumItemObj);
  this.url = item.url;
  this.textItem = item.textItem;
  this.showTextItem = item.showTextItem;
  this.iconItem = item.iconItem;
  this.showIconItem = item.showIconItem;
  this.itemLocation = item.itemLocation;
  this.value = value;
  this.sid = sid;
  this.characteristic = characteristic;
  this.disableNameList = disableNameList;
  this.type = 'ENUM';
};

var EnumObj = function EnumObj(name, defaultGravity, sid, characteristic, url) {
  (0, _classCallCheck2["default"])(this, EnumObj);
  this.name = name;
  this.defaultGravity = defaultGravity;
  this.sid = sid;
  this.characteristic = characteristic;
  this.url = url;
  this.enumItemList = [];
  this.checkedValue = -1;
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    enumData: {
      "default": {}
    }
  },
  data: {
    enumDataList: []
  },
  resetEnumDataList: function resetEnumDataList() {
    this.data.enumDataList = [];
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var enumData = this.initEnumData(templateUIInfo[idx], url);
    this.data.enumDataList.push(enumData);
    return enumData;
  },
  initEnumData: function initEnumData(enumUIInfo, url) {
    var _this = this;

    var enumData = new EnumObj(enumUIInfo.name, enumUIInfo.gravity == GRAVITY_DEFAULT, enumUIInfo.command[0].sid, enumUIInfo.command[0].characteristic, url);
    var enumInfo = enumUIInfo.command[0].enumInfo;

    for (var i = 0; i < enumInfo.length; i++) {
      var enumItem = this.initEnumItem(enumInfo[i], url, enumUIInfo, enumData.sid, enumData.characteristic);
      enumData.enumItemList.push(enumItem);
    }

    _observed["default"].addObserver(enumData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(enumData, value);
    }.bind(this));

    _observed["default"].addObserver(enumData.sid + '/' + enumData.characteristic, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);
      var checkedValue = enumData.checkedValue;
      enumData.checkedValue = value;
      this.updateEnumIcon(enumData.enumItemList, value, enumData);
      this.setOtherDisable(enumData.enumItemList, false, checkedValue);
      this.setOtherDisable(enumData.enumItemList, true, value);
    }.bind(this));

    return enumData;
  },
  initEnumItem: function initEnumItem(enumInfo, url, enumUIInfo, sid, characteristic) {
    var item = _item["default"].convertJson(enumInfo.displayItem, url, enumUIInfo.gravity, enumUIInfo.heightType, 'center');

    var nameList = 'disable' in enumInfo ? enumInfo.disable.name : [];
    var enumItem = new EnumItemObj(item, enumInfo.value, sid, characteristic, nameList);
    return enumItem;
  },
  updateEnumIcon: function updateEnumIcon(enumItemList, value, enumData) {
    for (var i = 0; i < enumItemList.length; i++) {
      if (enumData.checkedValue == enumItemList[i].value) {
        var iconValue = _utils["default"].getValue(value, enumItemList[i].iconItem.upLeft.valueList).target;

        enumItemList[i].iconItem.upLeft.icon = enumData.url + iconValue;
      } else {
        var _iconValue = _utils["default"].getValue(value, enumItemList[i].iconItem.upLeft.valueList).defaultTarget;

        enumItemList[i].iconItem.upLeft.icon = enumData.url + _iconValue;
      }
    }
  },
  setOtherDisable: function setOtherDisable(enumItemList, isDisable, value) {
    for (var i = 0; i < enumItemList.length; i++) {
      var item = enumItemList[i];

      if (item.value == value) {
        for (var j = 0; j < item.disableNameList.length; j++) {
          _observed["default"].notifyObservers(item.disableNameList[j], isDisable);
        }
      }
    }
  },
  enumItemClick: function enumItemClick(sid, characteristic, value) {
    var _this2 = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var i, enumData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < _this2.data.enumDataList.length)) {
                _context.next = 12;
                break;
              }

              enumData = _this2.data.enumDataList[i];

              if (!(enumData.sid == sid && enumData.characteristic == characteristic)) {
                _context.next = 9;
                break;
              }

              if (!(enumData.disable == true)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              if (!(enumData.checkedValue == value)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return");

            case 8:
              _observed["default"].setKeyValue(sid + '/' + characteristic, value);

            case 9:
              i++;
              _context.next = 1;
              break;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getEnumHeight: function getEnumHeight(enumData) {
    var enumHeight = 0;

    if (enumData.enumItemList.length <= 4) {
      enumHeight = enumHeight + LOW_ENUM_HEIGHT;
    } else {
      enumHeight = enumHeight + HIGH_ENUM_HEIGHT;
    }

    enumHeight = enumHeight + MARGIN;
    return enumHeight;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var INTERVAL = 200;
var ICON_LEFT = 24;
var ICON_TOP = 16;
var ICON_RIGHT = 48;
var ICON_BOTTOM = 40;
var INCREASE_DECREASE_HEIGHT = 64;
var MARGIN = 8;

var IncreaseDecreaseObj = function IncreaseDecreaseObj() {
  (0, _classCallCheck2["default"])(this, IncreaseDecreaseObj);
  this.name = '';
  this.sid = '';
  this.characteristic = '';
  this.defaultValue = 0;
  this.operationValue = 0;
  this.iconDecrease = '';
  this.iconIncrease = '';
  this.ableIconDecrease = '';
  this.ableIconIncrease = '';
  this.disableIconDecrease = '';
  this.disableIconIncrease = '';
  this.decreaseDownStartTime = 0;
  this.decreaseDown = false;
  this.decreaseDownLong = false;
  this.increaseDownStartTime = 0;
  this.increaseDown = false;
  this.increaseDownLong = false;
  this.max = 0;
  this.min = 0;
  this.ratio = 0;
  this.step = 0;
  this.item = {};
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = '#FFFFFF';
};

var _default = {
  props: {
    increasedecreaseData: {
      "default": ''
    }
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var increaseDecreaseData = this.initIncreaseDecreaseData(templateUIInfo[idx], url);
    return increaseDecreaseData;
  },
  initIncreaseDecreaseData: function initIncreaseDecreaseData(increasedecreaseUIInfo, url) {
    var _this = this;

    var increaseDecreaseData = new IncreaseDecreaseObj();
    increaseDecreaseData.name = increasedecreaseUIInfo.name;
    increaseDecreaseData.sid = increasedecreaseUIInfo.command[0].sid;
    increaseDecreaseData.characteristic = increasedecreaseUIInfo.command[0].characteristic;
    increaseDecreaseData.defaultValue = increasedecreaseUIInfo.command[0].defaultValue;
    increaseDecreaseData.operationValue = increasedecreaseUIInfo.command[0].defaultValue;
    increaseDecreaseData.ableIconDecrease = increasedecreaseUIInfo.command[0].iconDecrease;
    increaseDecreaseData.ableIconIncrease = increasedecreaseUIInfo.command[0].iconIncrease;
    increaseDecreaseData.disableIconDecrease = increasedecreaseUIInfo.command[0].disableIconDecrease;
    increaseDecreaseData.disableIconIncrease = increasedecreaseUIInfo.command[0].disableIconIncrease;
    increaseDecreaseData.max = increasedecreaseUIInfo.command[0].max;
    increaseDecreaseData.min = increasedecreaseUIInfo.command[0].min;
    increaseDecreaseData.ratio = increasedecreaseUIInfo.command[0].ratio;
    increaseDecreaseData.step = increasedecreaseUIInfo.command[0].step;
    increaseDecreaseData.item = _item["default"].convertJson(increasedecreaseUIInfo.displayItem, url, increasedecreaseUIInfo.gravity, increasedecreaseUIInfo.heightType, 'center');

    _observed["default"].addObserver(increaseDecreaseData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(increaseDecreaseData, value);
    }.bind(this));

    _observed["default"].addObserver(increaseDecreaseData.sid + '/' + increaseDecreaseData.characteristic, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);
      increaseDecreaseData.operationValue = value;

      if (value <= increaseDecreaseData.min) {
        increaseDecreaseData.iconDecrease = url + increaseDecreaseData.disableIconDecrease;
      } else {
        increaseDecreaseData.iconDecrease = url + increaseDecreaseData.ableIconDecrease;
      }

      if (value >= increaseDecreaseData.max) {
        increaseDecreaseData.iconIncrease = url + increaseDecreaseData.disableIconIncrease;
      } else {
        increaseDecreaseData.iconIncrease = url + increaseDecreaseData.ableIconIncrease;
      }
    }.bind(this));

    return increaseDecreaseData;
  },
  onTouchStart: function onTouchStart(isIncrease) {
    var isClickEnable = this.isClickEnable(false);

    if (this.increasedecreaseData.disable || !isClickEnable) {
      return;
    }

    if (isIncrease) {
      this.increasedecreaseData.increaseDown = true;
      this.increasedecreaseData.increaseDownStartTime = new Date().getTime();
    } else {
      this.increasedecreaseData.decreaseDown = true;
      this.increasedecreaseData.decreaseDownStartTime = new Date().getTime();
    }
  },
  onTouchMove: function onTouchMove(isIncrease, event) {
    if (this.increasedecreaseData.disable) {
      return;
    }

    var localX = event.touches[0].localX;
    var localY = event.touches[0].localY;

    if (localX < ICON_LEFT || localY < ICON_TOP || localX > ICON_RIGHT || localY > ICON_BOTTOM) {
      this.onTouchEnd();
    } else {
      var currentTime = new Date().getTime();

      if (isIncrease) {
        if (currentTime - this.increasedecreaseData.increaseDownStartTime > INTERVAL) {
          this.increasedecreaseData.increaseDownStartTime = this.increasedecreaseData.increaseDownStartTime + INTERVAL;
          this.increasedecreaseData.increaseDownLong = true;
          this.increaseDecreaseValue(true);
        }
      } else if (currentTime - this.increasedecreaseData.decreaseDownStartTime > INTERVAL) {
        this.increasedecreaseData.decreaseDownStartTime = this.increasedecreaseData.decreaseDownStartTime + INTERVAL;
        this.increasedecreaseData.decreaseDownLong = true;
        this.increaseDecreaseValue(false);
      }
    }
  },
  onTouchEnd: function onTouchEnd(isIncrease) {
    if (isIncrease) {
      if (this.increasedecreaseData.disable || !this.increasedecreaseData.increaseDown) {
        return;
      }

      this.increasedecreaseData.increaseDown = false;

      if (!this.increasedecreaseData.increaseDownLong) {
        this.increaseDecreaseValue(true);
      }

      this.increasedecreaseData.increaseDownLong = false;
    } else {
      if (this.increasedecreaseData.disable || !this.increasedecreaseData.decreaseDown) {
        return;
      }

      this.increasedecreaseData.decreaseDown = false;

      if (!this.increasedecreaseData.decreaseDownLong) {
        this.increaseDecreaseValue(false);
      }

      this.increasedecreaseData.decreaseDownLong = false;
    }
  },
  isClickEnable: function isClickEnable(isIncrease) {
    var isValueEnable = this.isValueEnable(isIncrease);

    if (!isValueEnable) {
      return false;
    }

    return true;
  },
  increaseDecreaseValue: function increaseDecreaseValue(isIncrease) {
    var operationValue = this.getOperationValue(isIncrease);

    if (operationValue == this.increasedecreaseData.operationValue) {
      return;
    }

    _observed["default"].setKeyValue(this.increasedecreaseData.sid + '/' + this.increasedecreaseData.characteristic, operationValue);
  },
  isValueEnable: function isValueEnable(isIncrease) {
    if (isIncrease) {
      if (this.increasedecreaseData.operationValue >= this.increasedecreaseData.max) {
        return false;
      }
    } else if (this.increasedecreaseData.operationValue <= this.increasedecreaseData.min) {
      return false;
    }

    return true;
  },
  getOperationValue: function getOperationValue(isIncrease) {
    var value = this.increasedecreaseData.operationValue;
    var operationValue = value;

    if (isIncrease) {
      if (value > this.increasedecreaseData.max) {
        return value;
      }

      if (value + this.increasedecreaseData.step > this.increasedecreaseData.max) {
        operationValue = this.increasedecreaseData.max;
      } else {
        operationValue = value + this.increasedecreaseData.step;
      }
    } else {
      if (value <= this.increasedecreaseData.min) {
        return value;
      }

      if (value - this.increasedecreaseData.step < this.increasedecreaseData.min) {
        operationValue = this.increasedecreaseData.min;
      } else {
        operationValue = value - this.increasedecreaseData.step;
      }
    }

    return operationValue;
  },
  getIncreasedecreaseHeight: function getIncreasedecreaseHeight() {
    return INCREASE_DECREASE_HEIGHT + MARGIN;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js":
/*!****************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js ***!
  \****************************************************************************************************************/
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

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _enum = _interopRequireDefault(__webpack_require__(/*! ../enum/enum.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js"));

var UI_TYPE_ENUM = 'ENUM';
var GRAVITY_CENTER = 'center';
var GRAVITY_CENTER_DIVIDER = 'centerDivider';
var SUB_TYPE_TEXT = 'text';
var SUB_TYPE_ICON = 'icon';
var SUB_TYPE_ICON_TEXT_VERTICAL = 'iconTextVertical';
var SUB_TYPE_ICON_TEXT_HORIZONTAL = 'iconTextHorizontal';
var LOCATION_LEFT = 'left';
var LOCATION_CENTER = 'center';
var FLEX_LOCATION_START = 'flex-start';
var FLEX_LOCATION_CENTER = 'center';
var FLEX_LOCATION_END = 'flex-end';
var HEIGHT_TYPE_LOW = 'low';
var DEFAULT_GRAVITY_LEFT_TEXT_SIZE = '18px';
var CENTER_GRAVITY_LEFT_TEXT_SIZE = '24px';
var HEIGHT_TYPE_LOW_TEXT_SIZE = '16px';
var TEXT_DEFAULT_COLOR = '#000000';
var DEFAULT_VALUE = '--';

var LocationTextObj = function LocationTextObj() {
  (0, _classCallCheck2["default"])(this, LocationTextObj);
  this.text = '';
  this.paramText = '';
  this.path = '';
  this.textDesc = '';
  this.size = '';
  this.color = TEXT_DEFAULT_COLOR;
  this.colorDesc = '';
  this.show = false;
  this.ratio = 1;
};

var LocationIconObj = function LocationIconObj() {
  (0, _classCallCheck2["default"])(this, LocationIconObj);
  this.icon = '';
  this.path = '';
  this.valueList = [];
};

var TextItemObj = function TextItemObj() {
  (0, _classCallCheck2["default"])(this, TextItemObj);
  this.upLeft = new LocationTextObj();
  this.upRight = new LocationTextObj();
  this.down = new LocationTextObj();
};

var IconItemObj = function IconItemObj() {
  (0, _classCallCheck2["default"])(this, IconItemObj);
  this.upLeft = new LocationIconObj();
  this.upRight = new LocationTextObj();
  this.down = new LocationTextObj();
};

var ItemObj = function ItemObj(url, itemLocation) {
  (0, _classCallCheck2["default"])(this, ItemObj);
  this.url = url;
  this.textItem = new TextItemObj();
  this.showTextItem = false;
  this.iconItem = new IconItemObj();
  this.showIconItem = false;
  this.itemLocation = itemLocation;
};

var _default = {
  props: {
    itemdata: {
      "default": {}
    }
  },
  convertJson: function convertJson(itemInfo, url, gravity, heightType, itemLocation) {
    itemLocation = this.convertItemLocation(itemLocation);
    var itemData = new ItemObj(url, itemLocation);

    if (itemInfo.subType == SUB_TYPE_TEXT) {
      itemData.showTextItem = true;
      this.setLocationText(itemData.textItem.upLeft, itemInfo.textDisplay.upLeft);
      this.addTextObserver(itemData.textItem.upLeft, itemInfo.textDisplay.upLeft);
      this.setUpLeftTextSize(itemData.textItem, heightType, gravity, itemLocation);

      if ('value' in itemInfo.textDisplay.upRight) {
        this.setLocationText(itemData.textItem.upRight, itemInfo.textDisplay.upRight);
        this.addTextObserver(itemData.textItem.upRight, itemInfo.textDisplay.upRight);
      }

      if ('value' in itemInfo.textDisplay.down && (itemData.textItem.upLeft.text != '' || itemData.textItem.upRight.text != '')) {
        this.setLocationText(itemData.textItem.down, itemInfo.textDisplay.down);
        this.addTextObserver(itemData.textItem.down, itemInfo.textDisplay.down);
      }

      return itemData;
    } else if (itemInfo.subType == SUB_TYPE_ICON) {
      this.setLocationIcon(itemData.iconItem.upLeft, itemInfo.icon);
      this.addIconObserver(itemData.iconItem.upLeft, itemInfo.icon, url);
    } else if (itemInfo.subType == SUB_TYPE_ICON_TEXT_VERTICAL) {
      itemData.iconItem.down.show = true;
      this.setLocationIcon(itemData.iconItem.upLeft, itemInfo.icon);
      this.addIconObserver(itemData.iconItem.upLeft, itemInfo.icon, url);
      this.setLocationIconText(itemData.iconItem.down, itemInfo);
      this.addTextObserver(itemData.iconItem.down, itemInfo.iconText);
    } else if (itemInfo.subType == SUB_TYPE_ICON_TEXT_HORIZONTAL) {
      itemData.iconItem.upRight.show = true;
      this.setLocationIcon(itemData.iconItem.upLeft, itemInfo.icon);
      this.addIconObserver(itemData.iconItem.upLeft, itemInfo.icon, url);
      this.setLocationIconText(itemData.iconItem.upRight, itemInfo);
      this.addTextObserver(itemData.iconItem.upRight, itemInfo.iconText);
    }

    itemData.showIconItem = true;
    return itemData;
  },
  addTextObserver: function addTextObserver(locationText, jsonText) {
    var _this = this;

    if (jsonText.type == 'dynamicText') {
      locationText.show = false;
      var path = this.getPath(jsonText.value);

      _observed["default"].addObserver(path, function (key, value) {
        (0, _newArrowCheck2["default"])(this, _this);

        if (typeof value == 'string' && value == '') {
          locationText.show = false;
        } else {
          locationText.show = true;
        }

        if (/^\d+([\.]\d+)?$/.test(value)) {
          this.setLocationTextAndColor(locationText, key, Math.round(value * locationText.ratio));
        } else {
          this.setLocationTextAndColor(locationText, key, value);
        }
      }.bind(this));
    }
  },
  addIconObserver: function addIconObserver(locationIcon, jsonIcon, url) {
    var _this2 = this;

    _observed["default"].addObserver(jsonIcon.path, function (path, value) {
      (0, _newArrowCheck2["default"])(this, _this2);
      this.setDefaultLocationIcon(locationIcon, path, value, url);
    }.bind(this));
  },
  convertItemLocation: function convertItemLocation(itemLocation) {
    if (itemLocation == LOCATION_LEFT) {
      return FLEX_LOCATION_START;
    } else if (itemLocation == LOCATION_CENTER) {
      return FLEX_LOCATION_CENTER;
    } else {
      return FLEX_LOCATION_END;
    }
  },
  setLocationTextAndColor: function setLocationTextAndColor(locationText, path, data) {
    if (locationText.show && locationText.path == path) {
      var textValue = _utils["default"].getValueTarget(data, locationText.textDesc.value);

      locationText.text = locationText.paramText.replace('${', '').replace('}', '').replace(locationText.path, textValue);

      var colorValue = '#' + _utils["default"].getValueTarget(data, locationText.colorDesc.value);

      if (this.checkIsColor(colorValue)) {
        locationText.color = colorValue;
      }
    }
  },
  setDefaultLocationIcon: function setDefaultLocationIcon(locationIcon, path, data, url) {
    var iconValue = _utils["default"].getValueDefaultTarget(data, locationIcon.valueList);

    locationIcon.icon = url + iconValue;
  },
  checkIsColor: function checkIsColor(color) {
    var RegExp = /^#[0-9A-F]{6}$/i;

    if (RegExp.test(color)) {
      return true;
    }

    return false;
  },
  setLocationText: function setLocationText(locationText, jsonText) {
    locationText.show = true;

    if ('color' in jsonText) {
      locationText.colorDesc = jsonText.color;
    }

    if ('description' in jsonText) {
      locationText.textDesc = jsonText.description;
      locationText.path = jsonText.description.path;
    } else {
      locationText.path = this.getPath(jsonText.value);
    }

    if ('ratio' in jsonText) {
      locationText.ratio = parseFloat(jsonText.ratio);
    }

    if (jsonText.type == 'normalText') {
      locationText.text = jsonText.value;
    } else {
      locationText.text = DEFAULT_VALUE;
    }

    locationText.paramText = jsonText.value;
  },
  getPath: function getPath(value) {
    if (value.indexOf('${') != -1 && value.indexOf('}') != -1) {
      return value.substring(value.indexOf('${') + 2, value.indexOf('}'));
    } else {
      return '';
    }
  },
  setLocationIcon: function setLocationIcon(locationIcon, jsonIcon) {
    locationIcon.path = jsonIcon.path;
    locationIcon.valueList = jsonIcon.value;
  },
  setLocationIconText: function setLocationIconText(locationIconText, itemInfo) {
    locationIconText.text = itemInfo.iconText.value;
    locationIconText.path = itemInfo.icon.path;
    locationIconText.paramText = itemInfo.iconText.value;
  },
  setUpLeftTextSize: function setUpLeftTextSize(textItem, heightType, gravity, itemLocation) {
    if (heightType == HEIGHT_TYPE_LOW) {
      if (gravity == GRAVITY_CENTER || gravity == GRAVITY_CENTER_DIVIDER) {
        textItem.upLeft.size = CENTER_GRAVITY_LEFT_TEXT_SIZE;
      } else if (textItem.down.show && itemLocation == LOCATION_CENTER) {
        textItem.upLeft.size = CENTER_GRAVITY_LEFT_TEXT_SIZE;
      } else {
        textItem.upLeft.size = HEIGHT_TYPE_LOW_TEXT_SIZE;
      }
    } else if (gravity == GRAVITY_CENTER || gravity == GRAVITY_CENTER_DIVIDER) {
      textItem.upLeft.size = CENTER_GRAVITY_LEFT_TEXT_SIZE;
    } else if (itemLocation == LOCATION_CENTER) {
      textItem.upLeft.size = CENTER_GRAVITY_LEFT_TEXT_SIZE;
    } else {
      textItem.upLeft.size = DEFAULT_GRAVITY_LEFT_TEXT_SIZE;
    }
  },
  itemClick: function itemClick() {
    var _this3 = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this3.itemdata.type == UI_TYPE_ENUM)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _enum["default"].enumItemClick(_this3.itemdata.sid, _this3.itemdata.characteristic, _this3.itemdata.value);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/timeitem.js":
/*!********************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/timeitem.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var ONE_SECOND = 1000;
var SIXTY = 60;
var SHOW_DIGITS = 2;

var ItemObj = function ItemObj() {
  (0, _classCallCheck2["default"])(this, ItemObj);
  this.time = '';
  this.desc = '';
  this.show = false;
};

var _default = {
  props: {
    itemdata: {
      "default": {}
    }
  },
  data: {
    second: -1
  },
  convertJson: function convertJson(itemInfo) {
    var _this = this;

    var itemData = new ItemObj();
    itemData.desc = itemInfo.textDisplay.down.value;
    var path = this.getPath(itemInfo.textDisplay.upLeft.value);

    _observed["default"].addObserver(path, function (key, value) {
      var _this2 = this;

      (0, _newArrowCheck2["default"])(this, _this);
      this.data.second = value;

      if (value < 0) {
        itemData.show = false;
      } else {
        itemData.show = true;
      }

      itemData.time = this.convertTime(value);
      var interval = setInterval(function () {
        (0, _newArrowCheck2["default"])(this, _this2);
        value = value - 1;

        if (value < 0 || this.data.second < 0) {
          clearInterval(interval);
        } else {
          itemData.time = this.convertTime(value);
        }
      }.bind(this), ONE_SECOND);
    }.bind(this));

    return itemData;
  },
  getPath: function getPath(value) {
    return value.substring(value.indexOf('${') + 2, value.indexOf('}'));
  },
  convertTime: function convertTime(value) {
    // convert seconds to hh:mm:ss
    var hours = parseInt(value / SIXTY / SIXTY);
    var minutes = parseInt((value - hours * SIXTY * SIXTY) / SIXTY);
    var seconds = parseInt(value - hours * SIXTY * SIXTY - minutes * SIXTY);
    return ('00' + hours).slice(-SHOW_DIGITS) + ':' + ('00' + minutes).slice(-SHOW_DIGITS) + ':' + ('00' + seconds).slice(-SHOW_DIGITS);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _timeitem = _interopRequireDefault(__webpack_require__(/*! ../item/timeitem.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/timeitem.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var BACKGROUND_COLOR = '#FFFFFF';
var MULTIFUNCTION_HEIGHT = 88;
var MARGIN = 8;

var MultifunctionCommandObj = function MultifunctionCommandObj() {
  (0, _classCallCheck2["default"])(this, MultifunctionCommandObj);
  this.sid = '';
  this.characteristic = '';
  this.value = 0;
  this.valueString = '';
  this.icon = '';
  this.ableIcon = '';
  this.disableIcon = '';
  this.disableNameList = [];
};

var MultifunctionObj = function MultifunctionObj() {
  (0, _classCallCheck2["default"])(this, MultifunctionObj);
  this.name = '';
  this.commandOne = new MultifunctionCommandObj();
  this.commandTwo = new MultifunctionCommandObj();
  this.commandSize = 0;
  this.multifunctionInfo = null;
  this.itemOne = null;
  this.itemTwo = null;
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    multifunctionData: {
      "default": ''
    }
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var multifunctionData = this.initMultifunctionData(templateUIInfo[idx], url);
    return multifunctionData;
  },
  initMultifunctionData: function initMultifunctionData(multifunctionUIInfo, url) {
    var _this = this;

    var multifunctionData = new MultifunctionObj();
    multifunctionData.name = multifunctionUIInfo.name;
    multifunctionData.itemOne = _item["default"].convertJson(multifunctionUIInfo.displayItemOne, url, multifunctionUIInfo.gravity, multifunctionUIInfo.heightType, 'left');
    multifunctionData.itemTwo = _item["default"].convertJson(multifunctionUIInfo.displayItemTwo, url, multifunctionUIInfo.gravity, multifunctionUIInfo.heightType, 'center'); //multifunctionData.itemTwo = timeItemView.convertJson(multifunctionUIInfo.displayItemTwo);

    multifunctionData.multifunctionInfo = multifunctionUIInfo.multifunctionInfo;

    _observed["default"].addObserver(multifunctionData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);
      multifunctionData.disable = value;

      _utils["default"].setAlphaAndDisable(multifunctionData, value);

      this.setIconDisable(multifunctionData.commandOne, value);

      if (multifunctionData.commandSize == 2) {
        this.setIconDisable(multifunctionData.commandTwo, value);
      }
    }.bind(this));

    _observed["default"].addObserver(multifunctionData.multifunctionInfo.path, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      var commands = _utils["default"].getValue(value, multifunctionData.multifunctionInfo.value);

      this.setOtherDisable(multifunctionData.commandOne, false);
      this.setOtherDisable(multifunctionData.commandTwo, false);
      multifunctionData.commandSize = 0;

      if ('commandOne' in commands) {
        this.setCommandObj(multifunctionData.commandOne, commands.commandOne[0], url);
        multifunctionData.commandSize = multifunctionData.commandSize + 1;
        this.setOtherDisable(multifunctionData.commandOne, true);
      }

      if ('commandTwo' in commands) {
        this.setCommandObj(multifunctionData.commandTwo, commands.commandTwo[0], url);
        multifunctionData.commandSize = multifunctionData.commandSize + 1;
        this.setOtherDisable(multifunctionData.commandTwo, true);
      }
    }.bind(this));

    return multifunctionData;
  },
  setCommandObj: function setCommandObj(commandObj, commandJson, url) {
    commandObj.sid = commandJson.sid;
    commandObj.characteristic = commandJson.characteristic;
    commandObj.ableIcon = url + commandJson.icon;
    commandObj.disableIcon = url + commandJson.disableIcon;
    commandObj.icon = url + commandJson.icon;
    commandObj.value = commandJson.value;

    if ('valueString' in commandJson) {
      commandObj.valueString = commandJson.valueString;
    }

    if ('disable' in commandJson) {
      commandObj.disableNameList = commandJson.disable.name;
    }
  },
  setIconDisable: function setIconDisable(command, isDisable) {
    if (isDisable) {
      command.icon = command.disableIcon;
    } else {
      command.icon = command.ableIcon;
    }
  },
  setOtherDisable: function setOtherDisable(command, isDisable) {
    for (var i = 0; i < command.disableNameList.length; i++) {
      _observed["default"].notifyObservers(command.disableNameList[i], isDisable);
    }
  },
  commandClick: function commandClick(command) {
    _observed["default"].setKeyValue(command.sid + '/' + command.characteristic, command.value);
  },
  getMultifunctionHeight: function getMultifunctionHeight() {
    return MULTIFUNCTION_HEIGHT + MARGIN;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.js":
/*!************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var BACKGROUND_COLOR = '#FFFFFF';
var PROGRESS_HEIGHT = 64;
var MARGIN = 8;

var ProgressObj = function ProgressObj() {
  (0, _classCallCheck2["default"])(this, ProgressObj);
  this.name = '';
  this.sid = '';
  this.characteristic = '';
  this.max = 0;
  this.min = 0;
  this.ratio = 0;
  this.operationValue = 0;
  this.leftItem = {};
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    progressData: {
      "default": ''
    }
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var progressData = this.initProgressData(templateUIInfo[idx], url);
    return progressData;
  },
  initProgressData: function initProgressData(progressUIInfo, url) {
    var _this = this;

    var progressData = new ProgressObj();
    progressData.name = progressUIInfo.name;
    progressData.sid = progressUIInfo.command[0].sid;
    progressData.characteristic = progressUIInfo.command[0].characteristic;
    progressData.max = progressUIInfo.command[0].max;
    progressData.min = progressUIInfo.command[0].min;
    progressData.ratio = progressUIInfo.command[0].ratio;
    progressData.operationValue = progressUIInfo.command[0].defaultValue;
    progressData.leftItem = _item["default"].convertJson(progressUIInfo.displayItemLeft, url, progressUIInfo.gravity, progressUIInfo.heightType, 'left');

    _observed["default"].addObserver(progressData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(progressData, value);
    }.bind(this));

    _observed["default"].addObserver(progressData.sid + '/' + progressData.characteristic, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);
      progressData.operationValue = value;
    }.bind(this));

    return progressData;
  },
  valueChange: function valueChange(progressData) {
    this.progressData.operationValue = progressData.progress;

    if (progressData.isEnd == 'true') {
      _observed["default"].setKeyValue(this.progressData.sid + '/' + this.progressData.characteristic, this.progressData.operationValue);
    }
  },
  getProgressHeight: function getProgressHeight() {
    return PROGRESS_HEIGHT + MARGIN;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.js":
/*!************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.js ***!
  \************************************************************************************************************************/
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

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var UI_TYPE_REVERSAL = 'REVERSAL';
var LOCATION_LEFT = 'left';
var LOCATION_CENTER = 'center';
var BACKGROUND_COLOR = '#FFFFFF';
var HIGH_REVERSAL_HEIGHT = 88;
var LOW_REVERSAL_HEIGHT = 64;
var MARGIN = 8;

var ReversalObj = function ReversalObj(name, url) {
  (0, _classCallCheck2["default"])(this, ReversalObj);
  this.name = name;
  this.url = url;
  this.showCurrentReversal = false;
  this.showNextReversal = false;
  this.command = [];
  this.value = '';
  this.nextValue = '';
  this.leftItem = null;
  this.centerItem = null;
  this.rightIcon = '';
  this.otherDisable = false;
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.heightType = '';
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    reversalData: {
      "default": []
    }
  },
  data: {
    reversalDataList: []
  },
  resetReversalDataList: function resetReversalDataList() {
    this.data.reversalDataList = [];
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var index = _utils["default"].getCurrentIndex(idx, templateUIInfo, UI_TYPE_REVERSAL);

    if (this.data.reversalDataList.length == 0) {
      this.initReversalDataList(templateUIInfo, url);
    }

    if (this.data.reversalDataList[index].showCurrentReversal && this.data.reversalDataList[index].showNextReversal) {
      return [this.data.reversalDataList[index], this.data.reversalDataList[index + 1]];
    } else if (this.data.reversalDataList[index].showCurrentReversal) {
      return [this.data.reversalDataList[index]];
    } else {
      return [];
    }
  },
  initReversalDataList: function initReversalDataList(templateUIInfo, url) {
    var showCurrentReversal = false;
    var showNextReversal = false;

    for (var i = 0; i < templateUIInfo.length; i++) {
      var reversalData = new ReversalObj(templateUIInfo[i].name, url);

      if (templateUIInfo[i].uiType == UI_TYPE_REVERSAL) {
        if (templateUIInfo[i].heightType == 'default') {
          reversalData.heightType = 'high';
        } else {
          reversalData.heightType = 'low';
        }

        reversalData.command = templateUIInfo[i].command;

        if (templateUIInfo[i].span == 1 || i + 1 < templateUIInfo.length && templateUIInfo[i + 1].uiType != UI_TYPE_REVERSAL && !showNextReversal || i + 1 == templateUIInfo.length && templateUIInfo[i].span != 1 && !showNextReversal) {
          showCurrentReversal = true;
          showNextReversal = false;
        } else {
          if (showNextReversal == false) {
            showCurrentReversal = true;
            showNextReversal = true;
          } else {
            showCurrentReversal = false;
            showNextReversal = false;
          }
        }

        reversalData.showCurrentReversal = showCurrentReversal;
        reversalData.showNextReversal = showNextReversal;

        if (templateUIInfo[i].displayItemOne != null) {
          reversalData.showLeftItem = true;
          reversalData.leftItem = _item["default"].convertJson(templateUIInfo[i].displayItemOne, url, templateUIInfo[i].gravity, templateUIInfo[i].heightType, LOCATION_LEFT);
          reversalData.leftItem.type = UI_TYPE_REVERSAL;
        }

        if (templateUIInfo[i].displayItemTwo != null) {
          reversalData.showCurrentReversal = true;
          reversalData.centerItem = _item["default"].convertJson(templateUIInfo[i].displayItemTwo, url, templateUIInfo[i].gravity, templateUIInfo[i].heightType, LOCATION_CENTER);
          reversalData.centerItem.type = UI_TYPE_REVERSAL;
        }

        this.addObserver(reversalData);
        this.data.reversalDataList.push(reversalData);
      }
    }
  },
  addObserver: function addObserver(reversalData) {
    var _this = this;

    _observed["default"].addObserver(reversalData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(reversalData, value);

      this.updateIconDisable(reversalData, value);
    }.bind(this));

    var path = reversalData.command[0].sid + '/' + reversalData.command[0].characteristic;

    _observed["default"].addObserver(path, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      if (value !== reversalData.value) {
        this.updateReversalIcon(key, value, reversalData);
        this.setOtherDisable(reversalData);
        reversalData.value = value;
      }
    }.bind(this));
  },
  updateIconDisable: function updateIconDisable(reversalData, isDisable) {
    for (var i = 0; i < reversalData.command[0].reversal.length; i++) {
      var reversalItem = reversalData.command[0].reversal[i];

      if (reversalItem.value == reversalData.value) {
        if (isDisable) {
          var icon = reversalItem.disableIcon;
          reversalData.rightIcon = reversalData.url + icon;
        } else if (reversalData.value != 0) {
          var _icon = reversalItem.icon;
          reversalData.rightIcon = reversalData.url + _icon;
        }
      }
    }
  },
  updateReversalIcon: function updateReversalIcon(path, data, reversalData) {
    data = data == 0 ? 0 : 1;
    var sid = path.split('/')[0];
    var characteristic = path.split('/')[1];

    for (var j = 0; j < reversalData.command[0].reversal.length; j++) {
      if (sid == reversalData.command[0].sid && characteristic == reversalData.command[0].characteristic) {
        var reversalItem = reversalData.command[0].reversal[j];

        if (reversalItem.value == data) {
          var icon = reversalItem.icon;
          reversalData.rightIcon = reversalData.url + icon;

          if ('disable' in reversalItem) {
            reversalData.otherDisable = true;
          } else {
            reversalData.otherDisable = false;
          }
        } else {
          reversalData.nextValue = reversalItem.value;
        }
      } else {
        continue;
      }
    }
  },
  setOtherDisable: function setOtherDisable(reversalData) {
    for (var i = 0; i < reversalData.command[0].reversal.length; i++) {
      if ('disable' in reversalData.command[0].reversal[i]) {
        var nameList = reversalData.command[0].reversal[i].disable.name;

        for (var j = 0; j < nameList.length; j++) {
          _observed["default"].notifyObservers(nameList[j], reversalData.otherDisable);
        }
      }
    }
  },
  reverseIconClick: function reverseIconClick(index) {
    var _this2 = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var reversalData, value, dialogKeyValue, path, i;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reversalData = _this2.reversalData[index];

              if (!(reversalData.disable == true)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              value = reversalData.value == 0 ? 0 : 1;

              if (!('operable' in reversalData.command[0].reversal[value] && reversalData.command[0].reversal[value].operable == false)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              if ('dialogList' in reversalData.command[0].reversal[reversalData.value]) {
                dialogKeyValue = {};
                path = reversalData.command[0].sid + '/' + reversalData.command[0].characteristic;
                dialogKeyValue.path = path;
                dialogKeyValue[path] = reversalData.nextValue;
                dialogKeyValue.dialogList = [];

                for (i = 0; i < reversalData.command[0].reversal[reversalData.value].dialogList.length; i++) {
                  dialogKeyValue.dialogList.push(reversalData.command[0].reversal[reversalData.value].dialogList[i]);
                }

                _observed["default"].notifyObservers(reversalData.command[0].reversal[reversalData.value].dialogList[0], dialogKeyValue);
              } else {
                _observed["default"].setKeyValue(reversalData.command[0].sid + '/' + reversalData.command[0].characteristic, reversalData.nextValue);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getReversalHeight: function getReversalHeight(reversalData) {
    var reversalHeight = 0;

    if (reversalData.length == 1 && reversalData[0].showCurrentReversal) {
      if (reversalData[0].heightType == 'low') {
        reversalHeight = LOW_REVERSAL_HEIGHT + MARGIN;
      } else {
        reversalHeight = HIGH_REVERSAL_HEIGHT + MARGIN;
      }
    } else if (reversalData.length == 2) {
      reversalHeight = LOW_REVERSAL_HEIGHT + MARGIN;
    }

    return reversalHeight;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var ItemObj = function ItemObj(path, icon, iconNight, text, value) {
  (0, _classCallCheck2["default"])(this, ItemObj);
  this.path = path;
  this.icon = icon;
  this.iconNight = iconNight;
  this.text = text;
  this.value = value;
};

var CustomDisplayItemObj = function CustomDisplayItemObj(title) {
  (0, _classCallCheck2["default"])(this, CustomDisplayItemObj);
  this.title = title;
  this.itemList = [];
};

var _default = {
  props: {
    customDisplayItemList: {
      "default": []
    }
  },
  convertJson: function convertJson(deviceInfo) {
    var customDisplayItemList = [];

    for (var i = 0; i < deviceInfo.customDisplayUIInfo.length; i++) {
      var customDisplayItem = new CustomDisplayItemObj(deviceInfo.customDisplayUIInfo[i].title);
      var path = deviceInfo.customDisplayUIInfo[i].sid + '/' + deviceInfo.customDisplayUIInfo[i].characteristic;

      for (var j = 0; j < deviceInfo.customDisplayUIInfo[i].itemList.length; j++) {
        var item = new ItemObj(path, deviceInfo.iconUrl + deviceInfo.customDisplayUIInfo[i].itemList[j].icon, deviceInfo.iconUrl + deviceInfo.customDisplayUIInfo[i].itemList[j].iconNight, deviceInfo.customDisplayUIInfo[i].itemList[j].text, deviceInfo.customDisplayUIInfo[i].itemList[j].value);
        customDisplayItem.itemList.push(item);
      }

      customDisplayItemList.push(customDisplayItem);
    }

    return customDisplayItemList;
  },
  iconClick: function iconClick(item) {
    var customDisplayData = {
      path: item.path,
      value: item.value,
      title: item.text
    };
    this.$emit('iconClick', customDisplayData);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enumlist = _interopRequireDefault(__webpack_require__(/*! ./enumlist/enumlist.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.js"));

var _info = _interopRequireDefault(__webpack_require__(/*! ./info/info.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.js"));

var _picker = _interopRequireDefault(__webpack_require__(/*! ./picker/picker.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.js"));

var _radiolist = _interopRequireDefault(__webpack_require__(/*! ./radiolist/radiolist.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.js"));

var BACKGROUND_COLOR = '#ffffff';
var _default = {
  data: {
    dialogList: [],
    dialogKeyValue: null
  },
  setDialogKeyValue: function setDialogKeyValue(dialogKeyValue) {
    this.dialogKeyValue = dialogKeyValue;
  },
  getDialogKeyValue: function getDialogKeyValue() {
    return this.dialogKeyValue;
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, url) {
    // parses the parameters of the dialog based on its type
    var dialog = {};
    dialog.id = dialogInfo.id;
    dialog.name = dialogInfo.name;
    dialog.type = dialogInfo.dialogType;
    dialog.path = dialogInfo.path;
    dialog.backgroundColor = BACKGROUND_COLOR;

    if (dialogInfo.controlItems.length == 1) {
      dialog.centerControlName = dialogInfo.controlItems[0].name;
      dialog.centerControlType = dialogInfo.controlItems[0].type;
    } else if (dialogInfo.controlItems.length == 2) {
      dialog.leftControlName = dialogInfo.controlItems[0].name;
      dialog.leftControlType = dialogInfo.controlItems[0].type;
      dialog.rightControlName = dialogInfo.controlItems[1].name;
      dialog.rightControlType = dialogInfo.controlItems[1].type;
    }

    if (dialogInfo.dialogType == 'RADIO') {
      dialog = _radiolist["default"].parseDialogInfo(dialogInfo, dialog, url);
    } else if (dialogInfo.dialogType == 'ENUM') {
      dialog = _enumlist["default"].parseDialogInfo(dialogInfo, dialog, url);
    } else if (dialogInfo.dialogType == 'PICKER') {
      dialog = _picker["default"].parseDialogInfo(dialogInfo, dialog, url);
    } else if (dialogInfo.dialogType == 'INFO') {
      dialog = _info["default"].parseDialogInfo(dialogInfo, dialog, url);
    }

    return dialog;
  },
  addDialog: function addDialog(dialog) {
    this.data.dialogList.push(dialog);
  },
  updateDialog: function updateDialog(dialog) {
    for (var i = 0; i < this.data.dialogList.length; i++) {
      if (this.data.dialogList[i].path == dialog.path) {
        this.data.dialogList[i] = dialog;
        break;
      }
    }
  },
  getDialog: function getDialog(key, value) {
    var dialog = {};

    for (var i = 0; i < this.data.dialogList.length; i++) {
      if (this.data.dialogList[i].id == key) {
        dialog = this.data.dialogList[i];
        dialog.dialogKeyValue = value;
      }
    }

    return dialog;
  },
  cloneDialogKeyValue: function cloneDialogKeyValue(data) {
    var dialogKeyValue = {};

    for (var key in data.dialogKeyValue) {
      dialogKeyValue[key] = data.dialogKeyValue[key];
    }

    dialogKeyValue.dialogList = [];

    for (var i = 0; i < data.dialogKeyValue.dialogList.length; i++) {
      dialogKeyValue.dialogList.push(data.dialogKeyValue.dialogList[i]);
    }

    return dialogKeyValue;
  },
  resetDialogData: function resetDialogData() {
    // If the dialog type is ENUM, reset the displayed image to the default unclicked state
    var dialogList = this.data.dialogList;

    for (var i = 0; i < dialogList.length; i++) {
      if (dialogList[i].type == 'ENUM') {
        for (var j = 0; j < dialogList[i].items.length; j++) {
          var rowItems = dialogList[i].items[j];

          for (var k = 0; k < rowItems.length; k++) {
            rowItems[k].icon = rowItems[k].defaultTarget;
          }
        }
      }
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var ENUMERATOR_PRE_ROW = 4;
var ENUM_ROW_HEIGHT = 106;
var _default = {
  props: {
    enumListData: {
      "default": {}
    }
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, dialog, url) {
    var items = [];
    var height = 0;

    for (var i = 0; i < dialogInfo.command.length / ENUMERATOR_PRE_ROW; i++) {
      var rowItems = [];

      for (var j = ENUMERATOR_PRE_ROW * i; j < Math.min(dialogInfo.command.length, ENUMERATOR_PRE_ROW * i + ENUMERATOR_PRE_ROW); j++) {
        var item = {};
        item.target = url + dialogInfo.command[j].icon.value.target;
        item.defaultTarget = url + dialogInfo.command[j].icon.value.defaultTarget;
        item.nightTarget = url + dialogInfo.command[j].icon.valueNight.target;
        item.defaultNightTarget = url + dialogInfo.command[j].icon.valueNight.defaultTarget;
        item.icon = item.defaultTarget;
        item.name = dialogInfo.command[j].name;
        item.value = dialogInfo.command[j].value;
        item.dialogList = dialogInfo.command[j].dialogList;
        rowItems.push(item);
      }

      items.push(rowItems);
      height = height + ENUM_ROW_HEIGHT;
    }

    dialog.height = height + 'px';
    dialog.items = items;
    return dialog;
  },
  onChange: function onChange(item) {
    for (var i = 0; i < this.enumListData.items.length; i++) {
      var rowItems = this.enumListData.items[i];

      for (var j = 0; j < rowItems.length; j++) {
        rowItems[j].icon = rowItems[j].defaultTarget;
      }
    }

    item.icon = item.target;

    var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(this.enumListData);

    dialogKeyValue[this.enumListData.path] = item.value;
    dialogKeyValue.dialogList.splice(0, 1);

    for (var _i = item.dialogList.length - 1; _i >= 0; _i--) {
      dialogKeyValue.dialogList.unshift(item.dialogList[_i]);
    }

    _dialogManager["default"].setDialogKeyValue(dialogKeyValue);
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.js":
/*!***************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var _default = {
  props: {
    infoData: {
      "default": {}
    }
  },
  onInit: function onInit() {
    var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(this.infoData);

    dialogKeyValue.dialogList.splice(0, 1);

    _dialogManager["default"].setDialogKeyValue(dialogKeyValue);
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, dialog, url) {
    dialog.icon = url + dialogInfo.icon;
    dialog.headline = dialogInfo.headline;
    dialog.desc = dialogInfo.desc;
    return dialog;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var TWO_DIGITS = 2;
var _default = {
  props: {
    pickerData: {
      "default": {}
    }
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, dialog, url) {
    var _this = this;

    dialog.pickerType = dialogInfo.pickerType;

    if (dialogInfo.pickerType == 'text') {
      dialog = this.parseTextDialog(dialogInfo, dialog);

      _observed["default"].addObserver(dialog.path, function (key, value) {
        (0, _newArrowCheck2["default"])(this, _this);

        if ('range' in value && 'value' in value) {
          dialog.range = value.range;
          dialog.value = value.value;
        }
      }.bind(this));
    } else if (dialogInfo.pickerType == 'time') {
      dialog = this.parseTimeDialog(dialogInfo, dialog);
    } else if (dialogInfo.pickerType == 'date') {
      dialog = this.parseTimeDialog(dialogInfo, dialog);
    } else if (dialogInfo.pickerType == 'datetime') {
      dialog = this.parseDateTimeDialog(dialogInfo, dialog);
    } else if (dialogInfo.pickerType == 'multi-text') {
      dialog = this.parseMultiTextDialog(dialogInfo, dialog);

      _observed["default"].addObserver(dialog.path, function (key, value) {
        (0, _newArrowCheck2["default"])(this, _this);

        if ('range' in value && 'value' in value) {
          dialog.range = value.range;
          dialog.value = value.value;
        }
      }.bind(this));
    }

    return dialog;
  },
  parseTextDialog: function parseTextDialog(dialogInfo, dialog) {
    dialog.range = dialogInfo.range;
    dialog.value = dialogInfo.value;

    if ('defaultValue' in dialogInfo) {
      dialog.selected = dialogInfo.defaultValue;
    }

    if ('preField' in dialogInfo) {
      dialog.indicatorprefix = dialogInfo.preField;
    } else {
      dialog.indicatorprefix = '';
    }

    if ('postField' in dialogInfo) {
      dialog.indicatorsuffix = dialogInfo.postField;
    } else {
      dialog.indicatorsuffix = '';
    }

    return dialog;
  },
  parseTimeDialog: function parseTimeDialog(dialogInfo, dialog) {
    if ('defalutValue' in dialogInfo) {
      dialog.selected = dialogInfo.defaultValue;
    }

    if ('containSecond' in dialogInfo) {
      dialog.containsecond = dialogInfo.containSecond;
    }

    if ('hours' in dialogInfo) {
      dialog.hours = dialogInfo.hours;
    }

    return dialog;
  },
  parseDateDialog: function parseDateDialog(dialogInfo, dialog) {
    if ('defaultValue' in dialogInfo) {
      dialog.selected = dialogInfo.defaultValue;
    }

    if ('start' in dialogInfo) {
      dialog.start = dialogInfo.start;
    }

    if ('end' in dialogInfo) {
      dialog.end = dialogInfo.end;
    }

    if ('lunar' in dialogInfo) {
      dialog.lunar = dialogInfo.lunar;
    }

    return dialog;
  },
  parseDateTimeDialog: function parseDateTimeDialog(dialogInfo, dialog) {
    if ('defaultValue' in dialogInfo) {
      dialog.selected = dialogInfo.defalutValue;
    }

    if ('hours' in dialogInfo) {
      dialog.hours = dialogInfo.hours;
    }

    if ('lunar' in dialogInfo) {
      dialog.lunar = dialogInfo.lunar;
    }

    return dialog;
  },
  parseMultiTextDialog: function parseMultiTextDialog(dialogInfo, dialog) {
    dialog.columns = dialogInfo.columns;
    dialog.range = dialogInfo.range;
    dialog.value = dialogInfo.value;

    if ('defaultValue' in dialogInfo) {
      dialog.selected = dialogInfo.defaultValue;
    }

    return dialog;
  },
  valueChange: function valueChange(data) {
    var value = '';

    if (this.pickerData.pickerType == 'text') {
      value = this.pickerData.value[data.newSelected];
    } else if (this.pickerData.pickerType == 'time') {
      if ('second' in data) {
        value = ('00' + data.hour).slice(-TWO_DIGITS) + ':' + ('00' + data.minute).slice(-TWO_DIGITS) + ':' + ('00' + data.second).slice(-TWO_DIGITS);
      } else {
        value = ('00' + data.hour).slice(-TWO_DIGITS) + ':' + ('00' + data.minute).slice(-TWO_DIGITS);
      }
    } else if (this.pickerData.pickerType == 'date') {
      value = data.year + '-' + ('00' + (data.month + 1)).slice(-TWO_DIGITS) + '-' + ('00' + data.day).slice(-TWO_DIGITS);
    } else if (this.pickerData.pickerType == 'datetime') {
      value = data.year + '-' + ('00' + (data.month + 1)).slice(-TWO_DIGITS) + '-' + ('00' + data.day).slice(-TWO_DIGITS) + ' ' + ('00' + data.hour).slice(-TWO_DIGITS) + ':' + ('00' + data.minute).slice(-TWO_DIGITS) + ':00';
    } else if (this.pickerData.pickerType == 'multi-text') {
      value = [];

      for (var i = 0; i < data.newSelected.length; i++) {
        value.push(this.pickerData.value[i][data.newSelected[i]]);
      }
    }

    var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(this.pickerData);

    dialogKeyValue[this.pickerData.path] = value;
    dialogKeyValue.dialogList.splice(0, 1);

    _dialogManager["default"].setDialogKeyValue(dialogKeyValue);
  },
  getDefaultKeyValue: function getDefaultKeyValue(pickerData) {
    // This function is used to get the default data for the picker.
    // When the picker is of type text and multi-text, the default data is 0.
    // When the picker is of type time, date, datetime, the default data is the current time.
    var value;

    if (pickerData.pickerType == 'text') {
      value = 0;
    } else if (pickerData.pickerType == 'time') {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();

      if ('containsecond' in pickerData && pickerData.containsecond == true) {
        value = hours + ':' + minutes + ':' + seconds;
      } else {
        value = hours + ':' + minutes;
      }
    } else if (pickerData.pickerType == 'date') {
      var _date = new Date();

      var year = _date.getFullYear();

      var month = _date.getMonth() + 1;

      var day = _date.getDate();

      value = year + '-' + month + '-' + day;
    } else if (pickerData.pickerType == 'datetime') {
      var _date2 = new Date();

      var _year = _date2.getFullYear();

      var _month = _date2.getMonth() + 1;

      var _day = _date2.getDate();

      var _hours = _date2.getHours();

      var _minutes = _date2.getMinutes();

      value = _year + '-' + _month + '-' + _day + '-' + _hours + '-' + _minutes;
    } else if (pickerData.pickerType == 'multi-text') {
      var length = pickerData.range.length;
      var valueList = [];

      for (var i = 0; i < length; i++) {
        valueList.push(0);
      }

      value = valueList;
    }

    var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(pickerData);

    dialogKeyValue[pickerData.path] = value;
    dialogKeyValue.dialogList.splice(0, 1);
    return dialogKeyValue;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var RADIO_ITEM_HEIGHT = 48;
var _default = {
  props: {
    radioListData: {
      "default": {}
    }
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, dialog, url) {
    var _this = this;

    dialog.items = [];

    for (var i = 0; i < dialogInfo.range.length; i++) {
      var item = {
        name: dialogInfo.range[i],
        value: dialogInfo.value[i]
      };
      dialog.items.push(item);
    }

    dialog.height = dialogInfo.range.length * RADIO_ITEM_HEIGHT + 'px';

    _observed["default"].addObserver(dialog.path, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      if ('range' in value && 'value' in value) {
        dialog.items = [];

        for (var _i = 0; _i < value.range.length; _i++) {
          var _item = {
            name: value.range[_i],
            value: value.value[_i]
          };
          dialog.items.push(_item);
        }
      }
    }.bind(this));

    return dialog;
  },
  onInit: function onInit() {
    _dialogManager["default"].setDialogKeyValue(null);
  },
  onChange: function onChange(checkedRadioInfo) {
    if (checkedRadioInfo.checked == true) {
      var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(this.radioListData);

      dialogKeyValue[this.radioListData.path] = checkedRadioInfo.target.attr.value;
      dialogKeyValue.dialogList.splice(0, 1);

      _dialogManager["default"].setDialogKeyValue(dialogKeyValue);
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js":
/*!****************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var ACTION_MESSAGE_CODE_SUBSCRIBE = 1001;
var ACTION_MESSAGE_CODE_DATACHANGED = 1004;
var ACTION_MESSAGE_CODE_INIT_DEVICE_DATA = 1005;
var WAIT_TIME = 1000;
var _default = {
  data: {
    observers: {},
    timer: null
  },
  setKeyValue: function setKeyValue(key, value) {
    var _this = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var data, action, that;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = {};
              data[key] = value;
              action = _utils["default"].makeAction(ACTION_MESSAGE_CODE_DATACHANGED, data);
              that = _this;
              that.data.timer = setTimeout(function () {
                that.notifyObservers('showMessage', {
                  'show': true
                });
              }, WAIT_TIME);
              _context.next = 7;
              return FeatureAbility.callAbility(action);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  subscribeAbility: function subscribeAbility() {
    var _this2 = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var action, that;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              action = _utils["default"].makeAction(ACTION_MESSAGE_CODE_SUBSCRIBE, {});
              that = _this2;
              _context3.next = 4;
              return FeatureAbility.subscribeAbilityEvent(action, /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(callbackData) {
                  var callbackJson, key;
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if ((0, _typeof2["default"])(JSON.parse(callbackData)) == "object" && 'data' in JSON.parse(callbackData)) {
                            callbackJson = JSON.parse(callbackData)['data'];
                          } else {
                            callbackJson = JSON.parse(callbackData);
                          }

                          for (key in callbackJson) {
                            that.notifyObservers(key, callbackJson[key]);
                          }

                          if (that.data.timer != null) {
                            clearTimeout(that.data.timer);
                          }

                          that.notifyObservers('showMessage', {
                            'show': false
                          });

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 4:
              action = _utils["default"].makeAction(ACTION_MESSAGE_CODE_INIT_DEVICE_DATA, {});
              _context3.next = 7;
              return FeatureAbility.callAbility(action);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  addObserver: function addObserver(key, callback) {
    if (Object.prototype.hasOwnProperty.call(this.data.observers, key)) {
      this.data.observers[key].push({
        callback: callback
      });
    } else {
      this.data.observers[key] = [{
        callback: callback
      }];
    }
  },
  notifyObservers: function notifyObservers(key, value) {
    if (Object.prototype.hasOwnProperty.call(this.data.observers, key)) {
      for (var i = 0; i < this.data.observers[key].length; i++) {
        this.data.observers[key][i].callback(key, value);
      }
    }
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js":
/*!**********************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ALPHA_DISABLE = 0.38;
var ALPHA_NORMAL = 1;
var _default = {
  data: {
    bundleName: '',
    abilityName: '',
    abilityType: ''
  },
  getValueTarget: function getValueTarget(data, valueList) {
    if (Array.isArray(valueList)) {
      var value = this.getValue(data, valueList);
      return value.target;
    } else {
      return data;
    }
  },
  getValueDefaultTarget: function getValueDefaultTarget(data, valueList) {
    if (Array.isArray(valueList)) {
      var value = this.getValue(data, valueList);
      return value.defaultTarget;
    } else {
      return data;
    }
  },
  getValue: function getValue(data, valueList) {
    if (Array.isArray(valueList)) {
      data = parseInt(data);

      for (var i = 0; i < valueList.length; i++) {
        var valueScope = this.getValueScope(valueList[i].scope);

        if (valueScope.start == valueScope.end && valueScope.start == '-' || valueScope.start == valueScope.end && valueScope.start !== '-' && parseInt(valueScope.start) == data || valueScope.start == '-' && data <= parseInt(valueScope.end) || valueScope.end == '-' && data > parseInt(valueScope.start) || valueScope.start !== '-' && valueScope.end !== '-' && parseInt(valueScope.start) < data && data <= parseInt(valueScope.end)) {
          return valueList[i];
        }
      }
    } else {
      return {};
    }
  },
  getValueScope: function getValueScope(scope) {
    var valueScope = {
      start: '-',
      end: '-'
    };

    if (scope == '-') {
      return valueScope;
    } else if (scope.indexOf('-') !== -1) {
      var splits = scope.split('-');

      if (splits[0].length == 0) {
        valueScope.end = splits[1];
      } else if (splits[1].length == 0) {
        valueScope.start = splits[0];
      } else {
        valueScope.start = splits[0];
        valueScope.end = splits[1];
      }
    } else if (!isNaN(Number(scope))) {
      valueScope.start = scope;
      valueScope.end = scope;
    }

    return valueScope;
  },
  setActionParam: function setActionParam(bundleName, abilityName, abilityType) {
    this.bundleName = bundleName;
    this.abilityName = abilityName;
    this.abilityType = abilityType;
  },
  makeAction: function makeAction(code, data) {
    var action = {};
    action.bundleName = this.bundleName;
    action.abilityName = this.abilityName;
    action.messageCode = code;
    action.abilityType = this.abilityType;
    action.data = data;
    return action;
  },
  setAlphaAndDisable: function setAlphaAndDisable(data, isDisable) {
    if (isDisable) {
      data.disableStack.push(isDisable);
      data.alpha = ALPHA_DISABLE;
      data.disable = true;
    } else {
      data.disableStack.pop();

      if (data.disableStack.length == 0) {
        data.alpha = ALPHA_NORMAL;
        data.disable = false;
      }
    }
  },
  getCurrentIndex: function getCurrentIndex(idx, templateUIInfo, uiType) {
    var index = -1;

    for (var i = 0; i <= idx; i++) {
      if (templateUIInfo[i].uiType == uiType) {
        index++;
      }
    }

    return index;
  }
};
exports["default"] = _default;

/***/ }),

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.hml?entry":
/*!*******************************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.hml?entry ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../../../../../../ailife-view/control/control.hml?name=control */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.hml?name=control")
__webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../../../../../../ailife-view/dialog/dialogbox/dialogbox.hml?name=dialogbox */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.hml?name=dialogbox")
__webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../../../../../../ailife-view/customdisplay/customdisplay.hml?name=customdisplay */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.hml?name=customdisplay")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.js")

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

/***/ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/share/js/hilink-device.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/share/js/hilink-device.js ***!
  \*********************************************************************************************************************/
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
    bundleName: 'com.newpower.ohoscleaner2',
    abilityName: 'com.newpower.ohoscleaner2.device.service.BleServiceAbility',
    abilityType: 0
  };
};

var HiLinkDevice = {
  DATA_TYPE_BLE_SEND_DATA: 9,
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
      case this.DATA_TYPE_BLE_SEND_DATA:
        return 'DATA_TYPE_BLE_SEND_DATA';

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

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".display": {
    "width": "100%",
    "height": "96px",
    "borderBottomLeftRadius": "16px",
    "borderBottomRightRadius": "16px",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px",
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px"
  },
  ".divider": {
    "height": "42px",
    "borderTopColor": "#000000",
    "borderRightColor": "#000000",
    "borderBottomColor": "#000000",
    "borderLeftColor": "#000000",
    "opacity": 0.2,
    "borderTopWidth": "0.3px",
    "borderRightWidth": "0.3px",
    "borderBottomWidth": "0.3px",
    "borderLeftWidth": "0.3px"
  },
  ".item-container": {
    "flexDirection": "row"
  },
  ".left-item": {
    "marginLeft": "16px"
  },
  ".center-item": {
    "display": "grid",
    "justifyContent": "center"
  },
  ".right-item": {
    "marginRight": "16px"
  },
  ".divide-container": {
    "flexDirection": "row",
    "alignItems": "center",
    "display": "flex"
  },
  ".divide-item": {
    "flexGrow": 1
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "borderBottomLeftRadius": "16px",
    "borderBottomRightRadius": "16px",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px",
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px"
  },
  ".high-enum-bar": {
    "flexDirection": "column",
    "height": "192px"
  },
  ".divider": {
    "height": "36px",
    "borderTopColor": "#000000",
    "borderRightColor": "#000000",
    "borderBottomColor": "#000000",
    "borderLeftColor": "#000000",
    "opacity": 0.2,
    "borderTopWidth": "0.3px",
    "borderRightWidth": "0.3px",
    "borderBottomWidth": "0.3px",
    "borderLeftWidth": "0.3px"
  },
  ".row-container": {
    "flexDirection": "row"
  },
  ".high-item-container": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "25%"
  },
  ".low-enum-bar": {
    "flexDirection": "column",
    "height": "96px",
    "display": "flex"
  },
  ".low-item-container": {
    "flexDirection": "row",
    "alignItems": "center",
    "flexGrow": 1
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".increase-decrease-bar": {
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px",
    "height": "64px",
    "flexDirection": "row",
    "borderBottomLeftRadius": "16px",
    "borderBottomRightRadius": "16px",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px"
  },
  ".decrease-image": {
    "position": "absolute",
    "left": "0px",
    "marginLeft": "16px",
    "marginRight": "8px",
    "marginTop": "16px",
    "width": "32px",
    "height": "32px",
    "paddingTop": "4px",
    "paddingRight": "4px",
    "paddingBottom": "4px",
    "paddingLeft": "4px"
  },
  ".increase-image": {
    "position": "absolute",
    "right": "0px",
    "marginRight": "16px",
    "marginLeft": "8px",
    "marginTop": "16px",
    "width": "32px",
    "height": "32px",
    "paddingTop": "4px",
    "paddingRight": "4px",
    "paddingBottom": "4px",
    "paddingLeft": "4px"
  },
  ".center-item": {
    "display": "grid",
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.css":
/*!**********************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".item-container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "width": "100%",
    "height": "100%"
  },
  ".item-up-container": {
    "flexDirection": "row"
  },
  ".text-item-upleft-text": {
    "opacity": 0.9
  },
  ".text-item-upright-text": {
    "marginLeft": "2px",
    "fontSize": "12px",
    "opacity": 0.6
  },
  ".text-item-down-text": {
    "marginTop": "2px",
    "fontSize": "12px",
    "opacity": 0.6
  },
  ".item-icon": {
    "width": "24px",
    "height": "24px"
  },
  ".icon-item-upright-text": {
    "marginLeft": "6px",
    "fontSize": "18px",
    "opacity": 0.9
  },
  ".icon-item-down-text": {
    "marginTop": "8px",
    "fontSize": "12px",
    "opacity": 0.9
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".multifunction-bar": {
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px",
    "height": "88px",
    "flexDirection": "row",
    "borderBottomLeftRadius": "16px",
    "borderBottomRightRadius": "16px",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px",
    "width": "100%"
  },
  ".item-one": {
    "marginLeft": "16px",
    "position": "absolute"
  },
  ".item-two": {
    "width": "100%"
  },
  ".one-command": {
    "position": "absolute",
    "right": "0px",
    "marginRight": "4px"
  },
  ".two-command": {
    "flexDirection": "row",
    "position": "absolute",
    "right": "0px",
    "marginRight": "8px"
  },
  ".big-icon": {
    "width": "72px",
    "height": "72px",
    "marginTop": "8px"
  },
  ".small-icon": {
    "width": "52px",
    "height": "56px",
    "marginTop": "16px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".progress-bar": {
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px",
    "height": "64px",
    "flexDirection": "row",
    "borderBottomLeftRadius": "16px",
    "borderBottomRightRadius": "16px",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px"
  },
  ".item": {
    "width": "78px",
    "marginLeft": "16px"
  },
  ".slider": {
    "width": "100%",
    "height": "40px",
    "paddingLeft": "-13px",
    "paddingRight": "-13px",
    "marginTop": "12px",
    "marginRight": "16px",
    "marginLeft": "16px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".reverse-container": {
    "flexDirection": "row",
    "display": "flex"
  },
  ".high-reverse-bar": {
    "flexDirection": "row",
    "borderBottomLeftRadius": "16px",
    "borderBottomRightRadius": "16px",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px",
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px",
    "height": "88px",
    "width": "100%"
  },
  ".high-left-item": {
    "marginLeft": "16px",
    "marginRight": "16px",
    "height": "100%",
    "left": "0px",
    "position": "absolute"
  },
  ".high-center": {
    "display": "grid",
    "justifyContent": "center"
  },
  ".high-icon": {
    "right": "4px",
    "width": "72px",
    "height": "72px",
    "marginTop": "8px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px",
    "position": "absolute"
  },
  ".low-reverse-bar": {
    "flexDirection": "row",
    "borderBottomLeftRadius": "16px",
    "borderBottomRightRadius": "16px",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px",
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px",
    "height": "64px"
  },
  ".low-left-item": {
    "marginLeft": "16px",
    "marginRight": "16px",
    "height": "100%",
    "left": "0px"
  },
  ".low-icon": {
    "right": "12px",
    "width": "32px",
    "height": "32px",
    "marginTop": "16px",
    "paddingTop": "4px",
    "paddingRight": "4px",
    "paddingBottom": "4px",
    "paddingLeft": "4px",
    "position": "absolute"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "marginTop": "24px",
    "marginBottom": "-4px"
  },
  ".title": {
    "fontSize": "16px",
    "marginLeft": "4px"
  },
  ".item-container": {
    "marginTop": "8px",
    "display": "flex",
    "flexWrap": "wrap"
  },
  ".item-width": {
    "width": "50%"
  },
  ".item": {
    "display": "flex",
    "justifyContent": "space-between",
    "height": "64px",
    "width": "100%",
    "borderBottomLeftRadius": "16px",
    "borderBottomRightRadius": "16px",
    "borderTopLeftRadius": "16px",
    "borderTopRightRadius": "16px",
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px",
    "backgroundColor": "#FFFFFF"
  },
  ".text": {
    "fontSize": "16px",
    "textColor": "#000000",
    "opacity": 0.9,
    "marginLeft": "16px",
    "height": "100%"
  },
  ".icon": {
    "width": "32px",
    "height": "32px",
    "marginTop": "16px",
    "paddingTop": "4px",
    "paddingRight": "4px",
    "paddingBottom": "4px",
    "paddingLeft": "4px",
    "marginRight": "12px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".dialog-box": {
    "flexDirection": "column",
    "borderBottomLeftRadius": "24px",
    "borderBottomRightRadius": "24px",
    "borderTopLeftRadius": "24px",
    "borderTopRightRadius": "24px"
  },
  ".title": {
    "fontSize": "20px",
    "opacity": 0.9,
    "fontWeight": "400",
    "marginTop": "18px",
    "marginBottom": "18px",
    "marginLeft": "24px"
  },
  ".dialog-container": {
    "marginLeft": "24px",
    "marginRight": "24px"
  },
  ".font-65ST": {
    "fontFamily": "HWtext-65ST,HWtext",
    "fontWeight": "normal",
    "allowScale": "false"
  },
  ".font-55ST": {
    "fontFamily": "HWtext-55ST,HWtext",
    "fontWeight": "normal",
    "allowScale": "false"
  },
  ".control-container": {
    "flexDirection": "row",
    "width": "100%",
    "height": "56px",
    "paddingBottom": "16px",
    "marginTop": "8px",
    "marginLeft": "16px",
    "marginRight": "16px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".left-control-text": {
    "width": "50%",
    "height": "40px",
    "textAlign": "center",
    "fontSize": "16px",
    "color": "#0A59F7",
    "position": "absolute",
    "left": "0px"
  },
  ".center-control-text": {
    "height": "40px",
    "fontSize": "16px",
    "color": "#0A59F7"
  },
  ".right-control-text": {
    "width": "50%",
    "height": "40px",
    "textAlign": "center",
    "fontSize": "16px",
    "color": "#0A59F7",
    "position": "absolute",
    "right": "0px"
  },
  ".divider": {
    "height": "24px",
    "borderTopColor": "#000000",
    "borderRightColor": "#000000",
    "borderBottomColor": "#000000",
    "borderLeftColor": "#000000",
    "opacity": 0.2,
    "borderTopWidth": "0.5px",
    "borderRightWidth": "0.5px",
    "borderBottomWidth": "0.5px",
    "borderLeftWidth": "0.5px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column"
  },
  ".enum-container": {
    "alignItems": "center",
    "height": "106px"
  },
  ".row-container": {
    "flexDirection": "row",
    "paddingTop": "14px",
    "paddingBottom": "14px"
  },
  ".item-container": {
    "flexDirection": "column",
    "width": "25%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".item-icon": {
    "width": "48px",
    "height": "48px"
  },
  ".item-text": {
    "marginTop": "8px",
    "fontSize": "14px",
    "opacity": 0.9
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center",
    "paddingTop": "22px",
    "width": "100%",
    "height": "202px"
  },
  ".icon": {
    "width": "86px",
    "height": "86px"
  },
  ".headline": {
    "fontSize": "16px",
    "marginTop": "16px",
    "opacity": 0.9,
    "fontWeight": "600"
  },
  ".desc": {
    "fontSize": "16px",
    "textAlign": "center",
    "marginTop": "8px",
    "opacity": 0.9
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "height": "200px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column"
  },
  ".list-item": {
    "flexDirection": "row",
    "height": "48px",
    "borderBottomColor": "#A9A9A9",
    "borderBottomWidth": "0.5px"
  },
  ".item-name": {
    "fontSize": "16px",
    "height": "48px",
    "opacity": 0.9
  },
  ".item-icon": {
    "width": "48px",
    "height": "48px",
    "position": "absolute",
    "right": "-14px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignItems": "center",
    "paddingLeft": "12px",
    "paddingRight": "12px",
    "backgroundColor": "#F1F3F5"
  },
  ".device-img": {
    "width": "160px",
    "height": "160px",
    "borderBottomLeftRadius": "10px",
    "borderBottomRightRadius": "10px",
    "borderTopLeftRadius": "10px",
    "borderTopRightRadius": "10px"
  },
  ".device-img-full": {
    "width": "252px",
    "height": "252px",
    "borderBottomLeftRadius": "10px",
    "borderBottomRightRadius": "10px",
    "borderTopLeftRadius": "10px",
    "borderTopRightRadius": "10px"
  },
  ".device-name-text": {
    "marginTop": "10px",
    "marginBottom": "8px",
    "fontSize": "12px",
    "color": "#000000",
    "opacity": 0.9,
    "width": "100%"
  },
  ".logo-img": {
    "width": "70px",
    "height": "18px"
  },
  ".progress-container": {
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "10px",
    "height": "20px"
  },
  ".progress": {
    "width": "18px",
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
    "opacity:disabled": 0.3,
    "height": "88px"
  },
  ".option-top": {
    "marginTop": "12px",
    "marginLeft": "0px",
    "marginRight": "0px",
    "paddingTop": "16px",
    "paddingRight": "16px",
    "paddingBottom": "16px",
    "paddingLeft": "16px",
    "justifyContent": "flex-start",
    "marginBottom": "4px"
  },
  ".switch-text": {
    "fontSize": "18px",
    "color": "#000000",
    "opacity": 0.9,
    "width": "100%"
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
  ".title": {
    "height": "56px",
    "flexDirection": "row"
  },
  ".title-back-image": {
    "width": "24px",
    "height": "24px",
    "marginLeft": "12px",
    "marginTop": "16px"
  },
  ".title-text": {
    "marginLeft": "16px",
    "fontSize": "24px",
    "opacity": 0.9,
    "height": "56px",
    "justifyContent": "center"
  },
  ".title-more-image": {
    "width": "24px",
    "height": "24px",
    "marginTop": "16px",
    "position": "absolute",
    "right": "12px"
  },
  ".device-info": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".device-image": {
    "width": "262px",
    "height": "262px"
  },
  ".device-logo": {
    "height": "10px",
    "width": "80px",
    "marginTop": "4px",
    "marginBottom": "20px"
  },
  ".device-logo-message": {
    "height": "10px",
    "width": "80px",
    "marginTop": "2px"
  },
  ".center-container": {
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".message": {
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "2px",
    "height": "20px"
  },
  ".message-text": {
    "fontSize": "12px"
  },
  ".spread": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginTop": "12px"
  },
  ".spread-text": {
    "fontSize": "12px",
    "opacity": 0.6
  },
  ".spread-image": {
    "width": "24px",
    "height": "12px",
    "marginLeft": "2px",
    "marginTop": "3px",
    "justifyContent": "center"
  },
  ".dialog": {
    "marginLeft": "12px",
    "marginRight": "12px",
    "marginBottom": "12px"
  },
  ".error-location": {
    "position": "absolute",
    "height": "48px",
    "marginTop": "56px"
  },
  ".error-container": {
    "width": "100%",
    "height": "48px",
    "borderBottomLeftRadius": "18px",
    "borderBottomRightRadius": "18px",
    "borderTopLeftRadius": "18px",
    "borderTopRightRadius": "18px",
    "flexDirection": "row",
    "marginLeft": "4px",
    "marginRight": "4px",
    "paddingLeft": "12px",
    "paddingRight": "12px",
    "backgroundColor": "#26E84026"
  },
  ".error-image": {
    "width": "24px",
    "height": "24px",
    "marginTop": "12px"
  },
  ".device-box": {
    "height": "372px",
    "marginTop": "4px",
    "marginBottom": "4px"
  },
  ".offline-text-half": {
    "textAlign": "right",
    "fontSize": "18px",
    "color": "#0a59f7",
    "width": "50%"
  },
  ".error-text": {
    "fontSize": "16px",
    "marginLeft": "16px",
    "height": "48px",
    "color": "#E84026"
  },
  ".hi-link-dialog": {
    "flexDirection": "column",
    "alignItems": "center",
    "marginLeft": "12px",
    "marginRight": "12px",
    "marginBottom": "12px"
  },
  ".dialog-container": {
    "flexDirection": "column",
    "marginLeft": "24px",
    "marginRight": "24px"
  },
  ".dialog-title": {
    "fontSize": "20px",
    "color": "#000000",
    "opacity": 0.9,
    "height": "56px",
    "textAlign": "center"
  },
  ".cancel-button": {
    "width": "100%",
    "height": "40px",
    "marginTop": "8px",
    "marginBottom": "16px",
    "fontSize": "16px",
    "textColor": "#0a59f7"
  },
  ".font-16": {
    "fontSize": "16px"
  },
  ".url-text": {
    "color": "#0a59f7"
  },
  ".progress-half": {
    "width": "48px",
    "height": "48px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.hml":
/*!***********************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.hml ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:8"
  },
  "type": "div",
  "style": {
    "height": function () {return this.controlData.controlHeight},
    "flexDirection": "column"
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:9"
      },
      "type": "block",
      "repeat": {
        "exp": function () {return this.controlData.lines},
        "key": "idx",
        "value": "val"
      },
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:10"
          },
          "type": "div",
          "shown": function () {return this.val==0},
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:11",
                "displayData": function () {return this.controlData.model[this.idx]}
              },
              "type": "display"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:13"
          },
          "type": "div",
          "shown": function () {return this.val==1},
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:14",
                "reversalData": function () {return this.controlData.model[this.idx]}
              },
              "type": "reversal"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:16"
          },
          "type": "div",
          "shown": function () {return this.val==2},
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:17",
                "enumData": function () {return this.controlData.model[this.idx]}
              },
              "type": "enum"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:19"
          },
          "type": "div",
          "shown": function () {return this.val==3},
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:20",
                "increasedecreaseData": function () {return this.controlData.model[this.idx]}
              },
              "type": "increasedecrease"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:22"
          },
          "type": "div",
          "shown": function () {return this.val==4},
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:23",
                "progressData": function () {return this.controlData.model[this.idx]}
              },
              "type": "progresss"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:25"
          },
          "type": "div",
          "shown": function () {return this.val==5},
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control:26",
                "multifunctionData": function () {return this.controlData.model[this.idx]}
              },
              "type": "multifunction"
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.hml":
/*!*******************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.hml ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:2",
    "className": "display"
  },
  "type": "div",
  "classList": [
    "display"
  ],
  "style": {
    "opacity": function () {return this.displayData.alpha},
    "backgroundColor": function () {return this.displayData.backgroundColor}
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:3",
        "className": "item-container"
      },
      "type": "div",
      "shown": function () {return this.displayData.defaultGravity},
      "classList": [
        "item-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:4",
            "className": "left-item"
          },
          "type": "div",
          "shown": function () {return this.displayData.showLeft},
          "classList": [
            "left-item"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:5",
                "itemdata": function () {return this.displayData.itemLeft}
              },
              "type": "item"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:7",
            "className": "center-item"
          },
          "type": "div",
          "classList": [
            "center-item"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:8"
              },
              "type": "div",
              "shown": function () {return this.displayData.showCenter},
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:9",
                    "itemdata": function () {return this.displayData.itemCenter}
                  },
                  "type": "item"
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:12",
            "className": "right-item"
          },
          "type": "div",
          "shown": function () {return this.displayData.showRight},
          "classList": [
            "right-item"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:13",
                "itemdata": function () {return this.displayData.itemRight}
              },
              "type": "item"
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:16",
        "className": "divide-container"
      },
      "type": "div",
      "shown": function () {return !this.displayData.defaultGravity},
      "classList": [
        "divide-container"
      ],
      "repeat": function () {return this.displayData.itemList},
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:17",
            "className": "divider"
          },
          "type": "div",
          "shown": function () {return this.$idx!=0&&!this.displayData.defaultGravity},
          "classList": [
            "divider"
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:18",
            "className": "divide-item"
          },
          "type": "div",
          "classList": [
            "divide-item"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display:19",
                "itemdata": function () {return this.$item}
              },
              "type": "item"
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.hml":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.hml ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:2",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "style": {
    "opacity": function () {return this.enumData.alpha},
    "backgroundColor": function () {return this.enumData.backgroundColor}
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:3",
        "className": "low-enum-bar"
      },
      "type": "div",
      "shown": function () {return this.enumData.enumItemList.length<=4},
      "classList": [
        "low-enum-bar"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:4",
            "className": "row-container"
          },
          "type": "div",
          "classList": [
            "row-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:5",
                "className": "low-item-container"
              },
              "type": "div",
              "classList": [
                "low-item-container"
              ],
              "repeat": function () {return this.enumData.enumItemList},
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:6",
                    "className": "divider"
                  },
                  "type": "div",
                  "shown": function () {return this.$idx!=0&&!this.enumData.defaultGravity},
                  "classList": [
                    "divider"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:7",
                    "itemdata": function () {return this.$item}
                  },
                  "type": "item"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:11",
        "className": "high-enum-bar"
      },
      "type": "div",
      "shown": function () {return this.enumData.enumItemList.length>4},
      "classList": [
        "high-enum-bar"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:12",
            "className": "row-container"
          },
          "type": "div",
          "classList": [
            "row-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:13",
                "className": "high-item-container"
              },
              "type": "div",
              "classList": [
                "high-item-container"
              ],
              "repeat": function () {return this.enumData.enumItemList.slice(0,4)},
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:14",
                    "className": "divider",
                    "value": "="
                  },
                  "type": "div",
                  "shown": function () {return this.$idx!=0&&!this.enumData.defaultGravity},
                  "classList": [
                    "divider"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:15",
                    "itemdata": function () {return this.$item},
                    "value": "="
                  },
                  "type": "item"
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:18",
            "className": "row-container"
          },
          "type": "div",
          "classList": [
            "row-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:19",
                "className": "high-item-container"
              },
              "type": "div",
              "classList": [
                "high-item-container"
              ],
              "repeat": function () {return this.enumData.enumItemList.slice(4,this.enumData.enumItemList.length)},
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:20",
                    "className": "divider"
                  },
                  "type": "div",
                  "shown": function () {return this.$idx!=0&&!this.enumData.defaultGravity},
                  "classList": [
                    "divider"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum:21",
                    "itemdata": function () {return this.$item}
                  },
                  "type": "item"
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

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.hml":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.hml ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease:2",
    "className": "increase-decrease-bar"
  },
  "type": "div",
  "classList": [
    "increase-decrease-bar"
  ],
  "style": {
    "opacity": function () {return this.increasedecreaseData.alpha},
    "backgroundColor": function () {return this.increasedecreaseData.backgroundColor}
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease:4",
        "className": "decrease-image",
        "src": function () {return this.increasedecreaseData.iconDecrease}
      },
      "type": "image",
      "classList": [
        "decrease-image"
      ],
      "events": {
        "touchstart": function (evt) {this.onTouchStart(false,evt)},
        "touchmove": function (evt) {this.onTouchMove(false,evt)},
        "touchcancel": function (evt) {this.onTouchEnd(false,evt)},
        "touchend": function (evt) {this.onTouchEnd(false,evt)}
      }
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease:9",
        "className": "center-item"
      },
      "type": "div",
      "classList": [
        "center-item"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease:10",
            "itemdata": function () {return this.increasedecreaseData.item}
          },
          "type": "item"
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease:12",
        "className": "increase-image",
        "src": function () {return this.increasedecreaseData.iconIncrease}
      },
      "type": "image",
      "classList": [
        "increase-image"
      ],
      "events": {
        "touchstart": function (evt) {this.onTouchStart(true,evt)},
        "touchmove": function (evt) {this.onTouchMove(true,evt)},
        "touchcancel": function (evt) {this.onTouchEnd(true,evt)},
        "touchend": function (evt) {this.onTouchEnd(true,evt)}
      }
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:1"
  },
  "type": "div",
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:2",
        "className": "item-container"
      },
      "type": "div",
      "classList": [
        "item-container"
      ],
      "shown": function () {return this.itemdata.showTextItem},
      "style": {
        "alignItems": function () {return this.itemdata.itemLocation}
      },
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:3",
            "className": "item-up-container"
          },
          "type": "div",
          "classList": [
            "item-up-container"
          ],
          "style": {
            "justifyContent": function () {return this.itemdata.itemLocation},
            "alignItems": function () {return this.itemdata.itemLocation}
          },
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:6",
                "className": "text-item-upleft-text",
                "value": function () {return this.itemdata.textItem.upLeft.text}
              },
              "type": "text",
              "classList": [
                "text-item-upleft-text"
              ],
              "style": {
                "color": function () {return this.itemdata.textItem.upLeft.color},
                "fontSize": function () {return this.itemdata.textItem.upLeft.size}
              }
            },
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:8",
                "className": "text-item-upright-text",
                "value": function () {return this.itemdata.textItem.upRight.text}
              },
              "type": "text",
              "classList": [
                "text-item-upright-text"
              ],
              "shown": function () {return this.itemdata.textItem.upRight.show},
              "style": {
                "color": function () {return this.itemdata.textItem.upRight.color}
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:11",
            "className": "text-item-down-text",
            "value": function () {return this.itemdata.textItem.down.text}
          },
          "type": "text",
          "classList": [
            "text-item-down-text"
          ],
          "shown": function () {return this.itemdata.textItem.down.show},
          "style": {
            "color": function () {return this.itemdata.textItem.down.color}
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:14",
        "className": "item-container"
      },
      "type": "div",
      "classList": [
        "item-container"
      ],
      "shown": function () {return this.itemdata.showIconItem},
      "style": {
        "alignItems": function () {return this.itemdata.itemLocation}
      },
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:15",
            "className": "item-up-container"
          },
          "type": "div",
          "classList": [
            "item-up-container"
          ],
          "style": {
            "justifyContent": function () {return this.itemdata.itemLocation},
            "alignItems": "center"
          },
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:16",
                "className": "item-icon",
                "src": function () {return this.itemdata.iconItem.upLeft.icon}
              },
              "type": "image",
              "classList": [
                "item-icon"
              ],
              "events": {
                "click": "itemClick"
              }
            },
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:18",
                "className": "icon-item-upright-text",
                "value": function () {return this.itemdata.iconItem.upRight.text}
              },
              "type": "text",
              "classList": [
                "icon-item-upright-text"
              ],
              "shown": function () {return this.itemdata.iconItem.upRight.show},
              "style": {
                "color": function () {return this.itemdata.iconItem.upRight.color}
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item:21",
            "className": "icon-item-down-text",
            "value": function () {return this.itemdata.iconItem.down.text}
          },
          "type": "text",
          "classList": [
            "icon-item-down-text"
          ],
          "shown": function () {return this.itemdata.iconItem.down.show},
          "events": {
            "click": "itemClick"
          },
          "style": {
            "color": function () {return this.itemdata.iconItem.down.color}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.hml":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.hml ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:4",
    "className": "multifunction-bar"
  },
  "type": "div",
  "classList": [
    "multifunction-bar"
  ],
  "style": {
    "opacity": function () {return this.multifunctionData.alpha},
    "backgroundColor": function () {return this.multifunctionData.backgroundColor}
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:6",
        "className": "item-one"
      },
      "type": "div",
      "classList": [
        "item-one"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:7",
            "itemdata": function () {return this.multifunctionData.itemOne}
          },
          "type": "item"
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:9",
        "className": "item-two"
      },
      "type": "div",
      "classList": [
        "item-two"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:10",
            "itemdata": function () {return this.multifunctionData.itemTwo}
          },
          "type": "item"
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:12",
        "className": "one-command"
      },
      "type": "div",
      "shown": function () {return this.multifunctionData.commandSize==1},
      "classList": [
        "one-command"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:13",
            "className": "big-icon",
            "src": function () {return this.multifunctionData.commandOne.icon}
          },
          "type": "image",
          "events": {
            "click": function (evt) {this.commandClick(this.multifunctionData.commandOne,evt)}
          },
          "classList": [
            "big-icon"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:16",
        "className": "two-command"
      },
      "type": "div",
      "shown": function () {return this.multifunctionData.commandSize==2},
      "classList": [
        "two-command"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:17",
            "className": "small-icon",
            "src": function () {return this.multifunctionData.commandOne.icon}
          },
          "type": "image",
          "events": {
            "click": function (evt) {this.commandClick(this.multifunctionData.commandOne,evt)}
          },
          "classList": [
            "small-icon"
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction:19",
            "className": "small-icon",
            "src": function () {return this.multifunctionData.commandTwo.icon}
          },
          "type": "image",
          "events": {
            "click": function (evt) {this.commandClick(this.multifunctionData.commandTwo,evt)}
          },
          "classList": [
            "small-icon"
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.hml":
/*!*********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.hml ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress:2",
    "className": "progress-bar"
  },
  "type": "div",
  "classList": [
    "progress-bar"
  ],
  "style": {
    "opacity": function () {return this.progressData.alpha},
    "backgroundColor": function () {return this.progressData.backgroundColor}
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress:4",
        "className": "item"
      },
      "type": "div",
      "classList": [
        "item"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress:5",
            "itemdata": function () {return this.progressData.leftItem}
          },
          "type": "item"
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress:7",
        "className": "slider",
        "value": function () {return this.progressData.operationValue},
        "max": function () {return this.progressData.max},
        "min": function () {return this.progressData.min},
        "disabled": function () {return this.progressData.disable}
      },
      "type": "slider",
      "classList": [
        "slider"
      ],
      "events": {
        "change": "valueChange"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.hml":
/*!*********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.hml ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:2",
    "className": "reverse-container"
  },
  "type": "div",
  "classList": [
    "reverse-container"
  ],
  "repeat": function () {return this.reversalData},
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:3",
        "className": "high-reverse-bar"
      },
      "type": "div",
      "shown": function () {return this.reversalData[this.$idx].heightType=='high'},
      "classList": [
        "high-reverse-bar"
      ],
      "style": {
        "backgroundColor": function () {return this.reversalData[this.$idx].backgroundColor},
        "opacity": function () {return this.reversalData[this.$idx].alpha}
      },
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:5",
            "className": "high-left-item"
          },
          "type": "div",
          "shown": function () {return this.reversalData[this.$idx].leftItem!=null},
          "classList": [
            "high-left-item"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:6",
                "itemdata": function () {return this.reversalData[this.$idx].leftItem}
              },
              "type": "item"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:8",
            "className": "high-center"
          },
          "type": "div",
          "shown": function () {return this.reversalData[this.$idx].centerItem!=null},
          "classList": [
            "high-center"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:9",
                "itemdata": function () {return this.reversalData[this.$idx].centerItem}
              },
              "type": "item"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:11",
            "src": function () {return this.reversalData[this.$idx].rightIcon},
            "className": "high-icon"
          },
          "type": "image",
          "classList": [
            "high-icon"
          ],
          "events": {
            "click": function (evt) {this.reverseIconClick(this.$idx,evt)}
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:13",
        "className": "low-reverse-bar"
      },
      "type": "div",
      "shown": function () {return this.reversalData[this.$idx].heightType=='low'},
      "classList": [
        "low-reverse-bar"
      ],
      "style": {
        "backgroundColor": function () {return this.reversalData[this.$idx].backgroundColor},
        "opacity": function () {return this.reversalData[this.$idx].alpha}
      },
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:15",
            "className": "low-left-item"
          },
          "type": "div",
          "shown": function () {return this.reversalData[this.$idx].leftItem!=null},
          "classList": [
            "low-left-item"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:16",
                "itemdata": function () {return this.reversalData[this.$idx].leftItem}
              },
              "type": "item"
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal:18",
            "src": function () {return this.reversalData[this.$idx].rightIcon},
            "className": "low-icon"
          },
          "type": "image",
          "classList": [
            "low-icon"
          ],
          "events": {
            "click": function (evt) {this.reverseIconClick(this.$idx,evt)}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.hml":
/*!***********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.hml ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "repeat": function () {return this.customDisplayItemList},
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay:2",
        "className": "title",
        "value": function () {return this.customDisplayItemList[this.$idx].title}
      },
      "type": "text",
      "classList": [
        "title"
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay:3",
        "className": "item-container"
      },
      "type": "div",
      "classList": [
        "item-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay:4",
            "className": "item-width"
          },
          "type": "div",
          "classList": [
            "item-width"
          ],
          "repeat": function () {return this.customDisplayItemList[this.$idx].itemList},
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay:5",
                "className": "item"
              },
              "type": "div",
              "classList": [
                "item"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay:6",
                    "className": "text",
                    "value": function () {return this.$item.text}
                  },
                  "type": "text",
                  "classList": [
                    "text"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay:7",
                    "className": "icon",
                    "src": function () {return this.$item.icon}
                  },
                  "type": "image",
                  "classList": [
                    "icon"
                  ],
                  "events": {
                    "click": function (evt) {this.iconClick(this.$item,evt)}
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

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.hml":
/*!**********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.hml ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:6",
    "className": "dialog-box"
  },
  "type": "div",
  "classList": [
    "dialog-box"
  ],
  "style": {
    "backgroundColor": function () {return this.dialogBoxData.backgroundColor}
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:7"
      },
      "type": "div",
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:8",
            "className": "title font-65ST",
            "value": function () {return this.dialogBoxData.name}
          },
          "type": "text",
          "classList": [
            "title",
            "font-65ST"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:10",
        "className": "dialog-container"
      },
      "type": "div",
      "classList": [
        "dialog-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:11",
            "pickerData": function () {return this.dialogBoxData}
          },
          "type": "pickers",
          "shown": function () {return this.dialogBoxData.type=='PICKER'}
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:12",
            "enumListData": function () {return this.dialogBoxData}
          },
          "type": "enumlist",
          "shown": function () {return this.dialogBoxData.type=='ENUM'}
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:13",
            "radioListData": function () {return this.dialogBoxData}
          },
          "type": "radiolist",
          "shown": function () {return this.dialogBoxData.type=='RADIO'}
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:14",
            "infoData": function () {return this.dialogBoxData}
          },
          "type": "info",
          "shown": function () {return this.dialogBoxData.type=='INFO'}
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:16",
        "className": "control-container"
      },
      "type": "div",
      "shown": function () {return this.dialogBoxData.centerControlName!=null},
      "classList": [
        "control-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:17",
            "className": "center-control-text font-65ST",
            "value": function () {return this.dialogBoxData.centerControlName}
          },
          "type": "text",
          "classList": [
            "center-control-text",
            "font-65ST"
          ],
          "events": {
            "click": "centerClick"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:19",
        "className": "control-container"
      },
      "type": "div",
      "shown": function () {return this.dialogBoxData.centerControlName==null},
      "classList": [
        "control-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:20",
            "className": "left-control-text font-65ST",
            "value": function () {return this.dialogBoxData.leftControlName}
          },
          "type": "text",
          "classList": [
            "left-control-text",
            "font-65ST"
          ],
          "events": {
            "click": "leftClick"
          }
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:21",
            "className": "divider"
          },
          "type": "div",
          "classList": [
            "divider"
          ]
        },
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox:22",
            "className": "right-control-text font-65ST",
            "value": function () {return this.dialogBoxData.rightControlName}
          },
          "type": "text",
          "classList": [
            "right-control-text",
            "font-65ST"
          ],
          "events": {
            "click": "rightClick"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.hml":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.hml ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "style": {
    "height": function () {return this.enumListData.height}
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist:2",
        "className": "enum-container"
      },
      "type": "div",
      "repeat": {
        "exp": function () {return this.enumListData.items},
        "value": "rowItems"
      },
      "classList": [
        "enum-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist:3",
            "className": "row-container"
          },
          "type": "div",
          "repeat": {
            "exp": function () {return this.rowItems},
            "value": "item"
          },
          "classList": [
            "row-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist:4",
                "className": "item-container"
              },
              "type": "div",
              "classList": [
                "item-container"
              ],
              "events": {
                "click": function (evt) {this.onChange(this.item,evt)}
              },
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist:5",
                    "className": "item-icon",
                    "src": function () {return this.item.icon}
                  },
                  "type": "image",
                  "classList": [
                    "item-icon"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist:6",
                    "className": "item-text",
                    "value": function () {return this.item.name}
                  },
                  "type": "text",
                  "classList": [
                    "item-text"
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

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.hml":
/*!************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.hml ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info:2",
        "className": "icon",
        "src": function () {return this.infoData.icon}
      },
      "type": "image",
      "classList": [
        "icon"
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info:3",
        "className": "headline",
        "value": function () {return this.infoData.headline}
      },
      "type": "text",
      "classList": [
        "headline"
      ]
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info:4",
        "className": "desc",
        "value": function () {return this.infoData.desc}
      },
      "type": "text",
      "classList": [
        "desc"
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.hml":
/*!****************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.hml ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker:2",
        "type": "text",
        "range": function () {return this.pickerData.range},
        "indicatorprefix": function () {return this.pickerData.indicatorprefix},
        "indicatorsuffix": function () {return this.pickerData.indicatorsuffix}
      },
      "type": "picker-view",
      "shown": function () {return this.pickerData.pickerType=='text'},
      "style": {
        "color": function () {return this.pickerData.color}
      },
      "events": {
        "change": "valueChange"
      }
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker:6",
        "type": "time",
        "containsecond": function () {return this.pickerData.containsecond},
        "hours": function () {return this.pickerData.hours}
      },
      "type": "picker-view",
      "shown": function () {return this.pickerData.pickerType=='time'},
      "style": {
        "color": function () {return this.pickerData.color}
      },
      "events": {
        "change": "valueChange"
      }
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker:9",
        "type": "date",
        "start": function () {return this.pickerData.start},
        "end": function () {return this.pickerData.end},
        "lunar": function () {return this.pickerData.lunar}
      },
      "type": "picker-view",
      "shown": function () {return this.pickerData.pickerType=='date'},
      "style": {
        "color": function () {return this.pickerData.color}
      },
      "events": {
        "change": "valueChange"
      }
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker:12",
        "type": "datetime",
        "hours": function () {return this.pickerData.hours},
        "lunar": function () {return this.pickerData.lunar}
      },
      "type": "picker-view",
      "shown": function () {return this.pickerData.pickerType=='datetime'},
      "style": {
        "color": function () {return this.pickerData.color}
      },
      "events": {
        "change": "valueChange"
      }
    },
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker:14",
        "type": "multi-text",
        "columns": function () {return this.pickerData.columns},
        "range": function () {return this.pickerData.range}
      },
      "type": "picker-view",
      "shown": function () {return this.pickerData.pickerType=='multi-text'},
      "style": {
        "color": function () {return this.pickerData.color}
      },
      "events": {
        "change": "valueChange"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.hml":
/*!**********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.hml ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "style": {
    "height": function () {return this.radioListData.height}
  },
  "children": [
    {
      "attr": {
        "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist:2"
      },
      "type": "list",
      "children": [
        {
          "attr": {
            "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist:3"
          },
          "type": "list-item",
          "repeat": {
            "exp": function () {return this.radioListData.items},
            "value": "item"
          },
          "children": [
            {
              "attr": {
                "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist:4",
                "className": "list-item"
              },
              "type": "div",
              "classList": [
                "list-item"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist:5",
                    "className": "item-name font-55ST",
                    "value": function () {return this.item.name}
                  },
                  "type": "text",
                  "classList": [
                    "item-name",
                    "font-55ST"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist:6",
                    "name": "radio",
                    "value": function () {return this.item.value},
                    "type": "radio",
                    "className": "item-icon"
                  },
                  "type": "input",
                  "classList": [
                    "item-icon"
                  ],
                  "events": {
                    "change": "onChange"
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

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.hml":
/*!*********************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.hml ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:5",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "style": {
    "backgroundColor": function () {return this.backgroundColor}
  },
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:6",
        "className": "title"
      },
      "type": "div",
      "classList": [
        "title"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:7",
            "className": "title-back-image",
            "src": "/common/ic_back.png"
          },
          "type": "image",
          "classList": [
            "title-back-image"
          ],
          "events": {
            "click": "backClick"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:8",
            "className": "title-text",
            "value": function () {return this.deviceName}
          },
          "type": "text",
          "classList": [
            "title-text"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:9",
            "className": "title-more-image",
            "src": "/common/ic_more.png"
          },
          "type": "image",
          "classList": [
            "title-more-image"
          ],
          "events": {
            "click": "menuClick"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:11",
        "className": "error-location"
      },
      "type": "div",
      "classList": [
        "error-location"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:12",
            "className": "error-container"
          },
          "type": "div",
          "shown": function () {return this.showErrorMessage},
          "classList": [
            "error-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:13",
                "className": "error-image",
                "src": "/common/ic_error.png"
              },
              "type": "image",
              "classList": [
                "error-image"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:14",
                "className": "error-text",
                "value": function () {return this.errorMessage}
              },
              "type": "text",
              "classList": [
                "error-text"
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:17",
        "className": "device-info"
      },
      "type": "div",
      "classList": [
        "device-info"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:18",
            "className": "device-image",
            "src": function () {return this.imageSrc}
          },
          "type": "image",
          "classList": [
            "device-image"
          ],
          "events": {
            "click": "sendTestMessage"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:19",
            "className": "center-container device-box"
          },
          "type": "div",
          "shown": function () {return !this.showMessage},
          "classList": [
            "center-container",
            "device-box"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:20",
                "className": "device-logo",
                "src": function () {return this.logoSrc}
              },
              "type": "image",
              "classList": [
                "device-logo"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:21",
                "className": "device-name-text",
                "value": function () {return this.deviceName}
              },
              "type": "text",
              "classList": [
                "device-name-text"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:23",
            "className": "center-container"
          },
          "type": "div",
          "shown": function () {return this.showMessage},
          "classList": [
            "center-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:24",
                "className": "device-logo-message",
                "src": function () {return this.logoSrc}
              },
              "type": "image",
              "classList": [
                "device-logo-message"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:25",
                "className": "message"
              },
              "type": "div",
              "classList": [
                "message"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:26",
                    "type": "circular",
                    "className": "progress"
                  },
                  "type": "progress",
                  "classList": [
                    "progress"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:27",
                    "className": "message-text",
                    "value": function () {return this.message}
                  },
                  "type": "text",
                  "classList": [
                    "message-text"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:31",
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
            "debugLine": "pages/index/index:32",
            "className": "switch-text",
            "value": function () {return this.linkStatus}
          },
          "type": "text",
          "classList": [
            "switch-text"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:35",
            "className": "offline-text-half",
            "show": function () {return this.showOfflineReconnect},
            "value": function () {return this.offlineText}
          },
          "type": "text",
          "classList": [
            "offline-text-half"
          ],
          "events": {
            "click": "offlineReconnect"
          }
        },
        {
          "attr": {
            "debugLine": "pages/index/index:36",
            "className": "progress-half",
            "type": "circular",
            "show": function () {return !this.showOfflineReconnect&&this.showWaitingProgress}
          },
          "type": "progress",
          "classList": [
            "progress-half"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:38",
        "controlData": function () {return this.controlData}
      },
      "type": "control"
    },
    {
      "attr": {
        "debugLine": "pages/index/index:43",
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
    },
    {
      "attr": {
        "debugLine": "pages/index/index:44",
        "customDisplayItemList": function () {return this.customDisplayItemList}
      },
      "type": "customdisplay",
      "events": {
        "icon-click": "customDisplayClick"
      }
    },
    {
      "attr": {
        "debugLine": "pages/index/index:46",
        "id": "dialog",
        "className": "dialog"
      },
      "type": "dialog",
      "id": "dialog",
      "classList": [
        "dialog"
      ],
      "events": {
        "cancel": "dialogCancel"
      },
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:47",
            "dialogBoxData": function () {return this.dialog}
          },
          "type": "dialogbox",
          "events": {
            "submit-click": "dialogSubmit",
            "submit-server-click": "dialogSubmitServer",
            "cancel-click": "dialogCancel"
          }
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/index/index:52",
        "id": "hiLinkDialog",
        "className": "hi-link-dialog"
      },
      "type": "dialog",
      "id": "hiLinkDialog",
      "classList": [
        "hi-link-dialog"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:53",
            "className": "dialog-container"
          },
          "type": "div",
          "classList": [
            "dialog-container"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:54",
                "className": "dialog-title",
                "value": function () {return this.$t('strings.prompt')}
              },
              "type": "text",
              "classList": [
                "dialog-title"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:55",
                "className": "font-16",
                "value": function () {return this.$t('strings.useHiLink')}
              },
              "type": "text",
              "classList": [
                "font-16"
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:56",
                "className": "font-16 url-text",
                "value": function () {return this.$t('strings.hiLinkUrl')}
              },
              "type": "text",
              "classList": [
                "font-16",
                "url-text"
              ],
              "events": {
                "click": "urlClick"
              }
            },
            {
              "attr": {
                "debugLine": "pages/index/index:57",
                "type": "text",
                "value": function () {return this.$t('strings.cancel')},
                "className": "cancel-button"
              },
              "type": "button",
              "classList": [
                "cancel-button"
              ],
              "events": {
                "click": "cancelClick"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.hml?name=control":
/*!********************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.hml?name=control ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!./enum/enum.hml?name=enum */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.hml?name=enum")
__webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!./display/display.hml?name=display */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.hml?name=display")
__webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!./reversal/reversal.hml?name=reversal */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.hml?name=reversal")
__webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!./increasedecrease/increasedecrease.hml?name=increasedecrease */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.hml?name=increasedecrease")
__webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!./progress/progress.hml?name=progresss */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.hml?name=progresss")
__webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!./multifunction/multifunction.hml?name=multifunction */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.hml?name=multifunction")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./control.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.hml")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./control.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.js")

$app_define$('@app-component/control', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.hml?name=display":
/*!****************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.hml?name=display ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../item/item.hml?name=item */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml?name=item")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./display.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./display.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./display.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.js")

$app_define$('@app-component/display', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.hml?name=enum":
/*!*******************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.hml?name=enum ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../item/item.hml?name=item */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml?name=item")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./enum.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./enum.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./enum.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js")

$app_define$('@app-component/enum', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.hml?name=increasedecrease":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.hml?name=increasedecrease ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../item/item.hml?name=item */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml?name=item")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./increasedecrease.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./increasedecrease.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./increasedecrease.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.js")

$app_define$('@app-component/increasedecrease', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml?name=item":
/*!*******************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml?name=item ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./item.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./item.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./item.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js")

$app_define$('@app-component/item', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.hml?name=multifunction":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.hml?name=multifunction ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../item/item.hml?name=item */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml?name=item")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./multifunction.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./multifunction.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./multifunction.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.js")

$app_define$('@app-component/multifunction', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.hml?name=progresss":
/*!********************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.hml?name=progresss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../item/item.hml?name=item */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml?name=item")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./progress.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./progress.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./progress.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.js")

$app_define$('@app-component/progresss', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.hml?name=reversal":
/*!*******************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.hml?name=reversal ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../item/item.hml?name=item */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.hml?name=item")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./reversal.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./reversal.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./reversal.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.js")

$app_define$('@app-component/reversal', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.hml?name=customdisplay":
/*!**************************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.hml?name=customdisplay ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./customdisplay.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./customdisplay.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./customdisplay.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.js")

$app_define$('@app-component/customdisplay', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.hml?name=dialogbox":
/*!*********************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.hml?name=dialogbox ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../radiolist/radiolist.hml?name=radiolist */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.hml?name=radiolist")
__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../enumlist/enumlist.hml?name=enumlist */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.hml?name=enumlist")
__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../picker/picker.hml?name=pickers */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.hml?name=pickers")
__webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/loader.js!../info/info.hml?name=info */ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.hml?name=info")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./dialogbox.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./dialogbox.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./dialogbox.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.js")

$app_define$('@app-component/dialogbox', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.hml?name=enumlist":
/*!******************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.hml?name=enumlist ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./enumlist.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./enumlist.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./enumlist.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.js")

$app_define$('@app-component/enumlist', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.hml?name=info":
/*!******************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.hml?name=info ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./info.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./info.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./info.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.js")

$app_define$('@app-component/info', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.hml?name=pickers":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.hml?name=pickers ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./picker.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./picker.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./picker.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.js")

$app_define$('@app-component/pickers', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/loader.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.hml?name=radiolist":
/*!*********************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.hml?name=radiolist ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/template.js!./radiolist.hml */ "./lib/json.js!./lib/template.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/json.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/style.js!./radiolist.css */ "./lib/json.js!./lib/style.js!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/lib/script.js!../../../../../../../../../Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./radiolist.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.js")

$app_define$('@app-component/radiolist', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _display = _interopRequireDefault(__webpack_require__(/*! ./display/display.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.js"));

var _reversal = _interopRequireDefault(__webpack_require__(/*! ./reversal/reversal.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.js"));

var _enum = _interopRequireDefault(__webpack_require__(/*! ./enum/enum.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js"));

var _increasedecrease = _interopRequireDefault(__webpack_require__(/*! ./increasedecrease/increasedecrease.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.js"));

var _progress = _interopRequireDefault(__webpack_require__(/*! ./progress/progress.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.js"));

var _multifunction = _interopRequireDefault(__webpack_require__(/*! ./multifunction/multifunction.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.js"));

var UI_TYPE_DISPLAY = 'DISPLAY';
var UI_TYPE_REVERSAL = 'REVERSAL';
var UI_TYPE_ENUM = 'ENUM';
var UI_TYPE_INCREASE_DECREASE = 'INCREASE_DECREASE';
var UI_TYPE_PROGRESS = 'PROGRESS';
var UI_TYPE_MULTIFUNCTION = 'MULTIFUNCTION';
var DISPLAY_LINE = 0;
var REVERSAL_LINE = 1;
var ENUM_LINE = 2;
var INCREASE_DECREASE_LINE = 3;
var PROGRESS_LINE = 4;
var MULTIFUNCTION_LINE = 5;
var SHRINK_CONTROL_COUNT = 5;

var ControlObj = function ControlObj() {
  (0, _classCallCheck2["default"])(this, ControlObj);
  this.lines = [];
  this.model = [];
  this.fullLines = [];
  this.controlHeight = '0px';
};

var _default = {
  props: {
    controlData: {
      "default": {}
    }
  },
  convertJson: function convertJson(deviceInfo, isSpread) {
    var controlData = new ControlObj();

    _enum["default"].resetEnumDataList();

    _reversal["default"].resetReversalDataList();

    for (var idx in deviceInfo.templateUIInfo) {
      var component = deviceInfo.templateUIInfo[idx];

      if (component.uiType == UI_TYPE_DISPLAY) {
        var displayData = _display["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(displayData);
        controlData.fullLines.push(DISPLAY_LINE);
      } else if (component.uiType == UI_TYPE_REVERSAL) {
        var reversalData = _reversal["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(reversalData);
        controlData.fullLines.push(REVERSAL_LINE);
      } else if (component.uiType == UI_TYPE_ENUM) {
        var enumData = _enum["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(enumData);
        controlData.fullLines.push(ENUM_LINE);
      } else if (component.uiType == UI_TYPE_INCREASE_DECREASE) {
        var increasedecreaseData = _increasedecrease["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(increasedecreaseData);
        controlData.fullLines.push(INCREASE_DECREASE_LINE);
      } else if (component.uiType == UI_TYPE_PROGRESS) {
        var progressData = _progress["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(progressData);
        controlData.fullLines.push(PROGRESS_LINE);
      } else if (component.uiType == UI_TYPE_MULTIFUNCTION) {
        var multifunctionData = _multifunction["default"].convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);

        controlData.model.push(multifunctionData);
        controlData.fullLines.push(MULTIFUNCTION_LINE);
      }
    }

    this.updateControlLines(controlData, isSpread);
    this.setControlHeight(controlData);
    return controlData;
  },
  setControlHeight: function setControlHeight(controlData) {
    var controlHeight = 0;

    for (var i = 0; i < controlData.lines.length; i++) {
      if (controlData.lines[i] == DISPLAY_LINE) {
        controlHeight = controlHeight + _display["default"].getDisplayHeight();
      } else if (controlData.lines[i] == REVERSAL_LINE) {
        controlHeight = controlHeight + _reversal["default"].getReversalHeight(controlData.model[i]);
      } else if (controlData.lines[i] == ENUM_LINE) {
        controlHeight = controlHeight + _enum["default"].getEnumHeight(controlData.model[i]);
      } else if (controlData.lines[i] == INCREASE_DECREASE_LINE) {
        controlHeight = controlHeight + _increasedecrease["default"].getIncreasedecreaseHeight();
      } else if (controlData.lines[i] == PROGRESS_LINE) {
        controlHeight = controlHeight + _progress["default"].getProgressHeight();
      } else if (controlData.lines[i] == MULTIFUNCTION_LINE) {
        controlHeight = controlHeight + _multifunction["default"].getMultifunctionHeight();
      }
    }

    controlData.controlHeight = controlHeight + 'px';
  },
  updateControlLines: function updateControlLines(controlData, isSpread) {
    if (isSpread) {
      controlData.lines = [];
      var count = SHRINK_CONTROL_COUNT;

      if (controlData.fullLines.length < SHRINK_CONTROL_COUNT) {
        count = controlData.fullLines.length;
      }

      for (var i = 0; i < count; i++) {
        controlData.lines.push(controlData.fullLines[i]);
      }
    } else {
      controlData.lines = controlData.fullLines;
    }

    this.setControlHeight(controlData);
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/display/display.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var GRAVITY_DEFAULT = 'default';
var BACKGROUND_COLOR = '#FFFFFF';
var DISPLAY_HEIGHT = 96;
var MARGIN = 8;

var DisplayObj = function DisplayObj(name, defaultGravity) {
  (0, _classCallCheck2["default"])(this, DisplayObj);
  this.name = name;
  this.defaultGravity = defaultGravity;
  this.leftItem = null;
  this.showLeftItem = false;
  this.centerItem = null;
  this.showCenterItem = false;
  this.rightItem = null;
  this.showRightItem = false;
  this.itemList = [];
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    displayData: {
      "default": ''
    }
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var displayData = this.initDisplayData(templateUIInfo[idx], url);
    return displayData;
  },
  initDisplayData: function initDisplayData(displayUIInfo, url) {
    var _this = this;

    var displayData = new DisplayObj(displayUIInfo.name, displayUIInfo.gravity == GRAVITY_DEFAULT);
    var uiList = displayUIInfo.uiList;

    if (displayUIInfo.gravity == GRAVITY_DEFAULT) {
      if (uiList.length == 1) {
        this.setItemLeft(displayData, uiList, url, displayUIInfo);
      } else if (uiList.length == 2) {
        this.setItemLeft(displayData, uiList, url, displayUIInfo);
        this.setItemRight(displayData, uiList, url, displayUIInfo);
      } else {
        this.setItemLeft(displayData, uiList, url, displayUIInfo);
        this.setItemCenter(displayData, uiList, url, displayUIInfo);
        this.setItemRight(displayData, uiList, url, displayUIInfo);
      }
    } else {
      for (var i = 0; i < uiList.length; i++) {
        displayData.itemList[i] = _item["default"].convertJson(uiList[i], url, displayUIInfo.gravity, displayUIInfo.heightType, 'center');
        displayData.itemList[i].type = 'DISPLAY';
      }
    }

    _observed["default"].addObserver(displayData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(displayData, value);
    }.bind(this));

    return displayData;
  },
  setItemLeft: function setItemLeft(displayData, uiList, url, displayUIInfo) {
    displayData.showLeft = true;
    displayData.itemLeft = _item["default"].convertJson(uiList[0], url, displayUIInfo.gravity, displayUIInfo.heightType, 'left');
    displayData.itemLeft.type = 'DISPLAY';
  },
  setItemCenter: function setItemCenter(displayData, uiList, url, displayUIInfo) {
    displayData.showCenter = true;
    displayData.itemCenter = _item["default"].convertJson(uiList[1], url, displayUIInfo.gravity, displayUIInfo.heightType, 'center');
    displayData.itemCenter.type = 'DISPLAY';
  },
  setItemRight: function setItemRight(displayData, uiList, url, displayUIInfo) {
    displayData.showRight = true;
    displayData.itemRight = _item["default"].convertJson(uiList[uiList.length - 1], url, displayUIInfo.gravity, displayUIInfo.heightType, 'right');
    displayData.itemRight.type = 'DISPLAY';
  },
  getDisplayHeight: function getDisplayHeight() {
    return DISPLAY_HEIGHT + MARGIN;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var GRAVITY_DEFAULT = 'default';
var BACKGROUND_COLOR = '#FFFFFF';
var HIGH_ENUM_HEIGHT = 192;
var LOW_ENUM_HEIGHT = 96;
var MARGIN = 8;

var EnumItemObj = function EnumItemObj(item, value, sid, characteristic, disableNameList) {
  (0, _classCallCheck2["default"])(this, EnumItemObj);
  this.url = item.url;
  this.textItem = item.textItem;
  this.showTextItem = item.showTextItem;
  this.iconItem = item.iconItem;
  this.showIconItem = item.showIconItem;
  this.itemLocation = item.itemLocation;
  this.value = value;
  this.sid = sid;
  this.characteristic = characteristic;
  this.disableNameList = disableNameList;
  this.type = 'ENUM';
};

var EnumObj = function EnumObj(name, defaultGravity, sid, characteristic, url) {
  (0, _classCallCheck2["default"])(this, EnumObj);
  this.name = name;
  this.defaultGravity = defaultGravity;
  this.sid = sid;
  this.characteristic = characteristic;
  this.url = url;
  this.enumItemList = [];
  this.checkedValue = -1;
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    enumData: {
      "default": {}
    }
  },
  data: {
    enumDataList: []
  },
  resetEnumDataList: function resetEnumDataList() {
    this.data.enumDataList = [];
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var enumData = this.initEnumData(templateUIInfo[idx], url);
    this.data.enumDataList.push(enumData);
    return enumData;
  },
  initEnumData: function initEnumData(enumUIInfo, url) {
    var _this = this;

    var enumData = new EnumObj(enumUIInfo.name, enumUIInfo.gravity == GRAVITY_DEFAULT, enumUIInfo.command[0].sid, enumUIInfo.command[0].characteristic, url);
    var enumInfo = enumUIInfo.command[0].enumInfo;

    for (var i = 0; i < enumInfo.length; i++) {
      var enumItem = this.initEnumItem(enumInfo[i], url, enumUIInfo, enumData.sid, enumData.characteristic);
      enumData.enumItemList.push(enumItem);
    }

    _observed["default"].addObserver(enumData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(enumData, value);
    }.bind(this));

    _observed["default"].addObserver(enumData.sid + '/' + enumData.characteristic, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);
      var checkedValue = enumData.checkedValue;
      enumData.checkedValue = value;
      this.updateEnumIcon(enumData.enumItemList, value, enumData);
      this.setOtherDisable(enumData.enumItemList, false, checkedValue);
      this.setOtherDisable(enumData.enumItemList, true, value);
    }.bind(this));

    return enumData;
  },
  initEnumItem: function initEnumItem(enumInfo, url, enumUIInfo, sid, characteristic) {
    var item = _item["default"].convertJson(enumInfo.displayItem, url, enumUIInfo.gravity, enumUIInfo.heightType, 'center');

    var nameList = 'disable' in enumInfo ? enumInfo.disable.name : [];
    var enumItem = new EnumItemObj(item, enumInfo.value, sid, characteristic, nameList);
    return enumItem;
  },
  updateEnumIcon: function updateEnumIcon(enumItemList, value, enumData) {
    for (var i = 0; i < enumItemList.length; i++) {
      if (enumData.checkedValue == enumItemList[i].value) {
        var iconValue = _utils["default"].getValue(value, enumItemList[i].iconItem.upLeft.valueList).target;

        enumItemList[i].iconItem.upLeft.icon = enumData.url + iconValue;
      } else {
        var _iconValue = _utils["default"].getValue(value, enumItemList[i].iconItem.upLeft.valueList).defaultTarget;

        enumItemList[i].iconItem.upLeft.icon = enumData.url + _iconValue;
      }
    }
  },
  setOtherDisable: function setOtherDisable(enumItemList, isDisable, value) {
    for (var i = 0; i < enumItemList.length; i++) {
      var item = enumItemList[i];

      if (item.value == value) {
        for (var j = 0; j < item.disableNameList.length; j++) {
          _observed["default"].notifyObservers(item.disableNameList[j], isDisable);
        }
      }
    }
  },
  enumItemClick: function enumItemClick(sid, characteristic, value) {
    var _this2 = this;

    return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var i, enumData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < _this2.data.enumDataList.length)) {
                _context.next = 12;
                break;
              }

              enumData = _this2.data.enumDataList[i];

              if (!(enumData.sid == sid && enumData.characteristic == characteristic)) {
                _context.next = 9;
                break;
              }

              if (!(enumData.disable == true)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              if (!(enumData.checkedValue == value)) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return");

            case 8:
              _observed["default"].setKeyValue(sid + '/' + characteristic, value);

            case 9:
              i++;
              _context.next = 1;
              break;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getEnumHeight: function getEnumHeight(enumData) {
    var enumHeight = 0;

    if (enumData.enumItemList.length <= 4) {
      enumHeight = enumHeight + LOW_ENUM_HEIGHT;
    } else {
      enumHeight = enumHeight + HIGH_ENUM_HEIGHT;
    }

    enumHeight = enumHeight + MARGIN;
    return enumHeight;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/increasedecrease/increasedecrease.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var INTERVAL = 200;
var ICON_LEFT = 24;
var ICON_TOP = 16;
var ICON_RIGHT = 48;
var ICON_BOTTOM = 40;
var INCREASE_DECREASE_HEIGHT = 64;
var MARGIN = 8;

var IncreaseDecreaseObj = function IncreaseDecreaseObj() {
  (0, _classCallCheck2["default"])(this, IncreaseDecreaseObj);
  this.name = '';
  this.sid = '';
  this.characteristic = '';
  this.defaultValue = 0;
  this.operationValue = 0;
  this.iconDecrease = '';
  this.iconIncrease = '';
  this.ableIconDecrease = '';
  this.ableIconIncrease = '';
  this.disableIconDecrease = '';
  this.disableIconIncrease = '';
  this.decreaseDownStartTime = 0;
  this.decreaseDown = false;
  this.decreaseDownLong = false;
  this.increaseDownStartTime = 0;
  this.increaseDown = false;
  this.increaseDownLong = false;
  this.max = 0;
  this.min = 0;
  this.ratio = 0;
  this.step = 0;
  this.item = {};
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = '#FFFFFF';
};

var _default = {
  props: {
    increasedecreaseData: {
      "default": ''
    }
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var increaseDecreaseData = this.initIncreaseDecreaseData(templateUIInfo[idx], url);
    return increaseDecreaseData;
  },
  initIncreaseDecreaseData: function initIncreaseDecreaseData(increasedecreaseUIInfo, url) {
    var _this = this;

    var increaseDecreaseData = new IncreaseDecreaseObj();
    increaseDecreaseData.name = increasedecreaseUIInfo.name;
    increaseDecreaseData.sid = increasedecreaseUIInfo.command[0].sid;
    increaseDecreaseData.characteristic = increasedecreaseUIInfo.command[0].characteristic;
    increaseDecreaseData.defaultValue = increasedecreaseUIInfo.command[0].defaultValue;
    increaseDecreaseData.operationValue = increasedecreaseUIInfo.command[0].defaultValue;
    increaseDecreaseData.ableIconDecrease = increasedecreaseUIInfo.command[0].iconDecrease;
    increaseDecreaseData.ableIconIncrease = increasedecreaseUIInfo.command[0].iconIncrease;
    increaseDecreaseData.disableIconDecrease = increasedecreaseUIInfo.command[0].disableIconDecrease;
    increaseDecreaseData.disableIconIncrease = increasedecreaseUIInfo.command[0].disableIconIncrease;
    increaseDecreaseData.max = increasedecreaseUIInfo.command[0].max;
    increaseDecreaseData.min = increasedecreaseUIInfo.command[0].min;
    increaseDecreaseData.ratio = increasedecreaseUIInfo.command[0].ratio;
    increaseDecreaseData.step = increasedecreaseUIInfo.command[0].step;
    increaseDecreaseData.item = _item["default"].convertJson(increasedecreaseUIInfo.displayItem, url, increasedecreaseUIInfo.gravity, increasedecreaseUIInfo.heightType, 'center');

    _observed["default"].addObserver(increaseDecreaseData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(increaseDecreaseData, value);
    }.bind(this));

    _observed["default"].addObserver(increaseDecreaseData.sid + '/' + increaseDecreaseData.characteristic, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);
      increaseDecreaseData.operationValue = value;

      if (value <= increaseDecreaseData.min) {
        increaseDecreaseData.iconDecrease = url + increaseDecreaseData.disableIconDecrease;
      } else {
        increaseDecreaseData.iconDecrease = url + increaseDecreaseData.ableIconDecrease;
      }

      if (value >= increaseDecreaseData.max) {
        increaseDecreaseData.iconIncrease = url + increaseDecreaseData.disableIconIncrease;
      } else {
        increaseDecreaseData.iconIncrease = url + increaseDecreaseData.ableIconIncrease;
      }
    }.bind(this));

    return increaseDecreaseData;
  },
  onTouchStart: function onTouchStart(isIncrease) {
    var isClickEnable = this.isClickEnable(false);

    if (this.increasedecreaseData.disable || !isClickEnable) {
      return;
    }

    if (isIncrease) {
      this.increasedecreaseData.increaseDown = true;
      this.increasedecreaseData.increaseDownStartTime = new Date().getTime();
    } else {
      this.increasedecreaseData.decreaseDown = true;
      this.increasedecreaseData.decreaseDownStartTime = new Date().getTime();
    }
  },
  onTouchMove: function onTouchMove(isIncrease, event) {
    if (this.increasedecreaseData.disable) {
      return;
    }

    var localX = event.touches[0].localX;
    var localY = event.touches[0].localY;

    if (localX < ICON_LEFT || localY < ICON_TOP || localX > ICON_RIGHT || localY > ICON_BOTTOM) {
      this.onTouchEnd();
    } else {
      var currentTime = new Date().getTime();

      if (isIncrease) {
        if (currentTime - this.increasedecreaseData.increaseDownStartTime > INTERVAL) {
          this.increasedecreaseData.increaseDownStartTime = this.increasedecreaseData.increaseDownStartTime + INTERVAL;
          this.increasedecreaseData.increaseDownLong = true;
          this.increaseDecreaseValue(true);
        }
      } else if (currentTime - this.increasedecreaseData.decreaseDownStartTime > INTERVAL) {
        this.increasedecreaseData.decreaseDownStartTime = this.increasedecreaseData.decreaseDownStartTime + INTERVAL;
        this.increasedecreaseData.decreaseDownLong = true;
        this.increaseDecreaseValue(false);
      }
    }
  },
  onTouchEnd: function onTouchEnd(isIncrease) {
    if (isIncrease) {
      if (this.increasedecreaseData.disable || !this.increasedecreaseData.increaseDown) {
        return;
      }

      this.increasedecreaseData.increaseDown = false;

      if (!this.increasedecreaseData.increaseDownLong) {
        this.increaseDecreaseValue(true);
      }

      this.increasedecreaseData.increaseDownLong = false;
    } else {
      if (this.increasedecreaseData.disable || !this.increasedecreaseData.decreaseDown) {
        return;
      }

      this.increasedecreaseData.decreaseDown = false;

      if (!this.increasedecreaseData.decreaseDownLong) {
        this.increaseDecreaseValue(false);
      }

      this.increasedecreaseData.decreaseDownLong = false;
    }
  },
  isClickEnable: function isClickEnable(isIncrease) {
    var isValueEnable = this.isValueEnable(isIncrease);

    if (!isValueEnable) {
      return false;
    }

    return true;
  },
  increaseDecreaseValue: function increaseDecreaseValue(isIncrease) {
    var operationValue = this.getOperationValue(isIncrease);

    if (operationValue == this.increasedecreaseData.operationValue) {
      return;
    }

    _observed["default"].setKeyValue(this.increasedecreaseData.sid + '/' + this.increasedecreaseData.characteristic, operationValue);
  },
  isValueEnable: function isValueEnable(isIncrease) {
    if (isIncrease) {
      if (this.increasedecreaseData.operationValue >= this.increasedecreaseData.max) {
        return false;
      }
    } else if (this.increasedecreaseData.operationValue <= this.increasedecreaseData.min) {
      return false;
    }

    return true;
  },
  getOperationValue: function getOperationValue(isIncrease) {
    var value = this.increasedecreaseData.operationValue;
    var operationValue = value;

    if (isIncrease) {
      if (value > this.increasedecreaseData.max) {
        return value;
      }

      if (value + this.increasedecreaseData.step > this.increasedecreaseData.max) {
        operationValue = this.increasedecreaseData.max;
      } else {
        operationValue = value + this.increasedecreaseData.step;
      }
    } else {
      if (value <= this.increasedecreaseData.min) {
        return value;
      }

      if (value - this.increasedecreaseData.step < this.increasedecreaseData.min) {
        operationValue = this.increasedecreaseData.min;
      } else {
        operationValue = value - this.increasedecreaseData.step;
      }
    }

    return operationValue;
  },
  getIncreasedecreaseHeight: function getIncreasedecreaseHeight() {
    return INCREASE_DECREASE_HEIGHT + MARGIN;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _enum = _interopRequireDefault(__webpack_require__(/*! ../enum/enum.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/enum/enum.js"));

var UI_TYPE_ENUM = 'ENUM';
var GRAVITY_CENTER = 'center';
var GRAVITY_CENTER_DIVIDER = 'centerDivider';
var SUB_TYPE_TEXT = 'text';
var SUB_TYPE_ICON = 'icon';
var SUB_TYPE_ICON_TEXT_VERTICAL = 'iconTextVertical';
var SUB_TYPE_ICON_TEXT_HORIZONTAL = 'iconTextHorizontal';
var LOCATION_LEFT = 'left';
var LOCATION_CENTER = 'center';
var FLEX_LOCATION_START = 'flex-start';
var FLEX_LOCATION_CENTER = 'center';
var FLEX_LOCATION_END = 'flex-end';
var HEIGHT_TYPE_LOW = 'low';
var DEFAULT_GRAVITY_LEFT_TEXT_SIZE = '18px';
var CENTER_GRAVITY_LEFT_TEXT_SIZE = '24px';
var HEIGHT_TYPE_LOW_TEXT_SIZE = '16px';
var TEXT_DEFAULT_COLOR = '#000000';
var DEFAULT_VALUE = '--';

var LocationTextObj = function LocationTextObj() {
  (0, _classCallCheck2["default"])(this, LocationTextObj);
  this.text = '';
  this.paramText = '';
  this.path = '';
  this.textDesc = '';
  this.size = '';
  this.color = TEXT_DEFAULT_COLOR;
  this.colorDesc = '';
  this.show = false;
  this.ratio = 1;
};

var LocationIconObj = function LocationIconObj() {
  (0, _classCallCheck2["default"])(this, LocationIconObj);
  this.icon = '';
  this.path = '';
  this.valueList = [];
};

var TextItemObj = function TextItemObj() {
  (0, _classCallCheck2["default"])(this, TextItemObj);
  this.upLeft = new LocationTextObj();
  this.upRight = new LocationTextObj();
  this.down = new LocationTextObj();
};

var IconItemObj = function IconItemObj() {
  (0, _classCallCheck2["default"])(this, IconItemObj);
  this.upLeft = new LocationIconObj();
  this.upRight = new LocationTextObj();
  this.down = new LocationTextObj();
};

var ItemObj = function ItemObj(url, itemLocation) {
  (0, _classCallCheck2["default"])(this, ItemObj);
  this.url = url;
  this.textItem = new TextItemObj();
  this.showTextItem = false;
  this.iconItem = new IconItemObj();
  this.showIconItem = false;
  this.itemLocation = itemLocation;
};

var _default = {
  props: {
    itemdata: {
      "default": {}
    }
  },
  convertJson: function convertJson(itemInfo, url, gravity, heightType, itemLocation) {
    itemLocation = this.convertItemLocation(itemLocation);
    var itemData = new ItemObj(url, itemLocation);

    if (itemInfo.subType == SUB_TYPE_TEXT) {
      itemData.showTextItem = true;
      this.setLocationText(itemData.textItem.upLeft, itemInfo.textDisplay.upLeft);
      this.addTextObserver(itemData.textItem.upLeft, itemInfo.textDisplay.upLeft);
      this.setUpLeftTextSize(itemData.textItem, heightType, gravity, itemLocation);

      if ('value' in itemInfo.textDisplay.upRight) {
        this.setLocationText(itemData.textItem.upRight, itemInfo.textDisplay.upRight);
        this.addTextObserver(itemData.textItem.upRight, itemInfo.textDisplay.upRight);
      }

      if ('value' in itemInfo.textDisplay.down && (itemData.textItem.upLeft.text != '' || itemData.textItem.upRight.text != '')) {
        this.setLocationText(itemData.textItem.down, itemInfo.textDisplay.down);
        this.addTextObserver(itemData.textItem.down, itemInfo.textDisplay.down);
      }

      return itemData;
    } else if (itemInfo.subType == SUB_TYPE_ICON) {
      this.setLocationIcon(itemData.iconItem.upLeft, itemInfo.icon);
      this.addIconObserver(itemData.iconItem.upLeft, itemInfo.icon, url);
    } else if (itemInfo.subType == SUB_TYPE_ICON_TEXT_VERTICAL) {
      itemData.iconItem.down.show = true;
      this.setLocationIcon(itemData.iconItem.upLeft, itemInfo.icon);
      this.addIconObserver(itemData.iconItem.upLeft, itemInfo.icon, url);
      this.setLocationIconText(itemData.iconItem.down, itemInfo);
      this.addTextObserver(itemData.iconItem.down, itemInfo.iconText);
    } else if (itemInfo.subType == SUB_TYPE_ICON_TEXT_HORIZONTAL) {
      itemData.iconItem.upRight.show = true;
      this.setLocationIcon(itemData.iconItem.upLeft, itemInfo.icon);
      this.addIconObserver(itemData.iconItem.upLeft, itemInfo.icon, url);
      this.setLocationIconText(itemData.iconItem.upRight, itemInfo);
      this.addTextObserver(itemData.iconItem.upRight, itemInfo.iconText);
    }

    itemData.showIconItem = true;
    return itemData;
  },
  addTextObserver: function addTextObserver(locationText, jsonText) {
    var _this = this;

    if (jsonText.type == 'dynamicText') {
      locationText.show = false;
      var path = this.getPath(jsonText.value);

      _observed["default"].addObserver(path, function (key, value) {
        (0, _newArrowCheck2["default"])(this, _this);

        if (typeof value == 'string' && value == '') {
          locationText.show = false;
        } else {
          locationText.show = true;
        }

        if (/^\d+([\.]\d+)?$/.test(value)) {
          this.setLocationTextAndColor(locationText, key, Math.round(value * locationText.ratio));
        } else {
          this.setLocationTextAndColor(locationText, key, value);
        }
      }.bind(this));
    }
  },
  addIconObserver: function addIconObserver(locationIcon, jsonIcon, url) {
    var _this2 = this;

    _observed["default"].addObserver(jsonIcon.path, function (path, value) {
      (0, _newArrowCheck2["default"])(this, _this2);
      this.setDefaultLocationIcon(locationIcon, path, value, url);
    }.bind(this));
  },
  convertItemLocation: function convertItemLocation(itemLocation) {
    if (itemLocation == LOCATION_LEFT) {
      return FLEX_LOCATION_START;
    } else if (itemLocation == LOCATION_CENTER) {
      return FLEX_LOCATION_CENTER;
    } else {
      return FLEX_LOCATION_END;
    }
  },
  setLocationTextAndColor: function setLocationTextAndColor(locationText, path, data) {
    if (locationText.show && locationText.path == path) {
      var textValue = _utils["default"].getValueTarget(data, locationText.textDesc.value);

      locationText.text = locationText.paramText.replace('${', '').replace('}', '').replace(locationText.path, textValue);

      var colorValue = '#' + _utils["default"].getValueTarget(data, locationText.colorDesc.value);

      if (this.checkIsColor(colorValue)) {
        locationText.color = colorValue;
      }
    }
  },
  setDefaultLocationIcon: function setDefaultLocationIcon(locationIcon, path, data, url) {
    var iconValue = _utils["default"].getValueDefaultTarget(data, locationIcon.valueList);

    locationIcon.icon = url + iconValue;
  },
  checkIsColor: function checkIsColor(color) {
    var RegExp = /^#[0-9A-F]{6}$/i;

    if (RegExp.test(color)) {
      return true;
    }

    return false;
  },
  setLocationText: function setLocationText(locationText, jsonText) {
    locationText.show = true;

    if ('color' in jsonText) {
      locationText.colorDesc = jsonText.color;
    }

    if ('description' in jsonText) {
      locationText.textDesc = jsonText.description;
      locationText.path = jsonText.description.path;
    } else {
      locationText.path = this.getPath(jsonText.value);
    }

    if ('ratio' in jsonText) {
      locationText.ratio = parseFloat(jsonText.ratio);
    }

    if (jsonText.type == 'normalText') {
      locationText.text = jsonText.value;
    } else {
      locationText.text = DEFAULT_VALUE;
    }

    locationText.paramText = jsonText.value;
  },
  getPath: function getPath(value) {
    if (value.indexOf('${') != -1 && value.indexOf('}') != -1) {
      return value.substring(value.indexOf('${') + 2, value.indexOf('}'));
    } else {
      return '';
    }
  },
  setLocationIcon: function setLocationIcon(locationIcon, jsonIcon) {
    locationIcon.path = jsonIcon.path;
    locationIcon.valueList = jsonIcon.value;
  },
  setLocationIconText: function setLocationIconText(locationIconText, itemInfo) {
    locationIconText.text = itemInfo.iconText.value;
    locationIconText.path = itemInfo.icon.path;
    locationIconText.paramText = itemInfo.iconText.value;
  },
  setUpLeftTextSize: function setUpLeftTextSize(textItem, heightType, gravity, itemLocation) {
    if (heightType == HEIGHT_TYPE_LOW) {
      if (gravity == GRAVITY_CENTER || gravity == GRAVITY_CENTER_DIVIDER) {
        textItem.upLeft.size = CENTER_GRAVITY_LEFT_TEXT_SIZE;
      } else if (textItem.down.show && itemLocation == LOCATION_CENTER) {
        textItem.upLeft.size = CENTER_GRAVITY_LEFT_TEXT_SIZE;
      } else {
        textItem.upLeft.size = HEIGHT_TYPE_LOW_TEXT_SIZE;
      }
    } else if (gravity == GRAVITY_CENTER || gravity == GRAVITY_CENTER_DIVIDER) {
      textItem.upLeft.size = CENTER_GRAVITY_LEFT_TEXT_SIZE;
    } else if (itemLocation == LOCATION_CENTER) {
      textItem.upLeft.size = CENTER_GRAVITY_LEFT_TEXT_SIZE;
    } else {
      textItem.upLeft.size = DEFAULT_GRAVITY_LEFT_TEXT_SIZE;
    }
  },
  itemClick: function itemClick() {
    var _this3 = this;

    return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this3.itemdata.type == UI_TYPE_ENUM)) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _enum["default"].enumItemClick(_this3.itemdata.sid, _this3.itemdata.characteristic, _this3.itemdata.value);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/multifunction/multifunction.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _timeitem = _interopRequireDefault(__webpack_require__(/*! ../item/timeitem.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/timeitem.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var BACKGROUND_COLOR = '#FFFFFF';
var MULTIFUNCTION_HEIGHT = 88;
var MARGIN = 8;

var MultifunctionCommandObj = function MultifunctionCommandObj() {
  (0, _classCallCheck2["default"])(this, MultifunctionCommandObj);
  this.sid = '';
  this.characteristic = '';
  this.value = 0;
  this.valueString = '';
  this.icon = '';
  this.ableIcon = '';
  this.disableIcon = '';
  this.disableNameList = [];
};

var MultifunctionObj = function MultifunctionObj() {
  (0, _classCallCheck2["default"])(this, MultifunctionObj);
  this.name = '';
  this.commandOne = new MultifunctionCommandObj();
  this.commandTwo = new MultifunctionCommandObj();
  this.commandSize = 0;
  this.multifunctionInfo = null;
  this.itemOne = null;
  this.itemTwo = null;
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    multifunctionData: {
      "default": ''
    }
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var multifunctionData = this.initMultifunctionData(templateUIInfo[idx], url);
    return multifunctionData;
  },
  initMultifunctionData: function initMultifunctionData(multifunctionUIInfo, url) {
    var _this = this;

    var multifunctionData = new MultifunctionObj();
    multifunctionData.name = multifunctionUIInfo.name;
    multifunctionData.itemOne = _item["default"].convertJson(multifunctionUIInfo.displayItemOne, url, multifunctionUIInfo.gravity, multifunctionUIInfo.heightType, 'left');
    multifunctionData.itemTwo = _item["default"].convertJson(multifunctionUIInfo.displayItemTwo, url, multifunctionUIInfo.gravity, multifunctionUIInfo.heightType, 'center');
    multifunctionData.multifunctionInfo = multifunctionUIInfo.multifunctionInfo;

    _observed["default"].addObserver(multifunctionData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);
      multifunctionData.disable = value;

      _utils["default"].setAlphaAndDisable(multifunctionData, value);

      this.setIconDisable(multifunctionData.commandOne, value);

      if (multifunctionData.commandSize == 2) {
        this.setIconDisable(multifunctionData.commandTwo, value);
      }
    }.bind(this));

    _observed["default"].addObserver(multifunctionData.multifunctionInfo.path, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      var commands = _utils["default"].getValue(value, multifunctionData.multifunctionInfo.value);

      this.setOtherDisable(multifunctionData.commandOne, false);
      this.setOtherDisable(multifunctionData.commandTwo, false);
      multifunctionData.commandSize = 0;

      if ('commandOne' in commands) {
        this.setCommandObj(multifunctionData.commandOne, commands.commandOne[0], url);
        multifunctionData.commandSize = multifunctionData.commandSize + 1;
        this.setOtherDisable(multifunctionData.commandOne, true);
      }

      if ('commandTwo' in commands) {
        this.setCommandObj(multifunctionData.commandTwo, commands.commandTwo[0], url);
        multifunctionData.commandSize = multifunctionData.commandSize + 1;
        this.setOtherDisable(multifunctionData.commandTwo, true);
      }
    }.bind(this));

    return multifunctionData;
  },
  setCommandObj: function setCommandObj(commandObj, commandJson, url) {
    commandObj.sid = commandJson.sid;
    commandObj.characteristic = commandJson.characteristic;
    commandObj.ableIcon = url + commandJson.icon;
    commandObj.disableIcon = url + commandJson.disableIcon;
    commandObj.icon = url + commandJson.icon;
    commandObj.value = commandJson.value;

    if ('valueString' in commandJson) {
      commandObj.valueString = commandJson.valueString;
    }

    if ('disable' in commandJson) {
      commandObj.disableNameList = commandJson.disable.name;
    }
  },
  setIconDisable: function setIconDisable(command, isDisable) {
    if (isDisable) {
      command.icon = command.disableIcon;
    } else {
      command.icon = command.ableIcon;
    }
  },
  setOtherDisable: function setOtherDisable(command, isDisable) {
    for (var i = 0; i < command.disableNameList.length; i++) {
      _observed["default"].notifyObservers(command.disableNameList[i], isDisable);
    }
  },
  commandClick: function commandClick(command) {
    _observed["default"].setKeyValue(command.sid + '/' + command.characteristic, command.value);
  },
  getMultifunctionHeight: function getMultifunctionHeight() {
    return MULTIFUNCTION_HEIGHT + MARGIN;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/progress/progress.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var BACKGROUND_COLOR = '#FFFFFF';
var PROGRESS_HEIGHT = 64;
var MARGIN = 8;

var ProgressObj = function ProgressObj() {
  (0, _classCallCheck2["default"])(this, ProgressObj);
  this.name = '';
  this.sid = '';
  this.characteristic = '';
  this.max = 0;
  this.min = 0;
  this.ratio = 0;
  this.operationValue = 0;
  this.leftItem = {};
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    progressData: {
      "default": ''
    }
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var progressData = this.initProgressData(templateUIInfo[idx], url);
    return progressData;
  },
  initProgressData: function initProgressData(progressUIInfo, url) {
    var _this = this;

    var progressData = new ProgressObj();
    progressData.name = progressUIInfo.name;
    progressData.sid = progressUIInfo.command[0].sid;
    progressData.characteristic = progressUIInfo.command[0].characteristic;
    progressData.max = progressUIInfo.command[0].max;
    progressData.min = progressUIInfo.command[0].min;
    progressData.ratio = progressUIInfo.command[0].ratio;
    progressData.operationValue = progressUIInfo.command[0].defaultValue;
    progressData.leftItem = _item["default"].convertJson(progressUIInfo.displayItemLeft, url, progressUIInfo.gravity, progressUIInfo.heightType, 'left');

    _observed["default"].addObserver(progressData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(progressData, value);
    }.bind(this));

    _observed["default"].addObserver(progressData.sid + '/' + progressData.characteristic, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);
      progressData.operationValue = value;
    }.bind(this));

    return progressData;
  },
  valueChange: function valueChange(progressData) {
    this.progressData.operationValue = progressData.progress;

    if (progressData.isEnd == 'true') {
      _observed["default"].setKeyValue(this.progressData.sid + '/' + this.progressData.characteristic, this.progressData.operationValue);
    }
  },
  getProgressHeight: function getProgressHeight() {
    return PROGRESS_HEIGHT + MARGIN;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/reversal/reversal.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var _item = _interopRequireDefault(__webpack_require__(/*! ../item/item.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/item/item.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var UI_TYPE_REVERSAL = 'REVERSAL';
var LOCATION_LEFT = 'left';
var LOCATION_CENTER = 'center';
var BACKGROUND_COLOR = '#FFFFFF';
var HIGH_REVERSAL_HEIGHT = 88;
var LOW_REVERSAL_HEIGHT = 64;
var MARGIN = 8;

var ReversalObj = function ReversalObj(name, url) {
  (0, _classCallCheck2["default"])(this, ReversalObj);
  this.name = name;
  this.url = url;
  this.showCurrentReversal = false;
  this.showNextReversal = false;
  this.command = [];
  this.value = '';
  this.nextValue = '';
  this.leftItem = null;
  this.centerItem = null;
  this.rightIcon = '';
  this.otherDisable = false;
  this.disableStack = [];
  this.disable = false;
  this.alpha = 1;
  this.heightType = '';
  this.backgroundColor = BACKGROUND_COLOR;
};

var _default = {
  props: {
    reversalData: {
      "default": []
    }
  },
  data: {
    reversalDataList: []
  },
  resetReversalDataList: function resetReversalDataList() {
    this.data.reversalDataList = [];
  },
  convertJson: function convertJson(idx, templateUIInfo, url) {
    var index = _utils["default"].getCurrentIndex(idx, templateUIInfo, UI_TYPE_REVERSAL);

    if (this.data.reversalDataList.length == 0) {
      this.initReversalDataList(templateUIInfo, url);
    }

    if (this.data.reversalDataList[index].showCurrentReversal && this.data.reversalDataList[index].showNextReversal) {
      return [this.data.reversalDataList[index], this.data.reversalDataList[index + 1]];
    } else if (this.data.reversalDataList[index].showCurrentReversal) {
      return [this.data.reversalDataList[index]];
    } else {
      return [];
    }
  },
  initReversalDataList: function initReversalDataList(templateUIInfo, url) {
    var showCurrentReversal = false;
    var showNextReversal = false;

    for (var i = 0; i < templateUIInfo.length; i++) {
      var reversalData = new ReversalObj(templateUIInfo[i].name, url);

      if (templateUIInfo[i].uiType == UI_TYPE_REVERSAL) {
        if (templateUIInfo[i].heightType == 'default') {
          reversalData.heightType = 'high';
        } else {
          reversalData.heightType = 'low';
        }

        reversalData.command = templateUIInfo[i].command;

        if (templateUIInfo[i].span == 1 || i + 1 < templateUIInfo.length && templateUIInfo[i + 1].uiType != UI_TYPE_REVERSAL && !showNextReversal || i + 1 == templateUIInfo.length && templateUIInfo[i].span != 1 && !showNextReversal) {
          showCurrentReversal = true;
          showNextReversal = false;
        } else {
          if (showNextReversal == false) {
            showCurrentReversal = true;
            showNextReversal = true;
          } else {
            showCurrentReversal = false;
            showNextReversal = false;
          }
        }

        reversalData.showCurrentReversal = showCurrentReversal;
        reversalData.showNextReversal = showNextReversal;

        if (templateUIInfo[i].displayItemOne != null) {
          reversalData.showLeftItem = true;
          reversalData.leftItem = _item["default"].convertJson(templateUIInfo[i].displayItemOne, url, templateUIInfo[i].gravity, templateUIInfo[i].heightType, LOCATION_LEFT);
          reversalData.leftItem.type = UI_TYPE_REVERSAL;
        }

        if (templateUIInfo[i].displayItemTwo != null) {
          reversalData.showCurrentReversal = true;
          reversalData.centerItem = _item["default"].convertJson(templateUIInfo[i].displayItemTwo, url, templateUIInfo[i].gravity, templateUIInfo[i].heightType, LOCATION_CENTER);
          reversalData.centerItem.type = UI_TYPE_REVERSAL;
        }

        this.addObserver(reversalData);
        this.data.reversalDataList.push(reversalData);
      }
    }
  },
  addObserver: function addObserver(reversalData) {
    var _this = this;

    _observed["default"].addObserver(reversalData.name, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      _utils["default"].setAlphaAndDisable(reversalData, value);

      this.updateIconDisable(reversalData, value);
    }.bind(this));

    var path = reversalData.command[0].sid + '/' + reversalData.command[0].characteristic;

    _observed["default"].addObserver(path, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      if (value !== reversalData.value) {
        this.updateReversalIcon(key, value, reversalData);
        this.setOtherDisable(reversalData);
        reversalData.value = value;
      }
    }.bind(this));
  },
  updateIconDisable: function updateIconDisable(reversalData, isDisable) {
    for (var i = 0; i < reversalData.command[0].reversal.length; i++) {
      var reversalItem = reversalData.command[0].reversal[i];

      if (reversalItem.value == reversalData.value) {
        if (isDisable) {
          var icon = reversalItem.disableIcon;
          reversalData.rightIcon = reversalData.url + icon;
        } else if (reversalData.value != 0) {
          var _icon = reversalItem.icon;
          reversalData.rightIcon = reversalData.url + _icon;
        }
      }
    }
  },
  updateReversalIcon: function updateReversalIcon(path, data, reversalData) {
    data = data == 0 ? 0 : 1;
    var sid = path.split('/')[0];
    var characteristic = path.split('/')[1];

    for (var j = 0; j < reversalData.command[0].reversal.length; j++) {
      if (sid == reversalData.command[0].sid && characteristic == reversalData.command[0].characteristic) {
        var reversalItem = reversalData.command[0].reversal[j];

        if (reversalItem.value == data) {
          var icon = reversalItem.icon;
          reversalData.rightIcon = reversalData.url + icon;

          if ('disable' in reversalItem) {
            reversalData.otherDisable = true;
          } else {
            reversalData.otherDisable = false;
          }
        } else {
          reversalData.nextValue = reversalItem.value;
        }
      } else {
        continue;
      }
    }
  },
  setOtherDisable: function setOtherDisable(reversalData) {
    for (var i = 0; i < reversalData.command[0].reversal.length; i++) {
      if ('disable' in reversalData.command[0].reversal[i]) {
        var nameList = reversalData.command[0].reversal[i].disable.name;

        for (var j = 0; j < nameList.length; j++) {
          _observed["default"].notifyObservers(nameList[j], reversalData.otherDisable);
        }
      }
    }
  },
  reverseIconClick: function reverseIconClick(index) {
    var _this2 = this;

    return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var reversalData, value, dialogKeyValue, path, i;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reversalData = _this2.reversalData[index];

              if (!(reversalData.disable == true)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              value = reversalData.value == 0 ? 0 : 1;

              if (!('operable' in reversalData.command[0].reversal[value] && reversalData.command[0].reversal[value].operable == false)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              if ('dialogList' in reversalData.command[0].reversal[reversalData.value]) {
                dialogKeyValue = {};
                path = reversalData.command[0].sid + '/' + reversalData.command[0].characteristic;
                dialogKeyValue.path = path;
                dialogKeyValue[path] = reversalData.nextValue;
                dialogKeyValue.dialogList = [];

                for (i = 0; i < reversalData.command[0].reversal[reversalData.value].dialogList.length; i++) {
                  dialogKeyValue.dialogList.push(reversalData.command[0].reversal[reversalData.value].dialogList[i]);
                }

                _observed["default"].notifyObservers(reversalData.command[0].reversal[reversalData.value].dialogList[0], dialogKeyValue);
              } else {
                _observed["default"].setKeyValue(reversalData.command[0].sid + '/' + reversalData.command[0].characteristic, reversalData.nextValue);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getReversalHeight: function getReversalHeight(reversalData) {
    var reversalHeight = 0;

    if (reversalData.length == 1 && reversalData[0].showCurrentReversal) {
      if (reversalData[0].heightType == 'low') {
        reversalHeight = LOW_REVERSAL_HEIGHT + MARGIN;
      } else {
        reversalHeight = HIGH_REVERSAL_HEIGHT + MARGIN;
      }
    } else if (reversalData.length == 2) {
      reversalHeight = LOW_REVERSAL_HEIGHT + MARGIN;
    }

    return reversalHeight;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var ItemObj = function ItemObj(path, icon, iconNight, text, value) {
  (0, _classCallCheck2["default"])(this, ItemObj);
  this.path = path;
  this.icon = icon;
  this.iconNight = iconNight;
  this.text = text;
  this.value = value;
};

var CustomDisplayItemObj = function CustomDisplayItemObj(title) {
  (0, _classCallCheck2["default"])(this, CustomDisplayItemObj);
  this.title = title;
  this.itemList = [];
};

var _default = {
  props: {
    customDisplayItemList: {
      "default": []
    }
  },
  convertJson: function convertJson(deviceInfo) {
    var customDisplayItemList = [];

    for (var i = 0; i < deviceInfo.customDisplayUIInfo.length; i++) {
      var customDisplayItem = new CustomDisplayItemObj(deviceInfo.customDisplayUIInfo[i].title);
      var path = deviceInfo.customDisplayUIInfo[i].sid + '/' + deviceInfo.customDisplayUIInfo[i].characteristic;

      for (var j = 0; j < deviceInfo.customDisplayUIInfo[i].itemList.length; j++) {
        var item = new ItemObj(path, deviceInfo.iconUrl + deviceInfo.customDisplayUIInfo[i].itemList[j].icon, deviceInfo.iconUrl + deviceInfo.customDisplayUIInfo[i].itemList[j].iconNight, deviceInfo.customDisplayUIInfo[i].itemList[j].text, deviceInfo.customDisplayUIInfo[i].itemList[j].value);
        customDisplayItem.itemList.push(item);
      }

      customDisplayItemList.push(customDisplayItem);
    }

    return customDisplayItemList;
  },
  iconClick: function iconClick(item) {
    var customDisplayData = {
      path: item.path,
      value: item.value,
      title: item.text
    };
    this.$emit('iconClick', customDisplayData);
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogbox/dialogbox.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var _picker = _interopRequireDefault(__webpack_require__(/*! ../picker/picker.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.js"));

var PROMPT_DURATION_TIME = 1000;
var _default = {
  props: {
    dialogBoxData: {
      "default": {}
    }
  },
  centerClick: function centerClick() {
    if (this.dialogBoxData.centerControlType == 'submit') {
      this.submit('submit');
    } else if (this.dialogBoxData.centerControlType == 'submit-server') {
      this.submit('submit-server');
    } else {
      this.resetEnumData();
      this.$emit('cancelClick');
    }
  },
  leftClick: function leftClick() {
    if (this.dialogBoxData.leftControlType == 'submit') {
      this.submit('submit');
    } else if (this.dialogBoxData.leftControlType == 'submit-server') {
      this.submit('submit-server');
    } else {
      this.resetEnumData();
      this.$emit('cancelClick');
    }
  },
  rightClick: function rightClick() {
    if (this.dialogBoxData.rightControlType == 'submit') {
      this.submit('submit');
    } else if (this.dialogBoxData.rightControlType == 'submit-server') {
      this.submit('submit-server');
    } else {
      this.resetEnumData();
      this.$emit('cancelClick');
    }
  },
  submit: function submit(type) {
    if (_dialogManager["default"].getDialogKeyValue() == null && this.dialogBoxData.type == 'PICKER') {
      var pickerKeyValue = _picker["default"].getDefaultKeyValue(this.dialogBoxData);

      _dialogManager["default"].setDialogKeyValue(pickerKeyValue);
    }

    if (_dialogManager["default"].getDialogKeyValue() != null) {
      this.resetEnumData();

      if (type == 'submit') {
        this.$emit('submitClick', _dialogManager["default"].getDialogKeyValue());
      } else {
        this.$emit('submitServerClick', _dialogManager["default"].getDialogKeyValue());
      }

      _dialogManager["default"].setDialogKeyValue(null);
    } else {
      _system["default"].showToast({
        message: this.$t('strings.pleaseChoose'),
        duration: PROMPT_DURATION_TIME
      });
    }
  },
  resetEnumData: function resetEnumData() {
    if (this.dialogBoxData.type == 'ENUM') {
      for (var i = 0; i < this.dialogBoxData.items.length; i++) {
        var rowItems = this.dialogBoxData.items[i];

        for (var j = 0; j < rowItems.length; j++) {
          rowItems[j].icon = rowItems[j].defaultTarget;
        }
      }
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.js":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/enumlist/enumlist.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var ENUMERATOR_PRE_ROW = 4;
var ENUM_ROW_HEIGHT = 106;
var _default = {
  props: {
    enumListData: {
      "default": {}
    }
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, dialog, url) {
    var items = [];
    var height = 0;

    for (var i = 0; i < dialogInfo.command.length / ENUMERATOR_PRE_ROW; i++) {
      var rowItems = [];

      for (var j = ENUMERATOR_PRE_ROW * i; j < Math.min(dialogInfo.command.length, ENUMERATOR_PRE_ROW * i + ENUMERATOR_PRE_ROW); j++) {
        var item = {};
        item.target = url + dialogInfo.command[j].icon.value.target;
        item.defaultTarget = url + dialogInfo.command[j].icon.value.defaultTarget;
        item.nightTarget = url + dialogInfo.command[j].icon.valueNight.target;
        item.defaultNightTarget = url + dialogInfo.command[j].icon.valueNight.defaultTarget;
        item.icon = item.defaultTarget;
        item.name = dialogInfo.command[j].name;
        item.value = dialogInfo.command[j].value;
        item.dialogList = dialogInfo.command[j].dialogList;
        rowItems.push(item);
      }

      items.push(rowItems);
      height = height + ENUM_ROW_HEIGHT;
    }

    dialog.height = height + 'px';
    dialog.items = items;
    return dialog;
  },
  onChange: function onChange(item) {
    for (var i = 0; i < this.enumListData.items.length; i++) {
      var rowItems = this.enumListData.items[i];

      for (var j = 0; j < rowItems.length; j++) {
        rowItems[j].icon = rowItems[j].defaultTarget;
      }
    }

    item.icon = item.target;

    var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(this.enumListData);

    dialogKeyValue[this.enumListData.path] = item.value;
    dialogKeyValue.dialogList.splice(0, 1);

    for (var _i = item.dialogList.length - 1; _i >= 0; _i--) {
      dialogKeyValue.dialogList.unshift(item.dialogList[_i]);
    }

    _dialogManager["default"].setDialogKeyValue(dialogKeyValue);
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/info/info.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var _default = {
  props: {
    infoData: {
      "default": {}
    }
  },
  onInit: function onInit() {
    var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(this.infoData);

    dialogKeyValue.dialogList.splice(0, 1);

    _dialogManager["default"].setDialogKeyValue(dialogKeyValue);
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, dialog, url) {
    dialog.icon = url + dialogInfo.icon;
    dialog.headline = dialogInfo.headline;
    dialog.desc = dialogInfo.desc;
    return dialog;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/picker/picker.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var TWO_DIGITS = 2;
var _default = {
  props: {
    pickerData: {
      "default": {}
    }
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, dialog, url) {
    var _this = this;

    dialog.pickerType = dialogInfo.pickerType;

    if (dialogInfo.pickerType == 'text') {
      dialog = this.parseTextDialog(dialogInfo, dialog);

      _observed["default"].addObserver(dialog.path, function (key, value) {
        (0, _newArrowCheck2["default"])(this, _this);

        if ('range' in value && 'value' in value) {
          dialog.range = value.range;
          dialog.value = value.value;
        }
      }.bind(this));
    } else if (dialogInfo.pickerType == 'time') {
      dialog = this.parseTimeDialog(dialogInfo, dialog);
    } else if (dialogInfo.pickerType == 'date') {
      dialog = this.parseTimeDialog(dialogInfo, dialog);
    } else if (dialogInfo.pickerType == 'datetime') {
      dialog = this.parseDateTimeDialog(dialogInfo, dialog);
    } else if (dialogInfo.pickerType == 'multi-text') {
      dialog = this.parseMultiTextDialog(dialogInfo, dialog);

      _observed["default"].addObserver(dialog.path, function (key, value) {
        (0, _newArrowCheck2["default"])(this, _this);

        if ('range' in value && 'value' in value) {
          dialog.range = value.range;
          dialog.value = value.value;
        }
      }.bind(this));
    }

    return dialog;
  },
  parseTextDialog: function parseTextDialog(dialogInfo, dialog) {
    dialog.range = dialogInfo.range;
    dialog.value = dialogInfo.value;

    if ('defaultValue' in dialogInfo) {
      dialog.selected = dialogInfo.defaultValue;
    }

    if ('preField' in dialogInfo) {
      dialog.indicatorprefix = dialogInfo.preField;
    } else {
      dialog.indicatorprefix = '';
    }

    if ('postField' in dialogInfo) {
      dialog.indicatorsuffix = dialogInfo.postField;
    } else {
      dialog.indicatorsuffix = '';
    }

    return dialog;
  },
  parseTimeDialog: function parseTimeDialog(dialogInfo, dialog) {
    if ('defalutValue' in dialogInfo) {
      dialog.selected = dialogInfo.defaultValue;
    }

    if ('containSecond' in dialogInfo) {
      dialog.containsecond = dialogInfo.containSecond;
    }

    if ('hours' in dialogInfo) {
      dialog.hours = dialogInfo.hours;
    }

    return dialog;
  },
  parseDateDialog: function parseDateDialog(dialogInfo, dialog) {
    if ('defaultValue' in dialogInfo) {
      dialog.selected = dialogInfo.defaultValue;
    }

    if ('start' in dialogInfo) {
      dialog.start = dialogInfo.start;
    }

    if ('end' in dialogInfo) {
      dialog.end = dialogInfo.end;
    }

    if ('lunar' in dialogInfo) {
      dialog.lunar = dialogInfo.lunar;
    }

    return dialog;
  },
  parseDateTimeDialog: function parseDateTimeDialog(dialogInfo, dialog) {
    if ('defaultValue' in dialogInfo) {
      dialog.selected = dialogInfo.defalutValue;
    }

    if ('hours' in dialogInfo) {
      dialog.hours = dialogInfo.hours;
    }

    if ('lunar' in dialogInfo) {
      dialog.lunar = dialogInfo.lunar;
    }

    return dialog;
  },
  parseMultiTextDialog: function parseMultiTextDialog(dialogInfo, dialog) {
    dialog.columns = dialogInfo.columns;
    dialog.range = dialogInfo.range;
    dialog.value = dialogInfo.value;

    if ('defaultValue' in dialogInfo) {
      dialog.selected = dialogInfo.defaultValue;
    }

    return dialog;
  },
  valueChange: function valueChange(data) {
    var value = '';

    if (this.pickerData.pickerType == 'text') {
      value = this.pickerData.value[data.newSelected];
    } else if (this.pickerData.pickerType == 'time') {
      if ('second' in data) {
        value = ('00' + data.hour).slice(-TWO_DIGITS) + ':' + ('00' + data.minute).slice(-TWO_DIGITS) + ':' + ('00' + data.second).slice(-TWO_DIGITS);
      } else {
        value = ('00' + data.hour).slice(-TWO_DIGITS) + ':' + ('00' + data.minute).slice(-TWO_DIGITS);
      }
    } else if (this.pickerData.pickerType == 'date') {
      value = data.year + '-' + ('00' + (data.month + 1)).slice(-TWO_DIGITS) + '-' + ('00' + data.day).slice(-TWO_DIGITS);
    } else if (this.pickerData.pickerType == 'datetime') {
      value = data.year + '-' + ('00' + (data.month + 1)).slice(-TWO_DIGITS) + '-' + ('00' + data.day).slice(-TWO_DIGITS) + ' ' + ('00' + data.hour).slice(-TWO_DIGITS) + ':' + ('00' + data.minute).slice(-TWO_DIGITS) + ':00';
    } else if (this.pickerData.pickerType == 'multi-text') {
      value = [];

      for (var i = 0; i < data.newSelected.length; i++) {
        value.push(this.pickerData.value[i][data.newSelected[i]]);
      }
    }

    var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(this.pickerData);

    dialogKeyValue[this.pickerData.path] = value;
    dialogKeyValue.dialogList.splice(0, 1);

    _dialogManager["default"].setDialogKeyValue(dialogKeyValue);
  },
  getDefaultKeyValue: function getDefaultKeyValue(pickerData) {
    var value;

    if (pickerData.pickerType == 'text') {
      value = 0;
    } else if (pickerData.pickerType == 'time') {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();

      if ('containsecond' in pickerData && pickerData.containsecond == true) {
        value = hours + ':' + minutes + ':' + seconds;
      } else {
        value = hours + ':' + minutes;
      }
    } else if (pickerData.pickerType == 'date') {
      var _date = new Date();

      var year = _date.getFullYear();

      var month = _date.getMonth() + 1;

      var day = _date.getDate();

      value = year + '-' + month + '-' + day;
    } else if (pickerData.pickerType == 'datetime') {
      var _date2 = new Date();

      var _year = _date2.getFullYear();

      var _month = _date2.getMonth() + 1;

      var _day = _date2.getDate();

      var _hours = _date2.getHours();

      var _minutes = _date2.getMinutes();

      value = _year + '-' + _month + '-' + _day + '-' + _hours + '-' + _minutes;
    } else if (pickerData.pickerType == 'multi-text') {
      var length = pickerData.range.length;
      var valueList = [];

      for (var i = 0; i < length; i++) {
        valueList.push(0);
      }

      value = valueList;
    }

    var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(pickerData);

    dialogKeyValue[pickerData.path] = value;
    dialogKeyValue.dialogList.splice(0, 1);
    return dialogKeyValue;
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/radiolist/radiolist.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var RADIO_ITEM_HEIGHT = 48;
var _default = {
  props: {
    radioListData: {
      "default": {}
    }
  },
  parseDialogInfo: function parseDialogInfo(dialogInfo, dialog, url) {
    var _this = this;

    dialog.items = [];

    for (var i = 0; i < dialogInfo.range.length; i++) {
      var item = {
        name: dialogInfo.range[i],
        value: dialogInfo.value[i]
      };
      dialog.items.push(item);
    }

    dialog.height = dialogInfo.range.length * RADIO_ITEM_HEIGHT + 'px';

    _observed["default"].addObserver(dialog.path, function (key, value) {
      (0, _newArrowCheck2["default"])(this, _this);

      if ('range' in value && 'value' in value) {
        dialog.items = [];

        for (var _i = 0; _i < value.range.length; _i++) {
          var _item = {
            name: value.range[_i],
            value: value.value[_i]
          };
          dialog.items.push(_item);
        }
      }
    }.bind(this));

    return dialog;
  },
  onInit: function onInit() {
    _dialogManager["default"].setDialogKeyValue(null);
  },
  onChange: function onChange(checkedRadioInfo) {
    if (checkedRadioInfo.checked == true) {
      var dialogKeyValue = _dialogManager["default"].cloneDialogKeyValue(this.radioListData);

      dialogKeyValue[this.radioListData.path] = checkedRadioInfo.target.attr.value;
      dialogKeyValue.dialogList.splice(0, 1);

      _dialogManager["default"].setDialogKeyValue(dialogKeyValue);
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.js":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/joe/Library/Huawei/sdk/js/2.1.1.21/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!/Users/joe/Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/default/pages/index/index.js ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _control = _interopRequireDefault(__webpack_require__(/*! ../../../../../../ailife-view/control/control.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/control/control.js"));

var _utils = _interopRequireDefault(__webpack_require__(/*! ../../../../../../ailife-view/utils/utils.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/utils/utils.js"));

var _observed = _interopRequireDefault(__webpack_require__(/*! ../../../../../../ailife-view/observed/observed.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/observed/observed.js"));

var _dialogManager = _interopRequireDefault(__webpack_require__(/*! ../../../../../../ailife-view/dialog/dialogManager.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/dialog/dialogManager.js"));

var _customdisplay = _interopRequireDefault(__webpack_require__(/*! ../../../../../../ailife-view/customdisplay/customdisplay.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/ailife-view/customdisplay/customdisplay.js"));

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.app"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _hilinkDevice = _interopRequireDefault(__webpack_require__(/*! ../../../share/js/hilink-device.js */ "../../../../../../../Documents/01.projects/ohosconnect/ohoscodes/cleanerFA/device/src/main/js/share/js/hilink-device.js"));

var _data;

var ABILITY_TYPE = 0;
var ABILITY_TYPE_INTERNAL = 1;
var ACTION_MESSAGE_CODE_INIT_DEVICE_DATA = 1005;
var ACTION_MESSAGE_CODE_SUBMIG_DIALOG_DATA = 1006;
var ACTION_MESSAGE_CODE_JUMP_TO_HILINK = 1008;
var ACTION_MESSAGE_CODE_GET_TEMPLATE = 1009;
var SHRINK_CONTROL_COUNT = 3;
var BACKGROUND_COLOR = '#FFF7F7F7';
var DURATION_TIME = 10000;
var PROMPT_DURATION_TIME = 3000;
var _default = {
  data: (_data = {
    showProgress: true,
    isFullWindow: false,
    deviceId: '',
    progressText: '',
    switchText: '开关',
    linkStatus: '',
    offlineText: '重新连接',
    switchTextImg: '/common/images/ic_off.png',
    showOfflineReconnect: false,
    showWaitingProgress: true,
    tryReconnect: false,
    deviceImage: '/common/images/ic_device.png',
    deviceName: 'XXX某某设备',
    roomName: 'XX',
    menu: [{
      value: 'setting',
      text: '更多设置'
    }],
    device: {
      on: '/common/images/ic_on.png',
      off: '/common/images/ic_off.png',
      linked: '已连接',
      unlinked: '未连接',
      linking: '连接中'
    },
    currentSwitch: 0,
    switchDisable: false,
    controlData: {},
    customDisplayItemList: [],
    imageSrc: '',
    logoSrc: ''
  }, (0, _defineProperty2["default"])(_data, "deviceName", []), (0, _defineProperty2["default"])(_data, "isSpread", true), (0, _defineProperty2["default"])(_data, "showSpread", true), (0, _defineProperty2["default"])(_data, "spreadText", ''), (0, _defineProperty2["default"])(_data, "spreadIcon", ''), (0, _defineProperty2["default"])(_data, "showMessage", ''), (0, _defineProperty2["default"])(_data, "message", ''), (0, _defineProperty2["default"])(_data, "showErrorMessage", false), (0, _defineProperty2["default"])(_data, "errorMessage", ''), (0, _defineProperty2["default"])(_data, "dialog", {}), (0, _defineProperty2["default"])(_data, "dialogShow", false), (0, _defineProperty2["default"])(_data, "backgroundColor", BACKGROUND_COLOR), _data),
  onInit: function onInit() {
    this.linkStatus = this.device.linking;
    this.switchTextImg = this.device.off;
    this.optionDisabled();

    _utils["default"].setActionParam('com.newpower.ohoscleaner2', 'com.newpower.ohoscleaner2.device.service.BleServiceAbility', ABILITY_TYPE);
  },
  onShow: function onShow() {
    var _this = this;

    return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      var _this2 = this;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.info("full page onShow");
              console.info("img = " + _this.switchTextImg);
              _context.next = 4;
              return _this.addObserved();

            case 4:
              setTimeout(function () {
                (0, _newArrowCheck2["default"])(this, _this2);

                _this.notifyDeviceId();
              }.bind(this), 500);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }))();
  },
  addObserved: function addObserved() {
    var _this3 = this;

    return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
      var _this4 = this;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _observed["default"].addObserver('showMessage', function (key, value) {
                (0, _newArrowCheck2["default"])(this, _this4);
                _this3.showMessage = value.show;

                if (value.show == true) {
                  _this3.message = _this3.$t('strings.loading');
                  setTimeout(function () {
                    _observed["default"].notifyObservers('showMessage', {
                      'show': false
                    });
                  }, DURATION_TIME);
                }
              }.bind(this));

              _observed["default"].addObserver('error', function (key, value) {
                (0, _newArrowCheck2["default"])(this, _this4);
                _this3.errorMessage = value;
                _this3.showErrorMessage = true;
                var that = _this3;
                setTimeout(function () {
                  that.showErrorMessage = false;
                }, PROMPT_DURATION_TIME);
              }.bind(this));

              _observed["default"].notifyObservers('showMessage', {
                'show': true
              });

              console.info('cleanerFA-js ' + 'index.js requestTemplate');
              _context2.next = 6;
              return _this3.requestTemplate();

            case 6:
              _observed["default"].subscribeAbility();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }))();
  },
  requestTemplate: function requestTemplate() {
    var _this5 = this;

    return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3() {
      var action, result, resultJson, template;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              action = _utils["default"].makeAction(ACTION_MESSAGE_CODE_GET_TEMPLATE, {});
              console.info('cleanerFA-js FeatureAbility.callAbility');
              console.info('cleanerFA-js ' + JSON.stringify(action));
              _context3.next = 5;
              return FeatureAbility.callAbility(action);

            case 5:
              result = _context3.sent;
              resultJson = JSON.parse(result);

              if (resultJson.code == 0) {
                template = JSON.parse(resultJson.data);

                _this5.parseJson(template.template);

                console.info('cleanerFA-js' + resultJson.data);
              }

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  parseJson: function parseJson(deviceInfo) {
    var _this6 = this;

    this.deviceName = deviceInfo.devName;
    this.imageSrc = deviceInfo.iconUrl + deviceInfo.deviceIcon;
    this.logoSrc = deviceInfo.iconUrl + deviceInfo.logoIcon;
    this.controlData = _control["default"].convertJson(deviceInfo, this.isSpread);

    if (this.controlData.fullLines.length <= SHRINK_CONTROL_COUNT) {
      this.showSpread = false;
    }

    if ('customDisplayUIInfo' in deviceInfo) {
      this.customDisplayItemList = _customdisplay["default"].convertJson(deviceInfo);
    }

    for (var idx in deviceInfo.dialogUIInfo) {
      var dialogInfo = deviceInfo.dialogUIInfo[idx];

      var dialog = _dialogManager["default"].parseDialogInfo(dialogInfo, deviceInfo.iconUrl);

      _dialogManager["default"].addDialog(dialog);

      _observed["default"].addObserver(dialog.id, function (key, value) {
        (0, _newArrowCheck2["default"])(this, _this6);
        this.dialog = _dialogManager["default"].getDialog(key, value);

        if (this.dialogShow == false) {
          this.$element('dialog').show();
          this.dialogShow = true;
        }
      }.bind(this));

      _observed["default"].addObserver(dialog.path, function (key, value) {
        (0, _newArrowCheck2["default"])(this, _this6);

        if ('dialogInfo' in value) {
          var updateDialog = _dialogManager["default"].parseDialogInfo(value.dialogInfo, deviceInfo.iconUrl);

          _dialogManager["default"].updateDialog(updateDialog);
        }
      }.bind(this));
    }

    _observed["default"].addObserver('language', function () {
      (0, _newArrowCheck2["default"])(this, _this6);
      this.requestTemplate();

      var action = _utils["default"].makeAction(ACTION_MESSAGE_CODE_INIT_DEVICE_DATA, {});

      FeatureAbility.callAbility(action);
    }.bind(this));

    this.setSpreadTextIcon();
  },
  spreadClick: function spreadClick() {
    var _this7 = this;

    return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this7.isSpread = !_this7.isSpread;

              _this7.setSpreadTextIcon();

              _control["default"].updateControlLines(_this7.controlData, _this7.isSpread);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  setSpreadTextIcon: function setSpreadTextIcon() {
    if (this.isSpread) {
      this.spreadText = this.$t('strings.more');
      this.spreadIcon = '/common/ic_arrow_down.png';
    } else {
      this.spreadText = this.$t('strings.pack_up');
      this.spreadIcon = '/common/ic_arrow_up.png';
    }
  },
  customDisplayClick: function customDisplayClick(customDisplayData) {
    _system["default"].showToast({
      message: customDisplayData.detail.title,
      duration: PROMPT_DURATION_TIME
    });
  },
  dialogSubmit: function dialogSubmit(dialogData) {
    if (dialogData.detail.dialogList.length == 0) {
      _observed["default"].setKeyValue(dialogData.detail.path, dialogData.detail);

      this.dialogShow = false;
      this.$element('dialog').close();
    } else {
      _observed["default"].notifyObservers(dialogData.detail.dialogList[0], dialogData.detail);
    }
  },
  dialogSubmitServer: function dialogSubmitServer(dialogData) {
    var _this8 = this;

    return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5() {
      var key, value, data, action;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              key = dialogData.detail.path;
              value = dialogData.detail;
              data = {
                key: value
              };
              action = _utils["default"].makeAction(ACTION_MESSAGE_CODE_SUBMIG_DIALOG_DATA, data);
              _context5.next = 6;
              return FeatureAbility.callAbility(action);

            case 6:
              if (dialogData.detail.dialogList.length == 0) {
                _this8.dialogShow = false;

                _this8.$element('dialog').close();
              } else {
                _observed["default"].notifyObservers(dialogData.detail.dialogList[0], dialogData.detail);
              }

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  dialogCancel: function dialogCancel() {
    _dialogManager["default"].resetDialogData();

    this.dialogShow = false;
    this.$element('dialog').close();
  },
  backClick: function backClick() {
    _system2["default"].terminate();
  },
  moreClick: function moreClick() {
    this.$element('hiLinkDialog').show();
  },
  urlClick: function urlClick() {
    var data = {
      url: this.$t('strings.hiLinkUrl')
    };

    var action = _utils["default"].makeAction(ACTION_MESSAGE_CODE_JUMP_TO_HILINK, data);

    FeatureAbility.callAbility(action);
  },
  cancelClick: function cancelClick() {
    this.$element('hiLinkDialog').close();
  },
  menuClick: function menuClick(e) {
    switch (e.detail.value) {
      case 'setting':
        _system3["default"].push({
          uri: 'pages/setting/setting',
          params: {
            deviceName: this.deviceName,
            roomName: this.roomName
          }
        });

        break;
    }
  },
  notifyDeviceId: function () {
    var _notifyDeviceId = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6() {
      var _this9 = this;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.info("deviceId is " + this.deviceId);
              _context6.next = 3;
              return _hilinkDevice["default"].notifyDeviceId(this.deviceId);

            case 3:
              _hilinkDevice["default"].connect(function (ret) {
                (0, _newArrowCheck2["default"])(this, _this9);
                var result = JSON.parse(ret);
                this.handleEvents(result);
              }.bind(this));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function notifyDeviceId() {
      return _notifyDeviceId.apply(this, arguments);
    }

    return notifyDeviceId;
  }(),
  handleEvents: function handleEvents(result) {
    console.info("handleEvents result is " + result.data.type);
    console.info("handleEvents state is " + result.data.state);

    if (result.data.state == 'fail') {
      this.linkStatus = this.device.unlinked;
      this.showOfflineReconnect = true;
      this.showWaitingProgress = false;
      this.$element('dialog-repair-failed').show();
    } else {
      console.info("handleEvents result is" + result.data.result);

      switch (result.data.type) {
        case _hilinkDevice["default"].DATA_TYPE_BLE_CONNECT:
          this.linkStatus = this.device.linked;
          this.showWaitingProgress = false;
          break;

        case _hilinkDevice["default"].DATA_TYPE_BLE_UNCONNECT:
          this.linkStatus = this.device.unlinked;
          this.showOfflineReconnect = true;
          this.showWaitingProgress = false;
          this.$element('dialog-repair-failed').show();
          break;

        case _hilinkDevice["default"].DATA_TYPE_BLE_CHARACTERISTIC_CHANGED:
          this.deviceName = JSON.stringify(result.data);
          break;

        case _hilinkDevice["default"].DATA_TYPE_BLE_CONNECTION_STATE_CHANGED:
          if (result.data.result == '0') {
            this.linkStatus = this.device.unlinked;

            if (this.tryReconnect) {
              this.$element('dialog-repair-failed').show();
            }

            this.showOfflineReconnect = true;
            this.showWaitingProgress = false;
          } else if (result.data.result == '2') {
            this.tryReconnect = false;
          }

          break;
      }
    }

    this.currentStateSet();
  },
  onHide: function onHide() {
    console.info("full page onHide");

    _hilinkDevice["default"].disConnect();
  },
  onDestroy: function onDestroy() {
    console.log("full page onDestroy");
  },
  currentStateSet: function currentStateSet() {
    console.info("currentStateSet is" + this.linkStatus);

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
  },
  offlineReconnect: function offlineReconnect() {
    this.tryReconnect = true;
    this.showOfflineReconnect = false;
    this.showWaitingProgress = true;
    this.linkStatus = this.device.linking;
    this.notifyDeviceId();
  },
  reConnect: function reConnect() {
    this.tryReconnect = true;
    this.showOfflineReconnect = false;
    this.showWaitingProgress = true;
    this.linkStatus = this.device.linking;
    this.$element('dialog-repair-failed').close();
    this.notifyDeviceId();
  },
  exit: function exit() {
    this.$element('dialog-repair-failed').close();
  },
  sendTestMessage: function sendTestMessage() {
    _hilinkDevice["default"].sendCommand('test', {
      't': 1,
      'v': 'FA0103066401000101000701FB'
    });
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

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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