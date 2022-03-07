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

package com.newpower.ohoscleaner2.device.service;

import java.util.HashMap;
import java.util.Map;

import com.huawei.ailife.service.kit.AiLifeServiceHelper;
import com.huawei.ailife.service.kit.constants.ConnectResult;

import com.baijia.app.cleaner.BaseDeviceDataHandler;
import com.baijia.app.cleaner.DeviceDataCallback;
import com.baijia.app.cleaner.StubDeviceDataHandler;

import com.newpower.ohoscleaner2.device.hilink.HiLinkDataCallback;
import com.newpower.ohoscleaner2.device.hilink.HiLinkDeviceHelper;
import com.newpower.ohoscleaner2.device.util.LogUtil;
import com.newpower.ohoscleaner2.device.util.TemplateUtil;
import ohos.aafwk.ability.Ability;
import ohos.aafwk.content.Intent;
import ohos.rpc.IRemoteBroker;
import ohos.rpc.IRemoteObject;
import ohos.rpc.MessageOption;
import ohos.rpc.MessageParcel;
import ohos.rpc.RemoteException;
import ohos.rpc.RemoteObject;
import ohos.utils.zson.ZSONObject;

/**
 * ble服务PA
 */
public class BleServiceAbility extends Ability {
    private static final String TAG = "BleServiceAbility";
    private BleRemoteObj remote = new BleRemoteObj();

    @Override
    public void onStart(Intent intent) {
        LogUtil.error(TAG, "BleServiceAbility::onStart");
        AiLifeServiceHelper.initApplication(getAbilityPackage());
        super.onStart(intent);
    }

    @Override
    public void onBackground() {
        super.onBackground();
        LogUtil.info(TAG, "BleServiceAbility::onBackground");
    }

    @Override
    public void onStop() {
        super.onStop();
        AiLifeServiceHelper.disconnect();
        LogUtil.info(TAG, "BleServiceAbility::onStop");
    }

    @Override
    public void onCommand(Intent intent, boolean restart, int startId) {
    }

    @Override
    public IRemoteObject onConnect(Intent intent) {
        LogUtil.info(TAG, "BleServiceAbility::onConnect");
        super.onConnect(intent);
        return remote.asObject();
    }

    @Override
    public void onDisconnect(Intent intent) {
        LogUtil.info(TAG, "BleServiceAbility::onDisconnect");
        remote.onDisconnect();
    }

    /**
     * 交互类
     */
    class BleRemoteObj extends RemoteObject implements IRemoteBroker {
        private static final int SUCCESS = 0;
        private static final int ACTION_MESSAGE_CODE_SUBSCRIBE = 1001;
        private static final int ACTION_MESSAGE_CODE_UNSUBSCRIBE = 1002;
        private static final int ACTION_MESSAGE_CODE_SEND_COMMAND = 1003;
        private static final int ACTION_MESSAGE_CODE_DATA_CHANGED = 1004;
        private static final int ACTION_MESSAGE_CODE_INIT_DEVICE_DATA = 1005;
        private static final int ACTION_MESSAGE_CODE_NOTIFY_DEVICE_ID = 1006;

        private static final int ACTION_MESSAGE_CODE_GET_TEMPLATE = 1009;

        private static final String MESSAGE_KEY_SERVICE_ID = "serviceId";
        private static final String MESSAGE_KEY_CHARACTERISTIC = "param";
        private static final String STATE_SUCCESS = "success";
        private static final String STATE_FAIL = "fail";

        private HiLinkDeviceHelper hiLinkDeviceHelper;

        private int connectResult = ConnectResult.SERVICE_UNAVAILABLE;
        private String deviceId = null;

        private IRemoteObject remoteObjectHandler = null;

        private BaseDeviceDataHandler deviceDataHandler = null;

        private final HiLinkDataCallback hiLinkDataCallback = new HiLinkDataCallback() {
            @Override
            public void onSuccess(int dataType, String result) {
                sendData(formatData(STATE_SUCCESS, dataType, result));
            }

            @Override
            public void onFail(int dataType, int code, String result) {
                sendData(formatData(STATE_FAIL, dataType, result));
            }
        };

