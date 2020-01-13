<template>
	<view>
		<my-head title="问答"></my-head>
		<tab :titles="['精选','最新','热门','提问','回答']" :num="5" :data="[1,2,3,4,5]" :ind="ind" :pad="50"></tab>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import tab from '../../components/common/tabBar/tab.nvue'
	export default {
		data() {
			return {
				windowHeight: 0,
				ind: 0
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
		},
		onLoad:function(option) {
			this.ind = Number(option.ind);
		},
	}
</script>

<style>
</style>
