import Vue from 'vue'
import App from './App'
import "./static/js/jquery-1.8.3.min.js"
import md5 from "js-md5"

Vue.config.productionTip = false
Vue.prototype.$md5 = md5

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
