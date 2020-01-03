import Vue from 'vue'
import App from './App'
import store from "./store/index.js"

Vue.config.productionTip = false
// 添加页面跳转函数
Vue.prototype.navTo = function(url) {
	uni.navigateTo({
		url: `../${url}/${url}`
	})
}
// 添加获取缓存中的屏幕高度
Vue.prototype.getWinH = function() {
	uni.getStorage({
		key: 'windowHeight',
		success: (res)=> {
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
