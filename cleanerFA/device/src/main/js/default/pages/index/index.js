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

import router from '@system.router';
import HiLinkDevice from '../../../share/js/hilink-device.js';
import app from '@system.app';

export default {
  data: {
    showProgress: true,
    isFullWindow : false,
    deviceId: '',
    progressText: '',
    switchText: '开关',
    linkStatus: '',
    switchTextImg: '',
    deviceImage: '/common/images/ic_device.png',
    deviceName: 'XXX某某设备',
    menu: [
      {
        value: 'setting',
        text: '更多设置'
      }
    ],
    device: {
      on: '/common/images/ic_on.png',
      off: '/common/images/ic_off.png',
      linked: '已连接',
      unlinked: '未连接',
      linking: '连接中',
    },
    currentSwitch: 0,
    switchDisable: false,
  },
  onInit() {
    this.switchTextImg = this.device.off;
    this.linkStatus = this.device.linking;
    this.optionDisabled();
  },
  menuClick: function (e) {
    switch (e.detail.value) {
      case 'setting':
        router.push({
          uri: 'pages/setting/setting',
          params: {
            deviceName: this.deviceName,
            roomName: this.roomName,
          }
        })
        break;
    }
  },
  onShow() {
    console.log("full page onShow");
    setTimeout(() => {
      this.notifyDeviceId();
    }, 500);
  },
  notifyDeviceId: async function () {
    console.info("deviceId is " + this.deviceId);
    await HiLinkDevice.notifyDeviceId(this.deviceId);
    HiLinkDevice.connect((ret) => {
      let result = JSON.parse(ret);
      this.handleEvents(result);
    });
  },
  handleEvents: function (result) {
    console.log("handleEvents result is" + result.data.type);
    if (result.data.state == 'fail') {
          this.linkStatus = this.device.unlinked;
    } else {
      console.log("handleEvents result is" + result.data.result);
      switch (result.data.type) {
        case HiLinkDevice.DATA_TYPE_BLE_CONNECT:
          this.linkStatus = this.device.linked;
          break;
        case HiLinkDevice.DATA_TYPE_BLE_UNCONNECT:
          this.linkStatus = this.device.unlinked;
          break;
        case HiLinkDevice.DATA_TYPE_BLE_CHARACTERISTIC_CHANGED:
          break;
        case HiLinkDevice.DATA_TYPE_BLE_CONNECTION_STATE_CHANGED:
          break;
      }
    }
    this.currentStateSet();
  },
  onHide() {
    console.log("full page onHide");
    HiLinkDevice.disConnect();
  },
  onDestroy(){
    console.log("full page onDestroy");
  },
  currentStateSet: function () {
    console.log("currentStateSet is" + this.linkStatus);
    if (this.linkStatus == this.device.linked) {
      this.optionEnabled()
    } else {
      this.optionDisabled();
    }
  },
  switchClick: function () {
    if (this.currentSwitch == 0) {
      HiLinkDevice.sendCommand('lampswitch', {
        'on': 1
      });
    } else {
      HiLinkDevice.sendCommand('lampswitch', {
        'on': 0
      });
    }
  },
  optionDisabled: function () {
    this.switchDisable = true;
  },
  optionEnabled: function () {
    this.switchDisable = false;
  },
  viewMoreClick: function () {
    if (!this.isFullWindow) {
      this.isFullWindow = true;
      app.requestFullWindow();
      console.info("isFullWindow = " + this.isFullWindow)
    }
  }
}
