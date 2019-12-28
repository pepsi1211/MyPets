import "../static/js/jquery-1.8.3.min.js"
import md5 from "js-md5"
import state from "../store/state.js"

const ajax = {
	httpPost: function(url, data, successFunction, successErrorFunction, failureFunction) {
		var baseURL = state.API_SERVICE_URL;
		
		data = data == null ? {} : data;

		var createTime = this.getSystemTime();
		//字典转字符串
		var sortData = this.sortOutData(data);

		var sign = md5(createTime + sortData);
		var myData = {
			createTime: createTime,
			data: data, //测试服务器
			//"data":sortData,//正式服务器
			sign: sign,
			os: "h5",
			version: "1.9.1"
		};
		$.ajax({
			type: "POST",
			url: `${baseURL}${url}`,
			//headers: headers==null?[]:headers,
			headers: {},
			data: JSON.stringify(myData),
			contentType: "application/json",
			dataType: "JSON",
			async: true,
			success: function(json) {
				console.log(json)
				if (json.response != 0) {
					//失败
					if (successErrorFunction == null) {
						return false;
					}
					console.log("请求失败了");
					successErrorFunction(json);
				} else {
					//成功
					if (successFunction == null) {
						return false;
					}
					console.log("请求成功了");
					successFunction(json);
				}
			},
			complete: function(res) {
				console.log("http");
			},
			error: function(XMLHttpRequest) {
				//失败
				if (failureFunction == null) {
					return false;
				}
				failureFunction(XMLHttpRequest);
			}
		});
	},
	sortOutData: function(data) {
		var keyValueString = "{";
		for (var key in data) {
			keyValueString += '"';
			keyValueString += key;
			keyValueString += '"';
			keyValueString += ":";
			if (key == "ASSESS_JSON") {
				keyValueString += JSON.stringify(data[key]);
			} else {
				keyValueString += '"';
				keyValueString += data[key];
				keyValueString += '"';
			}
			keyValueString += ",";
		}
		//获取字符串最后一位
		var lastChar = keyValueString.charAt(keyValueString.length - 1);

		if (lastChar == ",") {
			keyValueString = keyValueString.substring(0, keyValueString.length - 1);
		}
		keyValueString += "}";
		if (keyValueString == "{}") {
			keyValueString = "";
		}
		return keyValueString == "" ? "{}" : keyValueString;
	},
	getSystemTime: function() {
		var str = "";
		var myDate = new Date();
		var year = myDate.getFullYear();
		var month = myDate.getMonth() + 1;
		var day = myDate.getDate();
		var hours = myDate.getHours();
		var minutes = myDate.getMinutes();
		var seconds = myDate.getSeconds();
		if (month < 10) {
			month = "0" + month;
		}
		if (day < 10) {
			day = "0" + day;
		}
		str =
			year +
			"-" +
			month +
			"-" +
			day +
			" " +
			hours +
			":" +
			minutes +
			":" +
			seconds;
		return str;
	},
}

export default ajax