<template>
	<div class="bookContent">
    	<vue-progress-bar></vue-progress-bar>
    	<div id="pageRead" class="page-read ">
		    <content id="readContent" class="page-read-content">
		        <article id="chapterContent" class="read-article" style="font-size: 1.125rem;">
	                <section class="read-section jsChapterWrapper">
	                    <h3>现在还没开通打赏，请大家推荐收藏就好。</h3>
	                    <p>		因为起点合同流程还没走完，所以显示还是未签约状态，有朋友提及了打赏的问题，心意领了，大家就先收藏，安静看书吧：）</p>
	                </section>
				</article>
		    </content>    
		    <div class="page-read-top">
		        <h1 id="chapterTitle" class="read-book-name">现在还没开通打赏，请大家推荐收藏就好。</h1>
		    </div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'bookContent',
	data(){
		return{}
	}
}
</script>
<style>
body,html{
    background-color: #c4b395;
}
.bookContent{padding-top: 2.75rem;color: rgba(0,0,0,.85);}
.page-read-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 44px;
    background: inherit;
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
    min-height: calc(100vh - 44px);
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
    text-indent: 2.1em;
}
</style>





