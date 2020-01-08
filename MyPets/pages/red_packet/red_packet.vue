<template>
	<view>
		<my-head title="红包积分"></my-head>
		<refund-tab @click="changePane">
			<pane label="我的红包" name="pane" ref="pane1">
				<!-- 每个页面的内容 -->
				<red></red>
			</pane>
			<pane label="我的积分" name="pane" ref="pane2">
				<!-- 每个页面的内容 -->
				<red></red>
			</pane>
		</refund-tab>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import refund_tab from '../../components/common/refund/refund_tab.vue'
	import pane from '../../components/common/refund/pane.vue'
	import red from '../../components/common/red.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// 获取refs pane
			getPane() {
				var arr = [];
				for(var key in this.$refs) {
					if(this.$refs[key].$options._componentTag === 'pane') arr.push(this.$refs[key]);
				}
				console.log(arr);
				return arr;
				// console.log(this.$refs.pane1.$options._componentTag)
			},
			changePane(i) {
				var arr = this.getPane();
				arr.forEach(function(item,index) {
					if(i === index) item.show = true;
					else item.show = false;
				})
			}
		},
		components: {
			'my-head': head,
			'refund-tab': refund_tab,
			pane,
			red
		},
		mounted() {
			// 默认显示第一个页面
			this.changePane(0);
			
		}
	}
</script>

<style>

</style>
