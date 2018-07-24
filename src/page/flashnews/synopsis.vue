<template>
  <div class="wrapper" :style="isIpx()?'wipx':''">
      <text class="synopsis_text">{{data.desc}}</text>
  </div>
</template>

<style>
.wrapper{
    position: fixed;
    top:521px;
    left: 0;right: 0;
}
.synopsis_text{
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 25px;
    color: black;
}
</style>

<script>
var modal = weex.requireModule('modal');
var apis = require('../../common/action.js');
var deviceHeight = weex.config.env.deviceHeight;

export default{
    data() {
        return{
            memberId:'',
            data:{desc:""},
            wipx:{},
        }
    },

    created() {
        var self = this;
        self.memberId = this.$route.query.MemberId;
        //modal.toast({message:"简介"+self.memberId,duration:1});
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : (521+fringeHeight)+'px'};
        
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

    }
}
</script>