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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.huawei.ailife.service.kit.AiLifeServiceHelper;
import com.huawei.ailife.service.kit.constants.ConnectResult;
import com.newpower.ohoscleaner2.device.hilink.HiLinkDataCallback;
import com.newpower.ohoscleaner2.device.hilink.HiLinkDeviceHelper;
import com.newpower.ohoscleaner2.device.util.LogUtil;

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
        private HiLinkDeviceHelper hiLinkDeviceHelper;
        private static final int SUCCESS = 0;
        private static final int ACTION_MESSAGE_CODE_SUBSCRIBE = 1001;
        private static final int ACTION_MESSAGE_CODE_UNSUBSCRIBE = 1002;
        private static final int ACTION_MESSAGE_CODE_SEND_COMMAND = 1003;
        private static final int ACTION_MESSAGE_CODE_NOTIFY_DEVICE_ID = 1006;
        private static final String MESSAGE_KEY_SERVICE_ID = "serviceId";
        private static final String MESSAGE_KEY_CHARACTERISTIC = "param";
        private static final String STATE_SUCCESS = "success";
        private static final String STATE_FAIL = "fail";
        int connectResult = -1;
        private String deviceId;

        private List<IRemoteObject> remoteObjectHandlers = new ArrayList<>();

        BleRemoteObj() {
            super("BleServiceAbility_BleRemoteObj");
        }

        @Override
        public boolean onRemoteRequest(int code, MessageParcel data, MessageParcel reply, MessageOption option) {
            LogUtil.info(TAG, "code:" + code);
            switch (code) {
                case ACTION_MESSAGE_CODE_SUBSCRIBE: {
                    if (remoteObjectHandlers.isEmpty()) {
                        connectAiLifeService();
                    }
                    remoteObjectHandlers.add(data.readRemoteObject());
                    LogUtil.info(TAG, "remoteObjectHandlers size = " + remoteObjectHandlers.size());
                    break;
                }
                case ACTION_MESSAGE_CODE_SEND_COMMAND: {
                    String zsonStr = data.readString();
                    ZSONObject zsonObj = ZSONObject.stringToZSON(zsonStr);
                    hiLinkDeviceHelper.sendCommand(
                            zsonObj.getString(MESSAGE_KEY_SERVICE_ID),
                            zsonObj.getString(MESSAGE_KEY_CHARACTERISTIC));
                    break;
                }
                case ACTION_MESSAGE_CODE_NOTIFY_DEVICE_ID: {
                    this.deviceId = data.readString();
                    LogUtil.info(TAG, "ACTION_MESSAGE_CODE_NOTIFY_DEVICE_ID deviceId:" + deviceId);
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
                case ACTION_MESSAGE_CODE_UNSUBSCRIBE: {
                    remoteObjectHandlers.clear();
                    LogUtil.info(TAG, "remoteObjectHandlers size = " + remoteObjectHandlers.size());
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
            for(IRemoteObject remoteObjectHandler : remoteObjectHandlers) {
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
            LogUtil.info(TAG, "ready to connect AiLifeServiceHelper, check helper = " + hiLinkDeviceHelper);
            if (hiLinkDeviceHelper == null) {
                LogUtil.info(TAG, "AiLifeServiceHelper.connect start deviceId = " + deviceId);
                connectResult = AiLifeServiceHelper.connect(getContext());
                LogUtil.info(TAG, "AiLifeServiceHelper.connect result = " + connectResult + ", deviceId = " + deviceId);
                if (connectResult < ConnectResult.SERVICE_OK) {
                    sendData(formatData(STATE_FAIL, HiLinkDeviceHelper.DataType.AI_LIFE_SERVICE_CONNECT,
                            String.valueOf(connectResult)));
                } else {
                    hiLinkDeviceHelper = new HiLinkDeviceHelper(deviceId);
                    hiLinkDeviceHelper.setHiLinkDataCallback(hiLinkDataCallback);
                    hiLinkDeviceHelper.getHiLinkDevice();
                }
            } else {
                if (connectResult < ConnectResult.SERVICE_OK) {
                    sendData(formatData(STATE_FAIL, HiLinkDeviceHelper.DataType.AI_LIFE_SERVICE_CONNECT,
                            String.valueOf(connectResult)));
                } else {
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