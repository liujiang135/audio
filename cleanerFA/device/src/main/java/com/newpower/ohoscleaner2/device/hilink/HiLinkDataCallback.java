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

/**
 * HiLinkDeviceHelper 数据回调接口
 *
 * @since 2021-08-11
 */
public interface HiLinkDataCallback {
    /**
     * 数据获取成功
     *
     * @param dataType 数据类型
     * @param result 数据结果
     */
    void onSuccess(int dataType, String result);

    /**
     * 数据获取失败
     *
     * @param dataType 数据类型
     * @param code 错误码
     * @param result 错误信息
     */
    void onFail(int dataType, int code, String result);
}
