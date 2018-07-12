<template>
  <div class="wrapper bg_white">
    <scroller  show-scrollbar="false">
      <loginHeader  :data="data" class="login_header" v-show="isshow"></loginHeader> 
      <div class="login_out bg_white">
    
        <image class="bb8_logo" resize="cover" :src="get_img_path('bb8_logo.png')"></image>
          <div class="input_wrapper">  
                <input onchange="onchangeUserNumber" class="input bg_gray" type="text" placeholder="请输入用户名/手机号/邮箱" value="" v-model="userNumber"/>  
                <image class="input_img" :src="get_img_path('mobile.png')"></image>  
            </div>  
            <div class="input_wrapper">  
                <input onchange="onchangeUserPassword" class="input bg_gray" type="password" placeholder="请输入密码" value="" v-model="userPassword"/>  
                <image class="input_img" :src="get_img_path('password.png')"></image>  
            </div>  
             <div class="input_wrapper">  
                <!--<text class="input-forget" >注册</text>  -->
               <div  class="input_register_out">
                  <div class="register_out">
                    <text class="input_register color1"  @click="jump('/register')">注册 /</text>
                    <text class="input_register color1"  @click="jump('/modifySendCode')"> 忘记密码?</text>
                  </div>
               </div>
            </div>  
            <div class="input_wrapper">  
                <div class="input_login bg" @click="login()">  
                    <text class="input_login_text color1">登录</text>  
                </div>  
            </div>  
     
        <!--<wxc-button text="登录" class="btn_login" :text-style="textStyle"></wxc-button>-->
        <div :class="[isIPhoneX?'login_footer':'login_footer_default']">
            <div class="footer_out">
                <text class="color2">登录及同意</text>
                <text class="color1">《51BB8财经用户协议》</text>
            </div>
         </div>
      </div>
        <wxc-loading :show="isShowLoad"
                 :type="type"
                 :loading-text="loadingText"
                 :interval="interval"></wxc-loading>
   </scroller>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import loginHeader from './loginHeader.vue'
  import { WxcLoading,WxcButton } from 'weex-ui'
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  export default {
    components: {WxcLoading,loginHeader,WxcButton},
    data: () => ({
        fontSize: '15px',
        color: '#292b32',
        userNumber:'',  
        userPassword:'',
        data:{title:"登录"},
        isshow:false,
        isShowLoad:false,
        loginData:{},
        interval: 0,
        type: 'default',
        loadingText: '加载中'
    }),
    computed: {
      textStyle () {
        const { fontSize, color } = this;
        const customStyle = {};
        if (fontSize) {
          customStyle.fontSize = fontSize;
        }
        if (color) {
          customStyle.color = color;
        }
        return {
          fontSize, color
        }
      },
      isIPhoneX () {
        return util.env.isIPhoneX()
      },
      user () {
        return {userId:"fengfeng",created:"20180215",karma:"xfjdllgmmdd",about:"42523252"}
      }
    },
    created () {
        this.isshow=true;
    },
    mounted(){
    
    },
    methods:{  
        onchangeUserNumber:function (event) {  
            this.userNumber = event.value;  
        },  
        onchangeUserPassword:function (event) {  
            this.userPassword = event.value;  
        },  
        /*找回密码*/  
        findPassword:function () {  
           
        },  
        /*注册*/  
        register:function () {  
            this.$router.push({ path: '/home' })
            // this.$vm('toast').$emit('toast','Hello,注册暂时未开发，后续我们会进行完善。');  
        },  
        //获取cookie
        getCookie: function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },
        /*处理登录*/  
        login: function () {  
            var self = this;
         
            if(this.userNumber.length < 1){  
                modal.toast({ message:'请输入手机号'});
                return;  
            }else if(this.userPassword.length < 1){  
                modal.toast({ message:'请输入密码'});
                return;  
            }  
            self.isShowLoad = true;
            apis.requireLogin({
                "account" : self.userNumber,
                "password" : self.userPassword, 
               
            },function(res){
                self.isShowLoad = false;
                if(res.respond.ok){
                    modal.toast({ message:'登录成功'});
                    self.loginData = res.data;
                     event.isLoginGlobalEvent("login",true,);
                     event.dismissViewController("");

                    //  self.getCookie("bb8_login_token");
                    //   modal.toast({ message: util.getCookie("bb8_login_token")+"11"});
                    // if(event.dismissViewController("") != undefined){
                    //     event.isLoginGlobalEvent("login",true);
                    //     // event.dismissViewController("");
                       
                    // }
                    console.log(res.data)
                }else{
                    modal.toast({message:res.respond.msg,duration:1});
                }
                
            });
        }  
    }  
  }
</script>

<style scoped>
.login_header{
    margin-top: 120px;
}
.login_footer_default{
    width:750px;
    position:fixed;
    bottom:50px;
    left: 0;right: 0;
    z-index: 10;
    text-align:center;
    font-size: 28px;
}
.login_footer{
    width:750px;
    position:fixed;
    bottom:150px;
    left: 0;right: 0;
    z-index: 10;
    text-align:center;
    font-size: 28px;
}
.btn_login{
    background-color:#ffe45f;
    margin-top: 50px
}
.login_out {
    width:750px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.bb8_logo{
    width:450px;
    height: 102px;
    margin-top:120px;
    margin-bottom: 160px;
}
.login_title{
    padding-top: 30px
}
.input_wrapper{  
    width: 650px;  
    margin-left: 100px;  
    margin-right: 100px;  
    margin-bottom: 40px;  
}  
.input {  
    height: 85px;  
    width: 650px;  
    padding-left: 90px;  
    padding-top: 15px;  
    padding-bottom: 15px;  
    border-color: #eeeeef;  
    border-radius:10px;  
    outline: none;  
}  
.input_img{  
    position: absolute;  
    top:19px;  
    left: 18px;  
    width:45px;  
    height: 45px;  
}  
.input_login{  
    height: 85px;  
    width: 650px;  
    border-radius: 10px;  
    margin-top: 80px;  
}  
.input_login_text{  
    height: 85px;  
    width: 650px;  
    text-align: center;  
    line-height: 85px;  
    font-size: 30px
  
}  
.login_text{
    font-size: 30px
}
.input_forget{  
    position: absolute;  
    left: 30px;  
}  
.input_register_out{
    position: absolute;  
    right: 10px;  
    height:40px;
    font-size: 28px;
}
.register_out{
   flex-direction:row;
   justify-content:center;
}
.footer_out{
   flex-direction:row;
   justify-content:center;
}
</style>
