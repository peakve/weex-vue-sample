<template>
  <div class="wrapper bg_white" >
     <loginHeader :data="data"></loginHeader> 
      <div class="register_out bg_white">
            <div class="input_wrapper">  
                <input class="input bg_gray" type="text" placeholder="请输入用户名" value="" v-model="userName"/>  
                <image class="input_img" :src="get_img_path('icon_head.png')"></image>  
            </div>  
            <div class="input_wrapper">  
                <input class="input bg_gray" type="nubmer" placeholder="请输入手机号/邮箱" value="" v-model="mobileNo"/>  
                <image class="input_img" :src="get_img_path('mobile.png')"></image>  
            </div>
            <div class="input_wrapper">  
                <input class="input bg_gray" type="password" placeholder="请输入密码" value="" v-model="userPwd"/>  
                <image class="input_img" :src="get_img_path('password.png')"></image>  
            </div>
            <div class="input_wrapper">  
                <input class="input bg_gray" type="password" placeholder="请重新输入密码" value="" v-model="nextUserPwd"/>  
                <image class="input_img" :src="get_img_path('password.png')"></image>  
            </div>  
            <div class="input_wrapper send_code_out">  
              
                <div class="input_code_out">
                    <input class="input_code bg_gray" type="nubmer" placeholder="请输入验证码" value="" v-model="vCode"/>  
                    <image class="input_img" :src="get_img_path('correct.png')"></image>  
                </div>
                <div class="input_code_btn"  @click="sendCode()">
                      <text class="send_code" :class="[datatime.judgetime?'send_btn_on':'send_btn_off']">{{datatime.timetext}}</text>  
                </div>

            </div>  

            <div class="input_wrapper">  
                <div class="input_register bg"  @click="register()">  
                    <text class="input_register_text color1">注册</text>  
                </div>  
            </div>  

      </div>
         <wxc-loading :show="isShowLoad"
                 :type="type"
                 :loading-text="loadingText"
                 :interval="interval"></wxc-loading>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import loginHeader from './loginHeader.vue'
  import {WxcLoading, WxcButton } from 'weex-ui'
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  export default {
    components: {WxcLoading,WxcButton ,loginHeader },
    data: () => ({
        fontSize: '15px',
        color: '#292b32',
        userName:'',    
        mobileNo:'',  
        userPwd:'' ,
        nextUserPwd:'' ,
        vCode:'' ,
        data:{title:"注册"},
        isShowLoad:false,
        loginData:{},
        interval: 0,
        type: 'default',
        loadingText: '加载中',
        datatime: {
            time:60,
            timetext:'发送验证码',
            judgetime:true
        },
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
      userId () {
        return 'fengfeng'
      },
      user () {
        return {userId:"fengfeng",created:"20180215",karma:"xfjdllgmmdd",about:"42523252"}
      }
    },
    created () {
      
    },
    methods:{  
        onchangeUserNumber:function (event) {  
           
        },  
        onchangeUserPassword:function (event) {  
            this.userPassword = event.value;  
        },  
        /*发送验证码*/  
        sendCode:function () {  
            var self = this;
            if(this.userName.length < 1){  
                modal.toast({ message:'请输入用户名'});
                return;  
            }
            if(this.mobileNo.length < 1){  
                modal.toast({ message:'请输入手机号或邮箱'});
                return;  
            }
            var validationName = /^(?!_)(?!.*?_$)^(?!(\d+)$)[\u4e00-\u9fff\w]{3,12}$/;
            if(!(validationName.test(this.userName))){ 

                modal.alert({
                    message: "用户名：3-12个字符 ，可使用汉字、字母、数字、下划线，不能为纯数字，且首末字符不能为下划线",
                    duration:  0.3,
                    okTitle:"确定"
                    }, function(e) {                    

                })
                return false; 
            }
            var validationPhone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13|14|15|17|18)\d{9}$/;
            var validationMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            if(!(validationPhone.test(this.mobileNo)) && !(validationMail.test(this.mobileNo))){ 
                modal.toast({ message: '手机号或邮箱格式有误'})
                return false; 
            }
             if(this.userPwd.length < 1){  
                modal.toast({ message:'请输入密码'});
                return;  
            }
            var validationPwd = /^.{6,16}$/;
            if(!(validationPwd.test(this.userPwd))){ 
                modal.alert({
                    message: "密码：6~16个字符，区分大小写",
                    duration:  0.3,
                    okTitle:"确定"
                    }, function(e) {                    

                })
                return false; 
             }
            if(this.nextUserPwd != this.userPwd){  
                modal.toast({ message:'输入的2次密码不同'});
                return;  
            }
           
            if(self.datatime.judgetime){
                self.isShowLoad = true;
                apis.requireSignUpValidate({
                    "account" : self.userName,
                    "emailOrPhone" : self.mobileNo,
                    "password" : self.userPwd,
                    "confirmPassword" : self.nextUserPwd,
                },function(res){
                    self.isShowLoad = false;
                    if(res.respond.ok){
                        self.datatime.judgetime = false;
                        self.datatime.timetext='60秒';
                        var timer =setInterval(function(){
                           self.datatime.time = self.datatime.time -1;
                            if(self.datatime.time > 0){
                                if(((self.datatime.time)+'').length != 1){
                                self.datatime.timetext = self.datatime.time+'秒';
                                }else{
                                self.datatime.timetext = '0'+self.datatime.time+'秒';
                                }
                            }else{
                                self.datatime.judgetime = true;
                                clearInterval(timer);
                                self.datatime.timetext = '重新发送';
                                self.datatime.time = 60;
                            }
                        }, 1000); 
                    }else{
                        modal.toast({message:res.respond.msg,duration:1});
                    }
                    
                });
             }
        },  
        /*处理登录*/  
        register: function () {  
            var self = this;
            if(this.userName.length < 1){  
                modal.toast({ message:'请输入用户名'});
                return;  
            }if(this.mobileNo.length < 1){  
                modal.toast({ message:'请输入手机号或邮箱'});
                return;  
            }
            var validationPhone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13|14|15|17|18)\d{9}$/;
            var validationMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            if(!(validationPhone.test(this.mobileNo)) && !(validationMail.test(this.mobileNo))){ 
                modal.toast({ message: '手机号或邮箱格式有误'})
                return false; 
            }
            var validationName = /^(?!_)(?!.*?_$)^(?!(\d+)$)[\u4e00-\u9fff\w]{3,12}$/;
            if(!(validationName.test(this.userName))){ 

                modal.alert({
                    message: "用户名：3-12个字符 ，可使用汉字、字母、数字、下划线，不能为纯数字，且首末字符不能为下划线",
                    duration:  0.3,
                    okTitle:"确定"
                    }, function(e) {                    

                })
                return false; 
            }
            if(this.userPwd.length < 1){  
                modal.toast({ message:'请输入密码'});
                return;  
            }

            // var validationPwd = /^(?!^\d+$)[\@A-Za-z\d\!\#\$\%\^\&\*\.\~]{6,16}$/;
             var validationPwd = /^.{6,16}$/;
            if(!(validationPwd.test(this.userPwd))){ 
                // modal.toast({ message: '密码格式有误'})
                modal.alert({
                    message: "密码：6~16个字符，区分大小写",
                    duration:  0.3,
                    okTitle:"确定"
                    }, function(e) {                    

                })
                return false; 
             }
            if(this.nextUserPwd != this.userPwd){  
                modal.toast({ message:'输入的2次密码不同'});
                return;  
            }
            if(this.vCode.length < 1){  
                modal.toast({ message:'请输入验证码'});
                return;  
            }   
            self.isShowLoad = true;
            apis.requireSignUp({
                "account" : self.userName,
                "emailOrPhone" : self.mobileNo,
                "password" : self.userPwd,
                "confirmPassword" : self.nextUserPwd,
                "validateCode" : self.vCode
            },function(res){
                self.isShowLoad = false;
                if(res.respond.ok){
                    modal.toast({ message:'注册成功',duration:0.5});
                    event.isLoginGlobalEvent("login",true);
                    event.dismissViewController("");
                    // self.loginData = res.data;
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
.register_footer{
    width:100%;
    position:fixed;
    bottom:30px;
    text-align:center
}
.btn_register{
    background-color:#ffe45f;
    margin-top: 50px
}
.register_out {
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}
.bb8_logo{
    width:450px;
    height: 102px;
    margin-top:150px;
    margin-bottom: 150px;
}
.register_title{
    padding-top: 30px;
    margin-bottom: 100px
}
.input_wrapper{  
    width: 650px;  
    margin-left: 100px;  
    margin-right: 100px;  
    margin-bottom: 40px;  
}  
.send_code_out{
    flex-direction: row;
    justify-content: space-around;
}
.input_code_out{  
    width: 450px;  
    margin-right: 30px;  
}  
.input_code_btn{  
    width: 170px;  
    text-align: center
} 
.input {  
    height: 85px;  
    width: 650px;  
    padding-left: 70px;  
    padding-top: 15px;  
    padding-bottom: 15px;  
    border-color: #eeeeef;  
    border-radius:10px;  
    outline: none;  
    font-size: 28px;
    placeholder-color:#c2c2c2
}  
.input_code {  
    height: 85px;  
    width: 450px;  
    padding-left: 70px;  
    padding-top: 15px;  
    padding-bottom: 15px;  
    border-color: #eeeeef;  
    border-radius:10px;  
    outline: none;  
    font-size: 28px;
    placeholder-color:#c2c2c2
}  
.input_img{  
    position: absolute;  
    top:21px;  
    left: 18px;  
    width:40px;  
    height: 40px;  
}  
.input_register{  
    height: 85px;  
    width: 650px;  
    border-radius: 10px;  
    margin-top: 60px;  
}  
.input_register_text{  
    height: 85px;  
    width: 650px;  
    text-align: center;  
    line-height: 85px;  
    font-size: 30px
}
.register_text{
    font-size: 30px
}
.send_code{
    border-radius: 10px;  
    height: 85px;  
    line-height: 85px; 
    width: 170px ;
    text-align: center;
    padding: 0 10px;
    font-size: 28px
}
.input_forget{  
    position: absolute;  
    left: 30px;  
}  

</style>
