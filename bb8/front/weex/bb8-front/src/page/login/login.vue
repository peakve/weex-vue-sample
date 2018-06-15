<template>
  <div class="wrapper">
    <!--<scroller  show-scrollbar="false">-->
      <loginHeader  :data="data"></loginHeader> 
      <div class="login_out">
    
        <image class="bb8_logo" resize="cover" src="/assets/images/bb8_logo.png"></image>
          <div class="input_wrapper">  
                <input onchange="onchangeUserNumber" class="input bg3" type="text" placeholder="请输入用户名" autofocus="true" value=""/>  
                <image class="input_img" src="/assets/images/icon_head.png"></image>  
            </div>  
            <div class="input_wrapper">  
                <input onchange="onchangeUserPassword" class="input bg3" type="password" placeholder="请输入密码" value=""/>  
                <image class="input_img" src="/assets/images/icon_password.png"></image>  
            </div>  
            <div class="input_wrapper">  
                <div class="input_login bg" onclick="login">  
                    <text class="input_login_text color1">登录</text>  
                </div>  
            </div>  
            <div class="input_wrapper">  
                <!--<text class="input-forget" >注册</text>  -->
               <div  @click="jump('/register')" class="input_register_out"><text class="input_register color1">注册 / 忘记密码?</text></div>
            </div>  
        <!--<wxc-button text="登录" class="btn_login" :text-style="textStyle"></wxc-button>-->
        <text class="login_footer color1">登录及同意《51BB8财经用户协议》</text>
      </div>
   <!--</scroller>-->
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import loginHeader from './loginHeader.vue'
  import { WxcButton } from 'weex-ui'
  export default {
    components: { loginHeader,WxcButton},
    data: () => ({
      fontSize: '15px',
      color: '#292b32',
      userNumber:'',  
      userPassword:'',
      data:{title:"登录"}
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
            this.userNumber = event.value;  
        },  
        onchangeUserPassword:function (event) {  
            this.userPassword = event.value;  
        },  
        /*找回密码*/  
        findPassword:function () {  
            this.$vm('toast').$emit('toast','Hello,找回密码暂时未开发，后续我们会进行完善。');  
        },  
        /*注册*/  
        register:function () {  
            this.$router.push({ path: '/home' })
            // this.$vm('toast').$emit('toast','Hello,注册暂时未开发，后续我们会进行完善。');  
        },  
        /*处理登录*/  
        login: function () {  
            if(this.userNumber.length < 1){  
                this.$vm('toast').$emit('toast','请输入手机号');  
                return;  
            }else if(this.userPassword.length < 1){  
                this.$vm('toast').$emit('toast','请输入密码');  
                return;  
            }  
            this.$vm('toast').$emit('toast',"登录成功");  
        }  
    }  
  }
</script>

<style scoped>
.login_footer{
    width:750px;
    /*position:fixed;
    bottom:30px;*/
    text-align:center;
    margin-top: 220px;
    font-size: 28px;
}
.btn_login{
    background-color:#ffe45f;
    margin-top: 50px
}
.login_out {
    align-items: center;
    justify-content: center;
}
.bb8_logo{
    width:450px;
    height: 102px;
    margin-top:120px;
    margin-bottom: 150px;
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
    width:43px;  
    height: 50px;  
}  
.input_login{  
    height: 85px;  
    width: 650px;  
    border-radius: 10px;  
    margin-top: 40px;  
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
/*.input_register{  

}  */
</style>
