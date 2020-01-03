<template>
	<view class="container">
			<!-- nav导航 -->
			<slot name="title"></slot>
			<!-- 内容 -->
			<slot name="bar"></slot>
	</view>	
</template>

<script>
	export default{
		
		
	}
</script>

<style scoped>
	.container {
		/* background: #fafafa; */
	}
	
</style>
