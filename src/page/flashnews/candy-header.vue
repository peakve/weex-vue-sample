<template>
  <div :class="[isIPhoneX?'wrapperipx':'wrapper']"> <!--:style="isIPhoneX?'wipx':''"-->
      <div class="container">
        <div class="back_click" @click="backImageClick">
            <image class="back_img" :src="get_img_path('Return.png')"></image><!--src="/assets/images/Return.png"--><!--:src="get_img_path('Return.png')"-->
        </div>
        <text class="flash_text">糖果</text>
        <div class="div_search_image">
            <!--<image class="search_img" :src="get_img_path('search.png')"></image>  src="/assets/images/search.png":src="get_img_path('search.png')"-->
        </div>
      </div>
  </div>
</template>

<style>
.wrapper{
    position: fixed;
    top: 0;
    left: 0;right: 0;
    height: 114px;
    z-index: 10;
}
.wrapperipx{
    position: fixed;
    top: 132px;
    left: 0;right: 0;
    height: 114px;
    z-index: 10;
}
.container{
    justify-content: space-between;
    flex-direction: row;
    padding-top:55px;
    background-color: #ffe45f;
    width: 750px;
    height: 114px;
}
.back_img{
    width:35px;
    height: 35px;
    margin-left:30px;
}
.back_click{
    width: 80px;
    height: 114px;
}
.flash_text{
    font-size: 18wx;
    color:#655b22;
    text-align: center;
}
.div_search_image{
    width:80px;
    height: 114px;
    margin-right: 30px;
}
.search_img{
    width:35px;
    height: 35px;
    margin-left: 30px;
}
</style>

<script>
const modal = weex.requireModule('modal');
var deviceHeight = weex.config.env.deviceHeight;
var navigator = weex.requireModule('navigator');
import util from '../../common/util';

export default {
    data(){
        return{
            wipx:{},
        }
    },

    created(){
        var self = this;
        //iPhoneX刘海高度132px,不需要再计算
        // var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        // self.wipx = {top : fringeHeight+'px'};
        // modal.toast({message:'刘海高度'+fringeHeight,duration:2});
    },

    computed:{
        isIPhoneX() {
            return util.env.isIPhoneX()
        },
    },

    methods: {
        backImageClick:function (params) {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            }); 
        },

    }
}
</script>