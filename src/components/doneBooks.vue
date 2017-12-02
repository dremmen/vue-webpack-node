<template>
	<div class="doneBooks">		
		<div class="module-header">
			<div class="module-header-l">
				<h3 class="module-title">畅销完本</h3>
				<span id="ariaDescHot" class="module-title-desc">一周热销完本书</span>
			</div>
			<div class="module-header-r">
				<router-link to="/bestsell/male" class="module-header-btn">更多</router-link>
			</div>
		</div>
		<ol class="book-ol book-ol-normal">
			<li class="book-li" v-for="(item,index) in doneBooksArr">
				<router-link :to="{path: 'books/'+item.Id}" class="book-layout">
					<img :src="item.images" class="book-cover" :alt="item.name">
					<div class="book-cell">
						<h4 class="book-title">{{item.name}}</h4>
						<p class="book-desc">{{item.intro}}</p>
						<div class="book-meta">
							<div class="book-meta-l">
								<span class="book-author">{{item.author}}</span>
							</div>
							<div class="book-meta-r">
								<span class="tag-small-group origin-right">
									<em class="tag-small gray">{{item.type}}</em>
									<em class="tag-small red">{{item.serialize}}</em>
									<em class="tag-small blue">{{item.wordcount}}万字</em>
								</span>
							</div>
						</div>
					</div>
				</router-link>
			</li>
		</ol>
	</div>
</template>

<script>
	export default{
		name: 'doneBooks',
	  	props:['doneBooksArr'],
		data(){
			return{
				bookUrl: '1111'
			}
		}
	}
</script>

<style>
	.doneBooks{background-color: #fff;margin-top: 1rem;}
	.book-layout {
	    position: relative;
	    display: block;
	    overflow: hidden;
	    padding: 1rem;
	    -webkit-transition: padding-left .15s;
	    transition: padding-left .15s;
	}
	.book-li::after {
	    display: block;
	    margin-top: -1px;
	    margin-left: 1rem;
	    content: '';
	    -webkit-transition: margin-left .15s;
	    transition: margin-left .15s;
	    border-bottom: 1px solid #f0f1f2;
	}
	.book-cover {
	    font-size: 0;
	    float: left;
	    width: 4.125rem;
	    height: 5.5rem;
	    margin-right: .5rem;
	    box-shadow: 0 1px 3px rgba(0,0,0,.3);
	}
	.book-cell {
	    overflow: hidden;
	}
	.book-title {
	    line-height: 1.4;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.book-ol-normal .book-desc, .book-ol-time .book-desc {
	    line-height: 1.1875rem;
	    display: -webkit-box;
	    height: 2.25rem;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.book-desc {
	    font-size: .875rem;
	    line-height: 1.125rem;
	    overflow: hidden;
	    margin: .375rem 0;
	    color: #969ba3;
	}
	.book-meta {
	    font-size: .75rem;
	    overflow: hidden;
	}
	.book-meta-l {
	    float: left;
	}
	.book-author {
	    font-size: .8125rem;
	    display: block;
	    overflow: hidden;
	    max-width: 10em;
	    max-width: calc(100vw - 2rem - (176rem / 16));
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #969ba3;
	}
	.book-meta-r {
	    position: relative;
	    float: right;
	}
	.book-meta-r .tag-small-group {
	    position: absolute;
	    top: -.375rem;
	    right: 0;
	    white-space: nowrap;
	}
	.tag-small-group {
	    display: inline-block;
	}
	.tag-small-group>.tag-small:first-child{
	    margin-left: 0;
	}
	.origin-right, .origin-right .tag-small{
	    -webkit-transform-origin: right center;
	    transform-origin: right center;
	}
	.tag-small{
	    font-size: 1.25rem;
	    line-height: 1.5;
	    display: inline-block;
	    margin: 0 .15em;
	    padding: 0 .25em;
	    -webkit-transform: scale(1);
	    transform: scale(1);
	    vertical-align: bottom;
	}
	.tag-small::before{
	    position: absolute;
	    z-index: -1;
	    top: -1px;
	    right: 0;
	    bottom: 1px;
	    left: 0;
	    content: '';
	    opacity: .5;
	    border: 1px solid;
	    border-radius: .11111em;
	}
	.tag-small-group, :not(.tag-small-group)>.tag-small{
	    -webkit-transform: scale(.5);
	    transform: scale(.5);
	}
</style>