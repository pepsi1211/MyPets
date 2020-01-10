<template>
	<view class="container">
		<my-head title="个人资料" hint="保存"></my-head>
		<my-form name="头像" placeholder="头像" type="via"></my-form>
		<my-form name="昵称" placeholder="请输入昵称" ></my-form>
		<my-form name="手机号码" placeholder="手机号码" ></my-form>
		<my-form name="真实姓名" placeholder="真实姓名" ></my-form>
		<my-form name="生日" placeholder="生日" ></my-form>
		<my-form name="性别" placeholder="性别" ></my-form>
		<my-form name="养宠时长" placeholder="养宠时长" ></my-form>
		<my-form name="个人标签" placeholder="个人标签" ></my-form>
	</view>
	
</template>

<script>
	import myHead from '../../components/common/head/head'
	import myForm from '../../components/common/form_control/form.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			'my-head': myHead,
			'my-form': myForm
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.container{
		background: #ecf0f0;
	}
</style>
