<template>
    <view>
		<tabSlot>
			<!-- 标题部分 -->
			<view class="nav-list nav-list-4" :class="cliNum" slot="title">
				<text v-for="(item,i) in titles" :key="i" :class="cliClass(i)" @click="currentChange(i)" :style="cliZIndex(i)">{{ item }}</text>
				<view class="bgBlock" :style="{transform:`translateX(${translateX}px)`}"></view>	
			</view>
			<!-- 内容部分 -->
			<view slot="bar">
				<!-- 有内容 -->
				<view>
					<view v-for="(item,i) in data" :key="i" v-show="currentI===i">
						<view v-if="item.length">
							{{item}}
						</view>
						<!-- 无内容 -->
						<view v-else>
							<none></none>
						</view>
					</view>
				</view>
			</view>
		</tabSlot>
	</view>
</template>
<script>
	import tab_slot from './tab_slot.vue'
	// 引入无内容时的组件
	import none from '../none.vue'
	export default {
		data(){
			return {
				currentI: 0,
				translateX: 0,
				zIndex: 1
			}
		},
		methods: {
			cliClass(i){
				return {
					'active': i == this.currentI
				}
			},
			cliZIndex(i) {
				return {
					'z-index': i == this.currentI ? 1 : 0
				}
			},
			currentChange(i){
				this.currentI = i;
				// 根据num的值，判断一次移动的距离
				var move;
				switch(this.num) {
					case 2:
						move = 165;
						break;
					case 4 :
						move = 90;
						break;
					case 5 :
						move = 60;
						break;
				}
				this.translateX = i * move;
			}
		},
		components: {
			'tabSlot': tab_slot,
			'none': none
		},
		props: {
			titles:{
				type: Array,
				default: function() {
					return [];
				}
			},
			 data: {
				 type: Array,
				 default: function() {
					 return [];
				 }
			 },
			 num: {
				 type: Number,
				 required: true
			 }
		},
		computed: {
			cliNum() {
				return `nav-list-${this.num}`
			}
		},
		mounted() {
		}
	}
</script>
<style scoped>
	.nav-list{
		background: #fff;
		display: flex;
	}
	.nav-list-4{
		padding: 16upx 14upx 22upx;
	}
	.nav-list-2{
		justify-content: space-between;
		padding: 16upx 120upx 22upx;
	}
	.nav-list-5{
		padding: 16upx 50upx 22upx;
	}
	.bgBlock{
		position: absolute;
		z-index: 0;
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
		position: relative;
		/* z-index: 1; */
	}
	.nav-list text.active{
		 color: #fff; 
	}
</style>