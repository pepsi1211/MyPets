<template>
	<view class="container">
		<view class="collect">
			<view @tap="navTo('collect')"><text>0</text>收藏</view>
			<view @tap="navTo('concern')"><text>0</text>关注</view>
			<view @tap="navTo('concern?ind=1')"><text>0</text>粉丝</view>
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
		height: 106upx;
		margin: 0 auto;
		background: #fff;
		margin-bottom: 22upx;
	}
  .collect{
		/* margin-bottom: 22upx; */
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.collect view{
		line-height: 106upx;
		width: 33%;
		text-align: center;
		font-size: 28upx;
		color: #b4b4b4;
		position: relative;
	}
	.collect view + view:before{
		display: block;
		content: "";
		width:4upx;
		height:42upx;
		background: #ebebeb;
		position: absolute;
		top:32upx;
	}
	.collect text{
		margin-right: 14upx;
		color: #000;
	}
</style>
