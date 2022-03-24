window.onload = function() {
  // disConnectTimeAll(); // 定时器
  console.log('----------window.onload-ble.js-----------');
  // analyseBleInfo('FA010A0701623320150019F006FB'); // 清扫历史1
  // analyseBleInfo('FA010A0702623320150019623320150019F006FB'); // 清扫历史2
  // analyseBleInfo('FA010A0703623320150019623320150019623320150019F006FB'); // 清扫历史3
  // analyseBleInfo('FA010A1F050102038700120102036D000C0102035B000D0102034900190102032800106001FB'); // 清扫历史5
  // analyseBleInfo('FA010316031101110019000011190a0701FB'); // 工作中  3个报警
  // analyseBleInfo('FA010316021111110019000011190a0701FB'); // 工作中  2个报警 没电，更换
  // analyseBleInfo('FA01031602111111001900001119120701FB'); // 工作中  1个报警 没电
  // analyseBleInfo('FA01031664111111001900001119120701FB'); // 工作中  无报警
  if (window.hilink) {
    setLanguage(); //设置语言
    window.hilink.removeStorageSync('disconnectTimeStart') // 清空断连时间缓存
    setH5Title();
    console.log('-先发-查询历史-')
    sendCommandToBle('FA010A0400000000')

    //dosomethings 订阅蓝牙事件
    // deviceIdMac = window.hilink.getStorageSync('deviceIdMac')
    // hilinkDevId = window.hilink.getStorageSync('hilinkDevId')
    // subscribeBleEventFun(hilinkDevId, deviceIdMac)
  }
}

// 上次清扫记录
let lastcleanmin = 0;
let lastcleansecond = 0;
// 累积清扫记录
let allcleanmin = 0;
let allcleansecond = 0;
// 定时器开关
let jishiFlag = false; // 重连定时器开关
let disconnectTimeStart = ""; // 重连计时
let jishiErrorFlag = false; // 报警轮播
let errorArr = []; // 报警arr

function connectBleInit() {
  console.log('connectBleInit')
  if (window.hilink) {
    returnConnectTime(); // 重连计时
    onBluetoothAdapterStateChange(); // 监听蓝牙模块开启/关闭 触发
    onBLEConnectionStateChange(); // 监听低功耗蓝牙设备连接状态的改变
    getBluetoothAdapterState(); // 蓝牙模块状态是否打开
  }
}

// 下发数据
function sendCommandToBle(code) {
  // code = 'FA01090462330bdca0'
  let sendCode = '';
  // 计算校验位 start
  let b0 = code.substr(2, 2);
  let b1 = code.substr(4, 2);
  let b2 = code.substr(6, 2);
  let b3 = code.substr(8, 2);
  let b4 = code.substr(10, 2);
  let b5 = code.substr(12, 2);
  let b6 = code.substr(14, 2);
  // console.log('16进制code-', b0, b1, b2, b3, b4, b5, b6)

  let bx0 = parseInt(b0, 16);
  let bx1 = parseInt(b1, 16);
  let bx2 = parseInt(b2, 16);
  let bx3 = parseInt(b3, 16);
  let bx4 = parseInt(b4, 16);
  let bx5 = parseInt(b5, 16);
  let bx6 = parseInt(b6, 16);
  // console.log('10进制code-', bx0, bx1, bx2, bx3, bx4, bx5, bx6)
  let sum0 = bx0 + bx1 + bx2 + bx3 + bx4 + bx5 + bx6;
  // console.log('10进制code和-', sum0)
  let sum = '0x' + sum0.toString(16);
  // console.log('16进制code和-', sum)
  let gao = (sum & 0xF0).toString(16);
  let di = (sum & 0x0F).toString(16);
  // console.log('高位：', gao, '低位：', di);
  let lg = gao.toString().length;
  let ld = di.toString().length;
  if (lg == 1) {
    sendCode = code + '0' + gao
  } else {
    sendCode = code + gao
  }
  if (ld == 1) {
    sendCode = sendCode + '0' + di + 'FB'
  } else {
    sendCode = sendCode + di + 'FB'
  }
  // 计算校验位 end   组装数据ok 
  let obj = {
    "t": 01,
    "v": (sendCode.toUpperCase())
  }
  deviceIdMac = window.hilink.getStorageSync('deviceIdMac')
  hilinkDevId = window.hilink.getStorageSync('hilinkDevId')
  let inputVal = JSON.stringify(obj)
  console.log('-new-下发数据--:', hilinkDevId, deviceIdMac, inputVal)
  window.hilink.sendCommand(hilinkDevId, deviceIdMac, 'test', inputVal,
    'sendCommandCallbacklvx');
  window.sendCommandCallbacklvx = res => {
    let data = dataChange(res);
    console.log('-发命令回调:', data);
    if (data.errcode == -1) {
      console.log('---蓝牙配对，链接--')
      connectBleInit();
    } else {
      console.log('----二级页面返回----')
        // 进入待机状态
      initStatus(7, 0);
      //dosomethings 订阅蓝牙事件
      subscribeBleEventFun(hilinkDevId, deviceIdMac)
    }
  }
}

