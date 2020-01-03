<template>
	<view class="container" :style="{'height':windowHeight + 'px'}">
		<my-head title="我的社交"></my-head>
		<tab :titles="['关注','粉丝']" :num="2" :data="[1,2]"></tab>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import tab from '../../components/common/tabBar/tab.vue'
	export default {
		data() {
			return {
				windowHeight: 0
			}
		},
		components: {
			tab,
			'my-head': head
		},
		methods: {
			
		},
		mounted() {
			this.getWinH();
			// var _this = this;
			// uni.getStorage({
			// 	key: 'windowHeight',
			// 	success: function(res) {
			// 		_this.windowHeight = res.data;
			// 	}
			// })
		}
	}
</script>

<style scoped>
	.container{
		background: #ecf0f0;
		height: 100%;
	}
</style>
