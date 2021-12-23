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

var seIphone = document.getElementsByClassName("seIphone")[0];

// 获取手机状态栏高度
function getStatusBarHeight(){
    if(window.hilink){
        hilink.getStatusBarHeight('BarHeightRes');
    }
    window.BarHeightRes = (res) => {
        let data = dataChange(res).statusBarHeight;
        console.log('手机状态栏高度:',data);
        setStatusBarHeight(data);
    }
}

getStatusBarHeight();

// 设定状态栏高度
function setStatusBarHeight(num){
    seIphone.style.height = num + 'px';
}

//返回上一页
var second = document.getElementById('second');

// 暗黑模式适配处理
function getDarkMode(){
    if(window.hilink){
        var dark = hilink.getDarkMode();

        if(dark == 2){//暗黑模式
            second.style.background = 'black';
            second.classList.add("dark");
        } else {
            second.classList.remove("dark")
            second.style.background = '#f7f7f7';
        }
    }
}
getDarkMode();



// 取消授权弹窗
var revocation = document.getElementsByClassName("revocation")[0];
var stopPopup = document.getElementsByClassName("stopPopup")[0];
var backgroundColor = document.getElementsByClassName("backgroundColor")[0];
var stopLeft = document.getElementsByClassName("stopFn")[0];
var stopRight = document.getElementsByClassName("stopFn")[1];



revocation.addEventListener('click',function(event){
    stopPopup.style.display = 'block';
    backgroundColor.style.display = 'block';
    event.stopPropagation();
})


stopLeft.addEventListener('click',function(event){
    stopPopup.style.display = 'none';
    backgroundColor.style.display = 'none';
    event.stopPropagation();
})


stopRight.addEventListener('click',function(event){
    localStorage.setItem("devId", '');
    if(window.hilink){
        hilink.finishDeviceActivity();
    }
    event.stopPropagation();
})


var seBack = document.getElementsByClassName("seBack")[0];

seBack.addEventListener('click',function(event){
    window.history.go(-1);
    event.stopPropagation();
})