// 解析蓝牙数据 FA010304640101010701FB
function analyseBleInfo(str) {
  console.log('-解析上报数据--:', str)
  let commandStr = str.substr(4, 2); //命令码
  let datalength = parseInt(str.substr(6, 2), 16);
  console.log('数据长度:', datalength)
    // let dataStr = str.substr(8, datalength * 2); // 数据区
  let dataStr = str.slice(8, -6); // 数据区
  errorArr = [];
  jishiErrorFlag = false; // 报警轮播
  console.log('-命令码--:', commandStr, '  -数据区--:', dataStr)
  if (commandStr == '03') { //设备状态
    let BatterNum = parseInt(dataStr.substr(0, 2), 16); // 电量
    console.log('电量', BatterNum)
    if (BatterNum >= 128) {
      console.log('充电中')
        // 充电中
      $('.batterStatus')[0].innerText = '充电中'
      $('.batterNum').html((BatterNum - 128) + '%');
    } else {
      // console.log('电池电量')
      $('.batterStatus')[0].innerText = '电池电量'
      $('.batterNum').html(BatterNum + '%');
      if (BatterNum <= 5) {
        errorArr.push(1)
      }
    }

    if (dataStr.substr(2, 1) == 1) {
      // 开机
      initStatus(5, 0);
    } else {
      // 待机
      initStatus(7, 0);
    }

    if (dataStr.substr(3, 1) == 1) {
      // 高档 强劲模式
      console.log('强劲模式')
      $("#eco").removeClass('checkedBg');
      $("#eco").removeClass('checkedText');
      $("#turbo").addClass('checkedBg');
      $("#turbo").addClass('checkedText');
      $(".modeTip").html('强劲模式');
    } else {
      //低档 节能
      console.log('节能模式')
      $("#turbo").removeClass('checkedBg');
      $("#turbo").removeClass('checkedText');
      $("#eco").addClass('checkedBg');
      $("#eco").addClass('checkedText');
      $(".modeTip").html('节能模式');
    }

    if (dataStr.substr(4, 2) === '01') {
      // 滤网堵塞告警状态 堵塞
      console.log('滤网堵塞')
      errorArr.push(2)
    } else {
      // 滤网堵塞告警状态 未堵塞
    }

    if (dataStr.substr(6, 2) === '01') {
      // LED灯开关状态    开灯
      console.log('灯光-开')
      $('.ledTip').show();
      this.document.getElementsByClassName("fnImgItem2")[0].style.background = "url('http://www.dadaiot.com/cleanerH5/img/light/ic_led_on.png') no-repeat";
      this.document.getElementsByClassName("fnImgItem2")[0].style.backgroundSize = "cover";
      window.hilink.setStorageSync('ledCode', 1)
    } else {
      // LED灯开关状态    关灯
      console.log('灯光-关')
      $('.ledTip').hide();
      this.document.getElementsByClassName("fnImgItem2")[0].style.background = "url('http://www.dadaiot.com/cleanerH5/img/light/ic_led_off.png') no-repeat";
      this.document.getElementsByClassName("fnImgItem2")[0].style.backgroundSize = "cover";
      window.hilink.setStorageSync('ledCode', 0)
    }

    // 上次清扫时长
    let lastworktime16 = dataStr.substr(8, 4)
    let lastworktime10 = parseInt(lastworktime16, 16)
    let lastworktime = formatSecToDate(lastworktime10)
    lastcleanmin = formatSecToDateMin(lastworktime10)
    lastcleansecond = formatSecToDateSec(lastworktime10)
      // console.log('上次清扫时间戳16:', lastworktime16)
      // console.log('上次清扫时间戳10:', lastworktime10)
    console.log('上次清扫时间:', lastworktime)
      // console.log('上次清扫时间分:', lastcleanmin)
      // console.log('上次清扫时间秒:', lastcleansecond)
      // 上次清扫记录
    $('.lastcleanmin').html(lastcleanmin)
    $('.lastcleansecond').html(lastcleansecond)

    // 累计使用时长
    let allworktime16 = dataStr.substr(12, 8)
    let allworktime10 = parseInt(allworktime16, 16)
    let allworktime = formatSecToDate(allworktime10)
      // let allcleanmin = formatSecToDateMin(allworktime10)
    allcleanmin = formatSecToDateMin(allworktime10)
      // let allcleansecond = formatSecToDateSec(allworktime10)
    allcleansecond = formatSecToDateSec(allworktime10)
      // console.log('累计清扫时间戳16:', allworktime16)
      // console.log('累计清扫时间戳10:', allworktime10)
    console.log('累计清扫时间:', allworktime)
      // console.log('累计清扫时间分:', allcleanmin)
      // console.log('累计清扫时间秒:', allcleansecond)

    // 累积清扫记录
    $('.allcleanmin').html(allcleanmin)
    $('.allcleansecond').html(allcleansecond)

    let lvXinLife = parseInt(dataStr.substr(20, 2), 16); // 滤芯寿命
    console.log('滤芯寿命', lvXinLife)
    window.hilink.setStorageSync('lvXinLife', lvXinLife)
    if (lvXinLife <= 10) {
      console.log('更换滤芯告警')
        // 更换滤芯告警
      errorArr.push(0)
    }
  }

  if (commandStr == '0A') { //上报历史记录1
    // FA010A0701623320150019F006FB
    let historyNum = parseInt(str.substr(8, 2), 16);
    console.log('历史记录条数：', historyNum)
      // let historyNum2 = (str.slice(10, -6)).length / 12;
      // console.log('历史记录条数2：', historyNum2)
    if (historyNum > 0) {
      $('.recordList').html('');
      let html = '';
      for (let i = 0; i < historyNum; i++) {
        console.log('i:', i)
        let time16 = str.substr((i * 12 + 10), 8) // (historyNum * 12 - 2)
        let time10 = parseInt(time16, 16)
        let theTime = formatTime(time10, 'Y/M/D h:m')
          // console.log('清扫时间戳16:', time16)
          // console.log('清扫时间戳10:', time10)
        console.log('历史清扫时间:', theTime)

        let clearTime16 = str.substr((i * 12 + 18), 4) // (historyNum * 12 + 6)
        let clearTime10 = parseInt(clearTime16, 16)
        let workTime = formatSecToDate(clearTime10)
          // console.log('清扫时长16:', clearTime16)
          // console.log('清扫时长10:', clearTime10)
        console.log('历史清扫时长:', workTime)

        let ciShu = historyNum;
        if (historyNum > 3) {
          ciShu = 3
        }

        html +=
          '<li class="recordItem">' +
          '<div class="recordLeft">' +
          '<p class="circle">' + (ciShu - i) + '</p>' +
          '</div>' +
          '<div class="recordMiddle">' +
          '<p class="up">' +
          '<span class="cn_lang">清扫时长</span>' +
          '<span class="en_lang">Cleaning time</span>' +
          '</p>' +
          '<p class="down historyworkDate">' + theTime + '</p>' +
          '</div>' +
          '<div class="recordRight">' +
          '<span class="cn_lang historyworkTime">' + workTime + '</span>' +
          '<span class="en_lang historyworkTime">2min48s</span>' +
          '</div>' +
          '</li>';
        if (i < historyNum - 1) {
          html += '<div class="linebox"><div class="line"></div></div>'
        }
        if (i >= 2) {
          break
        }
      }
      // console.log('all--html:', html)
      // 显示清扫记录
      this.document.getElementsByClassName("recordList")[0].style.display = "flex";
      this.document.getElementsByClassName("recordEmptyList")[0].style.display = "none";
      $('.recordList').append(html)
    }
  }
  console.log('--报错- --- -', errorArr);
  if (errorArr.length == 1) {
    showErrorTip(errorArr[0]) // 0:请更换滤芯  1:电量低，请充电!  2:请清理尘杯及滤芯!
    jishiErrorFlag = false;
  } else if (errorArr.length == 2 || errorArr.length == 3) {
    repeatShowErrorTip();
  } else {
    jishiErrorFlag = false;
    hideAlert();
  }
}

