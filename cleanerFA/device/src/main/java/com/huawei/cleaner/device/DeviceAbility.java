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

package com.huawei.cleaner.device;

import com.huawei.cleaner.device.util.LogUtil;

import ohos.aafwk.content.Intent;
import ohos.ace.ability.AceAbility;
import ohos.utils.zson.ZSONObject;

/**
 * 设备控制全屏界面
 *
 * @since 2021-08-11
 */
public class DeviceAbility extends AceAbility {
    private static final String TAG = "DeviceAbility";
    private static final String DEVICE_ID = "deviceId";
    private static final int HALF_MODAL = 1;

    @Override
    public void onStart(Intent intent) {
        intent.setParam("window_modal", HALF_MODAL);
        LogUtil.info(TAG, "onStart params:" + ZSONObject.toZSONString(intent.getParams()));
        String deviceId = intent.getStringParam(DEVICE_ID);
        if (deviceId == null) {
            String startParams = intent.getStringParam("__startParams");
            ZSONObject zsonObj = ZSONObject.stringToZSON(startParams);
            if (zsonObj != null && zsonObj.containsKey(DEVICE_ID)) {
                deviceId = zsonObj.getString(DEVICE_ID);
                intent.setParam(DEVICE_ID, deviceId);
            }
        }
        LogUtil.info(TAG, "onStart deviceId:" + deviceId);
        setPageParams("", intent.getParams());
        super.onStart(intent);
    }
}
