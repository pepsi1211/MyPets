<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<image v-for="(key,index) of list" :key="index" :src="`https://pic.csjc19.com/${key.LOGO}`"></image>
	</view>
</template>

<script>
	import ajax from "../../ajax/ajax.js"
	
	export default {
		data() {
			return {
				title: '它嗅',
				list: [],
			}
		},
		onLoad() {
			ajax.httpPost(
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
		methods: {}
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
