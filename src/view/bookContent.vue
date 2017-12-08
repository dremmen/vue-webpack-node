<template>
	<div class="bookContent">
    	<vue-progress-bar></vue-progress-bar>
        <pullRefresh @onFatherInfinite="onInfinite">
            <div id="pageRead" class="page-read" v-for="(downItem,index) in booksList">
                <content id="readContent" class="page-read-content">
                    <article id="chapterContent" class="read-article" style="font-size: 1.125rem;">
                            <section class="read-section jsChapterWrapper">
                                <h3>{{downItem.title}}</h3>
                                <p v-html="downItem.content"></p>
                            </section>
                    </article>
                </content>
            </div>
            <div class="page-read-top">
                <h1 id="chapterTitle" class="read-book-name">{{bookTitle}}</h1>
            </div>
        </pullRefresh>
	</div>

</template>

<script>
import pullRefresh from "@/components/pull-refresh"
export default{
	name: 'bookContent',
    components: {pullRefresh},
	data(){
		return{
            booksList: [],
            bookTitle: '',
            upCounter: 0, // 下拉更新数据存放数组
            downCounter: 0, // 上拉更多的数据存放数组
        }
	},
    methods: {
        getList(bookId,bookContentId,upOrdown) {
            this.$http.post('./api/book/bookContentById',{
                bookId: this.$route.params.bookId,
                bookContentId: bookContentId
            }).then((response) => {
                if(upOrdown){
                    this.booksList.push(response.body[0])
                }else{
                    this.booksList.unshift(response.body[0])
                }
                this.bookTitle = response.body[0].title
            })
        },
        upRefresh(done){
            this.upCounter++
            let bookContentId = parseInt(this.$route.params.bookContentId) + this.upCounter
            this.getList(this.$route.params.bookId,bookContentId,true);
            done()
        },
        downRefresh(done){
            this.downCounter--
            let bookContentId = parseInt(this.$route.params.bookContentId) + this.downCounter
            if(bookContentId<=0){
                return;
            }
            this.getList(this.$route.params.bookId,bookContentId,false);
            done()
        },
        onInfinite(done,status) {
          if(status){
            this.upRefresh(done);
          }else{
            this.downRefresh(done);
          }
        }
    },
    mounted: function() {
        this.$http.post('./api/book/bookContentById',{
            bookId: this.$route.params.bookId,
            bookContentId: this.$route.params.bookContentId
        }).then((response) => {
            this.booksList.push(response.body[0])
            this.bookTitle = response.body[0].title
        })
    }
}
</script>
<style scoped>
body,html{
    background-color: #c4b395;
}
.pull-refresh-block{background-color: #c4b395;}
.bookContent{padding-top: 2.75rem;color: rgba(0,0,0,.85);}
.page-read-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 44px;
    background: inherit;    
    z-index: 99;
    background-color: #c4b395;
}
.read-book-name {
    font-size: .75rem;
    font-weight: 400;
    position: absolute;
    top: 15px;
    left: 1rem;
    color: rgba(0,0,0,.4);
}
.read-article {
    font-size: 1rem;
    line-height: 1.8;
    overflow: hidden;
    margin: 0 16px;
    text-align: justify;
}

.read-article h3 {
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.2;
    margin: 1em 0;
}
.read-section {
    overflow: hidden;
    min-height: inherit;
}
.read-article p {
    font-size: 1em;
    margin: .1em 0;
}
</style>
