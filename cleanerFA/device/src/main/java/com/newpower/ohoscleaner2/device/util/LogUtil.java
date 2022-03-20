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

package com.newpower.ohoscleaner2.device.util;

import ohos.agp.window.dialog.ToastDialog;
import ohos.app.Context;
import ohos.eventhandler.EventHandler;
import ohos.eventhandler.EventRunner;
import ohos.hiviewdfx.HiLog;
import ohos.hiviewdfx.HiLogLabel;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

/**
 * 日志工具类
 *
 * @since 2021-08-11
 */
public class LogUtil {
    private static final String TAG_LOG = "tag";

    private static final int DOMAIN_ID = 0xD000F00;

    private static final HiLogLabel LABEL_LOG = new HiLogLabel(HiLog.DEBUG, DOMAIN_ID, LogUtil.TAG_LOG);

    private static final String LOG_FORMAT = "%{public}s: %{public}s";

    private static final EventHandler mainHandler = new EventHandler(EventRunner.getMainEventRunner());

    private static Context ctx;

    private LogUtil() {
    }

    /**
     * Print debug log
     *
     * @param tag log tag
     * @param msg log message
     */
    public static void debug(String tag, String msg) {
        HiLog.debug(LABEL_LOG, LOG_FORMAT, tag, msg);
    }

    /**
     * Print info log
     *
     * @param tag log tag
     * @param msg log message
     */
    public static void info(String tag, String msg) {
        HiLog.info(LABEL_LOG, LOG_FORMAT, tag, msg);
    }

    /**
     * Print warn log
     *
     * @param tag log tag
     * @param msg log message
     */
    public static void warn(String tag, String msg) {
        HiLog.warn(LABEL_LOG, LOG_FORMAT, tag, msg);
    }

    /**
     * Print error log
     *
     * @param tag log tag
     * @param msg log message
     */
    public static void error(String tag, String msg) {
        HiLog.error(LABEL_LOG, LOG_FORMAT, tag, msg);
    }

    public static void sysout(Object msg) {
        System.out.println("cleanerFA-java  " + String.valueOf(msg));
    }

    public static void init(Context context) {
        ctx = context;
    }

    private static final SimpleDateFormat df = new SimpleDateFormat("MM-dd HH:mm:ss.SSS ");

    public static void toast(String msg) {
        sysout(msg);
        ui(msg);
        mainHandler.postTask(() -> {
            new ToastDialog(ctx).setText(msg).show();
        });
    }

    public interface UiLog {
        void log(String msg);
    }

    private static UiLog logger;

    public static void setLogger(UiLog uiLog) {
        logger = uiLog;
    }

    public static void ui(String msg) {
        if (null == logger) {
            sysout("[ uilogger == null ] " + msg);
            return;
        }

        logger.log(df.format(new Date()) + msg);
    }
}
