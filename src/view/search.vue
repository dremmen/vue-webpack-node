<template>
	<div id="search">
		<header id="header" class="header">
			<div class="search" @keyup.enter="search()">
				<el-input v-model="input" placeholder="请输入内容" class="input-with-select"><el-button slot="append" ><a href="javascript:history.go(-1);">取消</a></el-button></el-input>
			</div>
		</header>
	    <div class="book-none" v-show="isShow">
	    	<p class="img"><img src="../assets/img/book-none.png" alt=""></p>
	    	<p>暂时没有您所搜索的书籍</p>
	    </div>
	    <div class="done-books">	    	        
	      	<div class="module-header" v-show="!isShow">
		        <div class="module-header-l">
		          <h3 class="module-title">热门推荐</h3>
		          <span id="ariaDescNew" class="module-title-desc">起点编辑推荐</span>
		        </div>
		    </div>
			<done-book :booksJson="doneBooksArr"></done-book> 
		</div>
		<foot></foot>
	</div>
</template>
<script>
	import doneBook from '@/components/booksJson'
	import foot from '@/components/foot'
	export default{
		name: 'search',
		components: {doneBook,foot},
		data () {
			return{
		      doneBooksArr: '[]',
		      input: '',
		      isShow: false
			}
		},
		methods: {
			search () {
				this.$http.post('./api/book/bookSearch',{
		  			bookName: this.input
		  		}).then((response) => {
		  			this.doneBooksArr = response.body
		  			this.isShow = (this.doneBooksArr.length == 0) ? true : false
		  		})
			}
		},
		mounted () {
			this.$http.post('./api/book/bookSelect').then((response) => {
		      	this.doneBooksArr = response.body
		    })
		}
	}
</script>
<style scoped>
	#search{padding-top: 3.75rem;}
  	.search{margin: 0 10px;display: block;}
  	.done-books{background-color: #fff;min-height: calc(60vh + 60px);}
	.header {position: fixed;z-index: 1;top: 0;width: 100%;background-color: #fff;box-sizing: border-box;height: 3.75rem;padding-top: .6875rem;padding-bottom: .625rem;border-bottom: 1px solid #f0f1f2;}
	.book-none{color: #969ba3;text-align: center;background-color: #fff;position: absolute;width: 100%;top: 120px;}
	.book-none .img{width: 20%;display: inline-block;margin-bottom: 15px;}
	.book-none .img img{width: 100%;}
</style>
