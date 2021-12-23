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

import storage from '@system.storage';
import prompt from '@system.prompt';

const TAG = 'tag # ';
const DEBUG = true;

var FaUtils = {
  storageGet: function (key, callback) {
    storage.get({
      key: key,
      success: (value) => {
        callback(value);
      }
    });
  },
  storageSet: function (key, value, callback) {
    storage.set({
      key: key,
      value: value,
      success: () => {
        callback();
      }
    });
  },
  logInfo: function (msg) {
    if (DEBUG) {
      console.info(TAG + msg);
    }
  },
  logError: function (msg) {
    if (DEBUG) {
      console.error(TAG + msg);
    }
  },
  toast: function (msg, time = 1000) {
    prompt.showToast({
      message: msg,
      duration: time
    });
  }
}

export default FaUtils;