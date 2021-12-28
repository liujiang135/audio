var app = document.getElementById('app');
var backgroundColor = document.getElementsByClassName("backgroundColor")[0];

var spinner = document.getElementsByClassName("spinner")[0];
var spinnerWrap = document.getElementsByClassName("spinnerWrap")[0];
var spinnerItem = document.getElementsByClassName("spinnerItem")[0];

var singleList = document.getElementsByClassName("singleList")[0];
var modeList = document.getElementsByClassName("modeList")[0];

var fnbtnLeft = document.getElementsByClassName("fnbtn")[0];
var fnbtnRight = document.getElementsByClassName("fnbtn")[1];

var iphoneStatus = document.getElementsByClassName("iphoneStatus")[0];
var devTop = document.getElementsByClassName("devTop")[0];

var barLeft = document.getElementsByClassName("barLeft")[0];

var statement = document.getElementsByClassName("statement")[0];



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
function getStatusBarHeight(){

    console.log("index getStatusBarHeight" )

    if(window.hilink){
        hilink.getStatusBarHeight('BarHeightRes');
    }
    window.BarHeightRes = (res) => {
        let data = dataChange(res).statusBarHeight;
        console.log('手机状态栏高度:',data);
        setStatusBarHeight(data);
    }
}

// 设定状态栏高度
function setStatusBarHeight(num){
    iphoneStatus.style.height = num + 'px';
    devTop.style.height = (84 + num) + 'px';
}

// 隐藏原生标题栏
if(window.hilink){
    try{
        hilink.setTitleVisible(false);   // ble设备
    } catch {
        hilink.setTitleVisible(false,"resultCallback")  // wlan设备

        window.resultCallback = (res) => {
            console.log('res:',res);
        }
    }   
}

// 列表弹窗
spinner.addEventListener('click',function(event){
    let val = spinnerWrap.style.display;
    if(val === 'block'){
        spinnerWrap.style.display = 'none';
    }else{
        spinnerWrap.style.display = 'block';
    }
    event.stopImmediatePropagation();
})

spinnerWrap.addEventListener('click',function(event){
    spinnerWrap.style.display = 'none';
    event.stopPropagation(); // 阻止事件冒泡
})

singleList.addEventListener('click',function(event){
    backgroundColor.style.display = 'block';
    modeList.style.display = 'block';
    event.stopPropagation();
})

fnbtnLeft.addEventListener('click',function(event){
    backgroundColor.style.display = 'none';
    modeList.style.display = 'none';
    event.stopPropagation();
})

fnbtnRight.addEventListener('click',function(event){
    backgroundColor.style.display = 'none';
    modeList.style.display = 'none';
    event.stopPropagation();
})

app.addEventListener('click',function(event){
    spinnerWrap.style.display = 'none';
    event.stopPropagation();
})

// 退出当前设备页，返回APP设备列表页
barLeft.addEventListener('click',function(event){
    if(window.hilink){
        hilink.finishDeviceActivity();
    }
    event.stopPropagation();
})

// 暗黑模式适配处理
function getDarkMode(){
    if(window.hilink){
        var dark = hilink.getDarkMode();

        if(dark == 2){//暗黑模式
            app.style.background = 'black';
            app.classList.add("dark");
        } else {
            app.classList.remove("dark")
            app.style.background = '#f7f7f7';
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

if(window.hilink){
    window.hilink.getDevInfoAll('0', '', 'getDevInfoAllResult');
    window.getDevInfoAllResult = (res) => {
        deviceId = dataChange(res).devId;
        console.log('设备devId:',deviceId);

        if(deviceId === isAgree){
            statementPopup.style.display = 'none';
            backgroundColor.style.display = 'none';
        }else {
            backgroundColor.style.display = 'block';
            statementPopup.style.display = 'block';
        }
    }
}

stateRight.addEventListener('click',function(event){
    localStorage.setItem("devId", deviceId);
    statementPopup.style.display = 'none';
    backgroundColor.style.display = 'none';
    event.stopPropagation();
})


stateLeft.addEventListener('click',function(event){
    if(window.hilink){
        hilink.finishDeviceActivity();
    }
    event.stopPropagation();
})


// 查看隐私协议&取消协议
var statement = document.getElementsByClassName("statement")[0];

statement.addEventListener('click',function(event){
    
    window.location.href="privacy.html";
    event.stopPropagation();
})


//展示或者隐藏错误
function hideError () {
	$(".shelter").hide()
	$(".msg-div").hide()
}

function showError () {
    console.log('showError');
	$(".shelter").show()
	$(".msg-div").show()
    $(".devTop").show()

}

//展示或者隐藏错误
function hideAlert () {
	$(".devTop").hide()
}

function showAlert () {
    console.log('showAlert');
    $(".devTop").show()

}


