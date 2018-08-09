<template>
    <div class="wrapper" :style=" isIpx() ? 'wipx' : '' ">
        <div class="container">
            <div class="back_click" @click="backImageClick">
                <image class="back_img" :src="get_img_path('Return.png')"></image><!--src="/assets/images/Return.png"--><!--:src="get_img_path('Return.png')"-->
            </div>
            <text class="flash_text">{{title}}</text>
            <div class="div_share_image" @click="shareImageClick">
                <image class="share_img" :src="get_img_path('share.png')"></image><!--src="/assets/images/share.png"--><!--:src="get_img_path('share.png')"-->
            </div>
        </div>
        <div class='content'>
            <web :style="webview_style" ref="webview" :src='url+articalId' @pagestart="onPageStart" @pagefinish="onPageFinish"></web><!--1248px-->
        </div>
        <wxc-loading
            :show="isShow"
            loading-text="加载中...">
        </wxc-loading>
    </div>
</template>

<style>
.wrapper{
    position: fixed;
    top: 0;
    left: 0;right: 0;
    z-index: 101;
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
.div_share_image{
    width:80px;
    height: 114px;
}
.share_img{
    width:35px;
    height: 35px;
    margin-right: 30px;
}
.w-ipx{
    height: 154px;
    padding-top: 84px;
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
    text-align: center;
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
var event = weex.requireModule('event');
import { WxcLoading } from 'weex-ui';

export default{
    components: { WxcLoading },

    data () {
        return{
            articalId:'',
            category:'',
            title:'',
            data:{},
            url: apis.apiURL.baseurl+'page/news/view?id=',
            getHeight: 1248,
            webview_style:{width:'750px',height:'1248px'},
            isShow:true,
            wipx:{},
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
        var fringeHeight = parseInt(self.getiPhonexFringeHeight(deviceHeight));
        self.wipx = {top : fringeHeight+'px'};
        //modal.toast({message:self.webview_style,duration:2});
        if(self.category=='default'){
            self.title = "快讯";
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
        }else if(self.category=='candy'){
            self.title = "糖果";
        }

        apis.requireArticalContent({
            "id":self.articalId
        },function(res){
            if(res.respond.ok){
                if((res.data != null) || (res.data != "")){
                    self.data = res.data;
                    //modal.toast({message:(res.data.title),duration:1});
                }
            }else{
                modal.toast({message:'网络请求失败',duration:1});
            }
        });
    },

    methods:{
        backImageClick:function (params) {
            //modal.toast({message:"返回",duration:1});
            navigator.pop({
                animated: "true"
            }); 
        },

        shareImageClick:function(){
            var self = this;
            var banner = self.data.banner ? self.data.banner : self.data.member ? self.data.member.logo:'';
            event.share(self.url+self.articalId,self.data.title,banner);
        },

        onPageStart:function(){
            var self = this;
            self.isShow = true;
        },

        onPageFinish:function(){
            var self = this;
            self.isShow = false;
        },
    }
}
</script>