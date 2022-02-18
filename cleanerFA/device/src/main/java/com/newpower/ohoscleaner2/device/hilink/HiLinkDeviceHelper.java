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

package com.newpower.ohoscleaner2.device.hilink;


import java.util.Objects;

import com.huawei.ailife.service.internal.utils.TextUtils;
import com.huawei.ailife.service.kit.AiLifeServiceHelper;
import com.huawei.ailife.service.kit.callback.BleDeviceDataListener;
import com.huawei.ailife.service.kit.callback.DataCallback;
import com.huawei.ailife.service.kit.constants.ApiParameter;
import com.huawei.ailife.service.kit.manager.DeviceManager;
import com.huawei.ailife.service.kit.model.AiLifeServiceParamBuilder;
import com.huawei.ailife.service.kit.model.CommandParam;
import com.huawei.ailife.service.kit.model.HiLinkDevice;
import com.huawei.cleaner.device.util.LogUtil;

import ohos.interwork.utils.PacMapEx;
import ohos.utils.zson.ZSONObject;

/**
 * 设备控制辅助工具类
 *
 * @since 2021-08-11
 */
public class HiLinkDeviceHelper implements DataCallback<String> {
    /**
     * BLE已连接消息类型
     */
    private static int DATA_TYPE_BLE_CONNECT = 10;
    private static int DATA_TYPE_BLE_UNCONNECT = 13;

    private static String bleSessionId;
    private static int DATA_TYPE_BLE_CHARACTERISTIC_CHANGED = 11;
    private static int DATA_TYPE_BLE_CONNECTION_STATE_CHANGED = 12;

    private static final String TAG = "HiLinkDeviceHelper";
    private HiLinkDevice mHiLinkDevice;
    private final String deviceId;
    private final DeviceManager deviceManager;
    private HiLinkDataCallback hiLinkDataCallback;

    /**
     * 构造方法
     *
     * @param deviceId 设备deviceId
     */
    public HiLinkDeviceHelper(String deviceId) {
        this.deviceId = deviceId;
        AiLifeServiceParamBuilder builder = new AiLifeServiceParamBuilder();
        builder.addScope(ApiParameter.Scope.FEATURE_REQUEST_CLOUD)
                .addScope(ApiParameter.Scope.FEATURE_CLOUD_CONTROL);
        PacMapEx parameters = builder.createParameters();
        deviceManager = (DeviceManager) AiLifeServiceHelper.getService(AiLifeServiceHelper.DEVICE_MANAGER_SERVICE,
                parameters);
    }

    /**
     * 设置数据回调
     *
     * @param hiLinkDataCallback 回调对象
     */
    public void setHiLinkDataCallback(HiLinkDataCallback hiLinkDataCallback) {
        this.hiLinkDataCallback = hiLinkDataCallback;
    }

    /**
     * 下发指令
     *
     * @param serviceId 要控制的设备服务的ID
     * @param param     控制的参数
     */
    public void sendCommand(String serviceId, String param) {
        LogUtil.info(TAG, "deviceId: " + deviceId + ", serviceId: " + serviceId + ", param: " + param);
        CommandParam.Builder builder = new CommandParam.Builder()
                .mode(ApiParameter.CommandMode.MODE_BLE)
                .type(ApiParameter.CommandType.SERVICE_ID)
                .serviceId(serviceId);
        if (!TextUtils.isEmpty(param)) {
            ZSONObject zsonObject = ZSONObject.stringToZSON(param);
            for (String key : zsonObject.keySet()) {
                builder.addCharastic(key, zsonObject.get(key));
            }
        }

        CommandParam commandParam = builder.build();
        LogUtil.info(TAG, "commandParam = " + ZSONObject.toZSONString(commandParam));
        mHiLinkDevice.sendCommand(commandParam, this);
    }

    /**
     * 获取设备信息
     */
    public void getHiLinkDevice() {
        LogUtil.info(TAG, "getHiLinkDevice deviceId: " + deviceId);
        Objects.requireNonNull(deviceManager).getHiLinkDevice(ApiParameter.Source.FROM_CLOUD, deviceId,
                new DataCallback<HiLinkDevice>() {
                    @Override
                    public void onSuccess(HiLinkDevice hiLinkDevice) {
                        LogUtil.info(TAG, "getHiLinkDevice onSuccess = " + ZSONObject.toZSONString(hiLinkDevice));
                        Objects.requireNonNull(hiLinkDataCallback).onSuccess(DataType.GET_DEVICE,
                                ZSONObject.toZSONString(hiLinkDevice));
                        mHiLinkDevice = hiLinkDevice;
                        LogUtil.info(TAG, "getHiLinkDevice start connect BLE Device");
                        mHiLinkDevice.connectBleDevice(new DataCallback<String>() {
                            @Override
                            public void onSuccess(String sessionId) {
                                hiLinkDataCallback.onSuccess(DATA_TYPE_BLE_CONNECT, "connect");
                                LogUtil.info(TAG, "getHiLinkDevice connectBleDevice onSuccess = " + sessionId);
                                bleSessionId = sessionId;
                                mHiLinkDevice.subscribeBleDeviceEvent(sessionId, new BleDeviceDataListener() {
                                    @Override
                                    public void onCharacteristicChanged(String bleTransData) {
                                        hiLinkDataCallback.onSuccess(DATA_TYPE_BLE_CHARACTERISTIC_CHANGED,
                                                bleTransData);
                                        super.onCharacteristicChanged(bleTransData);
                                    }

                                    @Override
                                    public void onConnectionStateChange(String mac, int status, int newStatus) {
                                        hiLinkDataCallback.onSuccess(DATA_TYPE_BLE_CONNECTION_STATE_CHANGED,
                                                String.valueOf(newStatus));
                                        super.onConnectionStateChange(mac, status, newStatus);
                                    }
                                });
                            }

                            @Override
                            public void onFailure(int errorCode, String message) {
                                LogUtil.info(TAG, "connectBleDevice fail , code = "
                                        + errorCode + ", message = " + message);
                                hiLinkDataCallback.onSuccess(DATA_TYPE_BLE_UNCONNECT, "unConnect");
                            }
                        });
                    }

                    @Override
                    public void onFailure(int errorCode, String msg) {
                        LogUtil.info(TAG, "getHiLinkDevice onFailure: i = " + errorCode + ", s = " + msg);
                        Objects.requireNonNull(hiLinkDataCallback).onFail(DataType.GET_DEVICE, errorCode, msg);
                    }
                });
    }


    @Override
    public void onSuccess(String message) {
        LogUtil.info(TAG, "sendCommand onSuccess: " + message);
        Objects.requireNonNull(hiLinkDataCallback).onSuccess(DataType.SEND_COMMAND, message);
    }

    @Override
    public void onFailure(int errorCode, String message) {
        Objects.requireNonNull(hiLinkDataCallback).onFail(DataType.SEND_COMMAND, errorCode, message);
    }

    /**
     * 与设备蓝牙断开连接
     */
    public void disConnectBle() {
        LogUtil.info(TAG, "disConnectBle deviceId: " + deviceId);
        Objects.requireNonNull(mHiLinkDevice).disconnectBleDevice(bleSessionId);
    }

    /**
     * 数据类型
     *
     * @since 2021-08-11
     */
    public static class DataType {
        /**
         * hilink 服务连接
         */
        public static final int AI_LIFE_SERVICE_CONNECT = 0;
        /**
         * 获取设备信息
         */
        public static final int GET_DEVICE = 6;
        /**
         * 发送指令
         */
        public static final int SEND_COMMAND = 9;
    }
}
