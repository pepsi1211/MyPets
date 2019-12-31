<template>
	<view class="content">
		<text class="left"><slot></slot></text>
		<view class="right">
			<i class="lock" v-if="type=='pwd'"></i>
			<i v-if="type=='call'" class="call"></i>
			<my-arrow v-if="arrow==true"></my-arrow>
			<text v-if="storage" class="text">{{ storage + 'MB' }}</text>
		</view>
	</view>
</template>

<script>
	import arrow from '../arrow.vue'
	export default {
		components: {
			'my-arrow': arrow
		},
		props: {
			type: {
				type: String,
				default: ''
			},
			arrow: {
				type: Boolean,
				default: true
			},
			storage: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style>
	.content{
		display: flex;
		background: #fff;
		padding: 40upx 26upx;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2upx;
	}
	.content .left{
		font-size: 28upx;
		font-weight: 600;
	}
	.right{
		display: flex;
		align-items: center;
	}
	.right i{
		display: inline-block;
		margin-right: 20upx;
	}
	.right .lock{
		width: 27upx;
		height: 27upx;
		border-radius: 50%;
		background: #4CD964;
		
	}
	.right .call{
		width: 75upx;
		height: 76upx;
		border-radius: 50%;
		background:#007AFF;
	}
	.right text{
		color: #d4d4d4;
		font-size: 25upx;
	}
</style>
