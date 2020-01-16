<template>
	<view :class="title == 'knowledge' ? 'head-knowledge':'head-store'">
		<view class="head-left">
			<view class="knowledge" v-if="title == 'knowledge' ">
				<i class="back" @tap="backTo()"></i>
				<view class="animal" @tap="changeAnimal()">
					<text v-show="select == 1">狗狗</text>
					<text v-show="select == 2">猫猫</text>
				</view>
			</view>
			<view class="store" v-else @tap="changeAnimal()">
				<i class="avatar" :class="select == 1 ? 'dog':'cat' "></i>
				<view class="animal">
					<text v-show="select == 1">狗狗</text>
					<text v-show="select == 2">猫猫</text>
				</view>
			</view>
		</view>
		<view class="head-right" :class="title == 'knowledge' ? '' : 'mt' ">
			<i class="arrow-bottom" :class=" title == 'knowledge'? 'black':'white' "></i>
			<view class="input">
				<i class="search"></i>
				搜索关键字
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select: 1, // 1:狗   2:猫
			}
		},
		methods: {
			backTo: function() {
				// 返回上一层
				uni.navigateBack({
					delta: 1
				})
			},
			changeAnimal: function() {
				this.select = this.select == 1 ? 2 : 1
			}
		},
		props: {
			title: {
				type: String
			},
		},
		components: {

		}
	}
</script>

<style lang="scss">
	.head-knowledge {
		background-color: #fff;
		display: flex;
		flex-direction: row;
	}

	.head-store {
		background-color: transparent;
		display: flex;
		flex-direction: row;
	}

	// 左部分
	.head-left {
		.knowledge {
			display: flex;
			flex-direction: row;

			.back {
				display: inline-block;
				width: 21upx;
				height: 36upx;
				margin: 60upx 0 8upx 40upx;
				background: url(../../../static/icon/back.png) no-repeat;
				background-size: contain;
			}

			.animal {
				margin: 56upx 0 8upx 34upx;
				font-size: 14px;
				color: #000;
			}
		}

		.store {
			display: flex;
			flex-direction: row;

			.avatar {
				display: inline-block;
				width: 64upx;
				height: 64upx;
				margin: 60upx 0 8upx 20upx;
			}

			.avatar.dog {
				background: url(../../../static/icon/mall_statusbar_avatar_dog_default.png) no-repeat;
				background-size: 100%;
			}

			.avatar.cat {
				background: url(../../../static/icon/mall_statusbar_avatar_cat_default.png) no-repeat;
				background-size: 100%;
			}

			.animal {
				margin: 70upx 0 8upx 20upx;
				font-size: 14px;
				color: #fff;
			}
		}
	}

	// 右部分
	.head-right.mt {
		margin-top: 15upx;
	}

	.head-right {
		display: flex;
		flex-direction: row;

		.arrow-bottom {
			display: inline-block;
			width: 26upx;
			height: 20upx;
			margin: 65upx 0 8upx 34upx;
		}

		.arrow-bottom.black {
			background: url(../../../static/icon/mall_arrow_default_icon.png) no-repeat;
			background-size: 100%;
		}

		.arrow-bottom.white {
			background: url(../../../static/icon/mall_navigationbar_arrow_default_icon.png) no-repeat;
			background-size: 100%;
		}

		.input {
			width: 486upx;
			height: 36upx;
			background-color: #f3f3f3;
			font-size: 12px;
			color: #c3c3c3;
			// text-align: center;
			text-indent: 8upx;
			line-height: 36upx;
			padding: 8upx;
			margin: 50upx 0 8upx 16upx;
			border-radius: 50upx;

			.search {
				display: inline-block;
				width: 18upx;
				height: 20upx;
				margin-right: 10upx;
				background: url(../../../static/icon/menu_search.png) no-repeat;
				background-size: contain;
			}
		}
	}
</style>
