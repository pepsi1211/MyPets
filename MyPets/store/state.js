var state = {
	API_SERVICE_URL: "https://api.csjc19.com/TX/",
	API_IMAGE_URL: "https://pic.csjc19.com/",
	API_VIDEO_URL: "http://video.csjc19.com/",
	DISCOUNT: "", //折扣价
	IS_SHOW_DISCOUNT: "", //是否显示折扣价
	PREHEAT: "", //是否预热
	DOUBLE_TENTH: "", //是否活动当天
	IS_BACK: "", //是否返厂
	user: {
		get USER_ID() {
			return localstorage.getItem("T_USER_ID") ? localStorage.getItem('T_USER_ID').toString() : "0";
		},
		get USER_NAME() {
			return localStorage.getItem('USER_NAME') ? localStorage.getItem('USER_NAME').toString() : "";
		}
	}
}

export default state
