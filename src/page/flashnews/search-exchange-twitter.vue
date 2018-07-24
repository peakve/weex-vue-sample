<template>
    <div class="wrapper" :style=" isIpx()?'wipx':'' ">
        <div class="search_header">
            <div class="back_click" @click="backImageClick">
                <image class="back_img" :src="get_img_path('Return.png')"></image><!--src="/assets/images/Return.png"--><!--:src="get_img_path('Return.png')"-->
            </div>
            <input
                :value="searchHolder"
                class="input"
                @input="onChange"
                placeholder="请输入关键字">
            </input>
            <div class="div_search_image" @click="searchImageClick">
                <image class="search_img" :src="get_img_path('search.png')"></image><!--src="/assets/images/search.png"--><!--:src="get_img_path('search.png')"-->
            </div>
        </div>
        <list>
           <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay" v-if="isSearch">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
           </refresh>
           <cell v-for="(item,index) in itemsList" :key="index">
                <div class="information_content">
                    <div class="typical_image_name">
                        <image class="content_image" :src="gethref(item.member.logo)" resize="cover"></image>
                        <text class="typical_name">{{item.member.name!=null?item.member.name:item.member.screeName}}</text>
                    </div>
                    <div class="title_sourece_time">
                        <text class="text_title">{{item.content}}</text>
                        <text class="translate_text" @click="getTranslation(item.id,index)">翻译</text>
                        <text class="translate_result" v-if="translateClick&&item.translates&&isExistsTranlate(item.id)">{{item.translates[0].label}}</text>
                        <div class="source_time">
                            <text class="source" @click="goAlertFocus(item.category,item.member.memberId,item.source)">来源:{{item.member.screeName!=null?item.member.screeName:item.member.name}}@{{item.source}}</text>
                            <div class="time_hit">
                                <div class="time_ago">
                                    <image class="clock_image" :src="get_img_path('Time.png')" resize="cover"></image>
                                    <text class="text_time_ago">{{timeAgo(item.publishTime?item.publishTime:item.ctime)}}</text>
                                </div>
                                <div class="time_ago">
                                    <image class="clock_image" :src="get_img_path('click.png')"></image>
                                    <text class="text_time_ago">{{item.hits}}次点击</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </cell>
           <loading @loading="loadingData" :display="loadingDisplay" v-if="isSearch">
                <div class="loadingOut">
                    <loading-indicator class="load_indicator"></loading-indicator>
                    <text class="text_laoding">{{loadingText}}</text>
                </div>
           </loading>
        </list>
        <wxc-loading
            :show="isShow"
            loading-text="加载中...">
        </wxc-loading>
    </div>
</template>

<style scoped>
.wrapper{
    position: fixed;  
    top:0px;
    left: 0;right: 0;
    bottom: 0;
}
.search_header{
    justify-content: space-between;
    flex-direction: row;
    padding-top: 50px;
    widows: 750;
    height: 114;
    background-color: #ffe45f;
}
.back_click{
    width: 80px;
    height: 114px;
}
.back_img{
    width:35px;
    height: 35px;
    margin-left: 30px;
    margin-top: 8px;
}
.input{
    width:500px;
    height:50px;
    border-width:2px;
    border-color:#655B22;
    border-radius:5px;
    padding-left:20px;
    font-size:12wx;
    background-color: white;
}
.div_search_image{
    width:80px;
    height: 114px;
}
.search_img{
    width:35px;
    height: 35px;
    margin-right:30px;
    margin-top: 8px; 
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
    justify-content: space-between;
    flex-direction: row;
    border-bottom-width: 1px; 
    border-bottom-color: #e8eaef;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 20px;
    padding-left: 20px;
}
.title_sourece_time{
    flex-direction: column;
    width: 550px;
    margin-top: 5px;  
    margin-right: 10px; 
}
.text_title{
    width: 550px;
    font-size: 14wx;
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
    width: 73px;
    margin-top: 5px; 
}
.translate_result{
    width: 550px;
    font-size: 14wx;
    margin-top: 10px;
    background-color: #ededed;
}
.source_time{
    width: 550px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
}
.source{
    align-items: center;
    justify-content: flex-start;
    color: #36a0ff;
    font-size: 14wx;
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
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.text_time_ago{
    color: #787878;
    font-size: 12wx;
}
.content_image{
    width: 120px;
    height: 120px;
}
.typical_name{
    font-size: 16wx;
    margin-top: 10px;
    width: 120px;
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
var apis = require('../../common/action.js');
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceHeight = weex.config.env.deviceHeight;
import { WxcLoading } from 'weex-ui';

export default{
    components: { WxcLoading },

    data(){
        return{
          page : 1,
          size : 6,
          refreshDisplay:'hide',
          refreshText:' ↓ 下拉刷新 ',
          loadingDisplay:'hide',
          loadingText:'加载更多',
          itemsList:[],
          message:'ex_notice',
          searchHolder:'',
          keywords:'',
          isSearch:false,
          isShow:false,
          wipx:{},
        }
    },

    created(){
        var self = this;
        let params = this.getParams();
        self.message = params.Message;
        if(self.message=='' || self.message==null){
            self.message = 'ex_notice';
        }
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : fringeHeight+'px'};
    },

    methods:{
        onChange: function(e){
            //modal.toast({message:"input控件输入字符"+e.value,duration:1});
            if(!e.value){
                return;
            }
            this.keywords = e.value;     
        },

        backImageClick:function () {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            }); 
        },

        searchImageClick:function(){
            var self = this;
            self.page = 1;
            self.isSearch = true;
            self.isShow=true;
            if(self.keywords=='' || self.keywords == null){
                modal.toast({message:"请输入关键字",duration:2});
            }else{
                apis.requireSearchNews({
	                "query" : self.keywords,
	                "category" : self.message,
                    "highlight" : false,
	                "page" : self.page
                },function(res){
                    self.isShow=false;
                    if(res.respond.ok){
                        //modal.toast({message:(res.list[0].title),duration:1});
                        self.itemsList = res.list;
                        if(self.itemsList=='' || self.itemsList==null){
                            self.isSearch = false;
                            modal.toast({message:"暂无数据",duration:1});
                        }
                    }else{
                        modal.toast({message:'网络请求失败',duration:1});
                    }
                });
            }
            
        },

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

            apis.requireSearchNews({
	            "query" : self.keywords,
	            "category" : self.message,
                "highlight" : false,
	            "page" : self.page
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

            apis.requireSearchNews({
	            "query" : self.keywords,
	            "category" : self.message,
                "highlight" : false,
	            "page" : self.page
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

                if (self.page >=res.lastPage) {
                    modal.toast({message:'没有更多',duration:1});
				}
            });
        },

    }
}
</script>