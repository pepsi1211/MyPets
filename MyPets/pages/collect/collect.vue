<template>
	<view>
		<my-head title="我的收藏"></my-head>
		<tab></tab>
		<view class="null">
			<none></none>
			<text>未找到任何数据</text>
		</view>
		
	</view>
</template>
<script>
	import head from '../../components/common/head/head.vue'
	import tab from '../../components/common/tabBar/tab.vue'
	// 引入无内容时的组件
	import none from '../../components/common/none.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			'my-head': head,
			'tab': tab,
			'none': none
		}
	}
</script>

<style>
	.null{
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		margin-top: 496upx;
	}
	.null text{
		font-size: 32upx;
		color: #9c9c9c;
	}
</style>
