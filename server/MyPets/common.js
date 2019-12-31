
//判读是否是在微信中打开
var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
var isAndroid = ua.indexOf('android') != -1;
var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);

//获取活动配置信息
function config() {
	console.log('config');
	httpPost('app_product/formList.do',{"FORM_ID":'0','PRODUCT_ID':'1633',"USER_ID":'0'},function (res) {
		var config = res.config;
		DISCOUNT = config.DISCOUNT; //折扣价
		IS_SHOW_DISCOUNT = config.IS_SHOW_DISCOUNT;//是否显示折扣
		PREHEAT = config.PREHEAT;//是否是预热状态
		DOUBLE_TENTH = config.DOUBLE_TENTH;//是否双十一当天
		IS_BACK = config.IS_BACK;//是否返场
		console.log(JSON.stringify(res));
		//测试数据
//		DISCOUNT = config.DISCOUNT; //折扣价
//		IS_SHOW_DISCOUNT = 0;//是否显示折扣
//		PREHEAT = 0;//是否是预热状态
//		DOUBLE_TENTH = 1;//是否双十一当天
//		IS_BACK = 0;//是否返场
		
	});
}
//if (!isWeixin) {
// 	var opened = window.open('wxError.html', '_self');
//}

//获取链接地址参数
function GetQueryString(key){
	var qs = location.search.substr(1), // 获取url中"?"符后的字串
		args = {}, // 保存参数数据的对象
		items = qs.length ? qs.split("&") : []; // 取得每一个参数项,
	for(var i = 0; i < items.length; i++) {
		var item = items[i];
		var position = item.indexOf('=');
		var name = item.substring(0,position);
		var value = item.substring(position+1,item.length);
		name = decodeURIComponent(name);
		value = decodeURIComponent(value);
		if(name) {
			args[name] = value;
		}
	}
	return args[key];
}


/**
 *
 * @param msg 提示信息
 * @param renovate 是否刷新
 * @param local_url 跳转地址
 * @param rep
 * @param result
 */
function show_alert(msg, renovate, local_url, rep, result){
	if (result != "success" && result != "error") {
		result = "";
	} else {
		result = "alert_" + result;
	}
	var html = '<div class="alert_dialog"><div class="show_alert '+result+'">'+msg+'</div></div>';
	$("body").append(html);
	var i = 0;
	var setI = setTimeout(function(){
		$('.alert_dialog').remove();
		if(renovate == true){
			history.go(0);
		}
		if(local_url != "" && local_url != undefined){
			redirect(local_url, rep);
		}
		if(i >= 1){
			clearTimeout(setI);
		}
		i++;
	}, 1000);
}

/**
 * 跳转链接
 * @param url 连接地址
 * @param rep 是否替换本页历史
 * @param target 是否在新窗口打开
 */
function redirect(url, rep, target){
	if (target == true) {
		window.open(url);
	} else if (rep == true) {
		location.replace(url);
	} else {
		window.location.href = url;
	}
}
/**
 * 去除首尾空格
 * @param string
 * @returns {XML|void|*}
 */
function tirm(string){
	return string.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 价格格式化
 * @param price
 * @returns {string}
 */
function formatPrice(price){
	return parseFloat(price).toFixed(2);
}
/**
 * 是否存在上一步, 存在则返回, 否则跳转到首页
 */
function getReferrer() {
	if(document.referrer == ""){
		redirect("index.html", true);
	} else {
		history.back();
	}
}
/*
 *
 *去除数组中的空元素*
 *
 *
 * */
function removeEmptyArrayEle(arr){
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == '') {
			arr.splice(i,1);
			i = i - 1; // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位， 
		}
	}
	return arr;
}

/*
*
 返回顶部
 *
 */
function pageScroll(){
	window.scrollTo(0,0)
}

/**
 * 跳转搜索页面
 *
 * */
function goToSearch() {
	window.location.href = 'search.html'
}

//无数据显示
function noData(ele,img,html,eleStatus){
	var $div =  '<div style="width: 100%;">' +
		'<img src="image/'+img+'" style="display: block;width: 2rem;height: 1.92rem;margin:0.5rem auto 0;"/>'+
		'<h1 style="line-height: 0.8rem;color:#cccccc;font-size: 0.2rem;text-align: center ">'+html+'</h1>'+
		'</div>';
	ele.html($div);
	if (eleStatus == 'false'){
		ele.css('background',"#F0F3F6")
	}
}


//banner图
function pictureRoll(ele,status){
	var mySwiper = new Swiper("."+ele,{
		pagination: '.swiper-pagination',
		paginationClickable: true,
		paginationType : status==false?'fraction':"bullets",
		autoplay:3000,
		speed:500,
		loop:true
	});
}



//跳转商品详情
function goToGoodsDetail(PRODUCT_ID,FORM_ID,CLEARType) {
	window.event? window.event.cancelBubble = true : e.stopPropagation();
	if( CLEARType == undefined){
		window.location.href = 'goodsDetail.html?PRODUCT_ID='+PRODUCT_ID+"&FORM_ID="+FORM_ID
	} else {
		window.location.href = 'goodsDetail.html?PRODUCT_ID='+PRODUCT_ID+"&FORM_ID="+FORM_ID+"&CLEARType="+CLEARType
	}
}


/*星号隐藏信息
 * str 字符串
 * index在第几位之后开始隐藏
 * num在第几位之前开始不隐藏
 * index与num之间的是要隐藏的
 * */
function hiddenInfo(str,index,num) {
	var xing = '';
	for (var i=0;i<str.length-num;i++){
		xing += "*"
	}
	var str2 = str.substr(0,index)+xing+str.substr(num);
	return str2;
}


//关闭网站
function custom_close() {
	window.opener=null;
	window.open('','_self');
	window.close();
}
$(".headerLeft").click(function (res) {
	custom_close()
});



placeholderImage('oriImg');

//懒加载，先加载默认图片，等真实的图片加载出来之后再渲染真实图片
function placeholderImage(className) {
	var array = document.getElementsByClassName(className);
	for (var i = 0;i < array.length;i++) {
		var img = array[i];
		img.src = img.getAttribute("originsrc");
		img.onload=function(){
			img.setAttribute("src",this.src);
		}
	}
}


//获取createTime，sign
function getSign(data) {
  	var createTime = getSystemTime();
	//字典转字符串
	var sortData = sortOutData(data);
	var sign = md5(createTime + sortData);
	return sign;
}

//给传过来的数字补齐两位小数
function addZero(x){
	var f = Math.round(x*100)/100;    
    var s = f.toString();  
    var rs = s.indexOf('.'); 
    if (rs < 0) {    
        rs = s.length;    
        s += '.';    
    }    
    while (s.length <= rs + 2) {    
        s += '0';  
    }
    return s;
}

