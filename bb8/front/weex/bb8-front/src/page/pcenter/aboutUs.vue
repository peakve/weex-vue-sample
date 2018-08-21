<template>
  <div class="wrapper bg_white">
     <scroller>
      <pcenterHeader></pcenterHeader> 
      
      <div class="about_out">
         <image class="bb8_logo" resize="cover" :src="get_img_path('bb8_logo.png')"></image>
         <div class='main_centent'>
            <text class='text_one'>{{textone}}</text>
            <!-- <text class='text_one'>{{texttwo}}</text>
            <text class='text_one'>{{textthree}}</text>
            <text class='text_one'>{{textfour}}</text> -->
        </div>
      </div>
    </scroller>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import pcenterHeader from './pcenterHeader.vue'
  import { WxcLoading,WxcCell } from 'weex-ui';
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  export default {
    components: {WxcLoading,pcenterHeader,WxcCell},
    data: () => ({
        textone:'51BB8财经（币唯app），领先的数字货币行情及资讯智能服务平台。 对接全球300+交易所，实时监控3000多种数字货币行情变化，基于大数据处理建立海量行情的智投模型；聚合全球区块链领域24h最新资讯，提供新闻舆情AI分析及智选推送服务，帮助用户挖掘数据价值、甄别权威信息，辅助投资决策。',
        // texttwo:'对接全球各大交易所，上千种数字货币全天候行情监控，实时数据更新，并提供多时间维度及全网/交易所数据切换，满足不同用户的个性化需求。',
        // textthree:'基于分布式存储和网格计算等大数据处理，对海量数字货币行情进行实时分析，帮助用户快速把握重大行情、紧抓市场热点。',
        // textfour:'汇聚全球区块链领域24小时即时要闻、行业动态、监管政策，为行业机构及用户提供海量资讯信息聚合服务。',
    }),
    computed: {
     
    },
    created () {
        var self= this;
    },
    methods:{  


    }  
  }
</script>

<style scoped>
.about_out{
   width: 750px;
   justify-content: center;
   align-items: center;
}
.bb8_logo{
    width:450px;
    height: 102px;
    margin-top:120px;
    margin-bottom: 100px;
}
.main_centent{
    padding-top:20px;
    padding-left:40px;
    padding-right:30px
}
    .text_one{
    color:#3a3a3a;
    font-size: 28px;
    line-height: 55px;
}
.phone_image{
    width: 55px;
    height: 55px;
    margin-right: 20px;
}
.default_image{
    width: 90px;
    height: 90px;
    margin-right: 30px;
}
.personal_center{
    width: 750px;
    border-top-color:#E2E2E2;
    border-top-width: 1px;
}
.exit_btn_out{
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 10px;  
    margin-top: 15px;
    border-color:#000000;
    border-width: 1px;
}
.exit_btn{
    font-size: 30px
}
.user_name{
    font-size: 30px;
    margin-top: 15px
}
.personal_header{
    width: 750px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   padding-top: 80px;
   padding-bottom: 80px;

}
.personal_out{
    justify-content: center;
    align-items: center;
}
.user_logo{
    width:120px;
    height: 120px;
}

</style>
