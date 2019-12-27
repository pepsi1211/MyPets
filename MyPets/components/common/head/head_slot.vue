<template>
	<view class="head">
		<!-- 左边箭头 -->
		<i class="arrows" @click="backTo"></i>
		<!-- 中间文字 -->
		<slot class="title"></slot>
		<!-- 右边文字 -->
	</view>
</template>

<script>
	
	export default{
		methods:{
			backTo(){
				// 返回上一层
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>
	
<style>
	.head{
		position: relative;
		/* margin-bottom: 50upx; */
		background: #fff;
	}
	.arrows{
		display: inline-block;
		width: 21upx;
		height: 36upx;
		margin: 60upx 0 0 40upx;
		background: url(~@/static/icon/arr_left.jpg) no-repeat;
		background-size: 21upx auto;
	}
	.head .title{
		font-size: 50upx;
		color: red;
	}
</style>