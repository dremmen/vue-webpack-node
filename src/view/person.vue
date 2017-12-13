<template>
	<div class="wrap">
		该功能暂时没有,<span @click="loginOut">退出登录</span>
	</div>
</template>

<script>
	export default{
		name: 'person',
		data () {
			return {

			}
		},
		methods: {
			loginOut () {
				localStorage.clear();
				var _this = this;
        		setTimeout(function(){
		            _this.$router.push({name: 'home'});
		        },10);
			}
		}
	}
</script>

<style scoped>
	span{color: red;}
</style>