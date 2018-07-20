<template>
    <div :class="['wrapper', isIpx()?'w-ipx':'']">
        <scroller class="scroller"  scroll-direction="horizontal" loadmoreoffset="750px" show-scrollbar=false>
            <div class="tab-i">
                <text  @click="chooseChannel(0)" :class="['i-c',navIndex==0?'c-act':'']" ref=t0>{{title}}</text>
                <div class="j-uline" v-if="navIndex==0"></div>
            </div>
            <div class="tab-ia">
                <text  @click="chooseChannel(1)" :class="['i-c',navIndex==1?'c-act':'']" ref=t1>简介</text>
                <div class="j-ulinea" v-if="navIndex==1"></div>
            </div>
        </scroller>
    </div>
</template>

<style scoped>
.wrapper{
    position: fixed;
    top: 447px;
    left: 0;right: 0;
    height: 74px;
    z-index: 10;
    background-color: #fafafa;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
}
.w-ipx{
    top: 487px;
}
.tab-i{
    width: 165px;
    flex-flow: column;
    align-items: center;
}
.tab-ia{
    flex-flow: column;
    align-items: center;
    width: 90px;
}
.scroller{
    height: 74px;
    flex-direction: row;
}
.i-c{
    padding-top:20px;
    padding-bottom:21px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 25px;
    color:#999;
}
.c-act{
    color:black;
}
.j-uline{
    align-items: center;
    width: 125px;
    height: 2px;
    background-color: black;
}
.j-ulinea{
    align-items: center;
    width: 50px;
    height: 2px;
    background-color: black;
}
</style>

<script>
    const dom = weex.requireModule('dom');
    const animation = weex.requireModule('animation');
    const modal = weex.requireModule('modal');

    export default{
        props: ['category','memberId','source'],

        data() {
            return {
                // jLPosition:"left:30px;width:82px;",
                // navIndex:0,
                // sortBy: '', // 筛选的条件
                // Activity:[],
                // Delivery:[],
                // delivery_mode: null, // 选中的配送方式
                // support_ids: [], // 选中的商铺活动列表
                // filterNum: 0, // 所选中的所有样式的集合
                title:"资讯",
            }
        },

        created() {
            var self = this;
            //modal.toast({message:"tab"+(self.category+self.memberId),duration:1});
            this.selectFocusDetail();
            if(self.category=='default'){
                self.title = "资讯";
            }else if(self.category=='default_en'){
                self.title = "全球媒体";
            }else if(self.category=='ex_notice'){
                self.title = "交易所公告";
            }else if(self.category=='ex_twitter'){
                self.title = "交易所推特";
            }else if(self.category=='bv'){
                self.title = "大V声音";
            }else if(self.category=='newcoin'){
                self.title = "新币时讯";
            }else if(self.category=='research_report'){
                self.title = "监管政策";
            }
        },

        mounted() {
            this.initJLine();
            // this.Activity=[{id:"111",name:'看门'},{id:"112",name:'看门'}];
            // this.Activity.forEach((item, index) => {
	    	// 	this.support_ids[index] = {status: false, id: item.id};
            // });
            // this.Delivery=[{id:'2341',text:'看见1'},{id:'2342',text:'看见2'},{id:'2343',text:'看见3'}];
            //modal.toast({message:self.msg,duration:1});
        },

        methods:{
            initJLine:function () {
                // if(!this.$refs.actJC) return;
                // let l = this.$refs.actJC.$el.offsetLeft;
                // let w = this.$refs.actJC.$el.offsetWidth;
                // this.jLPosition = ["left:",l+30,"px;","width:",w-60,"px;"].join("");
            },

            chooseChannel:function (idx,event) {
                var self = this;
                this.navIndex=idx;
                //modal.toast({ message: idx+'--',  duration: 1 });

                if(idx==0){
                    this.selectFocusDetail();
                }else if(idx==1){
                    this.$router.push({
                        path:'/synopsis',
                        query:{
                            MemberId:self.memberId
                        }
                    });
                }
                const el=this.$refs['t'+idx];
                const result = dom.getComponentRect(el, option => {
                    if(option.size.left>420){
                        dom.scrollToElement(el, { offset: -option.size.left/2 });
                    }
                });
            },

            selectFocusDetail:function(){
                var self = this;
                if((self.category=='default' || self.category=='default_en' || self.category=='research_report')){
                    this.$router.push({
                        path:'/focusDetail',
                        query:{
                            Category:self.category,
                            MemberId:self.memberId
                        }
                    });
                        // let params = this.getParamsByJson({
                        //     Category:self.category,
                        //     MemberId:self.memberId,
                        //     //Source : source
                        // });
                        // this.jumpUrl("/focusDetail",params);
                }else if((self.category=='ex_notice' || self.category=='newcoin')){
                    this.$router.push({
                        path:'/focusDetail1',
                        query:{
                            Category:self.category,
                            MemberId:self.memberId
                        }
                    });
                        // let params = this.getParamsByJson({
                        //     Category:self.category,
                        //     MemberId:self.memberId,
                        //     //Source : source
                        // });
                        // this.jumpUrl("/focusDetail1",params);
                }else if(self.category=='ex_twitter'){
                    this.$router.push({
                        path:'/focusDetail2',
                        query:{
                            Category:self.category,
                            MemberId:self.memberId
                        }
                    });
                        // let params = this.getParamsByJson({
                        //     Category:self.category,
                        //     MemberId:self.memberId,
                        //     //Source : source
                        // });
                        // this.jumpUrl("/focusDetail2",params);
                }else if(self.category=='bv'){
                    this.$router.push({
                        path:'/focusDetail3',
                        query:{
                            Category:self.category,
                            MemberId:self.memberId
                        }
                    });
                        // let params = this.getParamsByJson({
                        //     Category:self.category,
                        //     MemberId:self.memberId,
                        //     //Source : source
                        // });
                        // this.jumpUrl("/focusDetail3",params);
                }
            },

        },
    }
</script>