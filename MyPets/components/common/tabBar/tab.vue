<template>
	<view class="container">
		<!-- nav导航 -->
		<view class="nav-list">
			<text :class="cliClass(0)" @click="currentChange(0)">商品</text>
			<text :class="cliClass(1)" @click="currentChange(1)">它秀</text>
			<text :class="cliClass(2)" @click="currentChange(2)">话题</text>
			<text :class="cliClass(3)" @click="currentChange(3)">问答</text>
		</view>
		<!-- 内容 -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				currentI: 0
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
			}
		}
	}
</script>

<style scoped>
	.nva-list{
		display: flex;
		
	}
	.nav-list text{
		display: inline-block;
		width: 180upx;
		height: 60upx;
		border-radius: 54upx;
		text-align: center;
		line-height: 60upx;
		font-size: 26upx;
	}
	.nav-list text.active{
		background: #ec601e;
		color: #fff;
	}
</style>
