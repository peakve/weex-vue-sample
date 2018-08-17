<template>
  <div class="wrapper bg_gray">
     <scroller show-scrollbar="false">
      <pcenterHeader></pcenterHeader> 
      <div class="personal_out">
        <div class="personal_header bg_white" v-if="isLogin">
             <image class="user_logo" resize="cover" :src="get_img_path('icon_user_img.png')"></image>
              <text class="color1 user_name">{{resData.phone}}</text>
               <div class="exit_btn_out"  @click="valedateExit()">  
                    <text class="exit_btn color1">退出登录</text>  
                </div>  
        </div>
        <div class="my_module_out" v-if="isLogin">
        <div class="line_gary"></div>
        <div class="my_module_content" >
            <div class="module_item">
                <image class="module_image" :src="get_img_path('wx_optional.png')"></image>
                <text class="exit_btn color1">自选</text>
            </div>
              <div class="module_item">
                <image class="module_image" :src="get_img_path('wx_attention.png')"></image>
                <text class="exit_btn color1">关注</text>
            </div>
              <div class="module_item">
                <image class="module_image" :src="get_img_path('wx_asset.png')"></image>
                <text class="exit_btn color1">资产</text>
            </div>
              <div class="module_item">
                <image class="module_image" :src="get_img_path('wx_mailbox.png')"></image>
                <text class="exit_btn color1">信箱</text>
            </div>
         </div>
       </div>
        <div class="personal_center">
            <wxc-cell 
                v-if="!isLogin"
                :has-arrow="true"
                @wxcCellClicked="goLogin()"
                :has-top-border="false"
                :cell-style="loginStyle">
                <text  slot="title" class="login_text">登录</text>
                <image class="default_image"
                 slot="label"
                 :src="get_img_path('user_logo.png')"
                 ></image>
            </wxc-cell>
            <wxc-cell 
                v-if="isLogin"
                title="我的信息"
                :has-arrow="true"
                :cell-style="cellStyle"
                 @wxcCellClicked="goUserInfo"
                :has-top-border="false">
                <image class="phone_image"
                slot="label"
                :src="get_img_path('pinfo.png')"></image>
            </wxc-cell>
            <!-- <wxc-cell 
                title="联系我们"
                :has-arrow="true"
                :cell-style="cellStyle"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                <image class="phone_image"
                 slot="label"
                 :src="get_img_path('contact.png')"
                 ></image>
            </wxc-cell> -->
            
        <div class="contact_us">
          <wxc-cell 
                :has-top-border="false">
                 <div class="label_out"  slot="label">
                <image class="phone_image"
                 :src="get_img_path('qq.png')">
                 </image>
                 <text class="label_out_text">交易所/新币对接</text>
                     <text class="desc_text">3046951607</text>
                </div>
             
            </wxc-cell>
             <wxc-cell 
                :has-top-border="false">
                <div class="label_out"  slot="label">
                <image class="phone_image"
                 :src="get_img_path('qq.png')">
                 </image>
                  <text class="label_out_text">广告合作</text>
                    <text class="desc_text">1143758324</text>
                </div>
            </wxc-cell>
            <wxc-cell 
                :has-top-border="false">
                 <div class="label_out"  slot="label">
                <image class="phone_image"
                 :src="get_img_path('qq.png')">
                 </image>
                  <text class="label_out_text">商务合作</text>
                   <text class="desc_text">2818392801</text>
                </div>
            </wxc-cell>
            <wxc-cell 
                :has-top-border="false">
                <div class="label_out"  slot="label">
                    <image class="phone_image"
                    :src="get_img_path('qq.png')">
                    </image>
                   <text class="label_out_text">51BB8客服</text>
                       <text class="desc_text">2026927046</text>
                </div>
            </wxc-cell>
                 <wxc-cell 
                :has-top-border="false">
                <div class="label_out"  slot="label">
                    <image class="phone_image"
                    :src="get_img_path('mailbox.png')">
                    </image>
                    <text class="label_out_text">联系邮箱</text>
                     <text class="desc_text">service@51bb8.com</text>
                </div>
            </wxc-cell>
             <wxc-cell 
                :has-top-border="false">
                <div class="label_out"  slot="label">
                    <image class="phone_image"
                      :src="get_img_path('network.png')">
                    </image>
                    <text class="label_out_text">官方网址</text>
                     <text class="desc_text">http://www.51bb8.com</text>
                </div>
            </wxc-cell>
            <div class="personal_info">
               <wxc-cell 
  
                    :has-arrow="true"
                    :cell-style="cellStyle"
                    @wxcCellClicked="goAboutUs()"
                    :has-top-border="false">
                       <div class="label_out_more"  slot="label">
                    <image class="phone_image"
                      :src="get_img_path('about_us.png')">
                    </image>
                    <text class="label_out_text">关于我们</text>
                </div>
 
                </wxc-cell>
                <wxc-cell 

                    :has-arrow="true"
                       :cell-style="cellStyle"
                    @wxcCellClicked="goDisclaimer()"
                    :has-top-border="false">

                 <div class="label_out_more"  slot="label">
                    <image class="phone_image"
                      :src="get_img_path('declare.png')">
                    </image>
                    <text class="label_out_text">免责声明</text>
                </div>
 
                </wxc-cell>
                <wxc-cell 
                :has-arrow="true"
                :cell-style="cellStyle"
                @wxcCellClicked="goSettingPage"
                :has-top-border="false">
                 <div class="label_out_more"  slot="label">
                    <image class="phone_image"
                      :src="get_img_path('setup.png')">
                    </image>
                    <text class="label_out_text">设置</text>
                </div>
            </wxc-cell>
            </div>
        </div>
            
           
        </div>
        
      </div>
      <div class="footer_null"></div>
    </scroller>
   <wxc-loading :show="isShowLoad"
                 :type="type"
                 :loading-text="loadingText"
                 :interval="interval"></wxc-loading>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import pcenterHeader from './pcenterHeader.vue'
  import { WxcLoading,WxcCell } from 'weex-ui';
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  var common = require('../../common/common.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  const globalEvent = weex.requireModule('globalEvent');
  export default {
    components: {WxcLoading,pcenterHeader,WxcCell},
    data: () => ({
        fontSize: '15px',
        color: '#292b32',
        userNumber:'',  
        userPassword:'',
        data:{title:""},
        isShowLoad:false,
        resData:{account:"---",phone:"---",lastLoginTime:"---",email:"---",registTime:"---",pwd:"---"},
        interval: 0,
        type: 'default',
        loadingText: '加载中',
        isLogin:false,
        cellStyle: {
            height: "110px"
        },
        loginStyle: {
            height: "160px"
        }
    }),
    computed: {
     
    },
    created () {
        var self= this;
         
        if ( this.$getConfig().isLogin != undefined){
            this.isLogin = this.$getConfig().isLogin
        }
        // if (apis.getParameterByName('isLogin', this.bundleUrl) != undefined){
        //      modal.toast({message:"getParameterByName",duration:1});
        //     this.isLogin = apis.getParameterByName('isLogin', this.bundleUrl);
        // }
       if(self.isLogin){
           self.userInfo();
        }
        globalEvent.addEventListener("login", function (e) {
            self.isLogin = e.ok;
            if(self.isLogin){
                 self.userInfo();
            }else{
                //  self.resData = {account:"---",phone:"---",lastLoginTime:"---",email:"---",registTime:"---",pwd:"---"};
            }
        });
    },
    methods:{  
       userInfo(){
         var self=this;
         self.isShowLoad = true;
         apis.requireUserInfo({},function(res){
            self.isShowLoad = false;
            if(res.respond.ok){
                self.resData = res.data;
                self.resData.pwd = "******"
                if(res.data.email == null){
                    self.resData.email = "---"
                }
                if(res.data.phone == null){
                    self.resData.phone = res.data.email
                }
                if(res.data.lastLoginTime != null){

                    self.resData.lastLoginTime=util.formatDate(res.data.lastLoginTime)
                   
                }
                if(res.data.registTime != null){

                    self.resData.registTime=util.formatDate(res.data.registTime)
                }
                console.log(res.data)
            }else{
                modal.toast({message:res.respond.msg,duration:1});
            }
         });
        },
    
        modifyPassword:function () {  
            // this.$router.push({path:"/modifySendCode",query:{"title":"修改密码"}})
            if(this.isLogin){
                event.openURL(apis.apiURL.basepath+"index.js?#/modifySendCode");
            }else{
                 modal.toast({message:"未登录",duration:0.5});
            }
        },
        modifyInfo () {
            if(this.isLogin){
                event.openURL(apis.apiURL.basepath+"index.js?#/modifyInfo");
            }else{
                 modal.toast({message:"未登录",duration:0.5});
            }
        },
       goDisclaimer(){
            event.openURL(apis.apiURL.basepath+"index.js?#/disclaimer","免责声明","push");
        },
        goAboutUs () {
            event.openURL(apis.apiURL.basepath+"index.js?#/aboutUs","关于我们","push");
        },
        wxcCellClicked (e) {
            console.log(e)
            event.openURL(apis.apiURL.basepath+"index.js?#/contactUs","联系我们","push");
        },
         goUserInfo (e) {
            event.openURL(apis.apiURL.basepath+"index.js?#/personalInfo","我的信息","push");
        },
         goSettingPage (e) {
            event.openController("SettingViewController")
        },
        goLogin(){
            event.openURL(apis.apiURL.basepath+"index.js");
        },
        valedateExit(){
            var self=this;
            modal.confirm({
                message: "确定退出当前账号？",
                okTitle:  "确定",
                cancelTitle:"取消"
                }, function(e) {                    
                    if(e=="确定"){
                       self.exitLogin()
                    }
            })
        },
        exitLogin(){
            var self=this;
            self.isShowLoad = true;
            apis.requireLogout(function(res){
                self.isShowLoad = false;
                if(res.respond.ok){
                    event.isLoginGlobalEvent("login",false);
                    event.openURL(apis.apiURL.basepath+"index.js");
                }else{
                    modal.toast({message:res.respond.msg,duration:1});
                }
            });
        }
    }  
  }
</script>

<style scoped>
.login_text{
    font-size: 35px
}
.footer_null{
    height: 60px;
}
.label_out{
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 750px;
}
.label_out_more{
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.label_out_text{
    width: 220px;
    font-size: 27px
}
.my_module_out{
    width: 750px;
    background-color: white;
    justify-content: center;
    align-items: center;
}
.my_module_content{
    width: 600px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding-top: 50px;
    padding-bottom: 50px;
}
.module_item{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center
}
.module_image{
    width: 50px;
    height: 50px;
}
.line_gary{
    width: 500px;
    height: 1px;
    background-color: gray
}
.cell_login{
    font-size: 40px
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
.contact_us{
    width: 750px;
    border-top-color:#E2E2E2;
    border-top-width: 1px;
    margin-top: 20px
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
    padding-bottom: 50px;

}
.personal_out{
     width: 750px;
    justify-content: center;
    align-items: center;
}
.user_logo{
    width:120px;
    height: 120px;
}
.desc_text{
   flex: 1;
   color: gray;
   font-size: 24px;
   text-align: right;
   padding-right: 50px

}
</style>
