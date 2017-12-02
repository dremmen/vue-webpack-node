<template>
	<div class="booksList">
    	<vue-progress-bar></vue-progress-bar>
		<header id="header" class="header" data-l1="41">
			<router-link to="home" class="header-back jsBack"></router-link>
			<h1 class="header-back-title">重燃</h1>
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
			                <h4 class="chapter-sub-title">共<output>5</output>章</h4>
			            </div>
			            <div class="module-header-r">
			                <a id="reverse" href="javascript:" class="module-header-btn dark" role="button">倒序</a>
			            </div>
			        </div>
			        <ol id="volumes" class="chapter-ol chapter-ol-catalog">
						<li class="chapter-bar">作品相关</li>
					    <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="bookContent" class="chapter-li-a " data-chapter-id="383178576" role="option">
				                <span class="chapter-index ">现在还没开通打赏，请大家推荐收藏就好。</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383245427" class="chapter-li-a " data-chapter-id="383245427" role="option">
				                <span class="chapter-index ">书评——乱世飞白《那时，我们年少》</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383272312" class="chapter-li-a " data-chapter-id="383272312" role="option">
				                <span class="chapter-index ">书评——林唯楚《青春、美学、热爱》</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383361354" class="chapter-li-a " data-chapter-id="383361354" role="option">
				                <span class="chapter-index ">书评——乱世飞白《夜空中最亮的星，请指引我前行》</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383889843" class="chapter-li-a " data-chapter-id="383889843" role="option">
				                <span class="chapter-index ">书评——乱世飞白《再见》</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/384707231" class="chapter-li-a " data-chapter-id="384707231" role="option">
				                <span class="chapter-index ">书评——By“林下咏絮”</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/387957234" class="chapter-li-a " data-chapter-id="387957234" role="option">
				                <span class="chapter-index ">书评——云动夜音《那些美好，如今依在》</span>
				            </router-link>
				        </li>
				    	<li class="chapter-bar">第一卷 梦回吹角连营</li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383144102" class="chapter-li-a " data-chapter-id="383144102" role="option">
				                <span class="chapter-index ">第一章 光阴不散场</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383201942" class="chapter-li-a " data-chapter-id="383201942" role="option">
				                <span class="chapter-index ">第二章 不一样的世界</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383348082" class="chapter-li-a " data-chapter-id="383348082" role="option">
				                <span class="chapter-index ">第三章 所爱隔山海</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383477002" class="chapter-li-a " data-chapter-id="383477002" role="option">
				                <span class="chapter-index ">第四章 不悔，无畏</span>
				            </router-link>
				        </li>
				        <li class="chapter-li jsChapter" role="&quot;link&quot;">
				            <router-link to="/book/1010245952/383627228" class="chapter-li-a " data-chapter-id="383627228" role="option">
				                <span class="chapter-index ">第五章 岁月诗，永不止</span>                
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
		return{}
	}
}
</script>
<style>
	.booksList{padding-bottom: .1px;background-color: #f6f7f9;}
	.booksList .header {
	    border-bottom: 0 none;
	}	
</style>





