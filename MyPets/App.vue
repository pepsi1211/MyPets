<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// 首次加载缓存屏幕可用高度
			 uni.getSystemInfo({
				success:function(obj) {
					uni.setStorage({
						key: 'windowHeight',
						data: obj.windowHeight
					});
				}
			});
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>
<style>
	@import url("./static/css/reset.css");	
	/*每个页面公共css */
	.b1{
		background:#007AFF;
	}
</style>
