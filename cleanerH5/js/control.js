
// app接收数据的处理
function dataChange(res){
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
var iphoneStatus = document.getElementsByClassName("iphoneStatus")[0];
var devTop = document.getElementsByClassName("devTop")[0];
function setStatusBarHeight(num){
    iphoneStatus.style.height = num + 'px';
    devTop.style.height = (56 + num) + 'px';
}
getStatusBarHeight();

// 隐藏原生标题栏
// if(window.hilink){
//     hilink.setTitleVisible(false,"resultCallback")
    
//     window.resultCallback = (res) => {
//         console.log('res:',res);
//     }
// }

// 退出当前设备页，返回APP设备列表页
var barLeft = document.getElementsByClassName("barLeft")[0];
barLeft.addEventListener('click',function(event){
    if(window.hilink){
        hilink.finishDeviceActivity();
    }
    event.stopPropagation();
})

