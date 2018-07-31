<template>
  <div class="wrapper" :style=" isIpx() ? 'wipx' : '' ">
      <div class="alertfocus_whole">
        <image class="alertfocus_whole" :src="get_img_path('integration_bg.png')"></image><!--src="/assets/images/integration_bg.png"--><!--:src="get_img_path('integration_bg.png')"-->
        <div class="back_click" @click="backImageClick">
            <image class="back_img" :src="get_img_path('Return_W.png')"></image><!--src="/assets/images/Return_W.png"--><!--:src="get_img_path('Return_W.png')"-->
        </div>
        <div class="follow_click" @click="followTextClick" v-if=" (type == 'bv') ">
            <text class="follow_text">{{favorite ? '已关注' : '关注'}}</text><!--src="/assets/images/Return_W.png"--><!--:src="get_img_path('Return_W.png')"-->
        </div>
        <image class="typical_image" :src="gethref(data.logo?data.logo:data.profileImageUrl)" resize="cover"></image>
        <text class="typical_name">{{data.screeName ? data.screeName : data.name}}</text>
        <text class="article_hits">{{data.newsCount}} 文章     |     {{data.readCount}} 阅读</text>
      </div>
  </div>
</template>

<style>
.alertfocus_whole{
    width: 750px;
    height: 447px;
}
.back_click{
    position: absolute;
    width:100px;
    height: 100px;
    left:25px;
    top:55px;
}
.follow_click{
    position: absolute;
    width:100px;
    height: 100px;
    left:600px;
    top:55px;
}
.follow_text{
    font-size: 14wx;
    border-width: 1px;
    border-color: white;
    padding-top:5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    color: white;
}
.back_img{
    position: absolute;
    width:40px;
    height: 40px;
    left:0px;
    top:0px;
}
.typical_image{
    position: absolute;
    top:140px;
    left: 315px; 
    width:120px;
    height: 120px;
}
.typical_name{
    position: absolute;
    top: 285px;
    font-size: 35px;
    color: white;
    width: 750px;
    text-align: center;
}
.article_hits{
    position: absolute;
    font-size: 25px;
    color: white;
    top: 380px;
    width: 750px;
    text-align: center;
}
</style>

<script>
var modal = weex.requireModule('modal');
var apis = require('../../common/action.js');
var navigator = weex.requireModule('navigator');
var deviceHeight = weex.config.env.deviceHeight;

export default {
    props:['memberId'],
    data(){
        return{
            data:{},
            wipx:{},
            favorite:false,
            name:'',
            type:'',
        }
    },

    created(){
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : fringeHeight+'px'};
        //modal.toast({message:self.memberId,duration:1});
        apis.requireAlertFocusDesc({memberId:self.memberId},function(res){
            if(res.respond.ok){
                self.data = res.data;
                self.favorite = res.data.favorite;
                self.name = res.data.name;
                self.type = res.data.type;
                //modal.toast({message:(self.name+self.type),duration:1});
            }else{
                modal.toast({message:'网络请求失败',duration:1});
            }
        });
    },

    methods:{
        gethref(url){
            if(!url){
                return url;
            }
            else if(url.indexOf("http")==0){
                return url;
            }else{
                return 'http://www.51bb8.com/bfile/dfile'+url;
            }
        },

        backImageClick:function (params) {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            });
        },

        followTextClick:function(){
            var self = this;
            if( !self.favorite ){
                apis.requireFollow({
                    "data" : [{
                        "id" : self.memberId, //id必填
                        "name" : self.name,
                        "type" : self.type // member的type
                    }],
                    "flag" :true // 必填，true关注，false取关
                },function(res){
                    if(res.respond.msg=='未登录'){
                        modal.toast({message:'请先登录再添加关注',duration:2});
                        return;
                    }
                    if(res.respond.ok){
                        self.favorite = !self.favorite;
                        modal.toast({message:'添加关注成功',duration:1});
                    }else{
                        modal.toast({message:'添加关注失败',duration:1});
                    }
                });
            }else{
                apis.requireFollow({
                    "data" : [{
                        "id" : self.memberId, //id必填
                        "name" : self.name,
                        "type" : self.type // member的type
                    }],
                    "flag" :false // 必填，true关注，false取关
                },function(res){
                    if(res.respond.msg=='未登录'){
                        modal.toast({message:'请先登录',duration:2});
                        return;
                    }
                    if(res.respond.ok){
                        self.favorite = !self.favorite;
                        modal.toast({message:'取消关注成功',duration:1});
                    }else{
                        modal.toast({message:'取消关注失败',duration:1});
                    }
                });
            }
            
        },

    }
}
</script>