var app = document.getElementById('app');
var backgroundColor = document.getElementsByClassName("backgroundColor")[0];

var spinner = document.getElementsByClassName("spinner")[0];
var spinnerWrap = document.getElementsByClassName("spinnerWrap")[0];
var spinnerItem = document.getElementsByClassName("spinnerItem")[0];

// var singleList = document.getElementsByClassName("singleList")[0];
var modeList = document.getElementsByClassName("modeList")[0];

var fnbtnLeft = document.getElementsByClassName("fnbtn")[0];
var fnbtnRight = document.getElementsByClassName("fnbtn")[1];

var iphoneStatus = document.getElementsByClassName("iphoneStatus")[0];
var devTop = document.getElementsByClassName("devTop")[0];

var barLeft = document.getElementsByClassName("barLeft")[0];

var statement = document.getElementsByClassName("statement")[0];

// var statusImg = document.getElementsByClassName("statusImg")[0];

// var statusImg1 = document.getElementsByClassName("statusImg")[1];



// app接收数据的处理
function dataChange(res) {
  let data = undefined;
  let dataStr = res;
  dataStr = dataStr.replace(/"{/g, '{');
  dataStr = dataStr.replace(/}"/g, '}');
  dataStr = dataStr.replace(/\\|\n|\r|\t|\f|\t/g, '');
  data = JSON.parse(dataStr);
  return data;
}

// 获取手机状态栏高度
function getStatusBarHeight() {

  console.log("index getStatusBarHeight")

  if (window.hilink) {
    hilink.getStatusBarHeight('BarHeightRes');
  }
  window.BarHeightRes = (res) => {
    let data = dataChange(res).statusBarHeight;
    console.log('手机状态栏高度:', data);
    setStatusBarHeight(data);
  }
}

// 设定状态栏高度
function setStatusBarHeight(num) {
  iphoneStatus.style.height = num + 'px';
  devTop.style.height = (84 + num) + 'px';
}

// 隐藏原生标题栏
if (window.hilink) {
  try {
    hilink.setTitleVisible(false); // ble设备
  } catch {
    hilink.setTitleVisible(false, "resultCallback") // wlan设备

    window.resultCallback = (res) => {
      console.log('res:', res);
    }
  }
}

// 列表弹窗
spinner.addEventListener('click', function(event) {
  let val = spinnerWrap.style.display;
  if (val === 'block') {
    spinnerWrap.style.display = 'none';
  } else {
    spinnerWrap.style.display = 'block';
  }
  event.stopImmediatePropagation();
})

spinnerWrap.addEventListener('click', function(event) {
  spinnerWrap.style.display = 'none';
  event.stopPropagation(); // 阻止事件冒泡
})

// singleList.addEventListener('click',function(event){
//     backgroundColor.style.display = 'block';
//     modeList.style.display = 'block';
//     event.stopPropagation();
// })

fnbtnLeft.addEventListener('click', function(event) {
  backgroundColor.style.display = 'none';
  modeList.style.display = 'none';
  event.stopPropagation();
})

fnbtnRight.addEventListener('click', function(event) {
  backgroundColor.style.display = 'none';
  modeList.style.display = 'none';
  event.stopPropagation();
})

app.addEventListener('click', function(event) {
  spinnerWrap.style.display = 'none';
  event.stopPropagation();
})

// 退出当前设备页，返回APP设备列表页
barLeft.addEventListener('click', function(event) {
  if (window.hilink) {
    console.log('-hilinkDevId-', hilinkDevId)
    console.log('-deviceIdMac-', deviceIdMac)
    window.hilink.disconnectBle(hilinkDevId, deviceIdMac, 'disconnectBleCallback');
    window.disconnectBleCallback = res => {
      let data = dataChange(res);
      console.log('BLE断开连接:', data);
    }
    hilink.finishDeviceActivity();
  }
  event.stopPropagation();
})

// 暗黑模式适配处理
function getDarkMode() {
  console.log('getDarkMode')
  if (window.hilink) {
    var dark = hilink.getDarkMode();
    console.log('dark--', dark)
    if (dark == 2) { //暗黑模式
      app.style.background = 'black';
      app.classList.add("dark");
    } else {
      app.classList.remove("dark")
      app.style.background = '#F1F3F5';
    }
  }
}
getDarkMode();

// 隐私声明弹窗处理
var stateLeft = document.getElementsByClassName("stateFn")[0];
var stateRight = document.getElementsByClassName("stateFn")[1];
var statementPopup = document.getElementsByClassName("statementPopup")[0];

var deviceId = undefined;
var isAgree = localStorage.getItem("devId");

if (window.hilink) {
  console.log('--隐私声明--')
  window.hilink.getDevInfoAll('0', '', 'getDevInfoAllResult');
  window.getDevInfoAllResult = (res) => {
    deviceId = dataChange(res).devId;
    console.log('设备devId:', deviceId);

    if (deviceId === isAgree) {
      statementPopup.style.display = 'none';
      backgroundColor.style.display = 'none';
    } else {
      backgroundColor.style.display = 'block';
      statementPopup.style.display = 'block';
    }
  }
}

stateRight.addEventListener('click', function(event) {
  localStorage.setItem("devId", deviceId);
  statementPopup.style.display = 'none';
  backgroundColor.style.display = 'none';
  event.stopPropagation();
})


stateLeft.addEventListener('click', function(event) {
  if (window.hilink) {
    hilink.finishDeviceActivity();
  }
  event.stopPropagation();
})


// 查看隐私协议&取消协议
// var statement = document.getElementsByClassName("statement")[0];

// statement.addEventListener('click',function(event){

//     window.location.href="privacy.html";
//     event.stopPropagation();
// })


//展示或者隐藏错误
function hideError() {
  $(".shelter").hide()
  $(".msg-div").hide()
}

function showError() {
  console.log('showError');
  $(".shelter").show()
  $(".msg-div").show()
}

//展示或者隐藏错误
function hideAlert() {
  $(".devTopWrap").hide()
}

function showAlert() {
  document.getElementsByClassName("devTopWrap")[0].style.display = "flex";
}

// 告警提示  0:请更换滤芯  1:电量低，请充电!  2:请清理尘杯及滤芯!
function showErrorTip(topMsgStatus) {
  showAlert();
  if (topMsgStatus == 0) { //请更换滤芯
    $('.replaceLv').show();
    $('.lowBatteryLv').hide();
    $('.clearLv').hide();
    $('.devTopRight').show();
  } else if (topMsgStatus == 1) { //电量低，请充电
    $('.replaceLv').hide();
    $('.lowBatteryLv').show();
    $('.clearLv').hide();
    $('.devTopRight').hide();
  } else if (topMsgStatus == 2) { //请清理尘杯及滤芯
    $('.replaceLv').hide();
    $('.lowBatteryLv').hide();
    $('.clearLv').show();
    $('.devTopRight').hide();
  }
}