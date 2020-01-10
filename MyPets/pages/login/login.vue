<template>
	<view>
		<my-head></my-head>
		<view class="container">
			<i class="logo"></i>
			<view class="input-group">
				<view class="phone">
					<i></i>
					<input type="text" placeholder="请输入您的手机号" placeholder-style="font-size:25upx">
				</view>
				<i></i>
				<view class="pwd">
					<input type="text" placeholder="请输入登录密码" placeholder-style="font-size:25upx" password="true">
				</view>
			</view>
			<view>
				<text>忘记密码?</text>
				<text>注册用户</text>
			</view>
			<button>登录</button>
			<text>手机验证登录</text>
			<!-- 最下面登录方式 -->
			<view>
				<text>更多登录方式</text>
				<view></view>
			</view>
		</view>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			'my-head': head
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.container{
		padding-top: 32upx;
		background: #fff;
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
			.phone i{
				background: url(~@/static/icon/phone.png) no-repeat;
				background-size: 28upx;
			}
			.pwd i{
				background: url(~@/static/icon/phone.png) no-repeat;
				background-size: 28upx;
			}
			i{
				display: inline-block;
				width: 28upx;
				height: 32upx;
			}
			input {
				width: 594upx;
				height: 54upx;
				border-bottom: 2upx solid #7d7d7d;
				}
			}
		}
	
</style>
