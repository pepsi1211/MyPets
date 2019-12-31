<template>
	<view class="content">
<!-- <<<<<<< HEAD -->
<!-- ======= -->
		<view class="text-area">
		</view>
		<!-- <image v-for="(key,index) of list" :key="index" :src="`https://pic.csjc19.com/${key.LOGO}`"></image> -->
	</view>
</template>

<script>
	import ajax from "../../ajax/ajax.js"
	import {
		mapState,
		mapActions
	} from 'vuex'

	export default {
		data() {
			return {
				title: '它嗅',
				list: [],
			}
		},
		onLoad() {
			var data = {
				"AREA_ID": "0", //专区ID 0:默认 1:小型犬专区 2:中大型犬专区 3:幼犬专区 4:幼猫专区 5:成猫专区
				"CATEGORY": "1", //类型 1：狗 2：猫
				"COUNT": "10",
				"PAGE": "7",
				"USER_ID": "0"
			};
			ajax.httpPost(
				"app_shop/likeList.do", data,
				(res) => {
					// this.list = res.data.SEASON_BANNER_LIST;
					console.log(res)
				}
			);
		},
		methods: {
			...mapActions(["getActionCtrl"]),
			config: function() {
				console.log('config');
				ajax.httpPost('app_product/formList.do', {
					"FORM_ID": '0',
					'PRODUCT_ID': '1633',
					"USER_ID": '0'
				}, res => {
					var config = res.config;
					this.getActionCtrl(config);
					// console.log(res);
				});
			}
		},
		computed: {
			...mapState(['DISCOUNT', 'IS_SHOW_DISCOUNT', 'PREHEAT', 'DOUBLE_TENTH', 'IS_BACK'])
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
