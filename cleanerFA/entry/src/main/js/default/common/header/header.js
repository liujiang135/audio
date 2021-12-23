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
export default {
  props: [
    'faName',
    'action',
    'isNet',
    'version'
  ],
  data: {
    faNameValue: '',
    versionValue: '',
    actionType: '',
    isNetValue: false,
    isNet: false,
    deviceName: '',
    action: ''
  },
  onInit() {
    this.faNameValue = this.$t('strings.faName');
    this.versionValue = this.$t('strings.faVersion') + this.version;
    this.isNetValue = this.isNet;
    if (this.isNetValue) {
      this.deviceNameValue = this.deviceName;
    }
    this.actionType = this.action;
  }
}