<template>
	<view>
		<my-head title="设置"></my-head>
		<view class="body">
			<setting type="pwd">修改登录密码</setting>
			<setting type="pwd">重置支付密码</setting>
			<setting>关于我们</setting>
			<setting :arrow="false" type="call">客服电话</setting>
			<setting>常见问题</setting>
			<setting :arrow="false" storage="12.05">清除缓存</setting>
			<setting>拉黑账号</setting>
		</view>
		<button class="logout">退出当前登录账户</button>
	</view>
	
</template>

<script>
	import head from '../../components/common/head/head.vue'
	import setting from '../../components/common/setting/setting.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			'my-head': head,
			'setting': setting
		}
	}
</script>

<style scoped>
  .body{
	  background: #ecf00;
  }
  .logout{
	  width: 100%;
	  background: #ec601e;
	  color: #fff;
	  position: fixed;
	  bottom: 0;
	  font-size: 35upx;
  }
</style>
