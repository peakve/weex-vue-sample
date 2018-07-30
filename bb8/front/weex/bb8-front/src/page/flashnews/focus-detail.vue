<template>
        <list class="wrapper" :style="isIpx()?'wipx':''">
             <!--v-if="(category=='default' || category=='default_en' || category=='research_report')"-->
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           <cell v-for="(item,index) in itemsList" append="tree" :key="item.id" :index="index">
                <div class="information_content">
                    <image class="content_image" :src="item.banner" resize="cover"></image>
                    <div class="title_sourece_time">
                        <text class="text_title" @click="goAlertContent(item.id,item.category)">{{item.title}}</text>
                        <text class="text_abstract" @click="goAlertContent(item.id,item.category)">{{item.abs}}</text>
                        <div class="source_time">
                            <div class="time_ago">
                                <!--<image class="clock_image" :src="get_img_path('Time.png')" resize="cover"></image>-->
                                <text class="text_time_ago">{{timeAgo(item.publishTime?item.publishTime:item.ctime)}}</text>
                            </div>
                            <div class="time_ago">
                                <!--<image class="clock_image" :src="get_img_path('click.png')"></image>-->
                                <text class="text_time_ago">{{item.hits}}阅读</text>
                            </div>
                        </div>
                    </div>
                </div>
           </cell>
           <wxc-loading
                :show="isShow"
                loading-text="加载中...">
           </wxc-loading>
           <loading @loading="loadingData" :display="loadingDisplay">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text">{{loadingText}}</text>
                </div>
           </loading>
        </list>
</template>

<style>
.wrapper{
    position: fixed;
    top:521px;
    left: 0;right: 0;
    bottom: 0;
}
.refreshOut{
    width: 750;
    padding-top: 10;
    padding-bottom: 10;
    align-items: center;
}
.indicator{
    width: 35px;
    height: 35px;
    color: grey;
    margin-bottom: 30px;
}
.information_content{
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    border-bottom-width: 1px; 
    border-bottom-color: #e8eaef;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
}
.title_sourece_time{
    flex-direction: column;
    width: 450px;
    margin-right: 20px;
    margin-top: 5px; 
    margin-left: 20px;
}
.title_sourece_time_match{
    flex-direction: column;
    width: 700px;
    margin-top: 5px;  
    margin-right: 10px; 
}
.text_title{
    font-size: 14wx;
    font-weight: 700;
}
.text_title_match{
    width: 700px;
    font-size: 14wx;
    font-weight: 700;
}
.translate_text{
    font-size: 14wx;
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
.translate_result{
    width: 700px;
    font-size: 14wx;
    margin-top: 10px;
    background-color: #ededed;
}
.text_abstract{
    margin-top: 10px;
    font-size: 23px;
}
.text_abstract_match{
    margin-top: 10px;
    width: 700px;
    font-size: 12wx;
}
.source_time{
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
    font-size: 12wx;
}
.content_image{
    width: 250px;
    height: 140px;
}
.loadingOut {
    flex-direction: row;
    width: 750;
    padding: 30px;
    align-items: center;
    justify-content: center;
}
.load_indicator {
    width: 35;
    height: 35;
    color: #454545;
    margin-right: 10px;
}
</style>

<script>
var modal = weex.requireModule('modal');
var apis = require('../../common/action.js');
var deviceHeight = weex.config.env.deviceHeight;
import { WxcLoading } from 'weex-ui';

export default{
    components: { WxcLoading },

    data () {
      return {
          page: 1,
          size: 5,
          refreshDisplay:'hide',
          refreshText:' ↓ 下拉刷新 ',
          loadingDisplay:'hide',
          loadingText:'加载更多',
          itemsList:[],
          category:'',
          memberId:'',
          source:'',
          translates:[{
            "key": "zh",
            "label": ""
          }],
          translateShow:false,
          translateClick:0,
          translateList:[],
          wipx:{},
          isShow:true,
      }
    },

    created(){
        var self = this;
        self.category = this.$route.query.Category;
        self.memberId = this.$route.query.MemberId;
        //self.source = this.$route.query.Source;
        //modal.toast({message:"传值"+self.memberId,duration:1});
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : (521+fringeHeight)+'px'};
        self.isShow=true;
        self.page = 1;
        apis.requireAlertFocusList({
	        "memberId" : self.memberId,
            "page" : self.page,
            "size" : self.size,
            "category" : self.category
        },function(res){
            self.isShow=false;
            if(res.respond.ok){
                self.itemsList = res.list;
                //modal.toast({message:(self.itemsList[0].title),duration:1});
            }else{
                modal.toast({message:'网络请求失败',duration:1});
            }
        });
    },

    methods:{
        goAlertContent:function(articalId,category){
            // this.$router.push({
            //     path:'/alertcontent',
            //     name:'alertcontent',
            //     query : {
            //         ArticalId : articalId,
            //         Category : category
            //     }
            // });
            let params = this.getParamsByJson({
                ArticalId : articalId,
                Category : category
            });

            this.jumpUrl("/alertcontent" ,params);

        },

        refreshData:function(event){
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText='正在刷新';
            self.page = 1;

            apis.requireAlertFocusList({
                "memberId" : self.memberId,
                "page" : self.page, 
                "size" : self.size,
                "category" : self.category
            },function(res){
                if(res.respond.ok){
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList = res.list;
                    self.refreshDisplay = 'hide';
                    self.refreshText=' ↓ 下拉刷新 ';
                    modal.toast({message:'刷新成功',duration:1});
                }else{
                    self.refreshDisplay = 'hide';
                    self.refreshText=' ↓ 下拉刷新 ';
                    modal.toast({message:'网络请求失败',duration:1});
                }
            });
        },

        loadingData:function(event){
            var self = this;
            self.page++;
            self.loadingDisplay = 'show';
            self.loadingText = '加载中...';

            apis.requireAlertFocusList({
                "memberId" : self.memberId,
                "page" : self.page, 
                "size" : self.size,
                "category" : self.category
            },function(res){
                if(res.respond.ok){
                    //modal.toast({message:(res.list[0].title),duration:1});
                    self.itemsList=self.itemsList.concat(res.list);
                    self.loadingDisplay = 'hide';
                    self.loadingText='加载更多';
                    modal.toast({message:'加载成功',duration:1});
                }else{
                    self.refreshDisplay = 'hide';
                    self.refreshText='加载更多';
                    modal.toast({message:'网络请求失败',duration:1});
                }

                if (self.page > res.lastPage) {
                    modal.toast({message:'没有更多',duration:1});
				}
            });
        },

    }
}
</script>