<template>
	<view style="position: relative;">
		<!-- 轮播图部分 -->
		<view class="swiper100">
			<swiper autoplay="true">
				<swiper-item>
					<image class="swiper" src="../../static/swiper/banner_default.png"></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper" src="../../static/swiper/banner_smallretail_home.png"></image>
				</swiper-item>
			</swiper>
			<!-- 导航栏部分 -->
			<view class="nav">
				<view class="nav-content">
					<i class="nav-icon topic"></i>
					<text>知识库</text>
				</view>
				<view class="nav-content">
					<i class="nav-icon talk"></i>
					<text>宠友帮</text>
				</view>
				<view class="nav-content">
					<i class="nav-icon home"></i>
					<text>它秀</text>
				</view>
				<view class="nav-content">
					<i class="nav-icon health"></i>
					<text>健康</text>
				</view>
			</view>
		</view>
		<!-- 添加爱宠部分 -->
		<view class="add">
			<i class="add-img"></i>
			<!-- <image src="../../static/icon/home_add_bg_img.png"></image> -->
		</view>
		<!-- 养宠知识 -->
		<view class="knowledge">
			<view class="top">
				<text class="title">养宠知识</text>
				<text class="more">更多</text>
			</view>
			<scroll-view class="bottom" scroll-x="true">
				<block v-for="(key,index) of knowledge_list" :key="index">
					<view class="knowledge-bg">
						<text class="topic">{{key.title}}</text>
						<view class="watched">
							<text>{{key.watched}}浏览</text>
							<text>{{key.like}}有用</text>
						</view>
					</view>
				</block>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				knowledge_list: [{
						title: "狗狗打架怎么阻止?",
						watched: 52,
						like: 0
					},
					{
						title: "狗狗打架怎么阻止?",
						watched: 52,
						like: 0
					},
					{
						title: "狗狗打架怎么阻止?",
						watched: 52,
						like: 0
					},
				],
			}
		},
		onLoad() {

		},
		methods: {

		},
		computed: {

		}
	}
</script>

<style lang="scss">
	// 轮播部分
	.swiper100 {
		width: 100%;
		height: 300upx;

		.swiper {
			width: 100%;
			height: 100%;
			border-bottom-right-radius: 60upx;
			border-bottom-left-radius: 60upx;
		}
	}

	// 导航栏部分
	.nav {
		z-index: 1;
		width: 90%;
		height: 160upx;
		display: flex;
		justify-content: space-between;
		padding: 16upx 24upx;
		background: #fff;
		border-radius: 32upx;
		position: absolute;
		top: 240upx;
		left: 1.75%;
		box-shadow: 0px 1px 1px #ddd;

		.nav-content {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			font-size: 12upx;
			text-align: center;
			cursor: pointer;

			.nav-icon {
				width: 120upx;
				height: 120upx;
				margin-bottom: 8upx;
			}

			.nav-icon.topic {
				background: url(../../static/icon/topic.png) no-repeat;
				background-size: 100%;
			}

			.nav-icon.talk {
				background: url(../../static/icon/talk.png) no-repeat;
				background-size: 100%;
			}

			.nav-icon.home {
				background: url(../../static/icon/taxiu_home.png) no-repeat;
				background-size: 100%;
			}

			.nav-icon.health {
				background: url(../../static/icon/home_health.png) no-repeat;
				background-size: 100%;
			}
		}
	}

	// 添加爱宠部分
	.add {
		margin-top: 150upx;
		width: 100%;
		height: 174.6upx;

		.add-img {
			display: block;
			margin: 0 auto;
			width: 80%;
			height: 174.6upx;
			background: url(../../static/icon/home_add_bg_img.png) no-repeat;
			background-size: 100%;
		}
	}

	// 养宠知识部分
	.knowledge {
		background: #fff;
		width: 100%;

		.top {
			border-bottom: 1px solid #f4f4f4;
			display: flex;
			justify-content: space-between;
			padding: 32upx;

			.title {
				font-size: 37.5upx;
				font-weight: 600;
			}

			.more {
				font-size: 12px;
				color: #c6c6c6;

				&:after {
					content: "";
					display: inline-block;
					width: 24upx;
					height: 24upx;
					margin: 4upx 0 0 4upx;
					background: url(../../static/icon/arrow_right.png) no-repeat;
					background-size: contain;
				}
			}
		}

		.bottom { 
			height: 330upx;
			white-space: nowrap;
			// line-height: 330upx;
			.knowledge-bg {
				display: inline-block;
				width: 650upx;
				height: 268upx;
				margin: 35upx 0 0 10upx;
				background: url(../../static/icon/hot_topic_img.png) no-repeat;
				background-size: 100%;
				color: #fff;
				.topic{
					font-size: 37.5upx;
					display: inline-block;
					margin: 16upx;
				}
				.watched{
					font-size: 12px;
					text-align: right;
					text{
						margin: 0 16upx;
					}
				}
			}
		}
	}
</style>
