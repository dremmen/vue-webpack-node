<template>
	<div class="hot-recommend">		
		<div class="module-header">
			<div class="module-header-l">
				<h3 class="module-title">热门小说</h3>
				<span id="ariaDesc1" class="module-title-desc">起点编辑推荐</span>
			</div>
		</div>
		<div class="module-slide">
			<ol class="module-slide-ol">
				<li class="module-slide-li" v-for="(item,index) in booksArr">
					<router-link :to="{path: 'books/'+item.Id}" class="module-slide-a">
						<img :src="item.images" class="module-slide-img" :alt="item.name">
						<figcaption class="module-slide-caption">{{item.name}}</figcaption>
						<p class="module-slide-author" role="option">
							<span class="gray">{{item.author}}</span>
						</p>
					</router-link>
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'hotRecommend',
	  	props:['booksArr'],
		data () {
			return{
			}
		}
	}
</script>

<style>
	.hot-recommend{background-color: #fff;margin-top: 1rem;}
	.module-slide-ol {
	    position: relative;
	    overflow-x: auto;
	    overflow-y: hidden;
	    min-height: 10.75rem;
	    padding-left: .5rem;
	    white-space: nowrap;
	}
	.module-slide-li {
	    display: inline-block;
	    vertical-align: top;
	    white-space: normal;
	}
	.module-slide-a {
	    display: block;
	    width: 4.125rem;
	    padding: .75rem .5rem .5rem;
	}
	.module-slide-img {
	    display: block;
	    width: inherit;
	    height: 5.5rem;
	    box-shadow: 0 1px 3px rgba(0,0,0,.3);
	}
	.module-slide-caption {
	    font-size: .8125rem;
	    line-height: 1.25;
	    overflow: hidden;
	    max-height: 2.125rem;
	    margin: .5rem 0 .125rem;
	}
	.module-slide-author {
	    font-size: .75rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #969ba3;
	}
	.gray {
	    color: #969ba3;
	}
	a {
	    text-decoration: none;
	    color: inherit;
	    outline: 0;
	}
</style>