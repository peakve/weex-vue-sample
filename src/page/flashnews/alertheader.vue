<template>
  <div :class="['wrapper', isIpx()?'w-ipx':'']">
      <!--<div class="alertfocus_whole">
          <div class="back_forward" @click="backImageClick">
              <image class="back_img" src="/assets/images/Return_W.png"></image> (/assets/images/Return_W.png  get_img_path('Return_W.png'))
              <div></div>
          </div>
          <div class="picture_title">
              <image class="typical_image" :src="gethref(data.logo?data.logo:data.profileImageUrl)" resize="cover"></image>
              <text class="typical_name">{{data.screeName ? data.screeName : data.name}}</text>
          </div>
          <div class="collect_content">
              <div class="blank"></div>
              <text class="article_hits">{{data.newsCount}} 文章     |    {{data.readCount}} 点击</text>
              <div class="logo_image_div">
                <image class="logo_image"  resize="cover"></image>
              </div>
          </div>
      </div>-->
      <div class="alertfocus_whole">
        <image class="alertfocus_whole" :src="get_img_path('integration_bg.png')"></image><!--/assets/images/integration_bg.png--><!--get_img_path('integration_bg.png')-->
        <image class="back_img" :src="get_img_path('Return_W.png')" @click="backImageClick"></image><!--/assets/images/Return_W.png--><!--get_img_path('Return_W.png')-->
        <image class="typical_image" :src="gethref(data.logo?data.logo:data.profileImageUrl)" resize="cover"></image>
        <text class="typical_name">{{data.screeName ? data.screeName : data.name}}</text>
        <text class="article_hits">{{data.newsCount}} 文章     |    {{data.readCount}} 点击</text>
      </div>
  </div>
</template>

<style>
.w-ipx{
    height: 154px;
    padding-top: 84px;
}
.alertfocus_whole{
    width: 750px;
    height: 447px;
}
.back_forward{
    flex-direction: row;
    align-items: center;
    padding-top:30px;
    width: 750px;
    height: 60px;
}
.back_img{
    position: absolute;
    width:40px;
    height: 40px;
    left:25px;
    top:50px;
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
.collect_content{
    flex-direction: row;
    widows: 750px;
    height: 60px;
}
.article_hits{
    position: absolute;
    font-size: 25px;
    color: white;
    top: 380px;
    width: 750px;
    text-align: center;
}
.logo_image_div{
    align-items: center;
    justify-content: flex-end;
    widows: 187px;
    height: 100px;
}
.logo_image{
    widows: 95px;
    height: 95px;
}
</style>

<script>
var modal = weex.requireModule('modal');
var apis = require('../../common/action.js');
var navigator = weex.requireModule('navigator');

export default {
    props:['memberId'],
    data(){
        return{
            data:{},
        }
    },

    created(){
        var self = this;
        //modal.toast({message:self.memberId,duration:1});
        apis.requireAlertFocusDesc({memberId:self.memberId},function(res){
            if(res.respond.ok){
                self.data = res.data;
                //modal.toast({message:(self.data.newsCount),duration:1});
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
        }

    }
}
</script>