import displayView from './display/display.js';
import reversalView from './reversal/reversal.js';
import enumView from './enum/enum.js';
import increasedecreaseView from './increasedecrease/increasedecrease.js';
import progressView from './progress/progress.js';
import multifunctionView from './multifunction/multifunction.js';

const UI_TYPE_DISPLAY = 'DISPLAY';
const UI_TYPE_REVERSAL = 'REVERSAL';
const UI_TYPE_ENUM = 'ENUM';
const UI_TYPE_INCREASE_DECREASE = 'INCREASE_DECREASE';
const UI_TYPE_PROGRESS = 'PROGRESS';
const UI_TYPE_MULTIFUNCTION = 'MULTIFUNCTION';
const DISPLAY_LINE = 0;
const REVERSAL_LINE = 1;
const ENUM_LINE = 2;
const INCREASE_DECREASE_LINE = 3;
const PROGRESS_LINE = 4;
const MULTIFUNCTION_LINE = 5;
const SHRINK_CONTROL_COUNT = 5;

class ControlObj {
    constructor() {
        this.lines = [];
        this.model = [];
        this.fullLines = [];
        this.controlHeight = '0px';
    }
}

export default {
    props: {
        controlData: {
            default: {}
        }
    },
    convertJson(deviceInfo, isSpread) {
        let controlData = new ControlObj();
        enumView.resetEnumDataList();
        reversalView.resetReversalDataList();
        for (let idx in deviceInfo.templateUIInfo) {
            let component = deviceInfo.templateUIInfo[idx];
            if (component.uiType == UI_TYPE_DISPLAY) {
                let displayData = displayView.convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);
                controlData.model.push(displayData);
                controlData.fullLines.push(DISPLAY_LINE);
            } else if (component.uiType == UI_TYPE_REVERSAL) {
                let reversalData = reversalView.convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);
                controlData.model.push(reversalData);
                controlData.fullLines.push(REVERSAL_LINE);
            } else if (component.uiType == UI_TYPE_ENUM) {
                let enumData = enumView.convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);
                controlData.model.push(enumData);
                controlData.fullLines.push(ENUM_LINE);
            } else if (component.uiType == UI_TYPE_INCREASE_DECREASE) {
                let increasedecreaseData = increasedecreaseView.convertJson(idx,
                    deviceInfo.templateUIInfo, deviceInfo.iconUrl);
                controlData.model.push(increasedecreaseData);
                controlData.fullLines.push(INCREASE_DECREASE_LINE);
            } else if (component.uiType == UI_TYPE_PROGRESS) {
                let progressData = progressView.convertJson(idx, deviceInfo.templateUIInfo, deviceInfo.iconUrl);
                controlData.model.push(progressData);
                controlData.fullLines.push(PROGRESS_LINE);
            } else if (component.uiType == UI_TYPE_MULTIFUNCTION) {
                let multifunctionData = multifunctionView.convertJson(idx,
                    deviceInfo.templateUIInfo, deviceInfo.iconUrl);
                controlData.model.push(multifunctionData);
                controlData.fullLines.push(MULTIFUNCTION_LINE);
            }
        }
        this.updateControlLines(controlData, isSpread);
        this.setControlHeight(controlData);
        return controlData;
    },
    setControlHeight(controlData) {
        let controlHeight = 0;
        for (let i = 0; i < controlData.lines.length; i++) {
            if (controlData.lines[i] == DISPLAY_LINE) {
                controlHeight = controlHeight + displayView.getDisplayHeight();
            } else if (controlData.lines[i] == REVERSAL_LINE) {
                controlHeight = controlHeight + reversalView.getReversalHeight(controlData.model[i]);
            } else if (controlData.lines[i] == ENUM_LINE) {
                controlHeight = controlHeight + enumView.getEnumHeight(controlData.model[i]);
            } else if (controlData.lines[i] == INCREASE_DECREASE_LINE) {
                controlHeight = controlHeight + increasedecreaseView.getIncreasedecreaseHeight();
            } else if (controlData.lines[i] == PROGRESS_LINE) {
                controlHeight = controlHeight + progressView.getProgressHeight();
            } else if (controlData.lines[i] == MULTIFUNCTION_LINE) {
                controlHeight = controlHeight + multifunctionView.getMultifunctionHeight();
            }
        }
        controlData.controlHeight = controlHeight + 'px';
    },
    updateControlLines(controlData, isSpread) {
        //Update the number of display controls(The length of the lines).
        //If isSpread is true, display up to three controls, otherwise display all controls.
        if (isSpread) {
            controlData.lines = [];
            let count = SHRINK_CONTROL_COUNT;
            if (controlData.fullLines.length < SHRINK_CONTROL_COUNT) {
                count = controlData.fullLines.length;
            }
            for (let i = 0; i < count; i++) {
                controlData.lines.push(controlData.fullLines[i]);
            }
        } else {
            controlData.lines = controlData.fullLines;
        }
        this.setControlHeight(controlData);
    }
};
