<template>
  <div class="wrapper bg_gray">
     <scroller>
      <pcenterHeader></pcenterHeader> 
      <div class="personal_out">
        <div class="personal_header bg_white" v-if="isLogin">
             <image class="user_logo" resize="cover" :src="get_img_path('icon_user_img.png')"></image>
             <text class="color1 user_name">51bb8@163.com</text>
               <div class="exit_btn_out"  @click="exitLogin()">  
                    <text class="exit_btn color1">退出登录</text>  
                </div>  
        </div>
        <div class="personal_center">
            <wxc-cell 
                v-if="!isLogin"
            
                :has-arrow="true"
                @wxcCellClicked="goLogin()"
                :has-top-border="false"
                style="height: 160px;">
                <text  slot="title" style="font-size: 35px">登录</text>
                <image class="default_image"
                 slot="label"
                 :src="get_img_path('user_logo.png')"
                 ></image>
            </wxc-cell>
            <wxc-cell 
                title="联系我们"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                <image class="phone_image"
                 slot="label"
                 :src="get_img_path('contact.png')"
                 ></image>
            </wxc-cell>
               
            <div class="personal_info">
               <wxc-cell 
                    title="个人信息"
                    @wxcCellClicked="wxcCellClicked"
                    :has-top-border="false">
                    <image class="phone_image"
                    slot="label"
                    :src="get_img_path('pinfo.png')"></image>
                </wxc-cell>
                <wxc-cell 
                    label="邮箱"
                    title="51bb8@163.com"
                    @wxcCellClicked="wxcCellClicked"
                    :has-top-border="false">
                </wxc-cell>
                <wxc-cell 
                    label="用户名"
                    title="fby"
                    @wxcCellClicked="wxcCellClicked"
                    :has-arrow="true"
                    :has-top-border="false">
                </wxc-cell>
                <wxc-cell 
                    label="注册时间"
                    title="2018-05-22 08:56"
                    @wxcCellClicked="wxcCellClicked"
                    :has-top-border="false">
                </wxc-cell>
                <wxc-cell 
                    label="最后登录时间"
                    title="*******"
                    @wxcCellClicked="wxcCellClicked"
                    :has-top-border="false">
                </wxc-cell>
                <wxc-cell 
                    label="密码"
                    title="*******"
                    @wxcCellClicked="wxcCellClicked"
                    :has-arrow="true"
                    :has-top-border="false">
                </wxc-cell>
            </div>
        </div>
        
      </div>
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
        resData:{},
        interval: 0,
        type: 'default',
        loadingText: '加载中',
        isLogin:false
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
                console.log(res.data)
            }else{
                modal.toast({message:res.respond.msg,duration:1});
            }
         });
        },
        wxcCellClicked (e) {
            console.log(e)
            event.openURL("http://192.168.3.178:8080/dist/index.js?#/contactUs","联系我们","push");
        },
        goLogin(){
            event.openURL("http://192.168.3.178:8080/dist/index.js");
        },
        exitLogin(){
            event.isLoginGlobalEvent("login",false);
            event.openURL("http://192.168.3.178:8080/dist/index.js");
        }
    }  
  }
</script>

<style scoped>
.cell_login{
    font-size: 40px
}
.personal_info{
    width: 750px;
    margin-top: 20px;
    margin-bottom: 200px
}
.phone_image{
    width: 50px;
    height: 50px;
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
