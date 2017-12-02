<template>  
	<div class="home">
    <vue-progress-bar></vue-progress-bar>
		<div class="carousel">
			<el-carousel trigger="click" height="150px">
			  <el-carousel-item v-for="item in listUrl" :key="item">
			    <img :src="item" alt="">
			  </el-carousel-item>
			</el-carousel>
		</div>
		<div class="search">
		  <el-input placeholder="请输入内容" class="input-with-select">
		    <el-button slot="append" icon="el-icon-search"></el-button>
		  </el-input>
		</div>
		<div class="icon-row">
			<el-row :gutter="20">
				<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
				<el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
			</el-row>	
		</div>
    <hot-recommend :booksArr="booksArr"></hot-recommend>
    <new-books :newBooksArr="newBooksArr"></new-books>
    <done-books :doneBooksArr="doneBooksArr"></done-books>
    <foot></foot>
	</div>
</template>

<script>
import hotRecommend from '@/components/hotRecommend'
import newBooks from '@/components/newBooks'
import doneBooks from '@/components/doneBooks'
import foot from '@/components/foot'
export default{
	name: 'home',
  components: {hotRecommend,newBooks,doneBooks,foot},
	data(){
    const imgUrl = [
      'http://qidian.qpic.cn/qidian_common/349573/7f2a949865ae4d5c797f5f76cad4e4cc/0',
      'http://qidian.qpic.cn/qidian_common/349573/27f8236b816c2f3c0ce7a03afca24a6e/0',
      'http://qidian.qpic.cn/qidian_common/349573/9e57ceaf0bf9a5438190686d593274e6/0',
      'http://qidian.qpic.cn/qidian_common/349573/976b6f9b039e3fff73baf3faf2b31632/0'
    ]
		return{
      listUrl: imgUrl,
      booksArr: '[]',
      newBooksArr: '[]',
      doneBooksArr: '[]',

		}
	},
  beforeCreate () {
    this.$http.post('./api/book/bookSelect').then((response) => {
      this.booksArr = response.body
    });

    this.$http.post('./api/book/selectFromNews').then((response) => {
      this.newBooksArr = response.body
    });

    this.$http.post('./api/book/doneBooksSelect').then((response) => {
      this.doneBooksArr = response.body
    })
  }
}
</script>
<style>
body,html{padding: 0;margin: 0;}
  .carousel{margin-bottom: 10px;}
  .el-carousel__item img{
    width: 100%;
  }
  .search{margin: 10px;}

  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .icon-row{
    padding: 10px;
    background-color: #fff;
  }
  .el-input{}
</style>