        BleRemoteObj() {
            super("BleServiceAbility_BleRemoteObj");
        }

        private final DeviceDataCallback deviceDataCallback = new DeviceDataCallback() {
            public void onResult(int code, String msg, Map<String, Object> map) {
                sendData(map);
            }
        };

        private BaseDeviceDataHandler getDeviceDataHandler() {
            return new StubDeviceDataHandler(deviceId, deviceDataCallback);
        }

        @Override
        public boolean onRemoteRequest(int code, MessageParcel data, MessageParcel reply, MessageOption option) {
            LogUtil.info(TAG, "XXX onRemoteRequest code:" + code);
            switch (code) {
                case ACTION_MESSAGE_CODE_SUBSCRIBE: { //ACTION_MESSAGE_CODE_SUBSCRIBE = 1001
                    LogUtil.info(TAG, "XXX onRemoteRequest ACTION_MESSAGE_CODE_SUBSCRIBE:" + code);
                    connectAiLifeService();
                    remoteObjectHandler = data.readRemoteObject();
                    break;
                }
                case ACTION_MESSAGE_CODE_UNSUBSCRIBE: { //1002
                    LogUtil.info(TAG, "XXX onRemoteRequest ACTION_MESSAGE_CODE_UNSUBSCRIBE:" + code);
                    remoteObjectHandler = null;
                    break;
                }
                case ACTION_MESSAGE_CODE_SEND_COMMAND: { //1003
                    LogUtil.info(TAG, "XXX onRemoteRequest ACTION_MESSAGE_CODE_SEND_COMMAND:" + code);
                    String zsonStr = data.readString();
                    ZSONObject zsonObj = ZSONObject.stringToZSON(zsonStr);
                    hiLinkDeviceHelper.sendCommand(
                            zsonObj.getString(MESSAGE_KEY_SERVICE_ID),
                            zsonObj.getString(MESSAGE_KEY_CHARACTERISTIC));
                    break;
                }
                case ACTION_MESSAGE_CODE_DATA_CHANGED: { //1004
                    LogUtil.info(TAG, "XXX onRemoteRequest ACTION_MESSAGE_CODE_DATA_CHANGED:" + code);
                    String zsonStr = data.readString();
                    ZSONObject zsonObj = ZSONObject.stringToZSON(zsonStr);
                    for (Map.Entry<String, Object> entry : zsonObj.entrySet()) {
                        deviceDataHandler.modifyDeviceProperty(entry.getKey(), entry.getValue());
                    }
                    break;
                }
                case ACTION_MESSAGE_CODE_INIT_DEVICE_DATA: { //1005
                    LogUtil.info(TAG, "XXX onRemoteRequest ACTION_MESSAGE_CODE_INIT_DEVICE_DATA:" + code);
                    deviceDataHandler = getDeviceDataHandler();
                    break;
                }
                case ACTION_MESSAGE_CODE_NOTIFY_DEVICE_ID: { //1006
                    LogUtil.info(TAG, "XXX onRemoteRequest ACTION_MESSAGE_CODE_NOTIFY_DEVICE_ID:" + code);
                    this.deviceId = data.readString();
                    LogUtil.info(TAG, "XXX ACTION_MESSAGE_CODE_NOTIFY_DEVICE_ID deviceId:" + deviceId);
                    MessageParcel dataMsg = MessageParcel.obtain();
                    Map<String, Object> results = new HashMap<>();
                    results.put("code", SUCCESS);
                    dataMsg.writeString(ZSONObject.toZSONString(results));
                    IRemoteObject remoteReply = reply.readRemoteObject();
                    try {
                        remoteReply.sendRequest(0, dataMsg, MessageParcel.obtain(), new MessageOption());
                        dataMsg.reclaim();
                    } catch (RemoteException exception) {
                        return false;
                    }
                    break;
                }
                case ACTION_MESSAGE_CODE_GET_TEMPLATE: { //1009
                    LogUtil.info(TAG, "XXX onRemoteRequest ACTION_MESSAGE_CODE_GET_TEMPLATE:" + code);
                    ZSONObject template = TemplateUtil.getTemplate();
                    Map<String, Object> dataMap = new HashMap<>();
                    dataMap.put("template", template);
                    Map<String, Object> zsonResult = new HashMap<>();
                    zsonResult.put("code", SUCCESS);
                    zsonResult.put("data", ZSONObject.toZSONString(dataMap));
                    reply.writeString(ZSONObject.toZSONString(zsonResult));
                    break;
                }
                default: {
                    reply.writeString("service not defined");
                    return false;
                }
            }
            return true;
        }

