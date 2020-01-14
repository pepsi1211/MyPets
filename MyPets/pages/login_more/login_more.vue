<template>
	<view style="height: 100vh;background: #fff;position: relative;">
		<my-head title="手机验证码登录"></my-head>
		<view class="container">
			<view class="input-group">
				<view class="phone">
					<i></i>
					<input type="text" placeholder="请输入您的手机号" placeholder-style="font-size:25upx;color:#979797;" :class="{focus:currentI===0}"  @focus="handleCurrent(0)">
				</view>
				<view class="yzm">
					<i></i>
					<input type="text" placeholder="请输入短信验证码" placeholder-style="font-size:25upx;color:#979797;" :class="{focus:currentI===1}" @focus="handleCurrent(1)">
					<text>短信验证码</text>
				</view>
				<view class="mdm">
					<i></i>
					<input type="text" placeholder="助理免单码" placeholder-style="font-size:25upx;color:#979797;" :class="{focus:currentI===2}" password="true" @focus="handleCurrent(2)">
					<text>选填</text>
				</view>
			</view>
			<view class="other">
				<text>语言验证码</text>
			</view>
			<button class="login">登录</button>
		</view>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	export default {
		data() {
			return {
				borderStyle1: '#7d7d7d',
				borderStyle2: '#7d7d7d',
				currentI: 0
			}
		},
		components: {
			'my-head': head
		},
		methods: {
			handleCurrent(i) {
				console.log(i);
				this.currentI = i;
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="scss">
	.focus {
		border-color: red !important;
	}
	.container{
		padding-top: 32upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		.logo {
			display: inline-block;
			width: 130upx;
			height:130upx;
			background: url(~@/static/icon/tva_logo.png) no-repeat;
			background-size: 130upx auto;
			margin-bottom: 75upx;
		}
		.input-group {
			margin-bottom: 40upx;
			view.yzm {
				position: relative;
				text {
					position: absolute;
					width: 145upx;
					line-height: 50upx;
					font-size: 23upx;
					background: #ec601e;
					text-align: center;
					border-radius: 36upx;
					color: #fff;
					right: 0;
					top: 40upx
				}
			}
			view.mdm {
				position: relative;
				text {
					position: absolute;
					right: 0;
					top: 40upx;
					font-size: 26upx;
					color: #9c9c9c;
				}
			}
			.phone i{
				background: url(~@/static/icon/phone.png) no-repeat;
				background-size: 28upx;
			}
			.yzm i{
				background: url(~@/static/icon/Vcode.png) no-repeat;
				background-size: 28upx;
			}
			.mdm i{
				background: url(~@/static/icon/free.png) no-repeat;
				background-size: 28upx;
			}
			i{
				display: inline-block;
				width: 28upx;
				height: 32upx;
				position: relative;
				top: 40upx;
			}
			input {
				box-sizing: border-box;
				width: 594upx;
				height: 54upx;
				border-bottom: 2upx solid #7d7d7d;
				padding: 0 0 25upx 50upx;
				caret-color: red;
				}
			}
			.other {
				width: 592upx;
				font-size: 24upx;
				color: #3f96fb;
				margin-bottom: 38upx;
				text-align: right;
			}
			.login {
				width: 530upx;
				height: 85upx;
				background: #cfd2d2;
				text-align: center;
				color: #fff;
				font-size: 30upx;
				margin-bottom: 30upx;
				border-radius: 6upx;
			}
			.test {
				font-size: 25upx;
			}
		}
	
</style>
