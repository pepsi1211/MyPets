<template>
	<view class="main">
		<!-- 头部 -->
		<my-head title="添加宠物" hint="保存"></my-head>
		<!-- 头像部分 -->
		<view class="form-avatar">
			<view class="avatar">
				<image src="../../static/icon/avatar_default.png" class="img"></image>
				<i class="avatar-bg"></i>
				<text class="avatar-text">上传头像</text>
			</view>
		</view>
		<!-- 表单部分 -->
		<view class="form">
			<!-- 生日 -->
			<view class="form-list">
				<view class="form-cell">
					<view class="cell-left">生日</view>
					<view class="cell-rigth">
						<picker mode="date" :value="date" @change="bindDateChange" style="width: 130upx;height: 50upx;">
							<view>{{date}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import myForm from '../../components/common/form_control/form.vue'
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date: currentDate,
			}
		},
		methods: {
			bindDateChange: function(e){
				this.date = e.target.value
			}
		},
		components: {
			'my-head': head,
			'my-form': myForm
		},
		computed: {

		}
	}
</script>

<style lang="scss">
	// 头像部分
	.form-avatar {
		width: 100%;
		height: 260upx;
		background: #fff;
		display: flex;
		justify-content: center;
		margin-bottom: 20upx;

		.avatar {
			display: flex;
			flex-direction: column;
			position: relative;

			.img {
				width: 150upx;
				height: 130upx;
			}

			.avatar-bg {
				display: inline-block;
				width: 30upx;
				height: 30upx;
				position: absolute;
				top: 40%;
				left: 65%;
				background: url(../../static/icon/camera.png) no-repeat;
				background-size: 100%;
			}

			.avatar-text {
				display: inline-block;
				margin: 30upx auto;
				font-size: 12px;
				color: #666;
			}
		}
	}

	// 表单部分
	.form {
		width: 100%;
		margin-bottom: 20upx;

		.form-list {
			background-color: #fff;

			.form-cell {
				padding: 20upx;
				display: flex;
				justify-content: space-between;

				.cell-left {
					font-size: 14px;
				}

				.cell-right {
					width: 30%;
					height: 50upx;
				}
			}
		}
	}
</style>
