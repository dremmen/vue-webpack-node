<template>
	<div class="booksList">
    	<vue-progress-bar></vue-progress-bar>
    	<pullRefresh @onFatherInfinite="upRefresh" :footShow="footShow" :upPull="upPull">
			<div id="header" class="header" data-l1="41">
				<router-link to="home" class="header-back jsBack"></router-link>
				<h1 class="header-back-title">{{book.name}}</h1>
				<div class="header-operate">
					<router-link id="openSearchPopup" to="home" class="icon icon-search"></router-link>
					<router-link id="openGuide" to="home" class="icon icon-more"></router-link>
				</div>
			</div>
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
				                <h4 class="chapter-sub-title">共<output>{{book.listLength}}</output>章</h4>
				            </div>
				            <div class="module-header-r">
				                <a id="reverse" href="javascript:" class="module-header-btn dark" role="button">倒序</a>
				            </div>
				        </div>	        
			            <ol id="volumes" class="chapter-ol chapter-ol-catalog">
					        <li class="chapter-li jsChapter" v-for="(item,index) in bookList">
					            <router-link :to="{path: '/bookContent/'+book.Id+'/'+item.Id}" class="chapter-li-a ">
					                <span class="chapter-index ">{{item.title}}</span>
					            </router-link>
					        </li>
						</ol>
				    </div>
				    <div id="bookmarkX" class="chapter-tab-x"></div>
				</div>
			</div>
        	<!-- <foot></foot> -->
		</pullRefresh>
	</div>
</template>

<script>
import pullRefresh from "@/components/pull-refresh"
export default{
	name: 'booksList',
	components: {pullRefresh},
	data(){
		return{
			book: '',
			bookList: '',
			page: 0,
			list: 50,
			responseL: 50,	//请求的长度
			footShow: true,
			upPull: false
		}
	},
    methods: {
        getList(Id,page,list) {
            this.$http.post('./api/book/bookListByIdPage',{
                bookId: this.$route.params.Id,
                page: page,
                list: list
            }).then((response) => {
            	if(this.page == 0){
            		this.bookList = response.body
            	}else{
            		this.bookList = this.bookList.concat(response.body)
            		this.responseL = response.body.length
            	}
            	
            })
        },
        upRefresh(done){
            this.page = this.page + this.list
            if(this.responseL<50){
            	alert("你已经加载结束了，大哥");
            	this.$el.querySelector('.load-more').remove()
            	return;
            }
            this.getList(this.$route.params.Id,this.page,this.list)
            done();
        }
    },
  	mounted () {
  		this.getList(this.$route.params.Id,this.page,this.list)
  		this.$http.post('./api/book/bookById',{
  			id: this.$route.params.Id,
  		}).then((response) => {
  			this.book = response.body[0]
  		})
	}
}
</script>
<style scoped>
	.booksList{padding-bottom: .1px;background-color: #f6f7f9;}
	.booksList .header {
	    border-bottom: 0 none;
	}	
	.pull-refresh-block .inner{
		padding-bottom: 84px;
	}
	.footer{		
	    position: absolute;
	    width: 100%;
	    bottom: 0;
	}
</style>





