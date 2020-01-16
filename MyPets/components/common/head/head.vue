<template>
	<head-slot>
		<text class="title">{{ title }}</text>
		<text class="hint">{{ hint }}</text>
	</head-slot>
</template>

<script>
	import head_slot from './head_slot.vue'
	export default{
		data(){
			return{
				
			}
		},
		props:{
			title:{
				type:String
			},
			hint:{
				type: String
			}
		},
		components:{
			'head-slot':head_slot
		}
	}
</script>

<style>
	.title{
		font-size: 30upx;
		font-weight: 700;
		position: absolute;
		top: 45%;
		left: 42%;
	}
	.hint{
		font-size: 28upx;
		font-weight: 600;
		position: absolute;
		top: 53%;
		right: 5%;
	}
</style>
