<template>
  <div class="wrapper bg_white" >
     <loginHeader :data="data" class="login_header"></loginHeader> 
      <div class="register_out bg_white">
            <div class="input_wrapper">  
                <input onchange="onchangeUserNumber" class="input bg_gray" type="text" placeholder="请输入用户名" value=""/>  
                <image class="input_img" :src="get_img_path('icon_head.png')"></image>  
            </div>  
            <div class="input_wrapper">  
                <input onchange="onchangeUserPassword" class="input bg_gray" type="password" placeholder="请输入手机号" value=""/>  
                <image class="input_img" :src="get_img_path('icon_password.png')"></image>  
            </div>
            <div class="input_wrapper">  
                <input onchange="onchangeUserPassword" class="input bg_gray" type="password" placeholder="请输入密码" value=""/>  
                <image class="input_img" :src="get_img_path('icon_password.png')"></image>  
            </div>
            <div class="input_wrapper">  
                <input onchange="onchangeUserPassword" class="input bg_gray" type="password" placeholder="请重新输入密码" value=""/>  
                <image class="input_img" :src="get_img_path('icon_password.png')"></image>  
            </div>  
            <div class="input_wrapper send_code_out">  
              
                <div class="input_code_out">
                    <input onchange="onchangeUserPassword" class="input_code bg_gray" type="password" placeholder="请输入验证码" value=""/>  
                    <image class="input_img" :src="get_img_path('icon_password.png')"></image>  
                </div>
                <div class="input_code_btn">
                     <text class="color1 send_code bg">发送验证码</text>  
                </div>

            </div>  

            <div class="input_wrapper">  
                <div class="input_register bg">  
                    <text class="input_register_text color1">注册</text>  
                </div>  
            </div>  

      </div>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import loginHeader from './loginHeader.vue'
  import { WxcButton } from 'weex-ui'
  export default {
    components: {WxcButton ,loginHeader },
    data: () => ({
      fontSize: '15px',
      color: '#292b32',
      userNumber:'',  
      userPassword:'' ,
      data:{title:"注册"}
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
            this.$vm('toast').$emit('toast','Hello,注册暂时未开发，后续我们会进行完善。');  
        },  
        /*处理登录*/  
        register: function () {  
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
    width:43px;  
    height: 50px;  
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
