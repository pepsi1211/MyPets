<template>
	<view class="container">
		<!-- 文字部分 -->
		<view class="title">
			<text>我的工具</text>
		</view>
		<!-- 图标列表 -->
		<view class="icon-lists">
			<!-- 列表二 -->
			<view class="icon-list-1">
				<view>
					<i class="icon-1"></i>
					<text>健康</text>
				</view>
				<view>
					<i class="icon-2"></i>
					<text>我的拼团</text>
				</view>
				<view>
					<i class="icon-3"></i>
					<text>它秀</text>
				</view>
				<view>
					<i class="icon-4"></i>
					<text>知识库</text>
				</view>
			</view>
			<!-- 列表一 -->
			<view class="icon-list-2">
				<view>
					<i class="icon-5"></i>
					<text>宠友帮</text>
				</view>
				<view>
					<i class="icon-6"></i>
					<text>我的宠物</text>
				</view>
				<view>
					<i class="icon-7"></i>
					<text>宠物宝典</text>
				</view>
				<view>
					<i class="icon-8"></i>
					<text>收货地址</text>
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
	  	height: 325upx;
	  	margin: 0 auto;
	  	background: #fff;
	  	margin-bottom: 22upx;
	  }
		.title:after{
			content:"";
			display: block;
			clear: both;
		}
		.title{
			margin-bottom:33upx;
		}
		.title text{
			font-size: 26upx;
			font-weight: 600;
			margin: 26upx 0 0 26upx;
		}
		.icon-lists{
			height:216upx;
			width: 648upx;
			margin: 0 auto;	
			display: flex;
			flex-direction: column;	
			justify-content: space-between;
		}
		.icon-lists .icon-list-1,.icon-lists .icon-list-2{
			display: flex;
			height: 85upx;
			justify-content: space-between;
		}
		.icon-lists .icon-list-1 view,.icon-lists .icon-list-2 view{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			width: 88upx;
		}
		.icon-lists .icon-list-1 text,.icon-lists .icon-list-2 text{
			font-size: 22upx;
			color: #666;
		}
		.icon-lists .icon-list-1 i,.icon-lists .icon-list-2 i{
			display: inline-block;
			width: 48upx;
			height:48upx;
		}
		.icon-lists .icon-1{
			background: url(~@/static/icon/tool_two.jpg) -68upx 0;
			background-size: 725upx auto;
		}
		.icon-lists .icon-2{
			background: url(~@/static/icon/tool_two.jpg) -250upx 0;
			background-size: 725upx auto;
		}
		.icon-lists .icon-3{
			background: url(~@/static/icon/tool_two.jpg) -428upx 0;
			background-size: 725upx auto;
		}
		.icon-lists .icon-4{
			background: url(~@/static/icon/tool_two.jpg) -612upx 0;
			background-size: 725upx auto;
		}
		.icon-lists .icon-5{
			background: url(~@/static/icon/tool_one.jpg) -68upx 0;
			background-size: 725upx auto;
		}
		.icon-lists .icon-6{
			background: url(~@/static/icon/tool_one.jpg) -250upx 0;
			background-size: 725upx auto;
		}
		.icon-lists .icon-7{
			background: url(~@/static/icon/tool_one.jpg) -428upx 0;
			background-size: 725upx auto;
		}
		.icon-lists .icon-8{
			background: url(~@/static/icon/tool_one.jpg) -612upx 0;
			background-size: 725upx auto;
		}
</style>
