<template lang="html">
	<div class="pull-refresh-block" :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)">
		<section class="inner" :style="{paddingTop: top+'px'}">
			<header class="pull-refresh">
				<slot name="pull-refresh">
					<span class="refresh-tip">加载中……</span>
				</slot>
			</header>
			<slot>
			</slot>
            <div id="readLoadNext" class="read-load-next load-more">
                <a id="btnLoadNextChapter" href="javascript:" class="btn-normal red" data-size="14" role="button">加载下一章</a>
            </div>
		</section>
	</div>
</template>
<style>
</style>
<script>
	export default {
		props: {
			offset: {
				type: Number,
				default: 90 //默认高度
			},
			enableInfinite: {
				type: Boolean,
				default: true
			},
			enableRefresh: {
				type: Boolean,
				default: true
			},
			dataList: {
				default: false,
				required: false
			}
		},
		data() {
			return {
				top: 0,
				state: 0,
				startX: 0,
				startY: 0,
				touching: false,
				infiniteLoading: false,
				downFlag: false, //用来显示是否加载中
			}
		},
		methods: {
			touchStart(e) {
				this.startY = e.targetTouches[0].pageY;
				this.startX = e.targetTouches[0].pageX;
				this.startScroll = this.$el.scrollTop || 0;
				this.touching = true; //留着有用，不能删除

				this.$el.querySelector('.load-more').style.display = 'block';
			},
			touchMove(e) {
				if(!this.enableRefresh || this.dataList.noFlag || !this.touching) {
					return
				}
				let diff = e.targetTouches[0].pageY - this.startY - this.startScroll

				this.top = Math.pow(diff, 0.8) + ((this.state === 2) ? this.offset : 0)
				if(this.state === 2) { // in refreshing
					return
				}
				if(this.top >= this.offset) {
					this.state = 1
				} else {
					this.state = 0
				}

				let more = this.$el.querySelector('.load-more');
				if(!this.top && this.state === 0) {
					more.style.display = 'block';
				} else {
					more.style.display = 'none';
				}
			},
			touchEnd(e) {
				if(!this.enableRefresh) {
					return
				}
				this.touching = false
				if(this.top >= this.offset) {
					this.top = this.offset
					this.infinite(false);
				}else{
					this.top = 0
				}

				//用于判断滑动是否在原地 ----begin
				let endX = e.changedTouches[0].pageX,
					endY = e.changedTouches[0].pageY,
					dy = this.startY - endY,
					dx = endX - this.startX;

				//如果滑动距离太短  
				if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
					console.log("滑动距离太短")
					return;
				}

				//--------end--------

				if(!this.enableInfinite || this.infiniteLoading) {
					return
				}

				let outerHeight = this.$el.clientHeight,
					innerHeight = this.$el.querySelector('.inner').clientHeight,
					scrollTop = this.$el.scrollTop,
					ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0,
					bottom = innerHeight - outerHeight - scrollTop - ptrHeight;
					
				if(bottom <= this.offset && this.state === 0) {
					this.downFlag = true;
					this.infinite(true);
				} else {
					this.$el.querySelector('.load-more').style.display = 'none';
					this.downFlag = false;
				}
			},
			infinite(status,fn) {
				if(status){
					this.infiniteLoading = true
					fn = this.infiniteDone
				}else{
					fn = this.refreshDone
				}
				setTimeout(() => {
					this.$emit('onFatherInfinite',fn,status);
				}, 0);
			},

			infiniteDone() {
				this.infiniteLoading = false
			},
			refreshDone() {
				this.state = 0
				this.top = 0
			}
		}
	}
</script>