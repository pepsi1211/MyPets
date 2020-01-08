<template>
	<view v-show="show">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		},
		mounted() {
			// console.log(this.$parent)
		}
	}
</script>

<style>
</style>
