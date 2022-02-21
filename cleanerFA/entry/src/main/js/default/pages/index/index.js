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

import app from '@system.app';
import FaUtils from '../../fa-utils.js'
import EntryUtils from '../../entry-utils.js'
import {HuaweiIdAuthParamsHelper, HuaweiIdAuthManager} from '@hmscore/hms-jsb-account'

const STORAGE_KEY_OPEN_ID = 'open_id';

export default {
  data: {
    protocolAgreed: false,
    openIdLocal: '',
    showProgress: true,
    version: ''
  },
  onInit() {
    this.version = app.getInfo().versionName;
    FaUtils.logError('version = ' + this.version);
    FaUtils.storageGet(STORAGE_KEY_OPEN_ID, (value) => {
      if (value == '') {
        this.showProgress = false;
      } else {
        this.openIdLocal = value;
        this.silentSignIn();
      }
    });
  },
  hwLoginClick: function () {
    FaUtils.logError('signIn hwLoginClick = ');
    this.signIn();
  },
  signIn: function () {
    FaUtils.logError('signIn hwLoginClick in method 1111= ');
    var signInOption = new HuaweiIdAuthParamsHelper().setId().setProfile().setDialogAuth().build();
    HuaweiIdAuthManager.getAuthApi().getSignInIntent(signInOption).then((res) => {
      console.info("signIn success. " + JSON.stringify(res));
      FaUtils.storageSet(STORAGE_KEY_OPEN_ID, res.openId, () => {
        EntryUtils.goNetConfigOrDevicePage();
      });
    }).catch((error) => {
      console.error("signIn fail. " + JSON.stringify(error));
    });
  },
  silentSignIn: function () {
    FaUtils.logError('silentSignIn hwLoginClick in method 2222= ');
    const signInOption = new HuaweiIdAuthParamsHelper().setId().setProfile().setDialogAuth().build();
    HuaweiIdAuthManager.getAuthApi().silentSignIn(signInOption).then((res) => {
      console.info("silentSignIn success. " + JSON.stringify(res));
      console.info("silentSignIn openIdLocal= " + this.openIdLocal); //MDFAMTA1Mzc3NDE==ZmIwOTZhNTA
      this.result = JSON.stringify(res);
      if (this.openIdLocal == res.openId) {
        EntryUtils.goNetConfigOrDevicePage();
      } else {
        this.showProgress = false;
      }
    }).catch((error) => {
      this.showProgress = false;
      console.error("silentSignIn fail. " + JSON.stringify(error));
    });
  },
  cancelLoginClick: async function () {
    app.terminate();
  },
  protocolAgreeCheck: function (e) {
    this.protocolAgreed = e.checked;
  },
  protocolUserAgreementLink: function () {
    // input protocol url
    EntryUtils.openBrowser('http://www.baidu.com');
  },
  protocolPrivacyStatementLink: function () {
    // input protocol url
    EntryUtils.openBrowser('http://www.baidu.com');
  }
}
