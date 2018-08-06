<template>
  <div class="wrapper" :style=" isIpx()?'wipx':'' ">
      <div class="container">
        <div class="null_div"></div>
        <text class="flash_text">糖果</text>
        <div class="div_search_image" @click="searchImageClick">
            <!--<image class="search_img" :src="get_img_path('search.png')"></image>src="/assets/images/search.png":src="get_img_path('search.png')"-->
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
.container{
    justify-content: space-between;
    flex-direction: row;
    padding-top:55px;
    background-color: #ffe45f;
    width: 750px;
    height: 114px;
}
.null_div{
    width:80px;
    height: 114px;
    margin-left: 30px;
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

export default {
    data(){
        return{
            wipx:{},
        }
    },

    created(){
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : fringeHeight+'px'};
        //modal.toast({message:'刘海高度'+fringeHeight,duration:2});
    },

    methods: {

    }
}
</script>