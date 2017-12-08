<template>
	<div class="booksList">
    	<vue-progress-bar></vue-progress-bar>
		<header id="header" class="header" data-l1="41">
			<router-link to="home" class="header-back jsBack"></router-link>
			<h1 class="header-back-title">{{book.bookName}}</h1>
			<div class="header-operate">
				<router-link id="openSearchPopup" to="home" class="icon icon-search"></router-link>
				<router-link id="openGuide" to="home" class="icon icon-more"></router-link>
			</div>
		</header>
		<div id="catalogWrapper">
			<div id="chapterNav" class="btn-group-tab">
			    <nav class="btn-group">
			        <h3 class="btn-group-cell"><a href="javascript:" class="btn-blank active">目录</a></h3>			        
			    </nav>
	    	</div>
			<div class="module module-merge">
			    <div id="catelogX" class="chapter-tab-x active">
			        <div class="module-header">
			            <div class="module-header-l">
			                <h4 class="chapter-sub-title">共<output>{{bookList.length}}</output>章</h4>
			            </div>
			            <div class="module-header-r">
			                <a id="reverse" href="javascript:" class="module-header-btn dark" role="button">倒序</a>
			            </div>
			        </div>
			        <ol id="volumes" class="chapter-ol chapter-ol-catalog">
				        <li class="chapter-li jsChapter" v-for="(item,index) in bookList">
				            <router-link :to="{path: '/bookContent/'+book.bookid+'/'+item.Id}" class="chapter-li-a ">
				                <span class="chapter-index ">{{item.title}}</span>
				            </router-link>
				        </li>
					</ol>
			    </div>
			    <div id="bookmarkX" class="chapter-tab-x"></div>
			</div>
		</div>
        <foot></foot>
	</div>
</template>

<script>
import foot from '@/components/foot'
export default{
	name: 'booksList',
	components: {foot},
	data(){
		return{
			bookList: '',
			book: ''
		}
	},
  	beforeCreate () {
  		this.$http.post('./api/book/bookListById',{
  			bookId: this.$route.params.Id
  		}).then((response) => {
  			console.log(response);
  			this.bookList = response.body
  			this.book = response.body[0]
  			console.log(this.book)
  		})
	}
}
</script>
<style>
	.booksList{padding-bottom: .1px;background-color: #f6f7f9;}
	.booksList .header {
	    border-bottom: 0 none;
	}	
</style>





