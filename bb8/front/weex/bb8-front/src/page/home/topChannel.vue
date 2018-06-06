<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        
        <scroller class="scroller"  scroll-direction="horizontal" loadmoreoffset="750px" show-scrollbar=false>
            <div class="tab-i">
                <text  @click="chooseChannel(0)" :class="['i-c',navIndex==0?'c-act':'']" ref=t0>自选</text>
                <div class="j-uline" v-if="navIndex==0"></div>
            </div>
             <div class="tab-i">
                <text  @click="chooseChannel(1)" :class="['i-c',navIndex==1?'c-act':'']" ref=t1>市值</text>
                <div class="j-uline" v-if="navIndex==1"></div>
            </div>
             <div class="tab-i">
                <text  @click="chooseChannel(2)" :class="['i-c',navIndex==2?'c-act':'']" ref=t2>涨幅</text>
                <div class="j-uline" v-if="navIndex==2"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(3)" :class="['i-c',navIndex==3?'c-act':'']" ref=t3>bb8</text>
                <div class="j-uline" v-if="navIndex==3"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(4)" :class="['i-c',navIndex==4?'c-act':'']" ref=t4>币安</text>
                <div class="j-uline" v-if="navIndex==4"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(5)" :class="['i-c',navIndex==5?'c-act':'']" ref=t5>Gate.io</text>
                <div class="j-uline" v-if="navIndex==5"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(6)" :class="['i-c',navIndex==6?'c-act':'']" ref=t6>火币Pro</text>
                <div class="j-uline" v-if="navIndex==6"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(7)" :class="['i-c',navIndex==7?'c-act':'']" ref=t7>OKEx</text>
                <div class="j-uline" v-if="navIndex==7"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(8)" :class="['i-c',navIndex==8?'c-act':'']" ref=t8>Bittrex</text>
                <div class="j-uline" v-if="navIndex==8"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(9)" :class="['i-c',navIndex==9?'c-act':'']" ref=t9>Bitfinex</text>
                <div class="j-uline" v-if="navIndex==9"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(10)" :class="['i-c',navIndex==10?'c-act':'']" ref=t10>火币Pro</text>
                <div class="j-uline" v-if="navIndex==10"></div>
            </div>
            <div class="tab-i"></div>
           
        </scroller>
        <!-- <div class="more" @click="chooseType('activity')">
	    			<span :class="{category_title: sortBy == 'activity'}">筛选</span>
	    			<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
		    			<polygon points="0,3 10,3 5,8"/>
		    		</svg>
    	</div> -->
        <text class="more iconfont">&#xe661;</text>
        <!-- <section class="sort_container">
        <div class="sort_item" :class="{choose_type:sortBy == 'activity'}">
    			<div class="sort_item_container" @click="chooseType('activity')">
	    			<span :class="{category_title: sortBy == 'activity'}">筛选</span>
	    			<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
		    			<polygon points="0,3 10,3 5,8"/>
		    		</svg>
    			</div>
	    		<transition name="showlist">
	    			<section v-if="sortBy == 'activity'" class="sort_detail_type filter_container">
	    				<section style="width: 100%;">
	    					<header class="filter_header_style">配送方式</header>
	    					<ul class="filter_ul">
	    						<li v-for="item in Delivery" :key="item.id" class="filter_li" @click="selectDeliveryMode(item.id)">
	    							<svg :style="{opacity: (item.id == 0)&&(delivery_mode !== 0)? 0: 1}">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="delivery_mode == item.id? '#selected':'#fengniao'"></use>
									</svg>
	    							<span :class="{selected_filter: delivery_mode == item.id}">{{item.text}}</span>
	    						</li>
	    					</ul>
	    				</section>
	    				<section style="width: 100%;">
	    					<header class="filter_header_style">商家属性（可以多选）</header>
	    					<ul class="filter_ul" style="paddingBottom: .5rem;">
	    						<li v-for="(item,index) in Activity" :key="item.id" class="filter_li" @click="selectSupportIds(index, item.id)">
	    							<svg v-if="support_ids[index].status" class="activity_svg">
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
									</svg>
	    							<span class="filter_icon" :style="{color: '#' + item.icon_color, borderColor: '#' + item.icon_color}" v-if="!support_ids[index].status">{{item.icon_name}}</span>
	    							<span :class="{selected_filter: support_ids[index].status}">{{item.name}}</span>
	    						</li>
	    					</ul>
	    				</section>
	    				<footer class="confirm_filter">
	    					<div class="clear_all filter_button_style" @click="clearSelect">清空</div>
	    					<div class="confirm_select filter_button_style" @click="confirmSelectFun">确定<span v-if="filterNum">({{filterNum}})</span></div>
	    				</footer>
	    			</section>
	    		</transition>
    		</div>
        </section>
        <transition name="showcover">
    		<div class="back_cover" v-if="sortBy"></div>
    	</transition> -->
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        top: 114px;
        left: 0;right: 0;
        height: 54px;
        z-index: 10;
        background-color: #fafafa;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .w-ipx{
        top: 154px;
    }
    .tab-i{
       flex-flow: column;
       align-items:center;
       justify-content:center
    }
    .scroller{
        height: 54px;
        padding-right: 50px;
        flex-direction: row;
    }
    .i-c{
        padding-top:10px;
        padding-left: 45px;
        padding-right: 45px;
        padding-bottom:6px;
        font-size: 26px;
        color:#333;
    }
    .c-act{
        color:#b4282d;
    }
    .j-uline{
        /* position: absolute; */
        /* left: 30px; */
        /* left:25%;
        bottom: 0; */
        width: 80%;
        height: 4px;
        background-color: #b4282d;
    }
    .more{
        position: absolute;
        top:0;
        right:0;
        height: 52px;
        width: 80px;
        background-color: #fafafa;
        text-align: center;
        padding-top: 10px;
        opacity: 0.96;
        box-shadow:-6px -4px 4px #fafafa;
    }
