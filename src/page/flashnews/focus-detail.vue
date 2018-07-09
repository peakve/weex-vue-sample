<template>
<div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">

    <div class="detail_type" v-show="(category=='default' || category=='default_en' || category=='research_report')">
        <list class="information_list">
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           <cell v-for="(item,index) in itemsList">
                <div class="information_content">
                    <image class="content_image" :src="item.banner" resize="cover"></image>
                    <div class="title_sourece_time">
                        <text class="text_title" @click="goAlertContent()">{{item.title}}</text>
                        <text class="text_abstract" @click="goAlertContent()">{{item.abs}}</text>
                        <div class="source_time">
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
           </cell>
           <loading @loading="loadingData" :display="loadingDisplay" v-show="showload">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text">{{loadingText}}</text>
                </div>
           </loading>
        </list>
    </div>

    <div class="detail_type" v-show="(category=='ex_notice' || category=='newcoin' )">
        <list class="information_list">
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           <cell v-for="(item,index) in itemsList">
                <div class="information_content">
                    <div class="title_sourece_time_match">
                        <text class="text_title_match" @click="goAlertContent()">{{item.title}}</text>
                        <text class="text_abstract_match" @click="goAlertContent()">{{item.abs}}
                            <div class="time_ago">
                                <image class="clock_image" src="/assets/images/Time.png" resize="cover"></image>
                                <text class="text_time_ago">1天前</text>
                            </div>
                            <div class="time_ago">
                                <image class="clock_image" src="/assets/images/click.png"></image>
                                <text class="text_time_ago">{{150}}次点击</text>
                            </div>
                        </div>
                    </div>
                </div>
           </cell>
           <loading @loading="loadingData" :display="loadingDisplay" v-show="showload">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text">{{loadingText}}</text>
                </div>
           </loading>
        </list>
    </div>

    <div class="detail_type" v-show="(category=='ex_twitter')">
        <list class="information_list">
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           <cell v-for="(item,index) in itemsList">
                <div class="information_content">
                    <div class="title_sourece_time_match">
                        <text class="text_abstract_match" @click="goAlertContent()">{{item.content}}</text>
                        <text class="translate_text">翻译</text>
                        <div class="source_time_match">
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
           </cell>
           <loading @loading="loadingData" :display="loadingDisplay" v-show="showload">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text">{{loadingText}}</text>
                </div>
           </loading>
        </list>
    </div>

    <div class="detail_type" v-show="(category=='bv')">
        <list class="information_list">
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           <cell v-for="(item,index) in itemsList">
                <div class="information_content">
                    <div class="title_sourece_time_match">
                        <text class="text_abstract_match" @click="goAlertContent()">{{item.content}}</text>
                        <!--<text class="translate_text">翻译</text>-->
                        <div class="source_time_match">
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
           </cell>
           <loading @loading="loadingData" :display="loadingDisplay" v-show="showload">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text">{{loadingText}}</text>
                </div>
           </loading>
        </list>
    </div>

</div>
</template>

<style>
.wrapper{
    position: fixed;
    left: 0;right: 0;
    margin-top: 501px;
}
.w-ipx{
    top: 154px;
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
.title_sourece_time_match{
    flex-direction: column;
    width: 700px;
    margin-top: 5px;  
    margin-right: 10px; 
}
.text_title{
    width: 480px;
    font-size: 25px;
    font-weight: 700;
}
.text_title_match{
    width: 700px;
    font-size: 25px;
    font-weight: 700;
}
.translate_text{
    font-size: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border-width: 1px;
    border-color: #000; 
    border-radius: 5px;
    width: 65px;
    margin-top: 5px; 
}
.text_abstract{
    margin-top: 10px;
    width: 480px;
    font-size: 23px;
}
.text_abstract_match{
    margin-top: 10px;
    width: 700px;
    font-size: 23px;
}
.source_time{
    width: 480px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top:25px;
}
.source_time_match{
    width: 700px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top:25px;
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
var modal = weex.requireModule('modal');
var apis = require('../../common/action.js');

export default{
    data () {
      return {
          refreshDisplay:'hide',
          refreshText:' ↓ 下拉刷新 ',
          itemsList:[],
          category:'',
          memberId:'',
          source:'',
      }
    },

    created(){
        var self = this;
        self.category = this.$route.params.Category;
        self.memberId = this.$route.params.MemberId;
        self.source = this.$route.params.Source;
        //modal.toast({message:"传值"+self.memberId,duration:1});
        apis.requireNewsList({
	        "memberId" : self.memberId,
            "page" : self.page,
            "size" : self.size,
            "category" : self.category
        },function(res){
            if(res.respond.ok){
                self.itemsList = res.list;
                //modal.toast({message:(self.itemsList[0].title),duration:1});
            }else{
                modal.toast({message:'网络请求失败',duration:1});
            }
        });
    },
}
</script>