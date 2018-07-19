<template>
  <div :class="['wrapper', isIpx()?'w-ipx':'']">
      <div class="container">
        <div class="null_div"></div>
        <text class="flash_text">快讯</text>
        <div class="div_search_image" @click="searchImageClick">
            <image class="search_img" src="/assets/images/search.png"></image><!--src="/assets/images/search.png"--><!--:src="get_img_path('search.png')"-->
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
    z-index: 10;
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
.null_div{
    width:80px;
    height: 114px;
}
.flash_text{
    font-size: 18wx;
    color:#655b22;
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

export default{
    props:['message'],
    data(){
        return{

        }
    },

    watch: {
        message: function(curVal,oldVal){
            //modal.toast({message:'父组件传子组件'+curVal,duration:2});
        },
    },

    created(){
        var self = this;
        
    },

    methods:{
        searchImageClick:function(){
            if(self.message=='' || self.message==null || self.message == 'default' || self.message == 'default_en' || self.message == 'research_report'){
                var self = this;
                //modal.toast({message:'搜索按钮被点击了',duration:2});
                let params = this.getParamsByJson({
                    Message : self.message
                });

                this.jumpUrl("/serinformation" ,params);
            }else if(self.message=='ex_notice'){

            }
            
            
        },
    },

}
</script>