<template>
  <div :class="['wrapper', isIpx()?'w-ipx':'']">
      <div class="alertfocus_whole" style="background-image : url('/assets/images/integration_bg.png')">
          <div class="back_forward">
              <image class="back_img" src="/assets/images/Return_W.png" @click="imageClick"></image>
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
                  <image class="logo_image" src="/assets/images/icon_logo.png" resize="cover"></image>
              </div>
          </div>
      </div>
  </div>
</template>

<style>
.w-ipx{
    height: 154px;
    padding-top: 84px;
}
.alertfocus_whole{
    flex-direction: column;
    justify-content: space-between;
    width: 750px;
    height: 447px;
    /*background-image: url('/assets/images/integration_bg.png');
    background-repeat: no-repeat;*/
    background-color: #133D5F;
}
.back_forward{
    flex-direction: row;
    align-items: center;
    width: 750px;
    height: 60px;
}
.back_img{
    width:40px;
    height: 40px;
    margin-left:20px;
    margin-top:20px;
}
.picture_title{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 750px;
    height: 327px;
}
.typical_image{
    width:120px;
    height: 120px;
}
.typical_name{
    margin-top: 20px;
    font-size: 35px;
    color: white;
}
.collect_content{
    flex-direction: row;
    widows: 750px;
    height: 60px;
}
.blank{
    width: 187px;
    height: 100px;
}
.article_hits{
    text-align: center;
    font-size: 25px;
    color: white;
    width: 375px;
    height: 100px;
    margin-bottom: 50px;
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

        imageClick:function (params) {
            //modal.toast({message:"返回",duration:1});
            this.$router.back(-1);
        }

    }
}
</script>