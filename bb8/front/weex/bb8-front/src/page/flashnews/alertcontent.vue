<template>
    <div :class="['wrapper', isIpx()?'w-ipx':'']">
        <div class="container">
            <image class="back_img" :src="get_img_path('Return.png')" @click="backImageClick"></image><!--/assets/images/Return.png--><!--get_img_path('Return.png')-->
            <text class="flash_text">{{title}}</text>
            <div></div>
        </div>
        <div class='content'>
            <web :style="webview_style" ref="webview" :src='url+articalId'></web><!--1248px-->
        </div>
    </div>
</template>

<style>
.wrapper{
    position: fixed;
    top: 0;
    left: 0;right: 0;
    z-index: 101;
}
.w-ipx{
    top:40;
}
.back_img{
    width:30px;
    height: 30px;
    margin-left:20px;
}
.w-ipx{
    height: 154px;
    padding-top: 84px;
}
.container{
    justify-content: space-between;
    flex-direction: row;
    padding-top:50px;
    background-color: #ffe45f;
    width: 750px;
    height: 114px;
}
.flash_text{
    font-size: 18wx;
    color:#655b22;
}
.content{
    background-color: white;
}
</style>

<script>
var apis = require('../../common/action.js');
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var deviceWidth = weex.config.env.deviceWidth;
var deviceHeight = weex.config.env.deviceHeight;

export default{
    data () {
        return{
            articalId:'',
            category:'',
            title:'',
            data:{},
            url:'http://192.168.3.118:8182/web/page/news/view?id=',
            getHeight: 1248,
            webview_style:{width:'750px',height:'1248px'}
        }
    },

    created(){
        var self = this;
        let params = this.getParams();
        self.category = params.Category;
        self.articalId = params.ArticalId;
        // self.articalId = this.$route.query.ArticalId;
        // self.category = this.$route.query.Category;
        //modal.toast({message:"屏幕宽度"+deviceWidth+"屏幕高度"+deviceHeight,duration:1});
        //modal.toast({message:"文章id"+self.articalId,duration:2});
        self.getHeight = parseInt((750*deviceHeight)/deviceWidth - 114);
        self.webview_style = {width:'750px',height:self.getHeight+'px'};
        //modal.toast({message:self.webview_style,duration:2});
        if(self.category=='default'){
                self.title = "资讯";
            }else if(self.category=='default_en'){
                self.title = "全球媒体";
            }else if(self.category=='ex_notice'){
                self.title = "交易所公告";
            }else if(self.category=='ex_twitter'){
                self.title = "交易所推特";
            }else if(self.category=='bv'){
                self.title = "大V声音";
            }else if(self.category=='newcoin'){
                self.title = "新币时讯";
            }else if(self.category=='research_report'){
                self.title = "监管政策";
            }
    },

    methods:{
        backImageClick:function (params) {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            }); 
        }
    }
}
</script>