var deviceIdMac = ''; //注册时候的mac地址
var UUID_OR_Mac = ''; //通过扫描设备拿到的devicesID, 安卓是mac地址, ios是UUID, 也就是sn
var hilinkDevId = '';
var isDiscover = false;
var notifyUuids = [{
  switchOn: '00', //下发数据为16进制, 不要带0x
  switchOff: '01',
  serviceUuid: '15f1e600-a277-43fc-a484-dd39ef8a9100',
  characteristicUuid: '15f1e602-a277-43fc-a484-dd39ef8a9100',
  characteristicUuid2: '15f1e601-a277-43fc-a484-dd39ef8a9100'
}];

var isIOS = !!navigator.userAgent.match(/iPhone/i);

// 滑动开关-----控制设备
// var fnSlider = document.getElementsByClassName("fnSlider")[0];
var sliderBtn = document.getElementsByClassName("sliderBtn")[0];
var statusLeft = document.getElementsByClassName("statusLeft")[0];
// var fnName = document.getElementsByClassName("fnName")[0];
// var fnSubtitle = document.getElementsByClassName("fnSubtitle")[0];
// var val = false;

// fnSlider.addEventListener('click', function(event) {
//   if (statusLeft.innerHTML == '已连接') {
//     if (window.hilink) {
//       if (val) {
//         sliderBtn.style.right = 18 + 'px';
//         fnSlider.style.background = 'rgba(0,0,0,0.1)';
//         fnName.style.color = 'rgba(0,0,0,0.9)';
//         fnSubtitle.style.display = 'none';
//         // writeBLECharacteristicValue(notifyUuids[0].switchOn);
//         val = false;
//       } else {
//         sliderBtn.style.right = 2 + 'px';
//         fnSlider.style.background = '#007DFF';
//         fnName.style.color = '#007dff';
//         fnSubtitle.style.display = 'block';
//         // writeBLECharacteristicValue(notifyUuids[0].switchOff);
//         val = true;
//       }
//     } else {
//       if (val) {
//         sliderBtn.style.right = 18 + 'px';
//         fnSlider.style.background = 'rgba(0,0,0,0.1)';
//         fnName.style.color = 'rgba(0,0,0,0.9)';
//         fnSubtitle.style.display = 'none';
//         val = false;
//       } else {
//         sliderBtn.style.right = 2 + 'px';
//         fnSlider.style.background = '#007DFF';
//         fnName.style.color = '#007dff';
//         fnSubtitle.style.display = 'block';
//         val = true;
//       }
//     }
//   } else {
//     console.log('蓝牙未连接');
//   }

