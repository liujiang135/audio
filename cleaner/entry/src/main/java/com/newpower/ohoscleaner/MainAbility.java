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

package com.newpower.ohoscleaner;

import com.newpower.ohoscleaner.util.LogUtil;

import ohos.aafwk.content.Intent;
import ohos.ace.ability.AceAbility;
import ohos.agp.utils.TextTool;
import ohos.bundle.ElementName;
import ohos.utils.zson.ZSONObject;

/**
 * 授权登录界面
 *
 * @since 2021-08-11
 */
public class MainAbility extends AceAbility {
    private static final String TAG = "MainAbility";
    private static final String BUNDLE_NAME = "com.newpower.ohoscleaner";
    private static final String DEVICE_ABILITY_NAME = "com.newpower.ohoscleaner.device.DeviceAbility";

    private static final String KEY_DEVICE_ID = "deviceId";
    private static final int WINDOW_MODAL = 3;

    private static final int PRODUCT_INFO_START = 0;
    private static final int PRODUCT_INFO_MIDDLE = 4;
    private static final int PRODUCT_INFO_END = 6;
    private static final int CONFIG_COMPLETE = 1;

    @Override
    public void onStart(Intent intent) {
        intent.setParam("window_modal", WINDOW_MODAL);
        LogUtil.info(TAG, "onStart intent" + ZSONObject.toZSONString(intent.getParams()));
        String deviceId = intent.getStringParam("deviceId");
        String uuid = intent.getStringParam("uuid");

        String productInfo = intent.getStringParam("productInfo");
        String productId = (productInfo != null && productInfo.length() >= PRODUCT_INFO_MIDDLE)
                ? productInfo.substring(PRODUCT_INFO_START, PRODUCT_INFO_MIDDLE) : null;
        String subModelId = (productInfo != null && productInfo.length() >= PRODUCT_INFO_END)
                ? productInfo.substring(PRODUCT_INFO_MIDDLE, PRODUCT_INFO_END) : null;

        String source = intent.getStringParam("source");
        int businessStage = intent.getIntParam("businessStage", 0);

        LogUtil.info(TAG, "onStart deviceId: " + deviceId);
        LogUtil.info(TAG, "onStart uuid: " + uuid);
        LogUtil.info(TAG, "onStart productId: " + productId);
        LogUtil.info(TAG, "onStart subModelId: " + subModelId);
        LogUtil.info(TAG, "onStart source: " + source);
        LogUtil.info(TAG, "onStart businessStage: " + businessStage);

        if (!TextTool.isNullOrEmpty(deviceId) && businessStage == CONFIG_COMPLETE) {
            openDevicePage(KEY_DEVICE_ID, deviceId);
        } else {
            EntryInternalAbility.register(this, productId, uuid, deviceId);
            super.onStart(intent);
        }
    }

    /**
     * 打开半模态控制页面
     *
     * @param paramKey   参数键
     * @param paramValue 参数值
     */
    private void openDevicePage(String paramKey, String paramValue) {
        Intent intent = new Intent();
        intent.setParam(paramKey, paramValue);
        ElementName elementName = new ElementName("", BUNDLE_NAME, DEVICE_ABILITY_NAME);
        intent.setElement(elementName);
        intent.addFlags(Intent.FLAG_ABILITY_NEW_MISSION);
        intent.addFlags(Intent.FLAG_INSTALL_ON_DEMAND);
        startAbility(intent);
        terminateAbility();
    }

    @Override
    public void onStop() {
        super.onStop();
        EntryInternalAbility.deregister();
    }
}
