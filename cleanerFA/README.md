# PackageOneDemo

> 备注：此为demo代码，不可直接用于商用。

## 简介

- 此Demo用于设备通过HiLink SDK注册并控制。

## 安装要求

- 安装DevEco Studio（软件版本号应为V2.1 Release及以上）。
- 设置DevEco Studio开发环境。DevEco Studio开发环境需要连接到网络，以确保该正常使用。可以根据以下两种情况配置开发环境：
  - 如果您可以直接访问Internet，则只需下载HarmonyOS SDK；
  - 如果网络无法直接访问Internet，则可以通过代理服务器进行访问。
- 生成密钥并申请证书。

## 用户指南

- 下载此项目。

- 在DevEco Studio菜单栏中，选择`File > Open`，打开此项目。

- 在工程的`entry`目录下，打开命令窗口，执行以下命令，安装帐号授权依赖的NPM包。

  ```shell
  npm install @hmscore/hms-js-base
  npm install @hmscore/hms-jsb-account@1.0.300

- 在AppGallery Connect网站中，点击“我的项目”，选择需要集成帐号能力的应用，在“项目设置 > 常规”页面的“应用”区域，点击“agconnect-services.json”下载配置文件，将配置文件拷贝到“entry”应用级根目录下。

- 部署工程依赖包。

  1. 联系华为接口人获取`HiLink SDK Har包`。
  2. 在device工程中新建libs目录。
  3. 复制到工程的`device/libs`目录。
  4. 在DevEco Studio菜单栏中，选择`File > Sync Project With Gradle Files`。

- 配置签名。

  1. 在DevEco Studio菜单中，选择`File > Project`。
  2. 在弹出的窗口中，选择`Project`，并切换到`Signing Configs`页签，配置签名信息。
  3. 配置完成之后，单击`OK`。

- 配置帐号授权的APP ID。在工程的`entry`目录下，打开`config.json`文件，将其中的`your appid`的取值修改为申请的OAuth 2.0客户端ID值。

  ```json
  "metaData": {
      "customizeData": [
          {
              "name": "com.huawei.hms.client.appid",
              "value": "123456789" // 申请的OAuth 2.0客户端ID
          }
      ]
  }
  ```

- 适配包名。

  1. 在工程中，全局替换`com.huawei.demo`为个人的包名。
  2. 分别将entry目录和device目录中的`com.huawei.demo`目录修改为个人的包名路径。

- 设置Hap包安装方式。

  1. 在DevEco Studio菜单中，选择`Run > Edit Configurations`。
  2. 在弹出的窗口中，选择`entry`，勾选`Deploy Multi Hap Packages`。

- 编译Hap软件包。在DevEco Studio菜单中，选择`Build > Build App(s)/Hap(s) > Build Debug Hap(s)`。

- 调试运行工程。在DevEco Studio菜单中，选择`Run > Run 'entry'`。

## 自定义配置

- 碰一碰拉起FA，从上到下的图标和文字分别对应的内容。
  - Device Partner平台，`产品开发 > 交互设计 > 智慧生活App > 进入开发 > APP开发 > 页面设置 > 连接设备页`。
  - 在工程的`entry`和`device`目录下，`config.json`文件中，icon属性。
  - 在工程的`entry`和`device`目录下，`config.json`文件中，label属性。
  - Device Partner平台，`产品开发 > 产品名称（传播名）。`

![FA initial](readme\image\fa_initial.png)





## 代码结构

```shell
├─device                                                            # 设备控制模块
│  │
│  ├─libs
│  │      entry-release.har
│  │      HiLinkOpenKitOhos.har
│  │
│  └─src
│      └─main
│          │  config.json                                           # 配置文件
│          │
│          ├─java
│          │  └─{your package name}
│          │                  └─device
│          │                      │  DeviceAbility.java             # 设备控制界面
│          │                      │  DeviceApplication.java         # 应用入口类
│          │                      │  DeviceHandlerAbility.java      # JS FA调Java PA
│          │                      │
│          │                      ├─server
│          │                      │      BleServiceAbility.java     # 蓝牙BLE服务PA
│          │                      │
│          │                      ├─hilink
│          │                      │      HiLinkDataCallback.java    # 数据回调接口
│          │                      │      HiLinkDeviceHelper.java    # 设备控制辅助工具类
│          │                      │
│          │                      └─util
│          │                              LogUtil.java              # 日志工具类
│          │
│          ├─js
│          │  ├─default                                             # 设备控制全屏FA
│          │  │  │  app.js                                          # 全局JS逻辑文件和应用的生命周期管理
│          │  │  │
│          │  │  ├─common                                           # 存放公共资源，如媒体资源和JS文件
│          │  │  │  └─...
│          │  │  │
│          │  │  ├─i18n                                             # 配置不同语言常见资源内容，如应用文本词条、图片路径等
│          │  │  │      ...
│          │  │  │
│          │  │  └─pages
│          │  │      ├─index                                        # 设备控制界面
│          │  │      │      index.css
│          │  │      │      index.hml
│          │  │      │      index.js
│          │  │      │
│          │  │      └─setting                                      # 设备更多设置界面
│          │  │              setting.css
│          │  │              setting.hml
│          │  │              setting.js
│          │  │
│          │  └─share                                               # 公共文件夹，文件名固定，可供不同JS FA调用
│          │      ├─...
│          │
│          └─resources                                              # 存放资源文件
│              ├─...
└─entry                                                             # 主模块
    │
    └─src
        └─main
            │  config.json                                          # 配置文件
            │
            ├─java                                                  # 存放Java源码
            │  └─{your package name}
            │                  │  EntryApplication.java             # 应用入口类
            │                  │  EntryInternalAbility.java         # JS FA调Java PA
            │                  │  MainAbility.java                  # 主页面（授权登录页面）
            │                  │
            │                  └─util
            │                          EntryUtil.java               # entry工具类
            │                          LogUtil.java                 # 日志工具类
            │
            ├─js
            │  └─default
            │      │  app.js                                        # 全局JS逻辑文件和应用的生命周期管理
            │      │  entry-utils.js                                # JS调用Java工具类
            │      │  fa-utils.js                                   # FA相关工具类
            │      │
            │      ├─common                                         # 存放公共资源，如媒体资源和JS文件
            │      │  ├─...
            │      │
            │      ├─i18n                                           # 配置不同语言常见资源内容，如应用文本词条、图片路径等
            │      │      ...
            │      │
            │      └─pages
            │          └─index                                      # 授权登录页面
            │                  index.css
            │                  index.hml
            │                  index.js
            │
            └─resources                                             # 存放资源文件
                ├─...
