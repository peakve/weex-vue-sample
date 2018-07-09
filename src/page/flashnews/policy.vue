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
                        <text class="text_title" @click="goAlertContent()">{{item.title}}</text>
                        <div class="source_time">
                            <text class="source" @click="goAlertFocus(item.category,item.member.memberId,item.source)">来源:{{item.source}}</text>
                            <div class="time_hit">
                                <div class="time_ago">
                                    <image class="clock_image" src="/assets/images/Time.png" resize="cover"></image>
                                    <text class="text_time_ago">1天前</text>
                                </div>
                                <div class="time_ago">
                                    <image class="clock_image" src="/assets/images/click.png"></image>
                                    <text class="text_time_ago">{{item.hits}}次点击</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <image class="content_image" :src="item.banner" resize="cover"></image>
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
var apis = require('../../common/action.js');

export default {
    data () {
      return {
          page : 1,
          size : 20,
          refreshDisplay:'hide',
          refreshText:' ↓ 下拉刷新 ',
          itemsList:[],
      }
    },

    created(){
        var self = this;
        apis.requireNewsList({
	        "category" : "research_report",//这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
	        "page" : self.page, 
	        "size" : self.size
        },function(res){
            if(res.respond.ok){
                //modal.toast({message:(res.list[0].title),duration:1});
                self.itemsList = res.list;
            }else{
                modal.toast({message:'网络请求失败',duration:1});
            }
        });
    },

    methods: {
        goAlertFocus:function(category,memberId,source){
            this.$router.push({
                path : '/alertfocus',
                name : 'alertfocus',
                params : {
                    Category : category,
                    MemberId : memberId,
                    Source : source
                }
            });
        },

        goAlertContent:function(){
            this.$router.push('/alertcontent');
        },
    }
}
</script>