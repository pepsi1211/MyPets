<template>
	<view class="add">
		<my-head title="我的爱宠" hint="添加爱宠"></my-head>
		<view class="add-pets">
			<text class="add-btn" @click="navTo('add_form')">去添加</text>
		</view>
		<none></none>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import none from '../../components/common/none.vue'
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		components: {
			'my-head': head,
			'none': none
		},
	}
</script>

<style lang="scss" scoped>
	 /deep/ .head{
		background-image: linear-gradient(to right,#fe8800,#fb6600);
		color: #fff;
	}
	
	/deep/ .arrows{
		background: url(../../static/icon/im_commander_back_black.png) no-repeat;
		background-size: contain;
	}
	
	/deep/ .null{
		margin-top: 339upx;
	}
	
	.add-pets{
		width: 100%;
		height: 220upx;
		background-image: linear-gradient(to right,#fe8800,#fb6600);
		overflow: hidden;
		.add-btn{
			display: block;
			margin: 90upx auto;
			width: 150upx;
			height: 40upx;
			font-size: 12px;
			color: #fb6600;
			background-color: #fff;
			border-radius: 50upx;
			text-align: center;
			line-height: 40upx;
		}
	}
</style>
