<template>
	<view class="container">
		<my-head title="我的优惠券" hint="积分兑换"></my-head>
		<!-- 如果没有数据 start -->
		<view class="null">
			<i></i>
			<text>暂无优惠券可用</text>
		</view>
		<!-- 如果没有数据 end -->
	</view>
</template>

<script>
	import myHead from '../../components/common/head/head'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			'my-head': myHead
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.container {
		height: 100vh;
		background: #ecf0f0;
		.null {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 332upx;
			position: relative;
			top: 480upx;
			i {
				display: inline-block;
				width: 288upx;
				height: 244upx;
				background: url(~@/static/icon/coupon_bg.png) no-repeat;
				background-size: 288upx auto;
			}
			text {
				font-size: 25upx;
				color: #9c9c9c;
			}
		}
	}
</style>
