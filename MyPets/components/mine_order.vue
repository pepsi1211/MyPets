<template>
	<view class="container">
		<view class="order">
			<view class="text">
				<text class="text-order">我的订单</text>
				<text class="text-all">查看全部</text>
			</view>
			<view class="icon-list">
				<view>
					<i class="icon-1"></i>
					<text>待付款</text>
				</view>
				<view>
					<i class="icon-2"></i>
					<text>待发货</text>
				</view>
				<view>
					<i class="icon-3"></i>
					<text>待收货</text>
				</view>
				<view>
					<i class="icon-4"></i>
					<text>已完成</text>
				</view>
				<view>
					<i class="icon-5"></i>
					<text>待付款</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.container{
		width:710upx;
		height: 188upx;
		margin: 0 auto;
		background: #fff;
		margin-bottom: 22upx;
	}
	.order{
		width: 100%;
		height: 188upx;
	}
	.text:after{
		display: block;
		content: "";
		clear: both;
	}
	.text{
		margin-bottom: 24upx;
	}
	.text-order{
		float: left;
		margin: 25upx 0 0 22upx;
		font-size: 26upx;
		font-weight: 600;
	}
	.text-all{
		float: right;
		font-size: 25upx;
		margin: 25upx 25upx 0 0;
		color: #999;
	}
	.icon-list{
		display: flex;
		justify-content: space-around;
		font-size: 25upx;
		color: #6c6c6c;
		height: 89upx;
	}
	.icon-list view{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.icon-list view i{
		display: inline-block;
		width: 50upx;
		height: 50upx;
	}
	.icon-list view .icon-1{
		background: url(~@/static/icon/order.jpg) 666upx 0 ;
		background-size: 714upx auto;
		/* transform: scale(.3); */
		/* background-size: 80%; */
		/* background-size: 100%; */
	}
	.icon-list view .icon-2{
		background: url(~@/static/icon/order.jpg) 526upx 0 ;
		background-size: 714upx auto;
	}
	.icon-list view .icon-3{
		background: url(~@/static/icon/order.jpg) 382upx 0 ;
		background-size: 714upx auto;
	}
	
	.icon-list view .icon-4{
		background: url(~@/static/icon/order.jpg) 242upx 0 ;
		background-size: 714upx auto;
	}
	.icon-list view .icon-5{
		background: url(~@/static/icon/order.jpg) 100upx 0 ;
		background-size: 714upx auto;
	}
	
</style>