//   event.stopPropagation();
// })


// 接口返回数据格式的转换
function dataChange(res) {
  let data = undefined;
  let dataStr = res;
  dataStr = dataStr.replace(/"{/g, '{');
  dataStr = dataStr.replace(/}"/g, '}');
  dataStr = dataStr.replace(/\\|\n|\r|\t|\f|\t/g, '');
  data = JSON.parse(dataStr);

  return data;
}

// 监听蓝牙模块--蓝牙模块开启和关闭的时候触发
function onBluetoothAdapterStateChange() {
  // 监听手机蓝牙状态的变化
  window.hilink.onBluetoothAdapterStateChange('bluetoothStateChangeCallback');

  window.bluetoothStateChangeCallback = res => {
    let data = dataChange(res);
    console.log('主动打开或关闭蓝牙模块:', data.available);
    if (data.available) {
      getCurrentRegisteredDevice(); // 获取当前设备的mac地址
    } else {
      window.hilink.openBluetoothAdapter();
    }
  }
}

// 蓝牙设备连接-----
// 1.获取当前蓝牙模块状态，判断当前蓝牙是否处于打开状态。
function getBluetoothAdapterState() {
  window.hilink.getBluetoothAdapterState('getBluetoothAdapterStateCallback');

  window.getBluetoothAdapterStateCallback = res => {
    let data = dataChange(res);
    console.log('当前蓝牙模块状态:', data.available);
    if (data.available) { // 蓝牙已打开
      getCurrentRegisteredDevice(); // 获取当前设备的mac地址
    } else {
      window.hilink.openBluetoothAdapter(); // 蓝牙未打开，则请求打开
    }
  }
}

// 2.监听蓝牙设备连接状态，连接结果通过回调得知(先监听后连接)
function onBLEConnectionStateChange() {
  console.log('监听蓝牙设备状态变化');
  window.hilink.onBLEConnectionStateChange('bleConnectionStateCallBack');

  // 有设备连接后才会触发回调
  window.bleConnectionStateCallBack = res => {
    let data = dataChange(res);
    console.log('bleConnectionStateCallBack:', data);
    console.log('蓝牙设备连接结果:', data.connected);

    if (data.connected) {
      statusLeft.innerHTML = '已连接';
      onBLECharacteristicValueChange(); // 监听低功耗蓝牙设备的特征值变化
      notifyBle(); // 信道建立


    } else {
      isDiscover = false;
      onBluetoothDeviceFound(); // 重新发现，匹配
    }
  }
}

// 3.获取当前设备的mac地址
function getCurrentRegisteredDevice() {
  window.hilink.getCurrentRegisteredDevice('currentRegisteredDeviceCallBack');

  window.currentRegisteredDeviceCallBack = res => {
    let data = dataChange(res);
    deviceIdMac = data.deviceId;
    hilinkDevId = data.hilinkDevId;
    window.hilink.setStorageSync('deviceIdMac', deviceIdMac)
    window.hilink.setStorageSync('hilinkDevId', hilinkDevId)
    console.log('-存-deviceIdMac-hilinkDevId-', deviceIdMac, hilinkDevId)
    console.log('currentRegisteredDeviceCallBack data:', data)
    console.log('本机蓝牙设备的地址:', deviceIdMac)

    // 开始扫描
    onBluetoothDeviceFound();
  }
}

// 4.发现附近蓝牙设备（先监听，后发现）
function onBluetoothDeviceFound() {
  // 在开始扫描之前，需要先监听寻找蓝牙设备的事件。当开始执行扫描后，每次扫描到一个设备，都可以在监听中获取到扫描结果。
  window.hilink.onBluetoothDeviceFound('bluetoothDeviceCallBack');
  window.bluetoothDeviceCallBack = res => {
    let data = dataChange(res);
    initStatus(6, 0) // 连接中

    // 把被扫描到的蓝牙设备的mac地址与当前要建立连接设备的mac地址做对比，
    if (isIOS) {
      // ios mac地址需要硬件配合暴露出来,此例子是暴露在广播名的advertisData字段里面
      // 解析advertisData拿到mac地址
      let advertisData = data.advertisData;
      let mac = (function analysisMac(str) {
        str = str.replace(/ /g, '');
        str = str.slice(str.length - 13, str.length - 1).toLocaleUpperCase();
        let tmp1 = '';
        for (let i = 0; i < str.length; i += 2) {
          if (tmp1 !== '') tmp1 += ' ';
          tmp1 += str[i] + str[i + 1];
        }
        let arr = tmp1.split(' ')
        arr.reverse()

        let tmp2 = '';
        arr.map(item => {
          tmp2 += item + ':'
        })
        tmp2 = tmp2.slice(0, tmp2.length - 1);
        return tmp2
      })(advertisData);

      //   console.log('ios：附近设备mac:', mac)
      //   console.log('ios：deviceIdMac:', deviceIdMac)
      if (mac === deviceIdMac) { // 注册 匹配流程
        isDiscover = true;
        window.hilink.stopBluetoothDevicesDiscovery(); // 停止扫描
        UUID_OR_Mac = data.deviceId;
        bleConnection(UUID_OR_Mac);
      }
    } else {

      //   console.log('安卓:附近设备的MAC data:', data);
      //   console.log('安卓:附近设备的MAC:', data[0].deviceId);
      //   console.log('安卓:deviceIdMac:', deviceIdMac);
      //   UUID_OR_Mac = data[0].deviceId;
      // console.log('附近设备的信息:',  data[0].deviceId);

      // console.log('附近设备DATA:', data[0]);

      if (data[0].deviceId == deviceIdMac) { // 注册 匹配流程

        console.log('安卓:deviceIdMac:', deviceIdMac);
        console.log('附近设备DATA:', data[0]);
        console.log('附近设备的MAC:', data[0].deviceId);

        window.hilink.stopBluetoothDevicesDiscovery(); //停止搜寻附近的蓝牙设备
        UUID_OR_Mac = data[0].deviceId;
        bleConnection(UUID_OR_Mac);
      }
    }
    disConnectTimeAll(); // 计算断开时长，超出时长超时警告
  }

  if (isDiscover) {
    console.log('---停止搜寻附近的蓝牙设备---')
    window.hilink.stopBluetoothDevicesDiscovery(); //停止搜寻附近的蓝牙设备
  } else {
    // 注意:当短时间重复多次搜寻附近蓝牙设备时，安卓手机概率不执行搜寻操作。
    console.log('发现附近蓝牙设备,获取其MAC地址，进行匹配...')
    window.hilink.startBluetoothDevicesDiscovery([], false, 1); // 开始扫描
  }

}

// 5.使用mac地址去连接蓝牙设备
function bleConnection(mac) {

  onBLEConnectionStateChange();

  console.log('匹配成功，开始尝试连接蓝牙设备...');
  console.log('bleConnection hilinkDevId:', hilinkDevId);
  console.log('bleConnection deviceIdMac:', deviceIdMac);
  // 尝试使用新版本的API
  window.hilink.connectBle(hilinkDevId, deviceIdMac, 'connectBleCallback');
  window.connectBleCallback = res => {
    let data = dataChange(res);
    console.log('BLE连接结果:', data);

    console.log('bleConnectionStateCallBack:', data);
    console.log('蓝牙设备连接结果:', data.errcode);

    if (data.errcode == 0) {
      statusLeft.innerHTML = '已连接';
      jishiFlag = false;

      let second = (parseInt((new Date()).getTime() / 1000)).toString(16); // 6232ecb0
      console.log('-发-下发时间-', second)
      sendCommand('FA010904' + second)
      console.log('-发-查询历史-')
      sendCommand('FA010A0400000000')
        // 进入待机状态
      initStatus(7, 0);

      //尝试写
      // hilink.sendCommand (hilinkDevId,  deviceIdMac,  notifyUuids.serviceUuid, '{\'on\':1}','sendCommandCallback');
      // window.sendCommandCallback = res => {
      //   let data = dataChange(res);
      //   console.log('写数据给模块信息，回调:', data);
      // }

      //尝试读 

      //dosomethings 订阅蓝牙事件
      subscribeBleEventFun(hilinkDevId, deviceIdMac)
    } else {
      isDiscover = false;
      onBluetoothDeviceFound(); // 重新发现，匹配
    }
  }





  // 老API
  // if (isIOS) {
  //   window.hilink.createBLEConnection(mac);

  // } else {
  //   window.hilink.createBleConnection(mac, 2); // 指定蓝牙连接方式
  // }

}

// 蓝牙设备操控：
// 1.监听低功耗蓝牙设备的特征值变化（设备侧变化，app接收变化值）
function onBLECharacteristicValueChange() {
  window.hilink.onBLECharacteristicValueChange('CharacteristicChangeCallBack');
  window.CharacteristicChangeCallBack = res => {
    let data = dataChange(res);
    console.log('监听到低功耗蓝牙设备的特征值变化:', data);
    doSomething();
  }
}

// 通知低功耗蓝牙设备的特征值的值 ,返回0表示通知成功。
function notifyBle() {
  console.log('信道建立...')

  try {
    let i = 0;
    var timer = setInterval(() => {
      if (i < notifyUuids.length) {
        // console.log(UUID_OR_Mac,  notifyUuids[i].serviceUuid, notifyUuids[i].characteristicUuid);
        //   设置低功耗蓝牙设备是否开启指定服务的特征值的模式
        var status = window.hilink.notifyBLECharacteristicValueChange(UUID_OR_Mac, notifyUuids[i].serviceUuid, notifyUuids[i].characteristicUuid, true);
        console.log('---------------------------------');
        console.log(notifyUuids[i].sid + " notify status" + status);
        console.log(notifyUuids[i].sid + " ；" + notifyUuids[i].characteristicUuid);
        // $('.receiveId').html('notifyUuids_sid: ' + notifyUuids[i].sid + " notify status" + status);
        // $('.receive').html('characteristicUuid: ' + notifyUuids[i].characteristicUuid);

        if (status === 0) {
          i++
        }

      } else {
        console.log('notify 成功');
        clearInterval(timer);

      }
    }, 100);
  } catch (error) {
    console.log('notifyBLECharacteristicValueChange error')
  }
}

// 3.对蓝牙设备发送数据 
function writeBLECharacteristicValue(data) {
  console.log('---对蓝牙设备发送数据----', data)
  console.log('UUID_OR_Mac:', UUID_OR_Mac)
  console.log('serviceUuid:', notifyUuids[0].serviceUuid)
  console.log('characteristicUuid:', notifyUuids[0].characteristicUuid)
  console.log('data:', data)
  window.hilink.writeBLECharacteristicValue(UUID_OR_Mac, notifyUuids[0].serviceUuid, notifyUuids[0].characteristicUuid, data, 'writeBLECharacteristicValueCallBack');
  window.writeBLECharacteristicValueCallBack = res => {
    console.log('-----对蓝牙设备发送数据--回调：', res)
    let data = dataChange(res);
    console.log('对蓝牙设备发送数据-开', data)
  }
}


function readBLECharacteristicValue() {
  console.log('---对蓝牙设备读取数据----')
  console.log('UUID_OR_Mac:', UUID_OR_Mac)
  console.log('serviceUuid:', notifyUuids[0].serviceUuid)
  console.log('characteristicUuid:', notifyUuids[0].characteristicUuid2)
  let result = window.hilink.readBLECharacteristicValue(UUID_OR_Mac, notifyUuids[0].serviceUuid, notifyUuids[0].characteristicUuid2, 'readBLECharacteristicValueCallBack');
  console.log('result:', result)
  window.readBLECharacteristicValueCallBack = res => {
    console.log('-----对蓝牙设备发送数据--回调：', res)
    let data = dataChange(res);
    console.log('对蓝牙设备读取数据-开', data)
  }
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 时间戳转化为年 月 日 时 分 秒
 * @param {*} number 传入时间戳
 * @param {*} format 返回格式，支持自定义，但参数必须与formateArr里保持一致
 * @returns
 */
function formatTime(number, format) {
  let formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  let returnArr = [];
  let date = new Date(number * 1000);
  if (typeof(number) == 'object') {
    date = new Date();
  }
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));
  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));
  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}
