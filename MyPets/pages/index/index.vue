<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<image v-for="(key,index) of list" :key="index" :src="`https://pic.csjc19.com/${key.LOGO}`" ></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '它嗅',
				list: [],
			}
		},
		onLoad() {
			this.httpPost(
				"https://api.csjc19.com/TX/app_shop/home.do", {
					CATEGORY: "2",
					USER_ID: "0"
				},
				res => {
					this.list = res.data.BANNER_LIST;
					console.log(this.list)
				}
			);
		},
		methods: {
			/**
			 * POST请求
			 * @param url 前缀
			 * @param data 参数字典
			 * @param successFunction  成功回调
			 * @param successErrorFunction 成功失败回调
			 * @param failureFunction 失败回调
			 *
			 */
			httpPost: function(
				url,
				data,
				successFunction,
				successErrorFunction,
				failureFunction
			) {
				data = data == null ? {} : data;

				var createTime = this.getSystemTime();
				//字典转字符串
				var sortData = this.sortOutData(data);

				var sign = this.$md5(createTime + sortData);
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
					url: url,
					//headers: headers==null?[]:headers,
					headers: {},
					data: JSON.stringify(myData),
					contentType: "application/json",
					dataType: "JSON",
					async: true,
					success: function(json) {
						if (json.response != 0) {
							//失败
							if (successErrorFunction == null) {
								return false;
							}
							successErrorFunction(json);
						} else {
							//成功
							if (successFunction == null) {
								return false;
							}
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
			/**
			 * 将字典转换为字符串
			 * @param data 字典
			 * @return 字符串
			 * */
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
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
