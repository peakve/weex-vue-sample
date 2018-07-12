<template>
  <div class="wrapper bg_gray">
     <scroller>
      <pcenterHeader></pcenterHeader> 
      <div class="personal_out">

        <div class="personal_center">
          <wxc-cell 
                desc="3046951607"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                 <div class="label_out"  slot="label">
                <image class="phone_image"
                 :src="get_img_path('qq.png')">
                 </image>
                 <text class="label_out_text">交易所/新币对接</text>
                </div>
            </wxc-cell>
             <wxc-cell 
                desc="3046951607"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                <div class="label_out"  slot="label">
                <image class="phone_image"
                 :src="get_img_path('qq.png')">
                 </image>
                  <text class="label_out_text">广告合作</text>
                </div>
            </wxc-cell>
            <wxc-cell 
                desc="3046951607"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                 <div class="label_out"  slot="label">
                <image class="phone_image"
                 :src="get_img_path('qq.png')">
                 </image>
                  <text class="label_out_text">商务合作</text>
                </div>
            </wxc-cell>
                 <wxc-cell 
                desc="3046951607"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                <div class="label_out"  slot="label">
                    <image class="phone_image"
                    :src="get_img_path('qq.png')">
                    </image>
                   <text class="label_out_text">51BB8客服</text>
                </div>
            </wxc-cell>
                 <wxc-cell 
                desc="service@51bb8.com"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                <div class="label_out"  slot="label">
                    <image class="phone_image"
                    :src="get_img_path('mailbox.png')">
                    </image>
                    <text class="label_out_text">联系邮箱</text>
                </div>
            </wxc-cell>
                 <wxc-cell 
                desc="http://www.51bb8.com"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                <div class="label_out"  slot="label">
                    <image class="phone_image"
                      :src="get_img_path('network.png')">
                    </image>
                    <text class="label_out_text">官方网址</text>
                </div>
            </wxc-cell>
            <div class="personal_info">
               <wxc-cell 
                    title="关于我们"
                    :has-arrow="true"
                    @wxcCellClicked="goAboutUs()"
                    :has-top-border="false">
                    <image class="phone_image"
                     slot="label"
                    :src="get_img_path('about_us.png')"
                    ></image>
                </wxc-cell>
                <wxc-cell 
                    title="免责申明"
                    :has-arrow="true"
                    @wxcCellClicked="goDisclaimer()"
                    :has-top-border="false">
                    <image class="phone_image"
                     slot="label"
                    :src="get_img_path('declare.png')"
                    ></image>
                </wxc-cell>
            </div>
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
  const globalEvent = weex.requireModule('globalEvent');
  export default {
    components: {WxcLoading,pcenterHeader,WxcCell},
    data: () => ({
        fontSize: '15px',
        color: '#292b32',
        infoInData:"http://www.51bb8.com"
    }),
    computed: {
     
    },
    created () {
        var self= this;
    },
    methods:{  

        wxcCellClicked (e) {
           
        },
        goDisclaimer(){
            event.openURL("http://192.168.3.178:8080/dist/index.js?#/disclaimer","免责申明","push");
        },
        goAboutUs () {
            event.openURL("http://192.168.3.178:8080/dist/index.js?#/aboutUs","关于我们","push");
        },
    }  
  }
</script>

<style scoped>
.label_out{
    flex-direction: row;
    justify-content: flex-start;
    align-items: center
}
.label_out_text{
    width: 220px;
    font-size: 28px
}
.personal_out{
    justify-content: center;
    align-items: center;
    width: 750px;
}
.personal_center{
    width: 750px;
    border-top-color:#E2E2E2;
    border-top-width: 1px;
}
.personal_info{
    width: 750px;
    margin-top: 20px;
    margin-bottom: 200px
}
.phone_image{
    width: 40px;
    height: 40px;
    margin-right: 20px;
}
</style>
