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
		<router-link to="/search" class="search"><el-input placeholder="请输入内容" class="input-with-select"></el-input></router-link>
		<div class="icon-row">
			<el-row :gutter="20">
				<el-col :span="6"><div class="grid-content">书架</div></el-col>
				<el-col :span="6"><div class="grid-content">分类</div></el-col>
				<el-col :span="6"><router-link to="/doneBooks" class="grid-content">完结</router-link></el-col>
				<el-col :span="6"><div class="grid-content">排行</div></el-col>
			</el-row>	
		</div>
    <hot-recommend :booksArr="booksArr"></hot-recommend>
    <div class="new-books">          
      <div class="module-header">
        <div class="module-header-l">
          <h3 class="module-title">新书抢鲜</h3>
          <span id="ariaDescNew" class="module-title-desc">24小时热销新书</span>
        </div>
        <div class="module-header-r">
          <router-link to="/newbook/male" class="module-header-btn">更多</router-link>
        </div>
      </div>
      <book-json :booksJson="newBooksArr"></book-json>      
    </div>
    <div class="done-books">          
      <div class="module-header">
        <div class="module-header-l">
          <h3 class="module-title">畅销完本</h3>
          <span id="ariaDescHot" class="module-title-desc">一周热销完本书</span>
        </div>
        <div class="module-header-r">
          <router-link to="/newbook/male" class="module-header-btn">更多</router-link>
        </div>
      </div>
      <book-json :booksJson="doneBooksArr"></book-json> 
    </div>
    <foot></foot>
	</div>
</template>

<script>
import hotRecommend from '@/components/hotRecommend'
import bookJson from '@/components/booksJson'
import foot from '@/components/foot'
export default{
	name: 'home',
  components: {hotRecommend,bookJson,foot},
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
      doneBooksArr: '[]'
		}
	},
  mounted () {
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
<style scoped>
  body,html{padding: 0;margin: 0;}
  .done-books,.new-books{background-color: #fff;margin-top: 1rem;}
  .carousel{margin-bottom: 10px;}
  .el-carousel__item img{
    width: 100%;
  }
  .search{margin: 10px;display: block;}
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    line-height: 36px;
    box-shadow: 1px 0 7px rgba(0,0,0,.2);
    display: block;
  }
  .icon-row{
    padding: 10px;
    background-color: #fff;
  }
</style>





