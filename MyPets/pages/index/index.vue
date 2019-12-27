<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{DISCOUNT}}</text>
			<text class="title">{{IS_SHOW_DISCOUNT}}</text>
			<text class="title">{{PREHEAT}}</text>
			<text class="title">{{DOUBLE_TENTH}}</text>
			<text class="title">{{IS_BACK}}</text>
		</view>
		<image v-for="(key,index) of list" :key="index" :src="`https://pic.csjc19.com/${key.LOGO}`"></image>
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
			ajax.httpPost(
				"app_shop/home.do", {
					CATEGORY: "2",
					USER_ID: "0"
				},
				res => {
					this.list = res.data.BANNER_LIST;
				}
			);
			this.config();
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
					console.log(res);
				});
			}
		},
		computed: {
			...mapState(['DISCOUNT','IS_SHOW_DISCOUNT','PREHEAT','DOUBLE_TENTH','IS_BACK'])
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
