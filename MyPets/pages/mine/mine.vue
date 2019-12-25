<template>
	<view id="main">
		<my-header></my-header>
		<collect></collect>
		<order></order>
		<wallet></wallet>
		<tool></tool>
	</view>
</template>
<script>
	import myHeader from '../../components/mine_header.vue'
	// 引入收藏部分
	import collect from '../../components/mine_collect.vue'
	// 引入订单组件
	import order from '../../components/mine_order.vue'
	// 引入我的钱包
	import wallet from '../../components/mine_wallet.vue'
	// 引入我的工具
	import tool from '../../components/mine_tool.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			'my-header':myHeader,
			'collect':collect,
			'order': order,
			'wallet': wallet,
			'tool': tool
		}
	}
</script>

<style>
  #main{
		height: 100%;
		background: #f7f7f7;
	}
</style>
