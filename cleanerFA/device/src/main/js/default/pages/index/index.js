import controlView from '../../../../../../ailife-view/control/control.js';
import utils from '../../../../../../ailife-view/utils/utils.js';
import observed from '../../../../../../ailife-view/observed/observed.js';
import dialogManager from '../../../../../../ailife-view/dialog/dialogManager.js';
import customDisplayView from '../../../../../../ailife-view/customdisplay/customdisplay.js';
import prompt from '@system.prompt';
import app from '@system.app';
import router from '@system.router';
import HiLinkDevice from '../../../share/js/hilink-device.js';


const ABILITY_TYPE = 0;
const ABILITY_TYPE_INTERNAL = 1;
const ACTION_MESSAGE_CODE_INIT_DEVICE_DATA = 1005;
const ACTION_MESSAGE_CODE_SUBMIG_DIALOG_DATA = 1006;
const ACTION_MESSAGE_CODE_JUMP_TO_HILINK = 1008;
const ACTION_MESSAGE_CODE_GET_TEMPLATE = 1009;
const SHRINK_CONTROL_COUNT = 3;

const BACKGROUND_COLOR = '#FFF7F7F7';
const DURATION_TIME = 10000;
const PROMPT_DURATION_TIME = 3000;

export default {
    data: {
        showProgress: true,
        isFullWindow : false,
        deviceId: '',
        progressText: '',
        switchText: '开关',
        linkStatus: '',
        offlineText:'重新连接',
        switchTextImg: '/common/images/ic_off.png',
        showOfflineReconnect:false,
        showWaitingProgress:true,
        tryReconnect : false,
        deviceImage: '/common/images/ic_device.png',
        deviceName: 'XXX某某设备',
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
        currentSwitch: 0,
        switchDisable: false,

        controlData: {},
        customDisplayItemList: [],
        imageSrc: '',
        logoSrc: '',
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
        backgroundColor: BACKGROUND_COLOR
    },
    onInit() {
        this.linkStatus = this.device.linking;
        this.switchTextImg = this.device.off;
        this.optionDisabled();

//        utils.setActionParam('com.newpower.ohoscleaner2',
//            'com.newpower.ohoscleaner2.device.service.BleServiceAbility', ABILITY_TYPE)
    },
    async onShow() {
        console.info("full page onShow");
        console.info("img = " + this.switchTextImg);
        setTimeout(() => {
            this.notifyDeviceId();
        }, 500);

        observed.addObserver('showMessage', (key, value) => {
            this.showMessage = value.show;
            if (value.show == true) {
                this.message = this.$t('strings.loading');
                setTimeout(function () {
                    observed.notifyObservers('showMessage', {
                        'show': false
                    });
                }, DURATION_TIME);
            }
        });
        observed.addObserver('error', (key, value) => {
            this.errorMessage = value;
            this.showErrorMessage = true;
            let that = this;
            setTimeout(function () {
                that.showErrorMessage = false;
            }, PROMPT_DURATION_TIME);
        });
        observed.notifyObservers('showMessage', {
            'show': true
        });
        console.info('cleanerFA-js ' + 'index.js requestTemplate');
        await this.requestTemplate();
        observed.subscribeAbility();
    },
    async requestTemplate() {
        let action = utils.makeAction(ACTION_MESSAGE_CODE_GET_TEMPLATE, {});

        console.info('cleanerFA-js FeatureAbility.callAbility');
        console.info('cleanerFA-js ' + JSON.stringify(action));

        let result = await FeatureAbility.callAbility(action);
        let resultJson = JSON.parse(result);
        if (resultJson.code == 0) {
            let template = JSON.parse(resultJson.data);
            this.parseJson(template.template);

            console.info('cleanerFA-js' + resultJson.data);
        }
    },
    parseJson(deviceInfo) {
        this.deviceName = deviceInfo.devName;
        this.imageSrc = deviceInfo.iconUrl + deviceInfo.deviceIcon;
        this.logoSrc = deviceInfo.iconUrl + deviceInfo.logoIcon;
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
        let action = utils.makeAction(ACTION_MESSAGE_CODE_SUBMIG_DIALOG_DATA, data);
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

    menuClick: function (e) {
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
    notifyDeviceId: async function () {
        console.info("deviceId is " + this.deviceId);
        await HiLinkDevice.notifyDeviceId(this.deviceId);
        HiLinkDevice.connect((ret) => {
            let result = JSON.parse(ret);
            this.handleEvents(result);
        });
    },
    handleEvents: function (result) {
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
    onHide() {
        console.info("full page onHide");
        HiLinkDevice.disConnect();
    },
    onDestroy(){
        console.log("full page onDestroy");
    },
    currentStateSet: function () {
        console.info("currentStateSet is" + this.linkStatus);
        if (this.linkStatus == this.device.linked) {
            this.optionEnabled()
        } else {
            this.optionDisabled();
        }
    },
    switchClick: function () {
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
    optionDisabled: function () {
        this.switchDisable = true;
    },
    optionEnabled: function () {
        this.switchDisable = false;
    },
    viewMoreClick: function () {
        if (!this.isFullWindow) {
            this.isFullWindow = true;
            app.requestFullWindow();
            console.info("isFullWindow = " + this.isFullWindow)
        }
    },
    //点击重新连接重新调用通知设备连接方法
    offlineReconnect: function (){
        this.tryReconnect = true;
        this.showOfflineReconnect = false;
        this.showWaitingProgress = true;
        this.linkStatus = this.device.linking;
        this.notifyDeviceId();
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
};
