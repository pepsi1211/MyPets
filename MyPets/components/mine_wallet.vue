<template>
	<view class="container">
		<!-- 文字 -->
		<view class="title">
			<text>我的钱包</text>
		</view>
		<!-- 图标列表 -->
		<view class="icon-list">
			<view  @tap="navTo('account')">
				<i class="icon-1"></i>
				<text>账号余额</text>
			</view>
			<view>
				<i class="icon-2"></i>
				<text>邀请有礼</text>
			</view>
			<view @tap="navTo('coupon')">
				<i class="icon-3"></i>
				<text>我的优惠券</text>
			</view>
			<view>
				<i class="icon-4"></i>
				<text>红包积分</text>
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
  	height: 230upx;
  	margin: 0 auto;
  	background: #fff;
  	margin-bottom: 22upx;
  }
	.title:after{
		display: block;
		content: "";
		clear: both;
	}
	.title{
		margin-bottom: 32upx;
	}
	.title text{
		float: left;
		margin: 26upx 0 0 26upx;
		font-size: 26upx;
		font-weight: 600;
	}
	.icon-list{
		display: flex;
		height: 116upx;
		justify-content: space-around;
	}
	.icon-list view{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	/* 设置图标 */
	.icon-list view i{
		display: inline-block;
		width: 80upx;
		height: 80upx;
		border-radius: 55%;
	}
	.icon-list .icon-1{
		background: url(~@/static/icon/wallet.jpg) -52upx 0;
		background-size: 712upx auto ;
	}
	.icon-list .icon-2{
		background: url(~@/static/icon/wallet.jpg) -228upx 0;
		background-size: 712upx auto ;
	}
	.icon-list .icon-3{
		background: url(~@/static/icon/wallet.jpg) -404upx 0;
		background-size: 712upx auto ;
	}
	.icon-list .icon-4{
		background: url(~@/static/icon/wallet.jpg) -580upx 0;
		background-size: 712upx auto ;
	}
	.icon-list view text{
		font-size:22upx;
		color: #666;
	}
</style>
