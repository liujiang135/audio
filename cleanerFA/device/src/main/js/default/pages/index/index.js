import controlView from '../../../../../../ailife-view/control/control.js';
import utils from '../../../../../../ailife-view/utils/utils.js';
import observed from '../../../../../../ailife-view/observed/observed.js';
import dialogManager from '../../../../../../ailife-view/dialog/dialogManager.js';
import customDisplayView from '../../../../../../ailife-view/customdisplay/customdisplay.js';
import app from '@system.app';
import prompt from '@system.prompt';
import router from '@system.router';
import HiLinkDevice from '../../../share/js/hilink-device.js';

const ACTION_MESSAGE_CODE_INIT_DEVICE_DATA = 1005;
const ACTION_MESSAGE_CODE_SUBMIT_DIALOG_DATA = 1006;
const ACTION_MESSAGE_CODE_JUMP_TO_HILINK = 1008;
const ACTION_MESSAGE_CODE_GET_TEMPLATE = 1009;
const SHRINK_CONTROL_COUNT = 3;

const AI_LIFE_SERVICE_CONNECT = 0

const BACKGROUND_COLOR = '#FFF7F7F7';
const DURATION_TIME = 10000;
const PROMPT_DURATION_TIME = 3000;

const ALPHA_DISABLE = 0.38;
const ALPHA_NORMAL = 1;

const BUNDLE_NAME = 'com.newpower.ohoscleaner2'
const ABILITY_NAME = 'com.newpower.ohoscleaner2.device.service.BleServiceAbility'
const ABILITY_TYPE_EXTERNAL = 0
//const ABILITY_TYPE_INTERNAL = 1
const ABILITY_TYPE = ABILITY_TYPE_EXTERNAL

const IMG_START = "/common/image/ic_start.png"
const IMG_STOP = "/common/image/ic_stop.png"

const DISPLAY_THEME = {
    NORMAL: {
        BLOCK_COLOR: "#FFFFFFFF",

    },
    DARK: {
        BLOCK_COLOR: "#FF000000",
    }
}

const ActionMessage = {
    code: {
        INIT: 1000,
        DATA_SUBSCRIBE: 2001,
        DATA_UNSUBSCRIBE: 2002,
        BLE_CONNECT: 3001,
        BLE_DISCONNECT: 3002,
        BLE_COMMAND: 3003
    },
// @ts-ignore
    buildParam: function(code, data={}) {
        return {
            bundleName: BUNDLE_NAME,
            abilityName: ABILITY_NAME,
            abilityType: ABILITY_TYPE,
            messageCode: code,
            data: data
        }
    },
//    buildParam: function(code) {
//        return {
//            bundleName: BUNDLE_NAME,
//            abilityName: ABILITY_NAME,
//            abilityType: ABILITY_TYPE,
//            messageCode: code,
//        }
//    },
//    buildParam: function(code, data) {
//        param = this.buildParam(code)
//        param.data = data
//        return param
//    },
    init: async function() {
        let param = this.buildParam(this.code.INIT)
        await FeatureAbility.callAbility(param)
    },
    subscribe: async function(callback) {
        let param = this.buildParam(this.code.DATA_SUBSCRIBE)
        await FeatureAbility.subscribeAbilityEvent(param, callback)
    },
    unsubscribe: function() {
        let param = this.buildParam(this.code.DATA_UNSUBSCRIBE)
        FeatureAbility.unsubscribeAbilityEvent(param)
    },
    connect: async function() {
        let param = this.buildParam(this.code.BLE_CONNECT)
        await FeatureAbility.callAbility(param)
    },
    disconnect: function() {
        let param = this.buildParam(this.code.BLE_DISCONNECT)
        FeatureAbility.callAbility(param)
    },
    send: async function(cmd) {
        let param = this.buildParam(this.code.BLE_COMMAND, cmd)
        await FeatureAbility.callAbility(param)
    },
}

