<template>
    <div class="wrapper">
        <list class="information_list">
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           <cell v-for="(item,index) in itemsList">
                <div class="information_content">
                    <div class="title_sourece_time">
                        <text class="text_title" @click="goAlertContent()">泰国ICO终于合法，或促多国重新审视加密货币与ICO</text>
                        <div class="source_time">
                            <text class="source" @click="goAlertFocus('default')">来源:36氪</text>
                            <div class="time_hit">
                                <div class="time_ago">
                                    <image class="clock_image" src="/assets/images/b.png" resize="cover"></image>
                                    <text class="text_time_ago">1天前</text>
                                </div>
                                <div class="time_ago">
                                    <image class="clock_image" src="/assets/images/b.png"></image>
                                    <text class="text_time_ago">150次点击</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <image class="content_image" src="/assets/images/b.png" resize="cover"></image>
                </div>
           </cell>
           <loading @loading="loadingData" :display="loadingDisplay" v-if="showload">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text">{{loadingText}}</text>
                </div>
           </loading>
        </list>
    </div>
</template>

<style scoped>
.wrapper{
    margin-top:54px;
}
.refreshOut{
    width: 750;
    padding-top: 10;
    padding-bottom: 10;
    align-items: center;
}
.indicator{
    color: grey;
    margin-bottom: 30px;
}
.information_content{
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1px; 
    border-bottom-color: #ededed;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 20px;
    padding-left: 20px;
}
.title_sourece_time{
    flex-direction: column;
    width: 480px;
    margin-top: 5px;  
    margin-right: 10px; 
}
.text_title{
    width: 480px;
    font-size: 25px;
    font-weight: 700;
}
.source_time{
    width: 480px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top:25px;
}
.source{
    align-items: center;
    justify-content: flex-start;
    color: #36a0ff;
}
.time_hit{
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
}
.time_ago{
    align-items: center;
    flex-direction: row;
    margin-right: 10px;
}
.clock_image{
    width: 32px;
    height: 32px;
    margin-right: 5px;
}
.text_time_ago{
    color: #787878;
}
.content_image{
    width: 250px;
    height: 120px;
    padding-right: 30px; 
}
</style>

<script>
const dom = weex.requireModule('dom');
const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal');
export default {
    data () {
      return {
          refreshDisplay:'hide',
          refreshText:' ↓ 下拉刷新 ',
          itemsList:[
              {title:'数字广告行业虚假流量严重，Lucidity想用区块链提高供应链透明度'},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {}
          ],
      }
    },

    created(){
        //modal.toast({ message: '进入information页面！',  duration: 2 });
    },

    methods: {
        goAlertFocus:function(category){
            this.$router.push('/alertfocus');
        },

        goAlertContent:function(){
            this.$router.push('/alertcontent');
        },
    }
}
</script>