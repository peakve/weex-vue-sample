<template>
  <div class="wrapper bg_white" >
     <loginHeader :data="data" class="login_header"></loginHeader> 
      <div class="register_out bg_white">
            <div class="input_wrapper">  
                <input class="input bg_gray" type="password" placeholder="设置登录密码，6-16个字符，字母和数字组合" value="" v-model="userPwd"/>  
                <image class="input_img" :src="get_img_path('password.png')"></image>  
            </div>
            <div class="input_wrapper">  
                <input class="input bg_gray" type="password" placeholder="确认登录密码" value="" v-model="nextUserPwd"/>  
                <image class="input_img" :src="get_img_path('password.png')"></image>  
            </div>  
            <div class="input_wrapper">  
                <div class="input_register bg"  @click="getModifyPwd()">  
                    <text class="input_register_text color1">确定</text>  
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
        data:{title:"登录密码设置"},
        isShowLoad:false,
        loginData:{},
        interval: 0,
        type: 'default',
        loadingText: '加载中',
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
      this.mobileNo = this.$route.query.mobileNo;
      this.vCode = this.$route.query.vCode;
    },
    methods:{   
        /*修改密码*/  
        getModifyPwd: function () {  
            var self = this;
            if(this.userPwd.length < 1){  
                modal.toast({ message:'请输入密码'});
                return;  
            }
            var validationPwd = /^(?!^\d+$)[\@A-Za-z\d\!\#\$\%\^\&\*\.\~]{6,16}$/;
            if(!(validationPwd.test(this.userPwd))){ 
                modal.toast({ message: '密码格式有误'})
                return false; 
             }
            if(this.nextUserPwd != this.userPwd){  
                modal.toast({ message:'输入的2次密码不同'});
                return;  
            }  
            self.isShowLoad = true;
            apis.requireModifyPwd({
                "emailOrPhone" : self.mobileNo,
                "password" : self.userPwd,
                "confirmPassword" : self.nextUserPwd,
                "validateCode" : self.vCode
            },function(res){
                self.isShowLoad = false;
                if(res.respond.ok){
                    modal.toast({ message:'设置成功'});
                    this.$router.push("/login")
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
    padding-left: 90px;  
    padding-top: 15px;  
    padding-bottom: 15px;  
    border-color: #eeeeef;  
    border-radius:10px;  
    outline: none;  
}  
.input_code {  
    height: 85px;  
    width: 450px;  
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
    font-size: 30px
}
.input_forget{  
    position: absolute;  
    left: 30px;  
}  
.input_register{  
    position: absolute;  
    right: 10px;  
}  
</style>