var util = {
    constant: {

    },

    init: function() {

    },
    subscribe: function(callback) {

    },
    unsubscribe: function() {

    },
    connect: async function(callback){

    },
}

export default {
    data: {
        showProgress: true,
        isFullWindow: false,

        deviceId: '',
        progressText: '',
        switchText: '开关',
        linkStatus: '',
        offlineText:'',
        switchTextImg: '/common/images/ic_off.png',
        showOfflineReconnect:false,
        showWaitingProgress:true,
        tryReconnect : false,
        deviceImage: '/common/images/ic_device.png',
        //deviceName: 'XXX某某设备',
        roomName:'XX',
        menu: [
            {
                value: 'setting',
                text: '更多设置'
            }
        ],
        device: {
            on: '/common/images/ic_on.png',
            off: '/common/images/ic_off.png',
            linked: '已连接',
            unlinked: '未连接',
            linking: '连接中',
        },
        isLinked: false,
        recordEmptyImg: '/common/image/img_wujilu.png',

        currentSwitch: 0,
        switchDisable: false,

        controlData: {},
        customDisplayItemList: [],
        imageSrc: "/common/image/icon_D.png",
        logoSrc: "/common/image/ic_logo.png",
        deviceName: [],
        isSpread: true,
        showSpread: true,
        spreadText: '',
        spreadIcon: '',
        showMessage: '',
        message: '',
        showErrorMessage: false,
        errorMessage: '',
        dialog: {},
        dialogShow: false,
        backgroundColor: BACKGROUND_COLOR,
        backgroundColorBlock: "#FFFFFFFF",

        value_size: "24px",
        value_color: "#FF000000",
        unit_color: "#FF000000",
        text_color: "#FF000000",

        workingState: "待机",

        last_min: 26,
        last_sec: 58,
        total_min: 55,
        total_sec: "2",

        batteryTitle: "",
        batteryRemainingValue: 60,
        commandIcon: "/common/image/ic_prepare.png",

        title_func1: '',
        title_func2: '',
        title_func3: '',
        title_func4: '',
        icon_func1: "/common/image/ic_moshi_on.png",
        icon_func2: "/common/image/ic_led_on.png",
        icon_func3: "/common/image/ic_lvxin_on.png",
        icon_func4: "/common/image/ic_instructions.png",

        title_state_led: "",
        ledState: 0,
        title_mode_working: "",
        workingMode: 0,

        theme: DISPLAY_THEME.NORMAL,
        uiLog: []
    },
    log(msg) {
        this.uiLog = this.uiLog.concat(msg)
    },
    onInit() {
        this.linkStatus = this.device.linking;
        this.batteryTitle = this.$t('strings.battery_remaining')
        //this.switchTextImg = this.device.off;
        //this.optionDisabled();
        ActionMessage.init()
        this.initUi()
    },
    onShow() {
        ActionMessage.subscribe(this.handleMessage)
    },
    onHide() {
        ActionMessage.unsubscribe()
    },
//    onDestroy(){
//    },
    handleMessage(ret) {
        let result = JSON.parse(ret);
        console.log("cleanerFA-js " + ret)
        // DEBUG 打印日志 {
        if (result.data.type == 50) {
            this.log(result.data.result)
        }
        // } DEBUG

        switch (result.data.type) {
            case AI_LIFE_SERVICE_CONNECT: {
                if ("fail" == result.data.state) {
                    this.linkStatus = this.device.unlinked;
                    this.showOfflineReconnect = true;
                    this.showWaitingProgress = false;
                    //this.$element('dialog-repair-failed').show();
                }
                break;
            }
            case HiLinkDevice.DATA_TYPE_BLE_CONNECT: {
                //this.linkStatus = this.device.linked;
                //this.showWaitingProgress = false;
                break;
            }
            case HiLinkDevice.DATA_TYPE_BLE_UNCONNECT: {
                this.linkStatus = this.device.unlinked;
                this.showOfflineReconnect = true;
                this.showWaitingProgress = false;
                //this.$element('dialog-repair-failed').show();
                break;
            }
            case HiLinkDevice.DATA_TYPE_BLE_CHARACTERISTIC_CHANGED: {

                break;
            }
            case HiLinkDevice.DATA_TYPE_BLE_CONNECTION_STATE_CHANGED:
                if (result.data.result == '0') {
                    this.linkStatus = this.device.unlinked;
                    //if (this.tryReconnect) {
                    //    this.$element('dialog-repair-failed').show();
                    //}
                    this.showOfflineReconnect = true;
                    this.showWaitingProgress = false;
                } else if (result.data.result == '2') {
                    this.tryReconnect = false;
                }
                break;
            default: {}
        }

    },

    //doForTemplateData() {
    //
    //        //this.showErrorMessage = true
    //        //this.errorMessage = 'Low battery, please charge it!'
    //
    //        observed.addObserver('showMessage', (key, value) => {
    //            this.showMessage = value.show;
    //            if (value.show == true) {
    //                this.message = this.$t('strings.loading');
    //                setTimeout(function () {
    //                    observed.notifyObservers('showMessage', {
    //                        'show': false
    //                    });
    //                }, DURATION_TIME);
    //            }
    //        });
    //        observed.addObserver('error', (key, value) => {
    //            this.errorMessage = value;
    //            this.showErrorMessage = true;
    //            let that = this;
    //            setTimeout(function () {
    //                that.showErrorMessage = false;
    //            }, PROMPT_DURATION_TIME);
    //        });
    //        observed.notifyObservers('showMessage', {
    //            'show': true
    //        });
    //        console.info('cleanerFA-js ' + 'index.js requestTemplate');
    //        await this.requestTemplate();
    //        observed.subscribeAbility();
    //},
    //doForPrintScreen() {
        // 截图用
        //        router.push({
        //            uri: 'pages/setting/setting',
        //            params: {
        //                deviceName: "主设备",
        //                roomName: "主客厅",
        //            }
        //        })
    //},
    async initUi() {
        await this.requestTemplate();

        this.title_func1 = this.$t("strings.title_func1")
        this.title_func2 = this.$t("strings.title_func2")
        this.title_func3 = this.$t("strings.title_func3")
        this.title_func4 = this.$t("strings.title_func4")

        this.setLedStateTitle()
        this.setWorkingModeTitle()

        //doForPrintScreen()
    },
    async requestTemplate() {
        utils.setActionParam(BUNDLE_NAME, ABILITY_NAME, ABILITY_TYPE_EXTERNAL)
        let action = utils.makeAction(ACTION_MESSAGE_CODE_GET_TEMPLATE, {})
        console.info('cleanerFA-js ' + JSON.stringify(action))
        let result = await FeatureAbility.callAbility(action)
        let resultJson = JSON.parse(result)
        if (resultJson.code == 0) {
            let template = JSON.parse(resultJson.data)
            this.parseJson(template.template)
            //console.info('cleanerFA-js ' + resultJson.data)
        }
    },
    parseJson(deviceInfo) {
        this.deviceName = deviceInfo.devName;
        //this.imageSrc = deviceInfo.iconUrl + deviceInfo.deviceIcon;
        //this.logoSrc = deviceInfo.iconUrl + deviceInfo.logoIcon;
        this.controlData = controlView.convertJson(deviceInfo, this.isSpread);

    if (this.controlData.fullLines.length <= SHRINK_CONTROL_COUNT) {
      this.showSpread = false;
    }

    if ('customDisplayUIInfo' in deviceInfo) {
      this.customDisplayItemList = customDisplayView.convertJson(deviceInfo);
    }

    for (let idx in deviceInfo.dialogUIInfo) {
      let dialogInfo = deviceInfo.dialogUIInfo[idx];
      let dialog = dialogManager.parseDialogInfo(dialogInfo, deviceInfo.iconUrl);
      dialogManager.addDialog(dialog);
      observed.addObserver(dialog.id, (key, value) => {
        this.dialog = dialogManager.getDialog(key, value);
        if (this.dialogShow == false) {
          this.$element('dialog').show();
          this.dialogShow = true;
        }
      });
      observed.addObserver(dialog.path, (key, value) => {
        if ('dialogInfo' in value) {
          let updateDialog = dialogManager.parseDialogInfo(value.dialogInfo, deviceInfo.iconUrl);
          dialogManager.updateDialog(updateDialog);
        }
      });
    }
    observed.addObserver('language', () => {
      this.requestTemplate();
      let action = utils.makeAction(ACTION_MESSAGE_CODE_INIT_DEVICE_DATA, {});
      FeatureAbility.callAbility(action);
    });
    this.setSpreadTextIcon();
  },
  async spreadClick() {
    this.isSpread = !this.isSpread;
    this.setSpreadTextIcon();
    controlView.updateControlLines(this.controlData, this.isSpread);
  },

    setSpreadTextIcon() {
        if (this.isSpread) {
            this.spreadText = this.$t('strings.more');
            this.spreadIcon = '/common/ic_arrow_down.png';
        } else {
            this.spreadText = this.$t('strings.pack_up');
            this.spreadIcon = '/common/ic_arrow_up.png';
        }
    },
    commandClick() {

    },

    func1Click() {
        this.workingMode ^= 1
        this.setWorkingModeTitle()
        ActionMessage.send({cmd:"05",value:this.workingMode})
    },
    func2Click() {
        this.ledState ^= 1
        this.setLedStateTitle()
        ActionMessage.send({cmd:"08",value:this.ledState})
    },
    func3Click() {
        router.push({
            uri: 'pages/setting/setting',
            params: {
                deviceName: "主设备",
                roomName: "主客厅",
            }
        })
    },
    func4Click() {
        router.push({
            uri: 'pages/setting/setting',
            params: {
                deviceName: "主设备",
                roomName: "主客厅",
            }
        })
    },
    setLedStateTitle() {
        this.title_state_led = this.ledState > 0 ? this.$t("strings.state_led_on") : this.$t("strings.state_led_off")
    },
    setWorkingModeTitle() {
        this.title_mode_working = this.workingMode > 0 ? this.$t("strings.mode_working_high") : this.$t("strings.mode_working_low")
    },
    customDisplayClick(customDisplayData) {
        prompt.showToast({
            message: customDisplayData.detail.title,
            duration: PROMPT_DURATION_TIME
        });
    },
    dialogSubmit(dialogData) {
        if (dialogData.detail.dialogList.length == 0) {
            observed.setKeyValue(dialogData.detail.path, dialogData.detail);
            this.dialogShow = false;
            this.$element('dialog').close();
        } else {
            observed.notifyObservers(dialogData.detail.dialogList[0], dialogData.detail);
        }
    },
    async dialogSubmitServer(dialogData) {
        let key = dialogData.detail.path;
        let value = dialogData.detail;
        let data = {
            key: value
        }
        let action = utils.makeAction(ACTION_MESSAGE_CODE_SUBMIT_DIALOG_DATA, data);
        await FeatureAbility.callAbility(action);
        if (dialogData.detail.dialogList.length == 0) {
            this.dialogShow = false;
            this.$element('dialog').close();
        } else {
            observed.notifyObservers(dialogData.detail.dialogList[0], dialogData.detail);
        }
    },
    dialogCancel() {
        dialogManager.resetDialogData();
        this.dialogShow = false;
        this.$element('dialog').close();
    },
    backClick() {
        app.terminate();
    },
    //TODO
    moreClick() {
        this.$element('hiLinkDialog').show();
    },

  urlClick() {
    let data = {
      url: this.$t('strings.hiLinkUrl')
    }
    let action = utils.makeAction(ACTION_MESSAGE_CODE_JUMP_TO_HILINK, data);
    FeatureAbility.callAbility(action);
  },
  cancelClick() {
    this.$element('hiLinkDialog').close();
  },

  menuClick: function(e) {
    switch (e.detail.value) {
      case 'setting':
        router.push({
          uri: 'pages/setting/setting',
          params: {
            deviceName: this.deviceName,
            roomName: this.roomName,
          }
        })
        break;
    }
  },
  notifyDeviceId: async function() {
    console.info("deviceId is " + this.deviceId);
    await HiLinkDevice.notifyDeviceId(this.deviceId);
    HiLinkDevice.connect((ret) => {
      let result = JSON.parse(ret);
      this.handleEvents(result);
    });
  },
  handleEvents: function(result) {
    console.info("handleEvents result is " + result.data.type);
    console.info("handleEvents state is " + result.data.state);
    if (result.data.state == 'fail') {
      this.linkStatus = this.device.unlinked;
      this.showOfflineReconnect = true;
      this.showWaitingProgress = false;
      this.$element('dialog-repair-failed').show();
    } else {
      console.info("handleEvents result is" + result.data.result);
      switch (result.data.type) {
        case HiLinkDevice.DATA_TYPE_BLE_CONNECT:
          this.linkStatus = this.device.linked;
          this.showWaitingProgress = false;
          break;
        case HiLinkDevice.DATA_TYPE_BLE_UNCONNECT:
          this.linkStatus = this.device.unlinked;
          this.showOfflineReconnect = true;
          this.showWaitingProgress = false;
          this.$element('dialog-repair-failed').show();
          break;
        case HiLinkDevice.DATA_TYPE_BLE_CHARACTERISTIC_CHANGED:

          this.deviceName = JSON.stringify(result.data);

          break;
        case HiLinkDevice.DATA_TYPE_BLE_CONNECTION_STATE_CHANGED:
          if (result.data.result == '0') {
            this.linkStatus = this.device.unlinked;
            if (this.tryReconnect) {
              this.$element('dialog-repair-failed').show();
            }
            this.showOfflineReconnect = true;
            this.showWaitingProgress = false;
          } else if (result.data.result == '2') {
            this.tryReconnect = false;
          }
          break;
      }
    }
    this.currentStateSet();
  },
//  onHide() {
//    console.info("full page onHide");
//    HiLinkDevice.disConnect();
//  },
//  onDestroy() {
//    console.log("full page onDestroy");
//  },
  currentStateSet: function() {
    console.info("currentStateSet is" + this.linkStatus);
    if (this.linkStatus == this.device.linked) {
      this.optionEnabled()
    } else {
      this.optionDisabled();
    }
  },
  switchClick: function() {
    if (this.currentSwitch == 0) {
      HiLinkDevice.sendCommand('lampswitch', {
        'on': 1
      });
    } else {
      HiLinkDevice.sendCommand('lampswitch', {
        'on': 0
      });
    }
  },
  optionDisabled: function() {
    this.switchDisable = true;
  },
  optionEnabled: function() {
    this.switchDisable = false;
  },
  viewMoreClick: function() {
    if (!this.isFullWindow) {
      this.isFullWindow = true;
      app.requestFullWindow();
      console.info("isFullWindow = " + this.isFullWindow)
    }
  },
  //点击重新连接重新调用通知设备连接方法
  offlineReconnect: function() {
    this.tryReconnect = true;
    this.showOfflineReconnect = false;
    this.showWaitingProgress = true;
    this.linkStatus = this.device.linking;
        ActionMessage.connect()
        //this.notifyDeviceId();
    },
    reConnect : function (){
        this.tryReconnect = true;
        this.showOfflineReconnect = false;
        this.showWaitingProgress = true;
        this.linkStatus = this.device.linking;
        this.$element('dialog-repair-failed').close();
        this.notifyDeviceId();
    },
    exit : function (){
        this.$element('dialog-repair-failed').close();
    },
    
    sendTestMessage: function () {
      HiLinkDevice.sendCommand('test', {
        't': 1,'v':'FA0103066401000101000701FB'
      });
    }
};