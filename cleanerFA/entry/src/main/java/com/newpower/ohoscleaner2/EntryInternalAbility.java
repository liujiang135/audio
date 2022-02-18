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

import com.newpower.ohoscleaner.util.EntryUtil;
import com.newpower.ohoscleaner.util.LogUtil;

import ohos.aafwk.content.Intent;
import ohos.aafwk.content.Operation;
import ohos.ace.ability.AceInternalAbility;
import ohos.app.AbilityContext;
import ohos.bundle.ElementName;
import ohos.rpc.IRemoteObject;
import ohos.rpc.MessageOption;
import ohos.rpc.MessageParcel;
import ohos.rpc.RemoteException;
import ohos.utils.net.Uri;
import ohos.utils.zson.ZSONObject;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * AceInternalAbility
 * JS FA call JAVA PA
 * https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-pa-overview-0000000000617989
 *
 * @since 2021-08-11
 */
public class EntryInternalAbility extends AceInternalAbility implements AceInternalAbility.AceInternalAbilityHandler {
    private static final String TAG = "EntryInternalAbility";
    private static final String BUNDLE_NAME = "com.newpower.ohoscleaner";
    private static final String ABILITY_NAME = "com.newpower.ohoscleaner.EntryInternalAbility";
    private static final String DEVICE_ABILITY_NAME = "com.newpower.ohoscleaner.device.DeviceAbility";
    private static final String HILINK_NET_CONFIG_URI =
            "hilink://hilinksvc.huawei.com/device?action=deviceAdd&prodId=%s&fromApp=%s";
    private static final int SUCCESS = 0;
    private static final int CODE_OPEN_BROWSER = 1001;
    private static final int CODE_NET_CONFIG_OR_DEVICE_PAGE = 1002;

    private static final int REQUEST_CODE_1 = -1;

    private static EntryInternalAbility mInstance;

    private AbilityContext mContext;
    private String deviceId;
    private String productId;
    private String uuid;

    /**
     * 构造方法
     */
    public EntryInternalAbility() {
        super(BUNDLE_NAME, ABILITY_NAME);
    }

    /**
     * 注册
     *
     * @param context 上下文对象
     * @param productId 产品id
     * @param uuid uuid
     * @param deviceId 设备id
     */
    public static void register(AbilityContext context, String productId, String uuid, String deviceId) {
        mInstance = new EntryInternalAbility();
        mInstance.mContext = context;
        mInstance.deviceId = deviceId;
        mInstance.productId = productId;
        mInstance.uuid = uuid;
        mInstance.setInternalAbilityHandler(mInstance);
    }

    /**
     * 取消注册
     */
    public static void deregister() {
        if (mInstance == null) {
            return;
        }
        mInstance.mContext = null;
        mInstance.setInternalAbilityHandler(null);
    }

    @Override
    public boolean onRemoteRequest(int code, MessageParcel data, MessageParcel reply, MessageOption messageOption) {
        LogUtil.info(TAG, "onRemoteRequest: code = " + code);
        Map<String, Object> results = new HashMap<>();
        switch (code) {
            case CODE_OPEN_BROWSER: {
                String zsonStr = data.readString();
                ZSONObject zsonObject = ZSONObject.stringToZSON(zsonStr);
                String url = zsonObject.getString("url");
                openBrowser(url);
                break;
            }
            case CODE_NET_CONFIG_OR_DEVICE_PAGE: {
                goNetConfigOrDevicePage();
                break;
            }
            default:
                break;
        }
        results.put("code", SUCCESS);

        // SYNC
        if (messageOption.getFlags() == MessageOption.TF_SYNC) {
            reply.writeString(ZSONObject.toZSONString(results));
        } else {
            // ASYNC
            MessageParcel responseData = MessageParcel.obtain();
            responseData.writeString(ZSONObject.toZSONString(results));
            IRemoteObject remoteReply = reply.readRemoteObject();
            try {
                remoteReply.sendRequest(SUCCESS, responseData, MessageParcel.obtain(), new MessageOption());
            } catch (RemoteException exception) {
                return false;
            } finally {
                responseData.reclaim();
            }
        }
        return true;
    }

    /**
     * 跳转配网或控制界面判断
     */
    private void goNetConfigOrDevicePage() {
        if (EntryUtil.isEmpty(deviceId)) {
            openHiLinkNetConfig();
        } else {
            openDevicePage();
        }
    }

    /**
     * 打开连接页面
     */
    private void openHiLinkNetConfig() {
        mContext.getUITaskDispatcher().asyncDispatch(() -> {
            String uriStr = String.format(Locale.ROOT, HILINK_NET_CONFIG_URI, productId, mContext.getBundleName());
            LogUtil.info(TAG, "openHiLinkNetConfig: uriStr = " + uriStr);
            Intent intent = new Intent();
            intent.setParam("uuid", uuid);
            Operation operation = new Intent.OperationBuilder()
                    .withDeviceId("")
                    .withFlags(Intent.FLAG_ABILITY_NEW_MISSION | Intent.FLAG_NOT_OHOS_COMPONENT)
                    .withAction("android.intent.action.VIEW")
                    .withUri(Uri.parse(uriStr))
                    .build();
            intent.setOperation(operation);
            mContext.startAbility(intent, REQUEST_CODE_1);
            mContext.terminateAbility();
        });
    }

    /**
     * 打开设备控制页面
     */
    public void openDevicePage() {
        mContext.getUITaskDispatcher().asyncDispatch(() -> {
            Intent intent = new Intent();
            intent.setParam("deviceId", deviceId);
            ElementName elementName = new ElementName("", BUNDLE_NAME, DEVICE_ABILITY_NAME);
            intent.setElement(elementName);
            intent.addFlags(Intent.FLAG_ABILITY_NEW_MISSION);
            intent.addFlags(Intent.FLAG_INSTALL_ON_DEMAND);
            mContext.startAbility(intent, 0);
            mContext.terminateAbility();
        });
    }

    /**
     * 使用浏览器打开隐私协议链接
     *
     * @param url 隐私协议链接
     */
    private void openBrowser(String url) {
        mContext.getUITaskDispatcher().asyncDispatch(() -> {
            Intent intent = new Intent();
            Intent.OperationBuilder builder = new Intent.OperationBuilder()
                    .withAction("android.intent.action.VIEW")
                    .withUri(Uri.parse(url))
                    .withFlags(Intent.FLAG_ABILITY_NEW_MISSION);
            intent.setOperation(builder.build());
            mContext.startAbility(intent, 0);
        });
    }
}
