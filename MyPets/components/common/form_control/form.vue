<template>
	<view>
		<form-slot>
			<!-- <view class="content"> -->
				<text class="name">{{ name}}</text>
				<view class="right">
					<!-- 选择头像 -->
					<view v-if="type=='via'" class="via b1" @click="chooseImg"></view>
					<!-- 输入文字 -->
 					<input v-if="type=='input'" @focus="focus" type="text" class="uni-input" :placeholder="placeholder" :style="{'width':inpWidth + 'px'}">
					<!-- 富文本 -->
					<!-- 选择日期/性别 -->
					<my-arrow></my-arrow>
				</view>
		</form-slot>
	</view>


</template>

<script>
	import formSlot from './form_slot.vue'
	import myArrow from '../arrow.vue'
	export default {
		data() {
			return {
				inpWidth: 76
			}
		},
		props: {
			name: {
				type: String
			},
			placeholder: {
				type: String
			},
			isShowArrow: {
				type: Boolean,
				default: true
			},
			type: {
				type: String,
				default: 'input'
			}
		},
		methods: {
			focus(e) {
				// uni.chooseImage({
				// 	sourceType: ['album','camera'], //从相册选择、摄像头
				// })
			},
			chooseImg() {
				uni.chooseImage({
					sourceType: ['album', 'camera'],
				})
			}
		},
		components: {
			'form-slot': formSlot,
			'my-arrow': myArrow
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		
	}
	.uni-input {
	
	}
	/* 头像 */
	.via {
		display: inline-block;
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		margin-right: 20upx;
	}

	.name {
		font-size: 30upx;
	}

	.right {
		display: flex;
		align-items: center;
	}
</style>
