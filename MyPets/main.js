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
<<<<<<< HEAD
		url: `../${pageName}/${url}`
=======
		url: `../${url}/${url}`,
>>>>>>> 979d553e05c68a48b81d434f87fa6c2ab25828f6
	})
}
// 添加获取缓存中的屏幕高度
Vue.prototype.getWinH = function() {
	uni.getStorage({
		key: 'windowHeight',
		success: (res) => {
			this.windowHeight = res.data;
		}
	})
}
App.mpType = 'app'

const app = new Vue({
	...App,
	// 挂载vuex
	store
})
app.$mount()
