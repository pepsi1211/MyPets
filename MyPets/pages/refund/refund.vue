<template>
	<view>
		<my-head title="退款/售后"></my-head>
		<refund-tab @click="changePane">
			<pane label="审核中" name="pane" ref="pane1">
				<!-- 每个页面的内容 -->
				内容1
			</pane>
			<pane label="已通过" name="pane" ref="pane2">
				内容2
			</pane>
			<pane label="未通过" name="pane" ref="pane3">
				内容3
			</pane>
		</refund-tab>
	</view>
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import refund_tab from '../../components/common/refund/refund_tab.vue'
	import pane from '../../components/common/refund/pane.vue'
	export default {
		data() {
			return {
				text: 0
			}
		},
		methods: {
			// 获取refs pane
			getPane() {	
				var arr = [];
				for(var key in this.$refs) {
					if(this.$refs[key].$options._componentTag === 'pane') arr.push(this.$refs[key]);
				}
				// console.log(arr);
				return arr;
				// console.log(this.$refs.pane1.$options._componentTag)
			},
			changePane(i) {
				// console.log(111);
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
			pane
		},
		mounted() {
			// 默认显示第一个页面
			this.changePane(0);
			
		}
	}
</script>

<style scoped>

</style>