</style>



<script>
    const dom = weex.requireModule('dom');
    // dom.scrollToElement(el, { offset: 0 })
    const animation = weex.requireModule('animation')
    const modal = weex.requireModule('modal')
    //import bbtop from './bbtop.vue'
    export default {
        data () {
            return {
                jLPosition:"left:30px;width:82px;",
                 navIndex:1,
                 sortBy: '', // 筛选的条件
                 Activity:[],
                 Delivery:[],
                 delivery_mode: null, // 选中的配送方式
                 support_ids: [], // 选中的商铺活动列表
                 filterNum: 0, // 所选中的所有样式的集合

            }
        },
        mounted () {
           this.initJLine();
           this.Activity=[{id:"111",name:'看门'},{id:"112",name:'看门'}];
           this.Activity.forEach((item, index) => {
	    		this.support_ids[index] = {status: false, id: item.id};
            })
            this.Delivery=[{id:'2341',text:'看见1'},{id:'2342',text:'看见2'},{id:'2343',text:'看见3'}];
        },
        methods: {
            initJLine:function () {
                if(!this.$refs.actJC) return;
               let l = this.$refs.actJC.$el.offsetLeft;
               let w = this.$refs.actJC.$el.offsetWidth;
               this.jLPosition = ["left:",l+30,"px;","width:",w-60,"px;"].join("");
            },

            chooseChannel:function (idx,event) {
                this.navIndex=idx;
                modal.toast({ message: idx+'--',  duration: 1 })
                if(idx==0){

                }else if(idx==1){
                    this.$router.push('/home')
                }else{
                    this.$router.push({ name: 'bbtop', params: { "symbol": idx }})
                }

                const el=this.$refs['t'+idx]
                const result = dom.getComponentRect(el, option => {
                        if(option.size.left>420){
                            dom.scrollToElement(el, { offset: -option.size.left/2 })
                        }      
                });
               

            //     const _target = event.target;
            //     const result = dom.getComponentRect(_target, option => {
                    
            //     modal.toast({ message: option,  duration: 1 })
            //         // console.log('getComponentRect:', option)
            //         // this.size = option.size


            //          //  modal.toast({ message: _target,  duration: 1 })
            //     // modal.toast({ message: _target.offsetLeft+"---",  duration: 1 })
            //     // console.log(_target);
            // //    if(_target.dataset.act !== "j-c") return;
            //     let l = _target.offsetLeft || option.size.left;
            //     let w =  _target.offsetWidth || option.size.width;
            //     //  console.log(l+'-'+w);
            //     // modal.toast({ message: 'top'+l,  duration: 1 })

            //     if(w<=0) return;

            // //      let ll = this.$refs.actJC.$el.offsetLeft;
            // //    let lw = this.$refs.actJC.$el.offsetWidth;
            // //    console.log(ll+'-'+lw);

            //     this.jLPosition = {"left:":(l+30)+"px;","width:":(w-60)+"px;"};

            //     // animation.transition(this.$refs.jcLine, {
            //     //     styles: {
            //     //        left : l+30+"px",
            //     //         width : w-60+"px"
            //     //     },
            //     //     duration: 300, //ms
            //     //     timingFunction: 'ease',
            //     //     delay: 0 //ms
            //     // }, function () {
            //     //     //console.log(l);
            //     //     modal.toast({ message: l });
            //     // });

            //     this.$router.push({ name: 'bbtop', params: { "symbol": l }})

            //     // this.$router.push({ path: '/home/bbtop/', params: { "symbol": l }})
            //     // this.$router.push('/bbtop');
                

            //     //  this.$router.push({ path: '/bb'});

            //     // modal.toast({ message: l,  duration: 1 })
            //     })

            },
            async chooseType(type){
    		if (this.sortBy !== type) {
    			this.sortBy = type;
    			//food选项中头部标题发生改变，需要特殊处理
    			if (type == 'food') {
					this.foodTitle = '分类';
    			}else{
    				//将foodTitle 和 headTitle 进行同步
    				this.foodTitle = this.headTitle;
    			}
    		}else{
    			//再次点击相同选项时收回列表
    			this.sortBy = '';
    			if (type == 'food') {
    				//将foodTitle 和 headTitle 进行同步
    				this.foodTitle = this.headTitle;
    			}
            }
             //只有点击清空按钮才清空数据，否则一直保持原有状
            },
            clearSelect :function(){
                
            },
            confirmSelectFun:function(){
                //状态改变时，因为子组件进行了监听，会重新获取数据进行筛选
                // this.confirmStatus = !this.confirmStatus;
                this.sortBy = '';
            },
            selectDeliveryMode:function(id){
                
            },
       
        }
    }
