<template>
    <div :class="['wrapper', isIpx()?'w-ipx':'']">
        <scroller class="scroller"  scroll-direction="horizontal" loadmoreoffset="750px" show-scrollbar="false">
            <div class="tab-i">
                <text  @click="chooseChannel(0)" :class="['i-c',navIndex==0?'c-act':'']" ref=t0>资讯</text>
                <div class="j-uline" v-if="navIndex==0"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(1)" :class="['i-c',navIndex==1?'c-act':'']" ref=t1>全球媒体</text>
                <div class="j-uline" v-if="navIndex==1"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(2)" :class="['i-c',navIndex==2?'c-act':'']" ref=t2>交易所公告</text>
                <div class="j-uline" v-if="navIndex==2"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(3)" :class="['i-c',navIndex==3?'c-act':'']" ref=t3>交易所推特</text>
                <div class="j-uline" v-if="navIndex==3"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(4)" :class="['i-c',navIndex==4?'c-act':'']" ref=t4>大V声音</text>
                <div class="j-uline" v-if="navIndex==4"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(5)" :class="['i-c',navIndex==5?'c-act':'']" ref=t5>新币时讯</text>
                <div class="j-uline" v-if="navIndex==5"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseChannel(6)" :class="['i-c',navIndex==6?'c-act':'']" ref=t6>监管政策</text>
                <div class="j-uline" v-if="navIndex==6"></div>
            </div>
        </scroller>
 
    </div>
</template>

<style scoped>
.wrapper{
    position: fixed;
    top: 114px; 
    left: 0;right: 0;
    height: 74px;
    z-index: 10;
    background-color: #fafafa;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
}
.w-ipx{
    top: 154px;    
}
.scroller{
    height: 74px;
    padding-right: 50px;
    flex-direction: row;
}
.tab-i{
    flex-flow: column;
    align-items: center;
    width: 165px;
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
.more{
    position: absolute;
    top:0;
    right:0;
    height: 52px;
    width: 50px;
    background-color: #fafafa;
    text-align: center;
    padding-top: 10px;
    opacity: 0.6;
    box-shadow:-6px -4px 4px #fafafa;
}
</style>

<script>
    const dom = weex.requireModule('dom');
    const animation = weex.requireModule('animation');
    const modal = weex.requireModule('modal');

    export default {
        data() {
            return {
                jLPosition:"left:30px;width:82px;",
                navIndex:0,
                sortBy: '', // 筛选的条件
                Activity:[],
                Delivery:[],
                delivery_mode: null, // 选中的配送方式
                support_ids: [], // 选中的商铺活动列表
                filterNum: 0, // 所选中的所有样式的集合
            }
        },

        created() {
            //this.$router.push('/information');
        },

        mounted() {
            this.initJLine();
            //this.Activity=[{id:"111",name:'看门'},{id:"112",name:'看门'}];
            //this.Activity.forEach((item, index) => {
	    		//this.support_ids[index] = {status: false, id: item.id};
           // });
            //this.Delivery=[{id:'2341',text:'看见1'},{id:'2342',text:'看见2'},{id:'2343',text:'看见3'}];
        },

        methods:{
            initJLine:function () {
                //if(!this.$refs.actJC) return;
                //let l = this.$refs.actJC.$el.offsetLeft;
                //let w = this.$refs.actJC.$el.offsetWidth;
                //this.jLPosition = ["left:",l+30,"px;","width:",w-60,"px;"].join("");
            },

            chooseChannel:function (idx,event) {
                this.navIndex=idx;
                //modal.toast({ message: idx+'--',  duration: 1 });
                if(idx==0){
                    //modal.toast({ message: '点击了标签页',  duration: 1 });
                    this.$router.push('/information');
                }else if(idx==1){
                    this.$router.push('/globalmedia');
                }else if(idx == 2){
                    this.$router.push('/exchangenotice');
                }else if(idx == 3){
                    this.$router.push('/exchangetwitter');
                }else if(idx == 4){
                    this.$router.push('/voice');
                }else if(idx == 5){
                    this.$router.push('/newcoin');
                }else if(idx == 6){
                    this.$router.push('/policy');
                }

                const el=this.$refs['t'+idx];
                const result = dom.getComponentRect(el, option => {
                    if(option.size.left>420){
                        dom.scrollToElement(el, { offset: -option.size.left/2 });
                    }
                });
            },

        },
    }
</script>