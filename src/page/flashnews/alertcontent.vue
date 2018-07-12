<template>

    <div :class="['wrapper', isIpx()?'w-ipx':'']">
        <web ref="webview" style="width: 750px; height: 1248px" :src='url+articalId'>

        </web>
        <!--<scroller>
            <div class="alertcontent">
                <text class="alertcontent_title">{{data.title}}</text>
                <text class="time_text">2018-06-14 17:00</text>
                <div class="image_name_hit">
                    <div class="image_name">
                        <image class="typical_iamge" src="/assets/images/b.png" resize="cover"></image>
                        <text class="typical_name">{{data.source}}</text>
                    </div>
                    <div class="hits_count">
                        <text class="hits_count_text">点击数量</text>
                        <text class="hits_count_number">{{data.hits}}</text>
                    </div>
                </div>
                <div class="vhtml" v-html="data.content">
                <text class="contents_text">{{data.content}}</text>
                </div>
                <div class="see_number">
                    <image class="see_image" src="/assets/images/click.png"></image>
                    <text class="see_number_text">{{data.hits}}次点击</text>
                </div>
                <text class="declare_text">声明：转载内容仅供读者参考，不代表51BB8财经立场。 本文版权归原作者所有，我们尊重版权，如信息有误或其他疑问敬请联系，我们将尽快核实并处理。</text>
            </div>
        </scroller>-->
    </div>
</template>

<style>
.wrapper{
    background-color: white;
}
.w-ipx{
    height: 154px;
    padding-top: 84px;
}
</style>

<script>
var apis = require('../../common/action.js');
var modal = weex.requireModule('modal');
var deviceHeight = weex.config.env.deviceHeight;

export default{
    data () {
        return{
            articalId:'',
            data:{},
            url:'http://192.168.3.118:8182/web/page/news/view?id=',
        }
    },

    created(){
        var self = this;
        // self.articalId = this.$route.params.ArticalId;
        self.articalId = this.getParams().articalId
        //modal.toast({message:deviceHeight,duration:1});
        //modal.toast({message:"文章id"+self.articalId,duration:2});
        /*apis.requireArticalContent({id:self.articalId},function(res){
            if(res.respond.ok){
                self.data = res.data;
                //modal.toast({message:(self.data.newsCount),duration:1});
            }else{
                modal.toast({message:'网络请求失败',duration:1});
            }
        });*/
    },

    methods:{

    }
}
</script>