</script>
// style lang="scss" scoped>
//     @import '../../assets/style/mixin';
// 	.food_container{
// 		padding-top: 3.6rem;
// 	}
// 	.sort_container{
// 		background-color: #fff;
// 		border-bottom: 0.025rem solid #f1f1f1;
// 		position: fixed;
// 		top: 1.95rem;
// 		right: 0;
// 		width: 100%;
// 		display: flex;
// 		z-index: 13;
// 		box-sizing: border-box;
// 		.sort_item{
// 			@include sc(0.55rem, #444);
// 			@include wh(33.3%, 1.6rem);
// 			text-align: center;
// 			line-height: 1rem;
// 			.sort_item_container{
// 				@include wh(100%, 100%);
// 				position: relative;
// 				z-index: 14;
// 				background-color: #fff;
// 				box-sizing: border-box;
// 				padding-top: .3rem;
// 				.sort_item_border{
// 					height: 1rem;
// 					border-right: 0.025rem solid $bc;
// 				}
// 			}
// 			.sort_icon{
// 				vertical-align: middle;
// 				transition: all .3s;
// 				fill:#666;
// 			}

// 		}
// 		.choose_type{
// 			.sort_item_container{

// 				.category_title{
// 					color: $blue;
// 				}
// 				.sort_icon{
// 					transform: rotate(180deg);
// 					fill:$blue;
// 				}
// 			}
// 		}
// 		.showlist-enter-active, .showlist-leave-active {
// 			transition: all .3s;
// 			transform: translateY(0);
// 		}
// 		.showlist-enter, .showlist-leave-active {
// 			opacity: 0;
// 			transform: translateY(-100%);
// 		}
// 		.sort_detail_type{
// 			width: 100%;
// 			position: absolute;
// 			display:flex;
// 			top: 1.6rem;
// 			left: 0;
// 			border-top: 0.025rem solid $bc;
// 			background-color: #fff;
// 		}
// 		.category_container{
// 			.category_left{
// 				flex: 1;
// 				background-color: #f1f1f1;
// 				height: 16rem;
// 				overflow-y: auto;
// 				span{
// 					@include sc(0.5rem, #666);
// 					line-height: 1.8rem;
// 				}
// 				.category_left_li{
// 					@include fj;
// 					padding:0 0.5rem;
// 					.category_icon{
// 						@include wh(.8rem, .8rem);
// 						vertical-align: middle;
// 						margin-right: .2rem;
// 					}
// 					.category_count{
// 						background-color: #ccc;
// 						@include sc(.4rem, #fff);
// 						padding: 0 .1rem;
// 						border: 0.025rem solid #ccc;
// 						border-radius: 0.8rem;
// 						vertical-align: middle;
// 						margin-right: 0.25rem;
// 					}
// 					.category_arrow{
// 						vertical-align: middle;
// 					}
// 				}
// 				.category_active{
// 					background-color: #fff;
// 				}
// 			}
// 			.category_right{
// 				flex: 1;
// 				background-color: #fff;
// 				padding-left: 0.5rem;
// 				height: 16rem;
// 				overflow-y: auto;
// 				.category_right_li{
// 					@include fj;
// 					height: 1.8rem;
// 					line-height: 1.8rem;
// 					padding-right: 0.5rem;
// 					border-bottom: 0.025rem solid $bc;
// 					span{
// 						color: #666;
// 					}
// 				}
// 				.category_right_choosed{
// 					span{
// 						color: $blue;
// 					}
// 				}
// 			}
// 		}
// 		.sort_list_container{
// 			width: 100%;
// 			.sort_list_li{
// 				height: 2.5rem;
// 				display: flex;
// 				align-items: center;
// 				svg{
// 					@include wh(0.7rem, 0.7rem);
// 					margin:0 .3rem 0 .8rem;
// 				}
// 				p{
// 					line-height: 2.5rem;
// 					flex: auto;
// 					text-align: left;
// 					text-indent: 0.25rem;
// 					border-bottom: 0.025rem solid $bc;
// 					@include fj;
// 					align-items: center;
// 					span{
// 						color: #666;
// 					}
// 				}
// 				.sort_select{
// 					span{
// 						color: $blue;
// 					}
// 				}
// 			}
// 		}
// 		.filter_container{
// 			flex-direction: column;
// 			align-items: flex-start;
// 			min-height: 10.6rem;
// 			background-color: #f1f1f1;
// 			.filter_header_style{
// 				@include sc(0.4rem, #333);
// 				line-height: 1.5rem;
// 				height: 1.5rem;
// 				text-align: left;
// 				padding-left: .5rem;
// 				background-color: #fff;
// 			}
// 			.filter_ul{
// 				display: flex;
// 				flex-wrap: wrap;
// 				padding: 0 0.5rem;
// 				background-color: #fff;
// 				.filter_li{
// 					display: flex;
// 					align-items: center;
// 					border: 0.025rem solid #eee;
// 					@include wh(4.7rem, 1.4rem);
// 					margin-right: 0.25rem;
// 					border-radius: 0.125rem;
// 					padding: 0 0.25rem;
// 					margin-bottom: 0.25rem;
// 					svg{
// 						@include wh(.8rem, .8rem);
// 						margin-right: 0.125rem;
// 					}
// 					span{
// 						@include sc(0.4rem, #333);
// 					}
// 					.filter_icon{
// 						@include wh(.8rem, .8rem);
// 						font-size: 0.5rem;
// 						border: 0.025rem solid $bc;
// 						border-radius: 0.15rem;
// 						margin-right: 0.25rem;
// 						line-height: .8rem;
// 						text-align: center;
// 					}
// 					.activity_svg{
// 						margin-right: .25rem;
// 					}
// 					.selected_filter{
// 						color: $blue;
// 					}
// 				}
// 			}
// 			.confirm_filter{
// 				display: flex;
// 				background-color: #f1f1f1;
// 				width: 100%;
// 				padding: .3rem .2rem;
// 				.filter_button_style{
// 					@include wh(50%, 1.8rem);
// 					font-size: 0.8rem;
// 					line-height: 1.8rem;
// 					border-radius: 0.2rem;
// 				}
// 				.clear_all{
// 					background-color: #fff;
// 					margin-right: .5rem;
// 					border: 0.025rem solid #fff;
// 				}
// 				.confirm_select{
// 					background-color: #56d176;
// 					color: #fff;
// 					border: 0.025rem solid #56d176;
// 					span{
// 						color: #fff;
// 					}
// 				}
// 			}
// 		}
// 	}
// 	.showcover-enter-active, .showcover-leave-active {
// 		transition: opacity .3s
// 	}
// 	.showcover-enter, .showcover-leave-active {
// 		opacity: 0
// 	}
// 	.back_cover{
// 		position: fixed;
// 		@include wh(100%, 100%);
// 		z-index: 10;
// 		background-color: rgba(0,0,0,0.3);
// 	}
// </style>


