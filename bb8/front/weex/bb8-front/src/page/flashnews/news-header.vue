<template>
  <div class="wrapper" :style=" isIpx()?'wipx':'' ">
      <div class="container">
        <div class="null_div"></div>
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

export default{
    props:['message'],
    data(){
        return{
            wipx:{},
        }
    },

    watch: {
        message: function(curVal,oldVal){
            //modal.toast({message:'父组件传子组件'+curVal,duration:2});
        },
    },

    created(){
        var self = this;
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : fringeHeight+'px'};
        //modal.toast({message:'刘海高度'+fringeHeight,duration:2});
    },

    methods:{
        searchImageClick:function(){
            var self = this;
            if(self.message=='' || self.message==null || self.message == 'default' || self.message == 'default_en' || self.message == 'research_report'){
                //modal.toast({message:'搜索按钮被点击了',duration:2});
                let params = this.getParamsByJson({
                    Message : self.message
                });

                this.jumpUrl("/serinformation" ,params);
            }else if(self.message=='ex_notice'){
                //modal.toast({message:'搜索按钮被点击了',duration:2});
                let params = this.getParamsByJson({
                    Message : self.message
                });

                this.jumpUrl("/serexchangeNotice" ,params);
            }else if(self.message=='ex_twitter'){
                //modal.toast({message:'搜索按钮被点击了',duration:2});
                let params = this.getParamsByJson({
                    Message : self.message
                });

                this.jumpUrl("/serexchangeTwitter" ,params);
            }else if(self.message=='bv'){
                //modal.toast({message:'搜索按钮被点击了',duration:2});sernewcoin
                let params = this.getParamsByJson({
                    Message : self.message
                });

                this.jumpUrl("/servoice" ,params);
            }else if(self.message=='newcoin'){
                //modal.toast({message:'搜索按钮被点击了',duration:2});sernewcoin
                let params = this.getParamsByJson({
                    Message : self.message
                });

                this.jumpUrl("/sernewcoin" ,params);
            }else{
                modal.toast({message:'不支持搜索',duration:2});
            }
            
            // let params = this.getParamsByJson({
            //     Message : self.message
            // });

            // this.jumpUrl("/candy" ,params);
            
        },
    },

}
</script>