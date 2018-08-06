<template>
  <list class="wrapper" :style="isIpx()?'wipx':''">
        <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay">
            <loading-indicator class="indicator"></loading-indicator>
            <text class="text_refresh">{{refreshText}}</text>
        </refresh>

        <cell v-for="(item,index) in itemsList" append="tree" :key="item.id" :index="index">
            <div class="candy_layout" @click="goAlertContent(item.id,item.category)">
                <image class="candy_img" :src="gethref(item.banner?item.banner:item.member?item.member.logo:'')" resize="cover"></image>
                <text class="candy_title">{{item.title}}</text>
                <div class="candy_time_read">
                    <div class="candy_time_read_layout">
                        <text class="candy_time">{{timeAgo(item.publishTime?item.publishTime:item.ctime)}}</text>
                        <text class="candy_read">{{item.hits}}阅读</text>
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
                <text class="text_laoding">{{loadingText}}</text>
            </div>
        </loading>

    </list>
</template>

<style>
.wrapper{
    position: fixed;
    top:0px;
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
.candy_layout{
    width: 750px;
    height: 330px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    border-bottom-width: 1px; 
    border-bottom-color: #e8eaef;
}
.candy_img{
    position: absolute;
    top:20px;
    left: 20px;
    width:710px;
    height: 240px;
}
.candy_title{
    position: absolute;
    width:710px;
    height: 40px;
    top:220px;
    left: 20px;
    background-color: rgba(144,144,144,0.5);
    padding-top: 5px;
    padding-left: 5px;
    color: white;
    font-size: 12wx;
}
.candy_time_read{
    position: absolute;
    width: 710px;
    height: 30px;
    top: 280px;
    left: 20px;
}
.candy_time_read_layout{
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.candy_time{
    font-size: 12wx;
    color: #787878;
}
.candy_read{
    font-size: 12wx;
    color: #787878;
}
</style>

<script>
var apis = require('../../common/action.js');
var modal = weex.requireModule('modal');
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
            wipx:{top: 276},
            isShow:true,
        }
    },

    created(){
        //modal.toast({message:"糖果页面",duration:1});
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : (114+fringeHeight)+'px'};
        self.page = 1;
        apis.requireNewsList({
	        "category" : "candy",//这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
	        "page" : self.page, 
	        "size" : self.size
        },function(res){
            if(res.respond.ok){
                //modal.toast({message:(res.list[0].title),duration:1});
                self.isShow=false;
                self.itemsList = res.list;
            }else{
                self.isShow=false;
                modal.toast({message:'网络请求失败',duration:1});
            }
        });
    },

    methods:{
        goAlertContent:function(articalId,category){
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

            apis.requireNewsList({
                "category" : "candy",//这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
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

            apis.requireNewsList({
                "category" : "candy",//这个是在字典接口里查询得到了的结果，因为是固定的所以直接写了
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