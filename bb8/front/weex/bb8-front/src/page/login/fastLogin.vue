<template>
  <div class="wrapper bg_white" >
     <loginHeader :data="data"></loginHeader> 
      <div class="register_out bg_white">
            <div class="hint_out_top"><text class="hint_text">提示：未注册用户将使用手机号自动创建账号</text></div>
            <div class="input_wrapper">  
                <input class="input bg_gray" type="text" placeholder="手机号" value="" v-model="mobileNo"/>  
                <image class="input_img" :src="get_img_path('mobile.png')"></image>  
            </div>
            <div class="input_wrapper send_code_out">  
                <div class="input_code_out">
                    <input class="input_code bg_gray" type="nubmer" placeholder="手机验证码" value="" v-model="vCode"/>  
                    <image class="input_img" :src="get_img_path('correct.png')"></image>  
                </div>
                <div class="input_code_btn"  @click="sendCode()">
                     <text class="send_code" :class="[datatime.judgetime?'send_btn_on':'send_btn_off']">{{datatime.timetext}}</text>  
                </div>

            </div>  
           <div class="hint_out"  @click="jump('/login')"><text class="hint_pwdlogin color1">账号密码登录</text></div>
            <div class="input_wrapper">  
                <div class="input_register bg"  @click="goModifyPwd()">  
                    <text class="input_register_text color1">登录</text>  
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
        mobileNo:'',  
        vCode:'' ,
        data:{title:"快速登录"},
        isShowLoad:false,
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
      }
    },
    created () {
        if(this.$route.query.title != undefined){
           this.data.title = this.$route.query.title;
        }
    },
    methods:{  
        /*发送验证码*/  
        sendCode:function () {  
            var self = this;
            if(this.mobileNo.length < 1){  
                modal.toast({ message:'请输入手机号'});
                return;  
            }
            var validationPhone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13|14|15|17|18)\d{9}$/;
            if(!(validationPhone.test(this.mobileNo))){ 
                modal.toast({ message: '手机号格式有误'})
                return false; 
            }
           
            if(self.datatime.judgetime){
                self.isShowLoad = true;
                apis.requireFastLoginValidate({
                    "data" : self.mobileNo,
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
        /*进入设置密码页面*/  
        goModifyPwd: function () {  
            var self = this;
            if(this.mobileNo.length < 1){  
                modal.toast({ message:'请输入手机号'});
                return;  
            }
            var validationPhone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13|14|15|17|18)\d{9}$/;
            if(!(validationPhone.test(this.mobileNo))){ 
                modal.toast({ message: '手机号格式有误'})
                return false; 
            }
            if(this.vCode.length < 1){  
                modal.toast({ message:'请输入验证码'});
                return;  
            }
            self.isShowLoad = true;
            apis.requireFastLogin({
                "phone" : self.mobileNo,
                "code" : self.vCode, 
               
            },function(res){
                self.isShowLoad = false;
                if(res.respond.ok){
                    modal.toast({ message:'登录成功',duration:0.5});
                    event.isLoginGlobalEvent("login",true);
                    event.dismissViewController(""); 
                }else{
                    modal.toast({message:res.respond.msg,duration:1});
                }
                
            });
        }  
    }  
  }
</script>

<style scoped>
.hint_out{
     width: 650px;  
    justify-content: flex-start;
    
}
.hint_out_top{
     width: 650px;  
    justify-content: flex-start;
    margin-bottom: 30px;
}
.hint_text{
  font-size: 25px;
  color:#BCC1C4;
}
.hint_pwdlogin{
  font-size: 30px;
}
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
    margin-top: 80px;
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
