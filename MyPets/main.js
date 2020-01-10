import Vue from 'vue'
import App from './App'
import store from "./store/index.js"

Vue.config.productionTip = false
// 添加页面跳转函数
Vue.prototype.navTo = function(url) {
	// 拿到url的参数
	var option = url.split('?')[1];
	// 拿到页面名字
	var pageName = url.split('?')[0];
	// console.log(url)
	uni.navigateTo({
		url: `../${pageName}/${url}`,
		animationType: 'pop-in',
		animationDuration: 800
	})
}
// 添加获取缓存中的屏幕高度
Vue.prototype.getWinH = function() {
	uni.getStorage({
		key: 'windowHeight',
		success: (res) => {
			this.windowHeight = this.pxRatio(res.data);
		}
	})
}
// 添加像素转换函数
Vue.prototype.pxRatio = function(px) {
	// console.log(px)
	var upx;
	uni.getStorage({
		key: 'pxRatio',
		success: (res) => {
			upx = px * res.data;
			// console.log(res.data);
		}
	});
	// 返回转换后的像素
	// console.log(upx)
	return upx;
}
App.mpType = 'app'

const app = new Vue({
	...App,
	// 挂载vuex
	store
})
app.$mount()
