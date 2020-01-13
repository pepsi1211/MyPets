<template>
	<view>
		<my-head title="宠物健康"></my-head>
		<none></none>
		<view class="add-pets" @click="navTo('add_form')">添加宠物</view>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import none from '../../components/common/none.vue'
	export default{
		data(){
			return{

			}
		},
		methods:{

		},
		components:{
			'my-head': head,
			'none': none
		},
	}
</script>

<style lang="scss">
	.add-pets{
		font-size: 12px;
		color: #fff;
		width: 150upx;
		height: 40upx;
		background-color: #fb6600;
		border-radius: 50upx;
		text-align: center;
		line-height: 40upx;
		margin: 20upx auto;
	}
</style>
