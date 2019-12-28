/**
 * Created by yangxueyao on 2017/12/20.
 */
//隐藏站长统计
//	$("body a:first").addClass('hide');
//	$('.hide').hide();
/* 服务器地址 */
var API_SERVICE_URL = 'https://api.csjc19.com/TX/';
//测试
//var API_SERVICE_URL = 'http://192.168.2.44:8081/TX/';
//春哥
//var API_SERVICE_URL = 'http://192.168.24.100:8080/TX/';
//雪娇
//var API_SERVICE_URL = 'http://192.168.24.99:8080/TX/';
var API_IMAGE_URL = "https://pic.csjc19.com/";
var API_VIDEO_URL = "http://video.csjc19.com/";
var USER_ID = localStorage.getItem('T_USER_ID') ? localStorage.getItem('T_USER_ID').toString() : "0";
var USER_NAME = localStorage.getItem('USER_NAME') ? localStorage.getItem('USER_NAME').toString() : "";


//活动控制
var DISCOUNT;//折扣价
var IS_SHOW_DISCOUNT;//是否显示折扣价
var PREHEAT;//是否预热
var DOUBLE_TENTH;//是否活动当天
var IS_BACK;//是否返厂
/**
 * POST请求
 * @param url 前缀
 * @param data 参数字典
 * @param successFunction  成功回调
 * @param successErrorFunction 成功失败回调
 * @param failureFunction 失败回调
 *
 */
function httpPost(url,data,successFunction,successErrorFunction,failureFunction) {
    data = data == null ? {} : data;
    
    var createTime = getSystemTime();
    //字典转字符串
    var sortData = sortOutData(data);

    var sign = md5(createTime + sortData);
    //aes加密
    //sortData = myAes(sortData,'18DFCA0079F3C5D1','18DFCA0079F3C5D1');
	//console.log('aes',sortData);
    var myData = {
        "createTime":createTime,
        "data":data,//测试服务器
         //"data":sortData,//正式服务器
        "sign":sign,
        "os":"h5",
        "version":"1.9.1"
    };
    if (data.PAGE == undefined || data.PAGE == '0'){
        $("body").append('<div class="beforeSend"><img src="image/loading.gif"/></div>');
    }
    $.ajax({
        type: "POST",
        url: API_SERVICE_URL + url,
        //headers: headers==null?[]:headers,
        headers:{},
        data: JSON.stringify(myData),
        contentType: "application/json",
        dataType: "JSON",
        async: true,
        beforeSend : function(res){
            //拼接所有的地址
            bodyNoSlide()
        },
        success : function(json){
//        	console.log(JSON.stringify(json));
            if (json.response != 0) {
                //失败
                if (successErrorFunction == null) { return false; }
                successErrorFunction(json);
            } else {
                //成功
                if (successFunction == null) { return false; }
                successFunction(json);
            }
        },
        complete: function (res) {
			console.log('http');
            $(".beforeSend").remove();
            bodySlide()
        },
        error : function(XMLHttpRequest){
            //失败
            if (failureFunction == null) { return false; }
            failureFunction(XMLHttpRequest);
        }
    });
}
/*
*
* ase加密
*
* data 需要加密的字符串
*
* @param key
* @param iv 向量
*
*
* */
function myAes(data,key,iv) {
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    var encrypted = CryptoJS.AES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
}
/**
 * 将字典转换为字符串
 * @param data 字典
 * @return 字符串
 * */
function sortOutData(data) {
    var keyValueString = '{';
    for (var key in data) {
        keyValueString += '"';
        keyValueString += key;
        keyValueString += '"';
        keyValueString += ':';
        if (key == 'ASSESS_JSON') {
            keyValueString += JSON.stringify(data[key]);
        } else {
            keyValueString += '"';
            keyValueString += data[key];
            keyValueString += '"';
        }
        keyValueString += ',';
    }
    //获取字符串最后一位
    var lastChar = keyValueString.charAt(keyValueString.length-1);

    if (lastChar == ',') {
        keyValueString = keyValueString.substring(0,keyValueString.length-1);
    }
    keyValueString += '}';
    if (keyValueString == '{}') {
        keyValueString = "";
    }
    return keyValueString==''?'{}':keyValueString;
}
/**
 * 获取系统当前时间
 * */
function getSystemTime(){
    var str = '';
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth()+1;
    var day = myDate.getDate();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    if(month<10){
        month = '0'+month;
    }
    if(day<10){
        day = '0'+day;
    }
    str = year +'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
    return str;
}



//加入购物车

function addToCar(FORM_ID,PRODUCT_ID,num) {
    window.event? window.event.cancelBubble = true : e.stopPropagation();
    if(isLogin() == false){return false}
    var data = {
        "FORM_ID": FORM_ID.toString(),
        "NUM": num?num:"1",
        "PRODUCT_ID": PRODUCT_ID.toString(),
        "USER_ID": USER_ID
    };
    httpPost('app_cart/add.do',data,function (res) {
        show_alert(res.desc)
    },function (res) {
        show_alert(res.desc)
    })

}



//去登录
function sureLogin() {
    window.location.href = 'login.html'
}

//提示是否登录
function isLogin(){
	var T_USER_ID = localStorage.getItem("T_USER_ID");
    if (T_USER_ID == null){
        var $div = '<div class="upIsBox" style="display: flex;">' +
            '<div class="upIsSure">' +
            '<h1>还未登录，去登录？</h1>'+
            '<p>' +
            '<span onclick="$(this).parent().parent().parent().remove()">取消</span>' +
            '<span onclick="sureLogin()">确认</span>' +
            '</p>'+
            '</div>'+
            '</div>';
        $("body").append($div);
        return false;
    } else {
        return true
    }
}



//禁止页面滑动
function bodyNoSlide() {
    $('html').css('overflow','hidden');
    $('body').css('overflow','hidden');
}
//允许页面滑动
function bodySlide() {
    $('html').css('overflow','auto');
    $('body').css('overflow','auto');
}

//提示是否延长收货
function isExtendReceive(ORDER_ID){
    var $div = '<div class="upIsBox" style="display: flex;">' +
        '<div class="upIsSure">' +
        '<h1>每笔订单只能延长一次，每次5天哦！</h1>'+
        '<p>' +
        '<span onclick="$(this).parent().parent().parent().remove()">取消</span>' +
        '<span onclick="extendReceive('+ORDER_ID+')">确认</span>' +
        '</p>'+
        '</div>'+
        '</div>';
    $("body").append($div);
}



$(document).ready(function(){
	monitor();
	isIphoneX();
});
//百度统计
function monitor(){
	console.log('流量监察');
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "https://hm.baidu.com/hm.js?4d661102c89072cf68ff74dca5b5e3e5";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
}
//兼容iphonex
function isIphoneX(){
    if(/iphone/gi.test(window.navigator.userAgent)){
        /* iPhone X、iPhone XS */
        var x=(window.screen.width === 375 && window.screen.height === 812);
        /* iPhone XS Max */
        var xsMax=(window.screen.width === 414 && window.screen.height === 896);
        /* iPhone XR */
        var xR=(window.screen.width === 414 && window.screen.height === 896);
        if(x || xsMax || xR){
            return true;
        }else{
            return false;
        }
    }else{
        return false
    }
}