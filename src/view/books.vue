<template>
	<div class="books">
    	<vue-progress-bar></vue-progress-bar>
		<header id="header" class="header" data-l1="41">
			<router-link to="home" class="header-back jsBack"></router-link>
			<h1 class="header-back-title">{{book.name}}</h1>
			<div class="header-operate">
				<router-link id="openSearchPopup" to="home" class="icon icon-search"></router-link>
				<router-link id="openGuide" to="home" class="icon icon-more"></router-link>
			</div>
		</header>
		<div id="bookDetailWrapper" class="module module-merge book-detail-x">
            <img :src="book.images" class="book-cover-blur" :alt="book.name">
            <div class="book-detail-info">
                <div class="book-layout">                        
                    <img :src="book.images" class="book-cover" :alt="book.name">
                    <div class="book-cell">
                        <h2 class="book-title">{{book.name}}</h2>
                        <div class="book-rand-a" role="link">                                
                            <router-link to="/author/4362935" role="option">
                            	{{book.author}}
								<span class="tag-solid red">大神</span>
							</router-link>                                
                        </div>
                        <div class="book-score" role="option">                                
                            <output class="star-group">
                                <span class="star-score">8.1</span>
                            </output>
                            <span class="gray">8.1分/353人评过</span>                                
                        </div>
                        <p class="book-meta" role="option">{{book.type}}</p>
                        <p class="book-meta" role="option">{{book.wordcount}}万字<span class="char-pipe">|</span>{{book.serialize}}</p>
                    </div>
                </div>
                <div class="book-detail-btn" data-read-status="0" data-bookshelf-status="0" data-l1="2">
                    <ul class="btn-group">
                        <li class="btn-group-cell"><router-link to="/book/1010245952/0" class="btn-normal red" id="btnReadBook" data-eid="mqd_G02">免费试读</router-link></li>
                        <li class="btn-group-cell"><router-link to="javascript:" class="btn-normal white" id="btnAddToBookshelf" data-bookshelf-status="" data-eid="mqd_G03" role="button">加入书架</router-link></li>                         
                        <li class="btn-group-cell"><router-link to="javascript:" id="myCart" class="btn-normal white" data-eid="mqd_G04" role="button">VIP订阅</router-link></li>    
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-white">
        	<div class="book-inro">{{book.intro}}</div>
	        <router-link to="booksList" class="book-meta book-status">
	            <div class="book-meta-l">
	               <strong class="book-spt">目录</strong>
	            </div>
	            <div class="book-meta-r">
	                <p class="gray ell">最新更新<span class="char-dot">·</span>{{book.serialize}} <i> </i> {{book.newsTitle}}</p>
	            </div>
	        </router-link>
        </div>
        <div class="module trigger-book-comment" id="book-commnet-container" data-load-status="loading">
            <div class="module-header">
                <h3 class="module-title">书评区</h3><span id="ariaCommNum" class="module-title-desc">
                    <output class="book-comment-count">13096</output>条评论
                </span>
            </div>
            <div class="module-content">
                <ol class="book-ol book-ol-comment module-loading loading-animation" id="book-commnet-list-container" style="overflow: hidden; transition: height 200ms; height: 423px;">    
		            <li class="book-li" data-thread-id="1151518437">
		                <router-link to="/book/1010245952/thread/1151518437" class="book-layout">
		                    <div class="book-author-vv">
		                        <img src="//facepic.qidian.com/qd_face/349573/435229/50" class="book-author-avatar" alt="">
		                    </div>
		                    <div class="book-cell">
		                        <div class="book-meta-comment">
		                            <div class="book-meta-l">花洁雪</div>
		                        </div>
		                        <!-- <h4>投推荐票13张</h4> -->
		                        <p class="book-comment-p comment-p">
		                            投推荐票13张
		                        </p>
		                        <div class="book-meta-comment book-time-count">
		                            <div class="book-meta-l">
		                                <time>13分钟前</time>
		                            </div>
		                            <div class="book-meta-r">
		                                0
		                            </div>
		                        </div>
		                    </div>
		                </router-link>
		            </li>    
		            <li class="book-li" data-thread-id="1146976362">
		                <router-link to="/book/1010245952/thread/1146976362" class="book-layout">
		                    <div class="book-author-vv">
		                        <img src="//facepic.qidian.com/qd_face/349573/122/50" class="book-author-avatar" alt="">
		                    </div>
		                    <div class="book-cell">
		                        <div class="book-meta-comment">
		                            <div class="book-meta-l">迎风发很乱 
										<em class="tag-solid book-tag-honor orange">舵主</em>
									</div>
		                        </div>
		                        <!-- <h4>一楼20币，1千楼封顶，500一结，给个精</h4> -->
		                        <p class="book-comment-p comment-p">
		                            一楼20币，1千楼封顶，500一结，给个精[fn=4]
		                        </p>
		                        <div class="book-meta-comment book-time-count">
		                            <div class="book-meta-l">
		                                <time>16分钟前</time>
		                            </div>
		                            <div class="book-meta-r">
		                                357
		                            </div>
		                        </div>
		                    </div>
		                </router-link>
		            </li>    
		            <li class="book-li" data-thread-id="1140173206">
		                <router-link to="/book/1010245952/thread/1140173206" class="book-layout">
		                    <div class="book-author-vv">
		                        <img src="//facepic.qidian.com/qd_face/349573/1222848/50" class="book-author-avatar" alt="">
		                    </div>
		                    <div class="book-cell">
		                        <div class="book-meta-comment">
		                            <div class="book-meta-l">◆﹏街尾↘扫荡℡ 
										<em class="tag-solid book-tag-honor orange">舵主</em>
									</div>
		                        </div>
		                        <!-- <h4></h4> -->
		                        <p class="book-comment-p comment-p">
		                            我忍，我绝对不看，我要养到过年！顺便建一个楼，每日4推(′▽`〃)
		                        </p>
		                        <div class="book-meta-comment book-time-count">
		                            <div class="book-meta-l">
		                                <time>16分钟前</time>
		                            </div>
		                            <div class="book-meta-r">
		                                160
		                            </div>
		                        </div>
		                    </div>
		                </router-link>
		            </li>
				 </ol>
                <router-link to="/book/1010245952/forum" class="book-li-more book-li-more-comments">更多书评</router-link>
                <router-link to="/book/1010245952/comment" class="book-li-more book-li-write-comment" style="display:none">写书评,抢沙发</router-link>
            </div>
        </div>
        <div class="module">
            <div class="module-header">
                <div class="module-header-l">
                    <h3 class="module-title">本书作者</h3>
                </div>
            </div>
            <div class="module-content">
                <ol class="book-ol book-ol-author">
                    <li class="book-li">
                        <router-link to="/author/4362935" class="book-layout">
                            <div class="book-author-vv" role="option">
                                <img class="book-author-avatar" :src="book.images" :alt="book.author">
                            </div>
                            <div class="book-cell">
                                <div class="book-title-x">
                                    <h4 class="book-title">{{book.author}}</h4>
                                </div>
                                <p class="book-desc">阅文集团大神作家，网络文学知名科幻作家，其作品以激烈的感情冲突著称。</p>
                            </div>
                        </router-link>
                    </li>
                </ol>
            </div>
        </div>
        <div class="module trigger-book-fans-read" data-load-status="loading" data-l1="22">
	        <div class="module-header">
	            <div class="module-header-l">
	                <h3 class="module-title">书友还看过</h3>
	            </div>
	        </div>
            <div class="module-content">
                <div class="module-slide">
                    <ol class="module-slide-ol" id="book-friend-list-container" role="listbox" title="水平列表">
					    <li class="module-slide-li">
					        <router-link to="/book/1009398284" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1009398284/150" class="module-slide-img" alt="逆流纯真年代">
					            <figcaption class="module-slide-caption">逆流纯真年代</figcaption>
					            <p class="module-slide-author">77%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1009550807" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1009550807/150" class="module-slide-img" alt="天九王">
					            <figcaption class="module-slide-caption">天九王</figcaption>
					            <p class="module-slide-author">80%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1010023261" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1010023261/150" class="module-slide-img" alt="从学霸开始">
					            <figcaption class="module-slide-caption">从学霸开始</figcaption>
					            <p class="module-slide-author">90%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1004599900" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1004599900/150" class="module-slide-img" alt="张贤与徐贤">
					            <figcaption class="module-slide-caption">张贤与徐贤</figcaption>
					            <p class="module-slide-author">80%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1009915605" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1009915605/150" class="module-slide-img" alt="奶爸的文艺人生">
					            <figcaption class="module-slide-caption">奶爸的文艺人生</figcaption>
					            <p class="module-slide-author">90%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1010191960" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1010191960/150" class="module-slide-img" alt="大王饶命">
					            <figcaption class="module-slide-caption">大王饶命</figcaption>
					            <p class="module-slide-author">80%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1010106778" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1010106778/150" class="module-slide-img" alt="十周年之最后的问候">
					            <figcaption class="module-slide-caption">十周年之最后的问候</figcaption>
					            <p class="module-slide-author">80%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1009582559" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1009582559/150" class="module-slide-img" alt="随身洞府">
					            <figcaption class="module-slide-caption">随身洞府</figcaption>
					            <p class="module-slide-author">88%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1004976324" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1004976324/150" class="module-slide-img" alt="顾道长生">
					            <figcaption class="module-slide-caption">顾道长生</figcaption>
					            <p class="module-slide-author">89%的用户读过</p>
					        </router-link>
					    </li>
					    <li class="module-slide-li">
					        <router-link to="/book/1010101258" class="module-slide-a">
					            <img src="//qidian.qpic.cn/qdbimg/349573/1010101258/150" class="module-slide-img" alt="逆行我的1997">
					            <figcaption class="module-slide-caption">逆行我的1997</figcaption>
					            <p class="module-slide-author">82%的用户读过</p>
					        </router-link>
					    </li>
        			</ol>
                </div>
            </div>
        </div>
        <foot></foot>
	</div>
</template>

<script>
import foot from '@/components/foot'
export default{
	name: 'books',
	components: {foot},
	data () {
		return{
			book: ''
		}
	},
  	beforeCreate () {
  		this.$http.post('./api/book/bookById',{
  			id: this.$route.params.Id
  		}).then((response) => {
  			console.log(response);
  			this.book = response.body[0];
  		})
	}
}
</script>
<style>
	.books{padding-bottom: .1px;background-color: #f6f7f9;}
	.books .header{z-index: 1;border-bottom: 0;background: 0 0;}
	.book-detail-x {position: relative;overflow: hidden;margin-top: -2.75rem;}
	.book-inro{font-size: .875rem;line-height: 1.5rem;position: relative;overflow: hidden;margin-left: 1rem;padding-right: 1rem;text-align: justify;border-top: 1rem solid transparent;border-bottom: 1rem solid transparent;box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;text-indent: 2.1rem;}
</style>





