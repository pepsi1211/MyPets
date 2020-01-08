<template>
	<view class="red">
		<!-- 红色背景 -->
		<view class="banner">
			<view class="red-bg"></view>
			<view class="rule">规则</view>
			<view class="body">
				<!-- 余额 -->
				<text><i>￥</i>0.00</text>
				<!-- 说明 -->
				<text>当前红包余额</text>
			</view>
			
		</view>
		<!-- 账单部分 -->
		<view class="red-bill">
			<i class="bill-icon"></i>红包账单
		</view>
		<!-- 账单详情部分 -->
		<view class="red-content">
			<i></i>
			<text>暂无记录~</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.red {
		background: #F7F7F7;
	}
	.banner {
		width: 100%;
		height: 222upx;
		position: relative;
		display: flex;
		justify-content: center;
		padding: 26upx 0;
	}
	.red-bg{
		width: 100%;
		height: 222upx;
		background: url(~@/static/icon/bg_red.png) no-repeat;
		background-size: 100% auto;
		position: absolute;
		left: 0;
		z-index: 0;
	}
	.banner .rule {
		position: absolute;
		right: 0;
		margin: 21upx 21upx 0 0 ;
		font-size: 24upx;
		width: 100upx;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 36upx;
		text-align: center;
		line-height: 36upx;
	}
	.banner .body{
		display: flex;
		flex-direction: column;
		color: #fff;
		font-size: 28upx;
		margin-top: 54upx;
		position: absolute;
	}
	.banner .body i{
		font-style: normal;
		font-size: 28upx;
		margin-right: 13upx;
	}
	.banner .body text:first-child{
		font-size: 55upx;
		margin-bottom: 20upx;
	}
	.banner .body text:nth-child(2){
		color: #ffb5ab;
	}
	.red-bill .bill-icon {
		display: inline-block;
		width: 30upx;
		height: 30upx;
		background: url(~@/static/icon/bill.png);
		background-size: 30upx auto;
		margin: 0 22upx 0 22upx;
	}
	.red-bill {
		line-height: 90upx;
		background: #fff;
		font-size: 25upx;
		display: flex;
		align-items: center;
		margin-bottom: 24upx;
	}
	.red-content{
		height: 768upx;
		width: 100%;
		background: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.red-content i {
		display: inline-block;
		width: 237upx;
		height: 208upx;
		background: url(~@/static/icon/none2.png) no-repeat;
		background-size: 237upx;
		margin-top: 122upx;
		margin-bottom: 70upx;
	}
	.red-content text{
		font-size: 24upx;
		color: #666;
	}
</style>