        @Override
        public IRemoteObject asObject() {
            return this;
        }

        /**
         * 向 FA 发送数据
         *
         * @param dataMap 数据源
         */
        private void sendData(Map<String, Object> dataMap) {
            MessageParcel data = MessageParcel.obtain();
            MessageParcel reply = MessageParcel.obtain();
            MessageOption option = new MessageOption();
            data.writeString(ZSONObject.toZSONString(dataMap));
            if (remoteObjectHandler != null) {
                try {
                    remoteObjectHandler.sendRequest(0, data, reply, option);
                } catch (RemoteException e) {
                    LogUtil.error(TAG, "failed to send data to js");
                }
            }
            reply.reclaim();
            data.reclaim();
        }

        /**
         * 格式化数据源
         *
         * @param state 状态码
         * @param dataType 数据类型
         * @param result 实际数据
         * @return 格式化后数据
         */
        public Map<String, Object> formatData(String state, int dataType, String result) {
            final Map<String, Object> dataMap = new HashMap<>();
            dataMap.put("state", state);
            dataMap.put("type", dataType);
            dataMap.put("result", result);
            return dataMap;
        }

        /**
         * 连接 hilink 服务，并订阅设备事件，获取设备信息
         */
        private void connectAiLifeService() {
            LogUtil.info(TAG, "XXX ready to connect AiLifeServiceHelper, check helper = " + hiLinkDeviceHelper);
            LogUtil.info(TAG, "XXX ready to connect AiLifeServiceHelper, connectResult = " + connectResult);
            if (hiLinkDeviceHelper == null) {
                LogUtil.info(TAG, "XXX AiLifeServiceHelper.connect start, hiLinkDeviceHelper is null ,  deviceId = " + deviceId);
                connectResult = AiLifeServiceHelper.connect(getContext());
                LogUtil.info(TAG, "XXX AiLifeServiceHelper.connect result = " + connectResult + ", deviceId = " + deviceId);
                if (connectResult < ConnectResult.SERVICE_OK) {
                    sendData(formatData(STATE_FAIL, HiLinkDeviceHelper.DataType.AI_LIFE_SERVICE_CONNECT,
                            String.valueOf(connectResult)));
                } else {
                    hiLinkDeviceHelper = new HiLinkDeviceHelper(deviceId);
                    hiLinkDeviceHelper.setHiLinkDataCallback(hiLinkDataCallback);
                    hiLinkDeviceHelper.getHiLinkDevice();
                }
            } else {
                LogUtil.info(TAG, "XXX AiLifeServiceHelper.connect start,  deviceId = " + deviceId);
                if (connectResult < ConnectResult.SERVICE_OK) { //SERVICE_OK =0
                    sendData(formatData(STATE_FAIL, HiLinkDeviceHelper.DataType.AI_LIFE_SERVICE_CONNECT,
                            String.valueOf(connectResult)));
                } else {
                    hiLinkDeviceHelper = new HiLinkDeviceHelper(deviceId);
                    hiLinkDeviceHelper.setHiLinkDataCallback(hiLinkDataCallback);
                    hiLinkDeviceHelper.getHiLinkDevice();
                }
            }
        }

        public void onDisconnect() {
            if (hiLinkDeviceHelper != null) {
                hiLinkDeviceHelper.disConnectBle();
            }
        }
    }
}