// 秒数转化为分秒
function formatSecToDate(sec) {
  if (!sec) {
    return '-'
  }
  var min = Math.floor(sec % 3600); //分钟
  return Math.floor(sec / 60) + "分" + sec % 60 + "秒";
  // return Math.floor(sec / 3600) + "时" + Math.floor(min / 60) + "分" + sec % 60 + "秒";
}
// 秒数转化时间的分
function formatSecToDateMin(sec) {
  if (!sec) {
    return '-'
  }
  var min = Math.floor(sec % 3600); //分钟
  return Math.floor(sec / 60);
  // return Math.floor(sec / 3600) + "时" + Math.floor(min / 60) + "分" + sec % 60 + "秒";
}
// 秒数转化时间的秒
function formatSecToDateSec(sec) {
  if (!sec) {
    return '-'
  }
  var min = Math.floor(sec % 3600); //分钟
  return sec % 60;
}

function doSomething() {
  console.log('do something...')
}

//dosomethings 订阅蓝牙事件
function subscribeBleEventFun(hilinkDevId, deviceIdMac) {
  window.hilink.subscribeBleEvent(hilinkDevId, deviceIdMac, 'subscribeBleEventCallback');
  window.subscribeBleEventCallback = res => {
    let data = dataChange(res);
    console.log('收到上报信息:', data);
    if (data.content) {
      analyseBleInfo(data.content.data.v)
    }
    // {"newStatus":2,"oldStatus":0,"type":"ConnectionStateChange","mac":"40:24:B2:F6:8D:4C"}
    if (data.newStatus === 0) {
      console.log('--蓝牙断开--')
      errorArr = [];
      connectBleInit();
    }
  }
}

