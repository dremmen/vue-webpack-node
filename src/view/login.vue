<template>
	<div class="login-wrap input-list" id="login">
		<section class="logo"></section>
	    <ul>
	        <li class="">
	        	<span></span>
	            <input type="text" v-model="username" placeholder="看书网账号">
	        </li>
	        <li class="password-input">
	        	<span></span>
	            <input type="password" v-model="password" placeholder="密码">
	        </li>
	        <!-- <li class="code hidden"> -->
	            <!-- <input type="text" id="txtCode" placeholder="请输入验证码"> -->
	            <!-- <a href="javascript:"><img src="" class="stat" data-stat="01|登录-验证码换一张|mqd_L01|1" id="imgCode"></a> -->
	        <!-- </li> -->
	    </ul>
	    <p class="tip red error-tip">{{error_tip}}</p>
	    <button class="red-btn disabled login-button" @click="login">登录</button>
	    <p class="flex">
	    	<!-- <a href="https://aq.yuewen.com/welcome/validateuser" external="">忘记密码</a> -->
	    	<router-link to="./regist" class="blue">前往注册</router-link>
	    </p>
	</div>
</template>

<script>
	export default{
		name: 'login',
		data () {
			return {
				username: '',
				password: '',
				error_tip: ''
			}
		},
		methods: {	
			login () {
				this.$http.post('./api/user/login',{
	                username: this.username,
	                password:this.password
	            }).then((response) => {
	            	console.log(response);
	            	this.error_tip = response.body.Msg;
	            	if(response.body.Num == '4'){
	            		this.error_tip = ''
	            		var _this = this;
	            		setTimeout(function(){
				            _this.$router.push({name: 'home'});
				        },10);
	            	}	 
	            	this.username = ""
	            	this.password = ""           	
	            })
			},
		}
	}
</script>

<style scoped>
	.login-wrap {
		height: 100vh;
	    background-color: #fff;
	    overflow: hidden;
	    padding: 0 2rem;
	}
	.logo {
		width: 7.6rem;
	    height: 2.38rem;
	    margin: 3.8rem auto 4.48rem;
	}
	.input-list li {
	    background: #F6F7F9;
	    margin-bottom: .8rem;
	    border-radius: 4px;
	    font-size: 0;
	    min-height: 2.4rem;
	    overflow: hidden;
	}
	.input-list li span{
	    line-height: 2.4rem;
	    width: 2.4rem;
	    display: inline-block;
	}
	.input-list li input {
	    display: inline-block;
	    vertical-align: middle;
	    width: 82%;
	    height: 2.4rem;
	    line-height: 2.4rem;
	    background: none;
	    font-size: .14rem;	    
	    border: none;
	    outline: none;
	}
	.red-btn.disabled {
	    border-color: rgba(255, 0, 0, 0.2);
	    background: rgba(255, 0, 0, 0.2);
	}
	.input-list .red-btn{
		display: block;
   		margin: .5rem 0;
	    height: 2.4rem;
	    line-height: 2.4rem;
	    border-radius: 100px;	    
	    width: 100%;
	    outline: none;
	}
	.red-btn {
	    border-color: #ED424B;
	    background: #ED424B;
	}
	.red-btn, .blue-btn {
	    position: relative;
	    z-index: 1;
	    color: white;
	    text-align: center;
	}
	.login-wrap p.flex a.blue {
	    float: right;
	}
</style>