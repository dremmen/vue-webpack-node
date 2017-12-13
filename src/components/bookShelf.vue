<template>
	<div id="bookshelf">
		<ol id="bookEditOl" class="book-ol book-ol-progress" >    
		    <li class="book-li" v-for="(item , index) in bookshelf">
		        <div class="book-layout">
		            <div class="rel">
		                <router-link :to="{path: 'books/'+item.Id}" class="mybook-to-detail">	                    
		                    <img :src="item.images" class="book-cover" :alt="item.name">
		                </router-link>
		                <router-link :to="{path: 'books/'+item.Id}" class="book-title-x">
		                    <h4 class="book-title">{{item.name}}</h4>
		                </router-link>
		            </div>
		            <router-link :to="{path: 'books/'+item.Id}" class="mybook-to-goon">
		                <div class="book-title-x">
		                    <div class="book-title-r">
		                        <span class="gray">继续阅读</span>
		                    </div>
		                </div>
		                <div class="book-meta">
		                    <p class="ell">{{item.name}} | 读至 <span class="readed">{{item.newsTitle}}</span></p>
		                </div>
		            </router-link>
		            <div class="rel">
		                <router-link :to="{path: 'books/'+item.Id}" class="mybook-to-new">
		                    <div class="book-meta">
		                        <time class="book-meta-r">最新更新</time>	                        
		                        <p class="ell">
		                            更新至 {{item.newsTitle}}
		                        </p>	                        
		                    </div>
		                </router-link>
		            </div>	            
		        </div>
		        <a href="javascript:" class="mybook-cover-btn" :title="item.name"></a>
		    </li>
		</ol>
	</div>
</template>

<script>
	export default{
		name: 'bookshelf',
		props: ['bookshelf'],
		data () {
			return{

			}
		}
	}
</script>

<style scoped>
	#bookshelf{background-color: #fff;min-height: calc(100vh - 10rem);}
	.book-layout{padding: 0 1rem;}
	.book-li::after {
	    display: block;
	    margin-top: -1px;
	    margin-left: 1rem;
	    content: '';
	    -webkit-transition: margin-left .15s;
	    transition: margin-left .15s;
	    border-bottom: 1px solid #f0f1f2;
	}
	.rel {
	    position: relative;
	}
	.mybook-to-detail {
	    position: absolute;
	    top: 1rem;
	    white-space: nowrap;
	}
	.mybook-to-detail+.book-title-x {
	    position: absolute;
	    top: 1rem;
	    right: 4.125rem;
	    left: 4.125rem;
	}
	.book-title-x {
	    display: block;
	    overflow: hidden;
	}
	.mybook-to-goon {
	    display: block;
	    min-height: 4.5rem;
	    margin: 0 -1rem;
	    padding: 1rem 1rem 1rem 5.125rem;
	}
	.mybook-to-new {
	    line-height: 1.5rem;
	    position: absolute;
	    top: -2.25rem;
	    right: 0;
	    left: 4.125rem;
	}
	.book-ol-progress .book-meta {
	    font-size: .875rem;
	    color: #969ba3;
	}
	.book-meta {
	    font-size: .75rem;
	    overflow: hidden;
	}
	.readed{color: red;}
	.book-meta-r:first-child {
	    margin-left: .5rem;
	}
	.book-meta-r {
	    position: relative;
	    float: right;
	}
	.ell {
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mybook-to-detail .book-cover {
	    margin-right: 0;
	}
	.book-ol-progress .book-cover {
	    width: 3.375rem;
	    height: 4.5rem;
	    margin-right: .75rem;
	}
	.book-cover {
	    font-size: 0;
	    float: left;
	    width: 4.125rem;
	    height: 5.5rem;
	    margin-right: .5rem;
	    box-shadow: 0 1px 3px rgba(0,0,0,.3);
	}
	.book-title {
	    line-height: 1.4;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.book-title-r:first-child {
	    margin-left: .5rem;
	}
	.book-title-r {
	    font-size: .8125rem;
	    line-height: 1.5rem;
	    float: right;
	    margin-left: .5rem;
	    color: #969ba3;
	}
	.gray {
	    color: #969ba3;
	}
</style>