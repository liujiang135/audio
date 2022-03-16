window.onload = function() {
  console.log('window.onload-ble.js');
  connectBleInit();
}

function connectBleInit() {
  console.log('ble-init')
  if (window.hilink) {
    onBluetoothAdapterStateChange(); // 监听蓝牙模块开启/关闭 触发
    onBLEConnectionStateChange(); // 监听低功耗蓝牙设备连接状态的改变
    getBluetoothAdapterState(); // 蓝牙模块状态是否打开
  }
}

// 解析蓝牙数据 FA010304640101010701FB
function analyseBleInfo(str) {
  console.log('-解析蓝牙数据--:', str)
  let commandStr = str.substr(4, 2); //命令码
  let dataStr = str.substr(8, 8); // 数据区
  let errorFlag = false;
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
      console.log('电池电量')
      $('.batterStatus')[0].innerText = '电池电量'
      $('.batterNum').html(BatterNum + '%');
      if (BatterNum <= 5) {
        showErrorTip(1) // 0:请更换滤芯  1:电量低，请充电!  2:请清理尘杯及滤芯!
        errorFlag = true;
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
      $("#eco").removeClass('checkedBg');
      $("#eco").removeClass('checkedText');
      $("#turbo").addClass('checkedBg');
      $("#turbo").addClass('checkedText');
      $(".modeTip").html('强劲模式');
    } else {
      //低档 节能
      $("#turbo").removeClass('checkedBg');
      $("#turbo").removeClass('checkedText');
      $("#eco").addClass('checkedBg');
      $("#eco").addClass('checkedText');
      $(".modeTip").html('节能模式');
    }

    if (dataStr.substr(4, 2) === '01') {
      // 滤网堵塞告警状态 堵塞
      showErrorTip(2) // 0:请更换滤芯  1:电量低，请充电!  2:请清理尘杯及滤芯!
      errorFlag = true;
    } else {
      // 滤网堵塞告警状态 未堵塞
    }

    if (dataStr.substr(6, 2) === '01') {
      // LED灯开关状态    开灯
      $('.ledTip').show();
      this.document.getElementsByClassName("fnImgItem2")[0].style.background = "url('http://www.dadaiot.com/cleanerH5/img/light/ic_led_on.png') no-repeat";
      this.document.getElementsByClassName("fnImgItem2")[0].style.backgroundSize = "cover";
      window.hilink.setStorageSync('ledCode', 1)
    } else {
      // LED灯开关状态    关灯
      $('.ledTip').hide();
      this.document.getElementsByClassName("fnImgItem2")[0].style.background = "url('http://www.dadaiot.com/cleanerH5/img/light/ic_led_off.png') no-repeat";
      this.document.getElementsByClassName("fnImgItem2")[0].style.backgroundSize = "cover";
      window.hilink.setStorageSync('ledCode', 0)
    }
  }
  if (!errorFlag) {
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
    // statusLeft.innerHTML = '连接中...';
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
  }

  if (isDiscover) {
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
      // 进入待机状态
      initStatus(7, 0);

      //尝试写
      // hilink.sendCommand (hilinkDevId,  deviceIdMac,  notifyUuids.serviceUuid, '{\'on\':1}','sendCommandCallback');
      // window.sendCommandCallback = res => {
      //   let data = dataChange(res);
      //   console.log('写数据给模块信息，回调:', data);
      // }

      //尝试读 

      //dosomethings
      window.hilink.subscribeBleEvent(hilinkDevId, deviceIdMac, 'subscribeBleEventCallback');
      window.subscribeBleEventCallback = res => {
        let data = dataChange(res);
        console.log('收到模块信息:', data);
        if (data.content) {
          $('.receive').html('收到的数据: ' + data.content.data.v);
          analyseBleInfo(data.content.data.v)
        }
      }
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
        $('.receiveId').html('notifyUuids_sid: ' + notifyUuids[i].sid + " notify status" + status);
        $('.receive').html('characteristicUuid: ' + notifyUuids[i].characteristicUuid);

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


function doSomething() {
  console.log('do something...')
}