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
}

var getParams = function (code) {
  return {
    messageCode: code,
    bundleName: 'com.newpower.ohoscleaner2',
    abilityName: 'com.newpower.ohoscleaner2.device.service.BleServiceAbility',
    abilityType: 0
  }
}

var HiLinkDevice = {
  DATA_TYPE_BLE_CONNECT: 10,
  DATA_TYPE_BLE_CHARACTERISTIC_CHANGED: 11,
  DATA_TYPE_BLE_CONNECTION_STATE_CHANGED: 12,
  DATA_TYPE_BLE_UNCONNECT: 13,
  connect: async function(callback){
    let params = getParams(Constants.SUBSCRIBE);
    await FeatureAbility.subscribeAbilityEvent(params, callback);
  },
  disConnect: function () {
    let params = getParams(Constants.UNSUBSCRIBE);
    FeatureAbility.unsubscribeAbilityEvent(params);
  },
  sendCommand: function (serviceId, param) {
    let params = getParams(Constants.SEND_COMMAND);
    params.data = {
      serviceId: serviceId,
      param: param,
    };
    params.syncOption = 1;
    FeatureAbility.callAbility(params);
  },
  notifyDeviceId: function (deviceId) {
    let params = getParams(Constants.NOTIFY_DEVICE_ID);
    params.data = deviceId;
    params.syncOption = 0;
    FeatureAbility.callAbility(params);
  },
  getDataTypeDes: function (type) {
    switch (type) {
      case this.DATA_TYPE_BLE_CONNECT:
        return 'DATA_TYPE_BLE_CONNECT';
      case this.DATA_TYPE_BLE_CHARACTERISTIC_CHANGED:
        return 'DATA_TYPE_BLE_CHARACTERISTIC_CHANGED';
      case this.DATA_TYPE_BLE_CONNECTION_STATE_CHANGED:
        return 'DATA_TYPE_BLE_CONNECTION_STATE_CHANGED';
    }
  }
}

export default HiLinkDevice;
