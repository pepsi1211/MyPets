<template>
	<view>
		<my-head title="我的订单"></my-head>
		<tab :titles="['全部','待付款','待发货','待收获','已完成']" :num="5" :ind="ind"></tab>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import tab from '../../components/common/tabBar/tab.vue'
	export default {
		data() {
			return {
				ind: ''
			}
		},
		components: {
			'tab': tab,
			'my-head': head
		},
		methods: {
			
		},
		onLoad: function(option) {
			this.ind = Number(option.ind);
		}
	}
</script>

<style>

</style>
