<template>
	<view class="tabs">
		<view class="tabs-bar">
			<text v-for="(label,i) in labels" :key="i" @click="currentChange($event,i)">{{ label }}</text>
			<view class="transform-line" :style="{'transform': `translateX(${translateX}px)`,width: traLineWidth + 'px' }" :class="{'transition':isTransition}"></view>
		</view>
		<view class="tabs-content">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labels: [],
				translateX: 0,
				isTransition: false,
				traLineWidth:0
			}
		},
		props: {
			
		},
		methods: {
			// 获取name为pane的slots，获取到标签label，添加至数组
			getPane() {
				// console.log(this.$children)	
				var arr = [];
				this.$slots.default.forEach(function(item) {
					// console.log(item);
					if(item.data.attrs.name === 'pane') arr.push(item.data.attrs.label);
				});
				this.labels = arr;
				// console.log(arr);
			},
			getPad() {
				// console.log(document.querySelectorAll('.tabs-bar>uni-text'))
				var tag = document.querySelector('.tabs-bar>uni-text:first-child');
				// console.log(tag);	
				this.translateX = tag.getBoundingClientRect().left;
			},
			currentChange(e,i) {
				// 如果没有过渡，添加过渡
				this.isTransition||(this.isTransition=true);
				this.translateX = e.currentTarget.getBoundingClientRect().left;
				// 改变显示的页面pane
				console.log(i);
				this.$emit('click',i);
			},
			// 根据接受的label的字长决定移动的线的宽度
			initLine() {
				var num = this.labels[0].length;
				this.traLineWidth = 12.5 * num;
			}
			
		},
		mounted() {
			
			this.getPane();
			// 数据更新后，有异步更新队列，队列更新完毕后再执行以下操作
			this.$nextTick(function(){
				this.getPad();
				
			});
			this.initLine();
			// console.log(this.$parent.text);
		}
	}
</script>

<style scoped>
	.tabs {
		background: #fff;
	}
	.tabs-bar {
		display: flex;
		height: 52upx;
		justify-content: space-around;
		color: #999;
		position: relative;
		margin-bottom: 22upx;
	}
	.tabs-bar text{
		font-size: 30upx;
	}
	/* 移动的线 */
	.transform-line {
		width: 74upx;
		background: #ffd94e;
		height: 5upx;
		position: absolute;
		bottom: 0;
		left: 6upx;
	}
	.transition {
		transition: all .3s;
	}
	.tabs-content {
		background: #fff;
	}
</style>