function setH5Title() {
  let cs2DevName = window.hilink.getStorageSync('cs2DevName');
  console.log('-get缓存设备名：', cs2DevName)
  if (cs2DevName && cs2DevName != 'undefined') {
    $('.devName').html(cs2DevName)
  }
  window.hilink.getCurrentRegisteredDevice('getCurrentRegisteredDeviceCallbackl')
  window.getCurrentRegisteredDeviceCallbackl = res => {
    let data = dataChange(res);
    // console.log('-获取已注册设备:', data);
    let devName = data.hilinkDeviceEntity.devName;
    console.log('-云端设备名：', devName)
    $('.devName').html(devName)
    window.hilink.setStorageSync('cs2DevName', devName)
  }
}

function returnConnectTime() {
  let disconnectTimeStart = (new Date()).getTime().toString()
  console.log('---重连计时--', disconnectTimeStart)
  window.hilink.setStorageSync('disconnectTimeStart', disconnectTimeStart)
}

function disConnectTimeAll() {
  var that = this;
  // disconnectTimeStart = (new Date()).getTime().toString()
  disconnectTimeStart = window.hilink.getStorageSync('disconnectTimeStart')
  jishiFlag = true;
  letUsGo();
}

// 出发 显示实时记录 和 计算距离 、价钱
function letUsGo() {
  var that = this;
  setTimeout(function() {
    if (jishiFlag) { // 没有停止时
      var oldBeginTime = disconnectTimeStart;
      let cTime = (new Date()).getTime();
      let allTime = parseInt((cTime - oldBeginTime) / 1000);
      // console.log('--old时-：', oldBeginTime)
      // console.log('--new时-：', cTime)
      console.log('--连接计时--：', allTime)
      if (allTime > 20) {
        console.log('--主动-停止搜寻附近的蓝牙设备---')
          // isDiscover = true;
        window.hilink.stopBluetoothDevicesDiscovery(); //停止搜寻附近的蓝牙设备
        jishiFlag = false;
        // 超时警告
        initStatus(2, 0);
      }
      letUsGo();
    }
  }, 1000);
}


