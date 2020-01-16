<template>
	<view>
		<head-slot title="knowledge"></head-slot>
		<view class="tabs" >
			<view class="tab" :class="currentTarget == index ? 'on' : '' " v-for="(item,index) of tab_list" :key="index" :data-i="index" @tap="selected">{{item}}</view>
		</view>
	</view>

</template>

<script>
	import head from "../../components/common/head/head_store.vue"
	export default {
		data() {
			return {
				tab_list: ["常识", "疾病", "护理", "喂养", "驯养"],
				currentTarget:0
			}
		},
		methods: {
			selected: function(e){
				this.currentTarget = e.target.dataset.i
			}
		},
		components: {
			'head-slot': head,
		}
	}
</script>

<style lang="scss">
	.tabs{
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		.tab{
			font-size: 14px;
			color: #999;
			height: 110upx;
			line-height: 110upx;
			border-bottom: 2px solid transparent;
			transition: all .3s;
		}
		.tab.on{
			color: #000000;
			border-bottom: 2px solid #F7DA7D;
		}
	}
</style>
