var state = {
	API_SERVICE_URL: "https://api.csjc19.com/TX/",
	API_IMAGE_URL: "https://pic.csjc19.com/",
	API_VIDEO_URL: "http://video.csjc19.com/",
	user: {
		get USER_ID(){
			return localstorage.getItem("T_USER_ID") ? localStorage.getItem('T_USER_ID').toString() : "0";
		},
		get USER_NAME(){
			return localStorage.getItem('USER_NAME') ? localStorage.getItem('USER_NAME').toString() : "";
		}
	}
}

export default state