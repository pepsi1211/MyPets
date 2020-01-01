<template>
	<view>
		<view class="container">
			<!-- nav导航 -->
			<view class="nav-list">
				<text :class="cliClass(0)" @click="currentChange(0)">商品</text>
				<text :class="cliClass(1)" @click="currentChange(1)">它秀</text>
				<text :class="cliClass(2)" @click="currentChange(2)">话题</text>
				<text :class="cliClass(3)" @click="currentChange(3)">问答</text>
				<view class="bgBlock" :style="{transform:`translateX(${translateX}px)`}"></view>
			</view>
			<!-- 内容 -->
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				currentI: 0,
				translateX: 0
			}
		},
		methods: {
			cliClass(i){
				return {
					'active': i == this.currentI
				}
			},
			currentChange(i){
				this.currentI = i;
				this.translateX = i * 90;
			}
		}
	}
</script>

<style scoped>
	.container {
		padding-top: 16upx;
	}
	.nav-list{
		display: flex;
		padding: 0 14upx;	
	}
	.bgBlock{
		position: absolute;
		z-index: -1;
		width: 180upx;
		height: 60upx;
		border-radius: 54upx;
		background: #ec601e;
		transition: all .3s;
	}
	.nav-list text{
		display: inline-block;
		width: 180upx;
		height: 60upx;
		border-radius: 54upx;
		text-align: center;
		line-height: 60upx;
		font-size: 26upx;
		background: transparent;
	}
	.nav-list text.active{
		 color: #fff; 
	}
</style>
