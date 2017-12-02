<template>
	<div class="doneBooks">		
		<footer class="footer">
			<div class="footer-link">
				<router-link to="//qidian.gtimg.com/QDReader/?redirect=https%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fqi-dian-du-shu-li-xian-ban%2Fid534174796%3Fmt%3D8" class="footer-link-a jsDownloadLink">客户端</router-link>
				<router-link to="//m.qidian.com" class="footer-link-a dark">触屏版</router-link>
				<router-link id="aGoPCSite" to="//www.qidian.com" class="footer-link-a">电脑版</router-link>
				<router-link to="/user/help" class="footer-link-a">帮助</router-link>
				<router-link id="aFeedbackUnLogin" to="javascript:" target="_blank" class="footer-link-a jsLogin">反馈</router-link>
				<router-link id="aFeedbackLogin" to="javascript:" target="_blank" class="footer-link-a jsUserWrapper" style="display: none;" hidden="">反馈</router-link>
			</div>
			<div class="footer-copy">copyright © 2002-2017 m.huangmenmen.com</div>
		</footer>
	</div>
</template>

<script>
	export default{
		name: 'foot',
		data(){
			return{

			}
		}
	}
</script>

<style>
	.footer-link-a {
	    display: block;
	    padding: .5rem 0;
	    -webkit-box-flex: 1;
	    box-flex: 1;
	}
	.dark {
	    color: #33373d;
	}
	.footer-link {
	    font-size: .875rem;
	    display: flex;
	    display: -webkit-box;
	    display: box;
	    padding: .5625rem 1.1875rem 0;
	    text-align: center;
	    color: #969ba3;
	    justify-content: space-between;
	    -webkit-box-pack: justify;
	    box-pack: justify;
	}

	.footer-copy {
	    font-size: .75rem;
	    font-weight: 300;
	    padding-top: .25rem;
	    padding-bottom: 1rem;
	    text-align: center;
	    color: #969ba3;
	}
</style>