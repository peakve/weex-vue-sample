<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        
        <scroller class="scroller"  scroll-direction="horizontal" loadmoreoffset="750px" show-scrollbar=false>
            <div class="tab-i">
                <text  @click="chooseTab(0)" :class="['i-c',navIndex==0?'c-act':'']" ref=actJC>交易所公告</text>
                <div class="j-uline" v-if="navIndex==0"></div>
            </div>
             <div class="tab-i">
                <text  @click="chooseTab(1)" :class="['i-c',navIndex==1?'c-act':'']" >交易所推特</text>
                <div class="j-uline" v-if="navIndex==1"></div>
            </div>
             <div class="tab-i">
                <text  @click="chooseTab(2)" :class="['i-c',navIndex==2?'c-act':'']" >大V</text>
                <div class="j-uline" v-if="navIndex==2"></div>
            </div>
            <div class="tab-i">
                <text  @click="chooseTab(3)" :class="['i-c',navIndex==3?'c-act':'']" >币谈</text>
                <div class="j-uline" v-if="navIndex==3"></div>
            </div>
             
        </scroller>
        
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
        /* left:25%; */
        /* bottom: 0; */
        width: 80%;
        height: 4px;
        background-color: #b4282d;
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
         },
        methods: {
            initJLine:function () {
               
            },

            chooseTab:function (idx,event) {
                this.navIndex=idx;
                modal.toast({ message: idx+'--',  duration: 1 })
                if(idx==0){

                }else if(idx==1){
                    // this.$router.push('/home')
                }else{
                    // this.$router.push({ name: 'bbtop', params: { "symbol": idx }})
                }        

            },
        }
    }
</script>



