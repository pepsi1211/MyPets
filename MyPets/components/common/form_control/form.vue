<template>
	<view>
		<form-slot>
			<!-- <view class="content"> -->
				<text class="name">{{ name}}</text>
				<view class="right">
					<input type="text" class="uni-input" :placeholder="placeholder" cursor="8">
					<my-arrow></my-arrow>
				</view>
		</form-slot>
		
	</view>
	
	
</template>

<script>
	import formSlot from './form_slot.vue'
	import myArrow from '../arrow.vue'
	export default{
		props:{
			name:{
				type: String
			},
			placeholder:{
				type: String
			},
			isShowArrow:{
				type: Boolean,
				default: true
			}
		},
		components:{
			'form-slot': formSlot,
			'my-arrow': myArrow
		}
	}
</script>

<style>
	.content{
		display: flex;
		justify-content: space-between;
		padding: 26upx 22upx;
		margin-bottom: 2upx;
	}
	.uni-input{
		display: inline-block;
		width: 260upx;
		margin-right: 21upx;
	}
	.uni-input .uni-input-placeholder{
		text-align: right;
	}
	.name{
		font-size: 30upx;
	}
</style>