```

## HiLinkDevice API

#### Public Methods

##### notifyDeviceId(deviceId)

将 `deviceId` 传递到 `DeviceHandlerAbility` 中，用于构造  `HiLinkDeviceHelper` 对象

###### Parameters

| 参数     | 类型   | 说明   |
| :------- | ------ | ------ |
| deviceId | String | 设备ID |

###### Example

```js
HiLinkDevice.notifyDeviceId(this.deviceId);
```



##### connect(callback)

订阅 `DeviceHandlerAbility` 的事件上报，用于连接智慧生活基础服务，获取设备基础信息，并接收所有事件

###### Parameters

| 参数     | 类型     | 说明     |
| -------- | -------- | -------- |
| callback | function | 回调方法 |

###### Example

```js
HiLinkDevice.connect((ret) => {
    let result = JSON.parse(ret);
    if (result.data.state == 'fail') {
        switch (result.data.type) {
            case HiLinkDevice.DATA_TYPE_BLE_CONNECT:
                ...
        }
    } else {
        switch (result.data.type) {
            case HiLinkDevice.DATA_TYPE_BLE_CONNECT:
                ...
        }
    }
});
```



##### sendCommand: function(serviceId, param)

向设备发送指令

###### Parameters

| 参数      | 类型   | 说明                                           |
| --------- | ------ | ---------------------------------------------- |
| serviceId | String | Profile文件设备属性表中服务sid                 |
| param     | String | Profile文件设备属性表中服务sid对应的属性和取值 |

*此处参数仅供参考，可以根据自己的实际业务需求修改字段和类型*

###### Example

```js
HiLinkDevice.sendCommand('switch', {'on': 1});
```



##### **getDataTypeDes(type)**

根据数据类型获取对应的描述信息，用于调试过程中确定数据类型

###### Parameters

| 参数 | 类型 | 说明                            |
| ---- | ---- | ------------------------------- |
| type | int  | connect回调中result.data.type值 |



#### Constants

| 字段                                      | 描述                 |
| ---------------------------------        | -------------------- |
| DATA_TYPE_BLE_CONNECT                    | 与设备完成BLE连接建立   |
| DATA_TYPE_BLE_CHARACTERISTIC_CHANGED     | 设备数据变化           |
| DATA_TYPE_BLE_CONNECTION_STATE_CHANGED   | 连接状态变化           |
| DATA_TYPE_BLE_CONNECT                    | 与设备建立BLE连接失败  |



## 注意

- 您可以选择在模拟器或真机上运行hap软件包。
- 如果在真机上运行它，则需要在项目的`File > Project Structure > Project > Signing Configs`中配置签名和证书信息。

## 许可

请参阅LICENSE文件以获得更多信息。
