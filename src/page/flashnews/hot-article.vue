<template>
        <list class="wrapper" :style="isIpx()?'wipx':''">
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           
           <cell v-for="(item,index) in itemsList"
                      append="tree"
                      :key="item.id"
                      :index="index">
                <div class="information_content">
                    <div class="title_sourece_time">
                        <text class="text_title" @click="goAlertContent(item.id,item.category)">{{item.title}}</text>
                        <div class="source_time">
                            <div class="time_ago">
                                <!--<image class="clock_image" :src="get_img_path('Time.png')" resize="cover"></image>src="/assets/images/Time.png"--><!--:src="get_img_path('Time.png')"-->
                                <text class="text_time_ago">{{timeAgo(item.publishTime?item.publishTime:item.ctime?item.ctime:'')}}</text>
                            </div>
                            <div class="time_ago">
                                <!--<image class="clock_image" :src="get_img_path('click.png')"></image>src="/assets/images/click.png"--><!--:src="get_img_path('click.png')"-->
                                <text class="text_time_ago">{{item.hits}}阅读</text>
                            </div>
                        </div>
                    </div>
                    <image class="content_image" :src="gethref(item.banner?item.banner:item.member?item.member.logo:'')" resize="cover"></image>
                </div>
           </cell>
           <wxc-loading
                :show="isShow"
                loading-text="加载中...">
           </wxc-loading>
           <loading @loading="loadingData" :display="loadingDisplay">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text_laoding">{{loadingText}}</text>
                </div>
           </loading>
        </list>
</template>

<style scoped>
.wrapper{
    position: fixed;  
    top:188px;
    left: 0;right: 0;
    bottom: 0;
}
.refreshOut{
    width: 750;
    padding-top: 10;
    padding-bottom: 10;
    align-items: center;
}
.text_refresh{
    font-size: 12wx;
}
.text_laoding{
    font-size: 12wx;
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
    padding-right: 10px;
}
.title_sourece_time{
    flex-direction: column;
    width:470px;
    margin-top: 5px;  
    margin-right: 10px; 
    margin-left: 10px; 
}
.text_title{
    font-size: 15wx;
}
.source_time{
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
    width: 20px;
    height: 20px;
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
const dom = weex.requireModule('dom');
const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
var apis = require('../../common/action.js');
var deviceHeight = weex.config.env.deviceHeight;
import { WxcLoading } from 'weex-ui';

export default {
    components: { WxcLoading },

    data () {
      return {
          page : 1,
          size : 6,
          refreshDisplay:'hide',
          refreshText:' ↓ 下拉刷新 ',
          loadingDisplay:'hide',
          loadingText:'加载更多',
          itemsList:[],
          wipx:{top: 276},
          isShow:true,
      }

    },

    created(){
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : (188+fringeHeight)+'px'};
        self.isShow=true;
        self.page = 1;
        apis.requireHotNewsList({
	        "page" : self.page,
	        "size" : self.size
        },function(res){
            self.isShow=false;
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
            //modal.toast({message:(category+memberId),duration:1});
            // this.$router.push({
            //     path : '/alertfocus',
            //     name : 'alertfocus',
            //     query : {
            //         Category : category,
            //         MemberId : memberId,
            //         Source : source
            //     }
            // });

            let params = this.getParamsByJson({
                Category : category,
                MemberId : memberId,
                //Source : source
            });
                
            this.jumpUrl("/alertfocus",params);

        },

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

            apis.requireHotNewsList({
	            "page" : self.page,
	            "size" : self.size
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

            apis.requireHotNewsList({
	            "page" : self.page,
	            "size" : self.size
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