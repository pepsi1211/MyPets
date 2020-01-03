<template>
	<view class="container" :style="{'height':height + 'px'}">
		<my-head title="我的收藏"></my-head>
		<tab :titles="['商品','它秀','话题','问答']" :data="[[1],2,3,[1]]" :num="4" ></tab>
	</view>
</template>
<script>
	import head from '../../components/common/head/head.vue'
	import tab from '../../components/common/tabBar/tab.vue'
	export default {
		data() {
			return {
				height: 1
			}
		},
		methods: {
			
		},
		components: {
			'my-head': head,
			'tab': tab,
		},
		mounted() {
			this.getWinH();
		}
	}
</script>

<style>
	.container{
		background: #fafafa;
	}
	
</style>
