<template>
	<view style="height: 100vh;background: #fff;position: relative;">
		<my-head></my-head>
		<view class="container">
			<i class="logo"></i>
			<view class="input-group">
				<view class="phone">
					<i></i>
					<input type="text" placeholder="请输入您的手机号" placeholder-style="font-size:12px;color:#979797;" :style="{'border-bottom-color':borderStyle1}" @focus="borderStyle1='#ec672b'" @blur="borderStyle1='#7d7d7d'">
				</view>
				<view class="pwd">
						<i></i>
						<input type="text" placeholder="请输入登录密码" placeholder-style="font-size:12px;color:#979797;" password="true" :style="{'border-bottom-color':borderStyle2}" @focus="borderStyle2='#ec672b'" @blur="borderStyle2='#7d7d7d'">
				</view>
			</view>
			<view class="other">
				<text>忘记密码?</text>
				<text>注册用户</text>
			</view>
			<button class="login">登录</button>
			<text class="test" @click="navTo('login_more')">手机验证登录</text>
			<!-- 最下面登录方式 -->
			<view class="more">
				<text>更多登录方式</text>
				<view class="more-login">
					<i @click="loginMore('qq')"></i>
					<i></i>
					<i></i>
				</view>
			</view>
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
				windowHeight: 0
			}
		},
		components: {
			'my-head': head
		},
		methods: {
			loginMore(pro) {
				uni.login({
					 provider: 'weixin',
					  success: function (loginRes) {
					    console.log(loginRes.authResult);
					  }
				})
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="scss">
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
			.phone i{
				background: url(~@/static/icon/phone.png) no-repeat;
				background-size: 28upx;
			}
			.pwd i{
				background: url(~@/static/icon/pwd.png) no-repeat;
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
				font-size: 25upx;
				}
				input::-webkit-input-placeholder {
				     /* placeholder颜色  */
				        color: #0d4123;
				    }
			}
			.other {
				display: flex;
				justify-content: space-between;
				width: 510upx;
				font-size: 24upx;
				color: #b7b7b7;
				margin-bottom: 38upx;
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
			.more {
				position: absolute;
				bottom: 107upx;
				margin: 0 auto;
				text-align: center;
				text {
					display: inline-block;
					width: 206upx;
					line-height: 45upx;
					background: #eeeeee;
					font-size: 22upx;
					text-align: center;
					border-radius: 36upx;
					margin-bottom: 34upx;
				}
				.more-login {
					width: 446upx;
					display: flex;
					justify-content: space-between;
					i{
						display: inline-block;
						width: 74upx;
						height: 74upx;
						&:first-child {
							background: url(~@/static/icon/weixin.png) no-repeat;
							background-size: 74upx auto;
						}
						&:nth-child(2) {
							background: url(~@/static/icon/qq.png) no-repeat;
							background-size: 74upx auto;
						}
						&:nth-child(3) {
							background: url(~@/static/icon/pay.png) no-repeat;
							background-size: 74upx auto;
						}
					}
				}
			}
		}
	
</style>
