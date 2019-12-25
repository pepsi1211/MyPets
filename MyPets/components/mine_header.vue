<template>
	<view class="out">
		<view class="image-set">
			<image src="../../static/icon/setting.jpg" class="setting" mode="widthFix" style="width:21px;height: 21px;"></image>
		</view>
		
		<view class="person">
			<image class="person-vi b1" style="width:62px;height:62px;"></image>	
			<div class="person-text">
				<text class="text-nickname"> 安静的稻草人 </text>
				<text class="text-say"> 这个人很懒，什么都没留下 </text>
			</div>
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
  .out{
		height:334upx;
		width:100%;
		background: #ffd94e;
		/* position: relative; */
		margin-bottom: 22upx;
	}
	.image-set{
		/* position: relative; */
		
	}
	.image-set::after{
		display: block;
		content:'';
		clear:both;
	}
	.image-set image{
		float: right;
		right:30upx;
		top: 84upx;
	}
	.person{
		margin-left: 30upx;
		margin-top: 84upx;
		
		display: flex;
	}
	.person-vi{
		border-radius: 50%;
		margin-right: 30upx;
	}
	.person-text{
		display:flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		line-height:35upx;
	}
	.text-nickname{
		font-size: 30upx;
		font-weight: 600;
		margin-bottom: 28upx;
	}
	.text-say{
		font-size: 24upx;
	}
</style>
