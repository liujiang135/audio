package com.baijia.app.cleaner;

import ohos.eventhandler.EventHandler;
import ohos.eventhandler.EventRunner;

import java.util.HashMap;
import java.util.Map;

public class StubDeviceDataHandler extends BaseDeviceDataHandler {
    private final EventHandler mainHandler;

    private final DeviceDataModel dataModel = new DeviceDataModel() {

        private Runnable runTask;
        private final Map<String, Object> data = new HashMap<>();

        @Override
        public Map<String, Object> recoverData() {
            resetData();
            return data;
        }

        @Override
        public Map<String, Object> modifyProperty(String key, Object value) {
            data.put(key, value);
            return data;
        }

        private void resetData() {
            data.clear();
            data.put("runningMode/mode", 0);
            data.put("ledMode/mode", 0);
            data.put("workingStatus/status", 3);
            data.put("workingStatus/action", 3);
        }
    };

    public StubDeviceDataHandler(String deviceId, DeviceDataCallback deviceDataCallback) {
        super(deviceId, deviceDataCallback);
        mainHandler = new EventHandler(EventRunner.getMainEventRunner());
        mainHandler.postTask(() -> initProfileData(0, "", dataModel.recoverData()));
    }

    @Override
    public void modifyDeviceProperty(String key, Object value) {
        mainHandler.postTask(() -> onDeviceDataChange(dataModel.modifyProperty(key, value)));
    }

    private interface DeviceDataModel {
        Map<String, Object> recoverData();
        Map<String, Object> modifyProperty(String key, Object value);
    }
}
