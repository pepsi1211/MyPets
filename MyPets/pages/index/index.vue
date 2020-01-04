<template>
	<view style="position: relative;" @scroll="onPageScroll(e)">
		<!-- 主页特殊头部 -->
		<view :class="header ? 'header0':'header1'">
			<view class="left">
				<i class="img"></i>
				<text class="text">签到</text>
			</view>
			<view class="right">
				<i class="message"></i>
			</view>
		</view>
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
		<!-- 铲屎官热议部分 -->
		<view class="talk">
			<view class="top">
				<text class="title">铲屎官热议</text>
				<text class="more">更多</text>
			</view>
			<view class="talk-down">
				<block v-for="(key,index) of talk_list" :key="index">
					<view class="talk-topic">
						<view class="talk-ask">
							<i class="img ask"></i>
							<text>{{key.title}}</text>
						</view>
						<view class="talk-reply">
							<i class="img reply"></i>
							<text>{{key.reply}}</text>
						</view>
						<view class="talk-more">
							<text>查看全部{{key.count}}回答</text>
							<i class="next"></i>
						</view>
					</view>
				</block>
			</view>
		</view>
		<!-- 它嗅故事部分 -->
		<view class="story">
			<view class="top">
				<text class="title">它嗅故事</text>
				<text class="more">更多</text>
			</view>
			<view class="story-down">
				<block v-for="key in 4" :key="key">
					<view class="story-article">
						<image class="story-img" src="../../static/icon/story_img.png"></image>
						<view class="story-content">
							<text class="title">搭建用户桥梁, 倾听宠物心声</text>
							<text class="content">家中从小养过几条小狗,至今还记得陪伴我时间最久的那只名叫灰灰,大概是因为他太可爱了</text>
						</view>
					</view>
				</block>
			</view>
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
						title: "狗狗为什么爱吃屎?",
						watched: 66,
						like: 0
					},
					{
						title: "狗狗可以吃葡萄吗?",
						watched: 79,
						like: 0
					},
				],
				talk_list: [{
						title: "被猫抓了 渗出一点点血 不用打狂犬疫苗吧",
						reply: "家养猫没有经常出去的话,保守一点可以用十日观察法,一般猫狗患狂犬病,十日内基本挂了",
						count: 1
					},
					{
						title: "被猫抓了 渗出一点点血 不用打狂犬疫苗吧",
						reply: "家养猫没有经常出去的话,保守一点可以用十日观察法,一般猫狗患狂犬病,十日内基本挂了",
						count: 2
					},
					{
						title: "被猫抓了 渗出一点点血 不用打狂犬疫苗吧",
						reply: "家养猫没有经常出去的话,保守一点可以用十日观察法,一般猫狗患狂犬病,十日内基本挂了",
						count: 1
					},
				],
				header: true,
			}
		},
		onLoad() {

		},
		methods: {
			onPageScroll: function(e) {
				var tar = e.scrollTop;
				this.header = tar <= 0 ? true : false;
				// console.log(this.header);
			}
		},
		computed: {

		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	// 头部
	.header0 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 70upx;
		background-color: transparent;
		display: flex;
		justify-content: space-between;
		z-index: 80;
	}

	.header1 {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 70upx;
		background-color: #c11e1d;
		display: flex;
		justify-content: space-between;
		z-index: 80;
	}

	.header0,
	.header1 {
		.left {
			background: #fafafa;
			width: 18%;
			height: 60upx;
			border-top-right-radius: 50upx;
			border-bottom-right-radius: 50upx;

			.img {
				display: inline-block;
				width: 32upx;
				height: 36upx;
				background: url(../../static/icon/sign_in.png) no-repeat;
				background-size: 100%;
				margin: 16upx 0 0 20upx;
			}

			.text {
				display: inline-block;
				font-size: 12px;
				color: #ff7f50;
				vertical-align: top;
				margin: 16upx 0 0 8upx;
			}
		}

		.right {
			.message {
				display: inline-block;
				width: 38upx;
				height: 42upx;
				background: url(../../static/icon/nav_icon_message_default.png) no-repeat;
				background-size: 100%;
				margin: 16upx 20upx 0 0;
			}
		}
	}

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
	.knowledge,
	.talk,
	.story {
		background: #fff;
		width: 100%;
		margin-bottom: 20upx;

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
				vertical-align: top;

				&:after {
					content: "";
					display: inline-block;
					width: 20upx;
					height: 20upx;
					margin-left: 4upx;
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

				.topic {
					font-size: 37.5upx;
					display: inline-block;
					margin: 16upx;
				}

				.watched {
					font-size: 12px;
					text-align: right;

					text {
						margin: 0 16upx;
					}
				}
			}
		}
	}

	// 铲屎官热议部分
	.talk {
		.talk-down {
			width: 100%;
			margin-top: 20upx;
			display: flex;
			flex-direction: column;

			// border-bottom: 1px solid #f4f4f4;
			.talk-topic {
				display: flex;
				flex-direction: column;
				border-bottom: 1px solid #f4f4f4;

				.talk-ask {
					margin: 10upx 20upx;
					font-size: 16px;
					height: 42upx;
					padding: 16upx;

					text {
						vertical-align: top;
					}
				}

				.talk-reply {
					margin: 0 20upx 20upx 20upx;
					font-size: 12px;
					color: #888;
					background-color: #e8e8e8;
					border-radius: 16upx;
					padding: 16upx;

					text {
						vertical-align: top;
					}
				}

				.talk-ask,
				.talk-reply {
					.img {
						display: inline-block;
						width: 42upx;
						height: 42upx;
						margin-right: 10upx;
					}

					.img.ask {
						background: url(../../static/icon/wen.png) no-repeat;
						background-size: 100%;
					}

					.img.reply {
						background: url(../../static/icon/da.png) no-repeat;
						background-size: 100%;
					}
				}

				.talk-more {
					margin: 25upx auto;
					font-size: 12px;
					color: #819cff;

					text {
						vertical-align: top;
					}

					.next {
						display: inline-block;
						width: 20upx;
						height: 20upx;
						background: url(../../static/icon/home_hot_icon_more_default.png) no-repeat;
						background-size: contain;
						margin-left: 8upx;
					}
				}
			}
		}
	}

	// 它嗅故事部分
	.story {
		width: 100%;

		.story-down {
			.story-article {
				display: flex;
				flex-direction: row;
				width: 90%;
				margin: 20upx auto;
				padding: 20upx 0upx;
				border-bottom: 1px solid #f4f4f4;

				.story-img {
					width: 225upx;
					height: 150upx;
					margin-right: 20upx;
				}

				.story-content {
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.title {
						font-size: 16px;
					}

					.content {
						font-size: 12px;
						color: #888;
						text-indent: 25upx;
						overflow: hidden;
						white-space: wrap;
					}
				}
			}
		}
	}
</style>
