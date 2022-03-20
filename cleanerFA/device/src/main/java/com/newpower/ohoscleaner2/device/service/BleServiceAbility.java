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

import com.baijia.app.cleaner.BaseDeviceDataHandler;
import com.baijia.app.cleaner.DeviceDataCallback;
import com.baijia.app.cleaner.StubDeviceDataHandler;
import com.huawei.ailife.service.internal.utils.Log;
import com.huawei.ailife.service.kit.AiLifeServiceHelper;
import com.huawei.ailife.service.kit.constants.ConnectResult;
import com.newpower.ohoscleaner2.device.DeviceAbility;
import com.newpower.ohoscleaner2.device.hilink.HiLinkDataCallback;
import com.newpower.ohoscleaner2.device.hilink.HiLinkDeviceHelper;
import com.newpower.ohoscleaner2.device.util.LogUtil;
import com.newpower.ohoscleaner2.device.util.TemplateUtil;
import ohos.aafwk.ability.Ability;
import ohos.aafwk.content.Intent;
import ohos.agp.window.dialog.ToastDialog;
import ohos.eventhandler.EventHandler;
import ohos.eventhandler.EventRunner;
import ohos.rpc.IRemoteBroker;
import ohos.rpc.IRemoteObject;
import ohos.rpc.MessageOption;
import ohos.rpc.MessageParcel;
import ohos.rpc.RemoteException;
import ohos.rpc.RemoteObject;
import ohos.utils.zson.ZSONObject;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import static com.newpower.ohoscleaner2.device.hilink.HiLinkDeviceHelper.DATA_TYPE_BLE_CHARACTERISTIC_CHANGED;
import static com.newpower.ohoscleaner2.device.hilink.HiLinkDeviceHelper.DataType.AI_LIFE_SERVICE_CONNECT;

/**
 * ble服务PA
 */
public class BleServiceAbility extends Ability {
    private static final String TAG = "BleServiceAbility";
    private BleRemoteObj remote = new BleRemoteObj();

