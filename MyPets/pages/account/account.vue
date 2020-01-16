<template>
	<view>
		<my-head title="我的余额"></my-head>
		<!-- 余额部分 -->
		<view class="body">
			<i class="vip_bg"></i>
			<text class="text">账户余额</text>
			<text class="money"><i>￥&nbsp;</i>0.0</text>
			<!-- 定宽的区域 -->
			<view class="btn_group">
				<view class="group1">
					<button>我的会员卡</button>
					<button>我要体现</button>
				</view>
				<view class="group2">
					<button>余额账单</button>
					<button>我的银行卡</button>
				</view>
			</view>
		</view>
		<!-- 余额说明 -->
		<view class="fText">
			<!-- 标题 -->
			<text class="title"><i></i>余额说明</text>
			<p><b>1、来源：</b>来自于订单的退款;</p>
			<p><b>2、使用：</b>可以体现到银行卡;</p>
			<p><b>3、规则：</b>每个用户每月可提现3次，每次最多体现1000元;</p>
			<p><b>注：体现申请提交之后，需后台审核，审核通过后，会在3~5个余工作日到账</b></p>
		</view>
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
  .body {
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 30upx;
		.vip_bg {
			display: inline-block;
			width: 615upx;
			height: 338upx;
			background: url(~@/static/icon/vip_card_bg.png) no-repeat;
			background-size: 615upx;
			position: relative;
		}
		.text {
			position: absolute;
			top: 202upx;
			font-size: 25upx;
		}
		.money {
			position: absolute;
			top: 0;
			font-size: 48upx;
			top: 268upx;
			color: #573b0c;
			font-weight: 700;
			i {
				font-size: 34upx;
				font-style: normal;
				
			}
		}
		.btn_group {
			width: 526upx;
			transform: translateY(-48upx);
			button {
				margin: 0;
				color: #fff;
				font-size: 34upx;
				
			}
			.group1 {
				display: flex;
				justify-content: space-between;
				margin-bottom: 55upx;
				button {
					width: 250upx;
					border-radius: 36upx;
				}
				button:first-child {
					background: #736b65;
				}
				button:nth-child(2) {
					background: #ffcb14;
				}
			}
			.group2 {
				display: flex;
				justify-content: space-around;
				button {
					color: #000;
					width: 198upx;
					line-height: 48upx;
					font-size: 24upx;
					border: 1px solid #cbcccd;
					border-radius: 36upx;
				}
			}
		}
	}
	.fText {
		height: 668upx;
		background: #fff;
		padding: 0 58upx 0  22upx;
		.title {
			font-size: 27upx;
			display: flex;
			align-items: center;
			line-height: 40upx;
			
			i {
				display: inline-block;
				width: 35upx;
				height: 35upx;
				background: url(~@/static/icon/plaint.png) no-repeat;
				background-size: 35upx auto;
				padding-right: 18upx;
				vertical-align: middle;
			}
		}
		p {
			font-size: 25upx;
			margin-bottom: 30upx;
		}
	}
</style>
