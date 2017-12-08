<template>  
	<div class="doneBooks">
	    <div class="done-books">
	      <done-book :booksJson="doneBooksArr"></done-book> 
	    </div>
	    <foot></foot>
	</div>
</template>

<script>
import doneBook from '@/components/booksJson'
import foot from '@/components/foot'
export default{
	name: 'doneBooks',
	components: {doneBook,foot},
	data () {
		return{
	      doneBooksArr: '[]',
		}
	},
	mounted () {
		this.$http.post('./api/book/doneBooks').then((response) => {
	      this.doneBooksArr = response.body
	    });
	}
}
</script>
<style>
</style>