    @Override
    public void onStart(Intent intent) {
        LogUtil.init(getContext());
        LogUtil.info(TAG, "BleServiceAbility::onStart");
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

        private static final int ACTION_MESSAGE_INIT = 1000;
        private static final int ACTION_MESSAGE_DATA_SUBSCRIBE = 2001;
        private static final int ACTION_MESSAGE_DATA_UNSUBSCRIBE = 2002;
        private static final int ACTION_MESSAGE_BLE_CONNECT = 3001;
        private static final int ACTION_MESSAGE_BLE_DISCONNECT = 3002;
        private static final int ACTION_MESSAGE_BLE_COMMAND = 3003;

        private static final int MESSAGE_DATA_TYPE_BLE_CONNECT = 10;
        private static final int MESSAGE_DATA_TYPE_BLE_CHARACTERISTIC_CHANGED = 11;
        private static final int MESSAGE_DATA_TYPE_BLE_CONNECTION_STATE_CHANGED = 12;
        private static final int MESSAGE_DATA_TYPE_BLE_UNCONNECT = 13;

        private static final String STATE_OK = "ok";

        private static final String MESSAGE_SERVICE_ID = "fa";

        private static final String MESSAGE_KEY_SERVICE_ID = "serviceId";
        private static final String MESSAGE_KEY_CHARACTERISTIC = "param";
        private static final String STATE_SUCCESS = "success";
        private static final String STATE_FAIL = "fail";

        private HiLinkDeviceHelper hiLinkDeviceHelper;

        private int connectResult = ConnectResult.SERVICE_UNAVAILABLE;
        private String deviceId = null;

        private IRemoteObject remoteObjectHandler = null;
        private IRemoteObject remoteObject = null;

        private BaseDeviceDataHandler deviceDataHandler = null;

        private final HiLinkDataCallback hiLinkDataCallback = new HiLinkDataCallback() {
            @Override
            public void onSuccess(int dataType, String result) {
                LogUtil.ui("接收: " + result);

                if (DATA_TYPE_BLE_CHARACTERISTIC_CHANGED == dataType) {
                    BleProtocolUtil.onBleUpMessage(fetchMsgContent(result), (data) -> {
                        sendPacket(formatData(STATE_OK, DATA_TYPE_BLE_CHARACTERISTIC_CHANGED, data));
                    });
                } else {
                    sendPacket(formatData(STATE_OK, dataType, result));
                }
            }

            @Override
            public void onFail(int dataType, int code, String result) {
                sendData(formatData(STATE_FAIL, dataType, result));
            }
        };

        public String fetchMsgContent(String rawMsg) {
            ZSONObject zsonObj = ZSONObject.stringToZSON(rawMsg);
            String type = zsonObj.getString("type");
            if (!"CharacteristicChanged".equals(type)) {
                return "";
            }
            ZSONObject data = zsonObj.getZSONObject("content").getZSONObject("data");
            return data.getString("v");
        }

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
                case ACTION_MESSAGE_INIT: {
                    // DEBUG {
                        LogUtil.setLogger((msg)->{sendPacket(formatData(STATE_OK, 50, msg));});
                        deviceDataHandler = getDeviceDataHandler();
                        //onConnect();
                    // } DEBUG
                    //doConnectAiLifeService();
                    break;
                }
                case ACTION_MESSAGE_DATA_SUBSCRIBE: {
                    remoteObject = data.readRemoteObject();
                    onConnect();
                    //connectAiLifeService();
                    //doConnectAiLifeService();
                    break;
                }
                case ACTION_MESSAGE_DATA_UNSUBSCRIBE: {
                    remoteObject = null;
                    onDisconnect();
                    break;
                }
                case ACTION_MESSAGE_BLE_CONNECT: {
                    onConnect();
                    break;
                }
                case ACTION_MESSAGE_BLE_DISCONNECT: {
                    onDisconnect();
                    break;
                }
                case ACTION_MESSAGE_BLE_COMMAND: {
                    ZSONObject zsonObj = ZSONObject.stringToZSON(data.readString());
                    String cmd = zsonObj.getString("cmd");
                    String value = zsonObj.getString("value");
                    BleProtocolUtil.onBleDownMessage(cmd + ":" + value, (result) -> {
                        sendCommand(String.valueOf(result.get(BleProtocolUtil.RESULT_KEY)));
                    });
                    break;
                }

                case ACTION_MESSAGE_CODE_SUBSCRIBE: {
                    LogUtil.toast("OLD HiLink SUBSCRIBE");
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

        private void sendPacket(Map<String, Object> packet) {
            MessageParcel data = MessageParcel.obtain();
            MessageParcel reply = MessageParcel.obtain();
            MessageOption option = new MessageOption();
            data.writeString(ZSONObject.toZSONString(packet));

            if (remoteObject != null) {
                try {
                    remoteObject.sendRequest(0, data, reply, option);
                } catch (RemoteException e) {
                    LogUtil.error(TAG, "failed to send data to js");
                }
            }

            reply.reclaim();
            data.reclaim();
        }

        /**
         * 向 FA 发送数据
         *
         * @param dataMap 数据源
         */
        private void sendData0(Map<String, String> dataMap) {
            MessageParcel data = MessageParcel.obtain();
            MessageParcel reply = MessageParcel.obtain();
            MessageOption option = new MessageOption();
            data.writeString(ZSONObject.toZSONString(dataMap));
            if (remoteObject != null) {
                try {
                    remoteObject.sendRequest(0, data, reply, option);
                } catch (RemoteException e) {
                    LogUtil.error(TAG, "failed to send data to js");
                }
            }
            reply.reclaim();
            data.reclaim();
        }

        private void sendData1(Map<String, Object> dataMap) {
            MessageParcel data = MessageParcel.obtain();
            MessageParcel reply = MessageParcel.obtain();
            MessageOption option = new MessageOption();
            data.writeString(ZSONObject.toZSONString(dataMap));
            if (remoteObject != null) {
                try {
                    remoteObject.sendRequest(0, data, reply, option);
                } catch (RemoteException e) {
                    LogUtil.error(TAG, "failed to send data to js");
                }
            }
            reply.reclaim();
            data.reclaim();
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

        private void sendData(String zsonStr) {
            MessageParcel data = MessageParcel.obtain();
            MessageParcel reply = MessageParcel.obtain();
            MessageOption option = new MessageOption();
            data.writeString(zsonStr);
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

        private void sendCommand(String cmdMsg) {
            String msg = new StringBuffer("{\"t\":1,\"v\":\"").append(cmdMsg).append("\"}").toString();
            // DEBUG 将要发送的指令 {
                LogUtil.ui("发送: " + msg);
            // } DEBUG
            hiLinkDeviceHelper.sendCommand(MESSAGE_SERVICE_ID, msg);
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

        public Map<String, Object> formatData(String state, int dataType, Map<String, Object> result) {
            final Map<String, Object> dataMap = new HashMap<>();
            dataMap.put("state", state);
            dataMap.put("type", dataType);
            dataMap.put("result", result);
            return dataMap;
        }


        /**
         * 连接 hilink 服务，并订阅设备事件，获取设备信息
         */
        @Deprecated
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

        private void doConnectAiLifeService() {
            // DEBUG {
                //LogUtil.ui("[FA] 智慧生活连接中");
            // } DEBUG
            connectResult = AiLifeServiceHelper.connect(getContext());

            // DEBUG {
                //LogUtil.ui("connectResult = " + connectResult);
                LogUtil.ui("[FA] 智慧生活连接结果 = " + connectResult);
            // } DEBUG

            if (ConnectResult.SERVICE_OK > connectResult) {
                // DEBUG {
                LogUtil.toast("[FA] 智慧生活连接失败");
                // } DEBUG
                sendPacket(formatData(STATE_FAIL, AI_LIFE_SERVICE_CONNECT, String.valueOf(connectResult)));
                return;
            }

            // DEBUG {
                LogUtil.toast("[FA] 智慧生活连接成功");
            // } DEBUG
        }

        public void onConnect() {
            LogUtil.ui(DeviceAbility.deviceId);

            if (ConnectResult.SERVICE_OK > connectResult) {
                doConnectAiLifeService();
            }

            if (null == hiLinkDeviceHelper) {
                hiLinkDeviceHelper = new HiLinkDeviceHelper(DeviceAbility.deviceId);
                hiLinkDeviceHelper.setHiLinkDataCallback(hiLinkDataCallback);
            }

            Objects.requireNonNull(hiLinkDeviceHelper).getHiLinkDevice();
        }

        public void onDisconnect() {
            if (hiLinkDeviceHelper != null) {
                hiLinkDeviceHelper.disConnectBle();
            }
        }
    }
}