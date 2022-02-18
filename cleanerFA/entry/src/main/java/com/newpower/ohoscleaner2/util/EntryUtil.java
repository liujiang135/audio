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

package com.newpower.ohoscleaner2.util;

/**
 * entry 工具类
 *
 * @since 2021-08-11
 */
public class EntryUtil {
    private EntryUtil() {
    }

    /**
     * sessionId是否有效
     *
     * @param sessionId nanSessionId
     * @return true: 有效 false: 无效
     */
    public static boolean isSessionIdValid(String sessionId) {
        return isNotEmpty(sessionId) && !"NAN_DEVICE_NOT_FOUND".equals(sessionId);
    }

    /**
     * 字符串为空判断
     *
     * @param str 字符串
     * @return true: 空 false: 非空
     */
    public static boolean isEmpty(String str) {
        return str == null || "".equals(str);
    }

    /**
     * 字符串非空判断
     *
     * @param str 字符串
     * @return true: 非空 false: 空
     */
    public static boolean isNotEmpty(String str) {
        return str != null && str.length() > 0;
    }
}
