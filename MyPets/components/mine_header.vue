<template>
	<view class="out">
		<view class="image-set" @click="navTo('setting')">
			<image src="../../static/icon/setting.jpg" class="setting" mode="widthFix" style="width:42upx;height: 42upx;"></image>
		</view>
		<view class="person" @click="navTo('aboutMe')">
			<image class="person-vi b1" style="width:62px;height:62px;"></image>	
			<view class="person-text">
				<text class="text-nickname"> 安静的稻草人 </text>
				<text class="text-say"> 这个人很懒，什么都没留下 </text>
			</view>
		</view>
		<!-- 会员背景图 -->
		<view class="member">
			<i class="bg-member"></i>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
  .out{
		/* height:334upx; */
		width:100%;
		background: #ffd94e;
		/* position: relative; */
		margin-bottom: 22upx;
		
	}
	.image-set{
		text-align: right;
		
	}
	.image-set::after{
		display: block;
		content:'';
		clear:both;
	}
	.image-set image{
		position: relative;
		right: 0;
		margin-top: 60upx;
		margin-right: 22upx;
	}
	.person{
		margin-left: 30upx;
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
	.member {
		height: 84upx;
		width: 100%;
		margin-top: 57upx;
		text-align: center;
	}
	.member .bg-member {
		display: inline-block;
		width: 622upx;
		height: 84upx;
		background: url(~@/static/icon/bg_memmber.png) no-repeat;
		background-size: 622upx;
	
	}
</style>
