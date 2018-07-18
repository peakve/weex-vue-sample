<template>
  <div :class="['wrapper', isIpx()?'w-ipx':'']">
      <div class="container">
        <div></div>
        <text class="flash_text">快讯</text>
        <div class="div_search_image" @click="searchImageClick">
            <image class="search_img" :src="get_img_path('search.png')"></image><!--src="/assets/images/search.png"--><!--:src="get_img_path('search.png')"-->
        </div>
      </div>
  </div>
</template>

<style scoped>
.wrapper{
    position: fixed;
    top: 0;
    left: 0;right: 0;
    height: 114px;
    z-index: 101;
}
.w-ipx{
    top:40;
}
.container{
    justify-content: space-between;
    flex-direction: row;
    padding-top:55px;
    background-color: #ffe45f;
    width: 750px;
    height: 114px;
}
.flash_text{
    font-size: 18wx;
    color:#655b22;
}
.div_search_image{
    width:50px;
    height: 40px;
}
.search_img{
    width:30px;
    height: 30px;
    margin-right: 20px;
}
</style>

<script>
const modal = weex.requireModule('modal');

export default{
    data(){
        return{

        }
    },

    methods:{
        searchImageClick:function(){

        },
    },

}
</script>