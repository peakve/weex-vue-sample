<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <scroller>
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
                <!--<div class="vhtml" v-html="data.content">
                <text class="contents_text">{{data.content}}</text>
                </div>-->
                <div class="see_number">
                    <image class="see_image" src="/assets/images/click.png"></image>
                    <text class="see_number_text">{{data.hits}}次点击</text>
                </div>
                <text class="declare_text">声明：转载内容仅供读者参考，不代表51BB8财经立场。 本文版权归原作者所有，我们尊重版权，如信息有误或其他疑问敬请联系，我们将尽快核实并处理。</text>
            </div>
        </scroller>
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
.alertcontent{
    flex-direction: column;
    margin-bottom: 20px;
}
.alertcontent_title{
    font-size: 45px;
    font-weight: 700;
    color: #424242;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px; 
}
.time_text{
    padding-left: 20px;
    padding-bottom: 20px;
    color: #ababab;
}
.image_name_hit{
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-top:35px;
    padding-bottom: 30px;
    padding-left: 20px; 
    padding-right: 20px;
    border-bottom-width: 1px;
    border-bottom-color: #fbfbfb; 
}
.image_name{
    align-items: center;
    flex-direction: row;
}
.typical_iamge{
    width: 72px;
    height: 72px;
    margin-right: 20px;
}
.typical_name{
    color: #4d4d4d;
    font-size: 25px;
    font-weight: 700;
}
.hits_count{
    align-items: center;
    flex-direction: row;
}
.hits_count_text{
    color: #b3b3b3;
    font-size: 25px;
    margin-right: 10px;
}
.hits_count_number{
    color: #4d4d4d;
    font-size: 25px;
}
.vhtml{
    padding-left: 20px;
    padding-right: 20px;
}
.contents_text{
    font-size: 30px;
    color: #333;
}
.see_number{
    align-items: center;
    flex-direction: row;
    padding-top: 30px;
    padding-bottom: 50px;
    padding-left: 20px;
}
.see_image{
    width: 32px;
    height: 32px;
    margin-right: 10px;
}
.see_number_text{
    font-size: 25px;
    color: #333;
}
.declare_text{
    font-size: 25px;
    color: #808080;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
}
</style>

<script>
var apis = require('../../common/action.js');
var modal = weex.requireModule('modal');

export default{
    data () {
        return{
            articalId:'',
            data:{},
        }
    },

    created(){
        var self = this;
        self.articalId = this.$route.params.ArticalId;
        //modal.toast({message:"文章id"+self.articalId,duration:2});
        apis.requireArticalContent({id:self.articalId},function(res){
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