<template>
  <div class="wrapper" :style="isIpx()?'wipx':''">
        <list>
            <refresh class="refreshOut" @refresh="refreshData" :display="refreshDisplay" v-if="isShowLoading">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="text_refresh">{{refreshText}}</text>
            </refresh>

            <cell v-for="(item,index) in itemsList" append="tree" :key="item.id" :index="index">
                <div class="candy_layout" @click="goAlertContent(item.id,item.category)">
                    <image class="candy_img" :src="gethref(item.banner?item.banner:item.member?item.member.logo:'')" resize="cover"></image>
                    <image class="category_img" :src="get_img_path('candy.png')" v-if="item.category=='candy'"></image><!--src="/assets/images/candy.png"--><!--:src="get_img_path('candy.png')"-->
                    <image class="category_img" :src="get_img_path('Airdrop.png')" v-if="item.category=='airdrop'"></image><!--src="/assets/images/Airdrop.png"--><!--:src="get_img_path('Airdrop.png')"-->
                    <image class="category_img" :src="get_img_path('Registration_invitation.png')" v-if="item.category=='invitation'"></image><!--src="/assets/images/Registration_invitation.png"--><!--:src="get_img_path('Registration_invitation.png')"-->
                    <text class="candy_title">{{item.title}}</text>
                    <div class="candy_time_read">
                        <div class="candy_time_read_layout">
                            <text class="candy_time">{{timeAgo(item.publishTime?item.publishTime:item.ctime)}}</text>
                            <text class="candy_read">{{item.hits}}阅读</text>
                        </div>
                    </div>
                </div>
            </cell>

            <loading @loading="loadingData" :display="loadingDisplay" v-if="isShowLoading">
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

<style>
.wrapper{
    position: fixed;
    top:114px;
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
.category_img{
    position: absolute;
    top:40px;
    left: 20px;
    width: 123px;
    height: 40px;
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
            isShowLoading:false,
        }
    },

    created(){
        //modal.toast({message:"糖果页面",duration:1});
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : (114+fringeHeight)+'px'};
        self.page = 1;
        apis.requireActivityList({
            "page" : self.page, 
	        "size" : self.size,
	        "category" : "", // airdrop:空投，candy：糖果 invitation:注册邀请,不写表示三种都有
	        "sort" : "publishTime" ,// 排序字段
	        "order" : -1 ,// -1：倒序，1：正序
        },function(res){
            if(res.respond.ok){
                //modal.toast({message:(res.list[0].title),duration:1});
                self.isShow=false;
                self.itemsList = res.list;
                self.isShowLoading = true;
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

            this.jumpUrl("/candyDetail" ,params);
        },

        refreshData:function(event){
            //modal.toast({message:"下拉刷新",duration:1});
            var self = this;
            self.refreshDisplay = 'show';
            self.refreshText='正在刷新';
            self.page = 1;

            apis.requireActivityList({
                "page" : self.page, 
	            "size" : self.size,
	            "category" : "", // airdrop:空投，candy：糖果 invitation:注册邀请,不写表示三种都有
	            "sort" : "publishTime" ,// 排序字段
	            "order" : -1 ,// -1：倒序，1：正序
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

            apis.requireActivityList({
                "page" : self.page, 
	            "size" : self.size,
	            "category" : "", // airdrop:空投，candy：糖果 invitation:注册邀请,不写表示三种都有
	            "sort" : "publishTime" ,// 排序字段
	            "order" : -1 ,// -1：倒序，1：正序
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