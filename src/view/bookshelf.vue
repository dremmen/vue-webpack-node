<template>
	<div id="bookshelf">
		<header id="header" class="header">
			<a href="#/books/home" class="header-back jsBack"></a> 
			<h1 class="header-back-title">书架</h1> 
		</header>
		<book-shelf :bookshelf="bookshelf"></book-shelf>
		<foot></foot>
	</div>
</template>

<script>
	import bookShelf from "@/components/bookShelf"
	import foot from "@/components/foot"
	export default{
		name: 'bookshelf',
		components: {bookShelf,foot},
		data () {
			return {
				bookshelf: [],
			}			
		},
		methods: {
			getBookById (idArr) {
				let arr = [];
				for(let i=0;i<idArr.length;i++){
					this.$http.post('./api/book/bookById',{
						id: idArr[i]
					}).then((response) => {
						this.bookshelf.push(response.body[0]);
				    })
				}				
			}
		},
		mounted () {
			this.$http.post('./api/user/bookshelf',{
				userId: localStorage.id
			}).then((response) => {
				var bookJson = response.body[0].bookIdJson;
				this.getBookById(bookJson.split(','))		    
			});
		}
	}

</script>

<style scoped>
</style>