// 轮播展示报错信息
function repeatShowErrorTip() {
  jishiErrorFlag = true;
  shoEtipBegin();
}

// 2秒轮播一次
function shoEtipBegin() {
  let t2 = setTimeout(function() {
    if (jishiErrorFlag) { // 没有停止时
      let ceTime = parseInt((new Date()).getTime() / 1000);
      // console.log('%4', ceTime % 4)
      // console.log('%6', ceTime % 6)
      if (errorArr.length == 3) {
        let cnums3 = ceTime % 6;
        let enumss = 0;
        if (cnums3 == 0 || cnums3 == 1) {
          enumss = 0
        }
        if (cnums3 == 2 || cnums3 == 3) {
          enumss = 1
        }
        if (cnums3 == 4 || cnums3 == 5) {
          enumss = 2
        }
        showErrorTip(errorArr[enumss]) // 0:请更换滤芯  1:电量低，请充电!  2:请清理尘杯及滤芯!
      }
      if (errorArr.length == 2) {
        let cnums2 = ceTime % 4;
        let cnumss = 0;
        if (cnums2 == 0 || cnums2 == 1) {
          cnumss = 0
        }
        if (cnums2 == 2 || cnums2 == 3) {
          cnumss = 1
        }
        showErrorTip(errorArr[cnumss]) // 0:请更换滤芯  1:电量低，请充电!  2:请清理尘杯及滤芯!
      }
      clearTimeout(t2)
      shoEtipBegin();
    }
  }, 1000);
}

// 设置语言
function setLanguage() {
  let language = window.hilink.getAppLanguageSync()
  console.log('-设置语言-', language)
  if (language == "zh-CN") {
    loadProperties("zh")
  } else if (language == "en-UK") {
    loadProperties("en")
  } else if (language.indexOf("zh") > -1) {
    loadProperties("zh")
  } else if (language.indexOf("en") > -1) {
    loadProperties("en")
  } else {
    loadProperties("zh")
  }
}