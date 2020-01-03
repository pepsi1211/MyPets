<template>
	<view class="null">
		<i class="noMsg"></i>
		<text>未找到任何数据</text>
	</view>
</template>

<script>
</script>

<style scoped>
	.noMsg{
		display: inline-block;
		width: 282upx;
		height: 290upx;
		background: url(~@/static/icon/none.png);
		background-size: 282upx auto;
	}
	.null{
		background: transparent;
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
