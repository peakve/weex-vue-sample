<template>
  <div class="wrapper">
     <scroller>
      <pcenterHeader></pcenterHeader> 
      <div class="personal_out bg_gray">
        <div class="personal_header bg_white">
             <image class="user_logo" resize="cover" src="/assets/images/icon_user_img.png"></image>
             <text class="color1 user_name">51bb8@163.com</text>
               <div class="exit_btn_out"  @click="goLogin()">  
                    <text class="exit_btn color1">退出登录</text>  
                </div>  
        </div>
        <div class="personal_center">
            <wxc-cell 
                title="联系我们"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="false">
                <image class="phone_image"
                 slot="label"
                 src="/assets/images/icon_head.png"></image>
            </wxc-cell>
               
            <div class="personal_info">
               <wxc-cell 
                    title="个人信息"
                    @wxcCellClicked="wxcCellClicked"
                    :has-top-border="false">
                    <image class="phone_image"
                    slot="label"
                    src="/assets/images/icon_head.png"></image>
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
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import pcenterHeader from './pcenterHeader.vue'
  import { WxcCell } from 'weex-ui';
  export default {
    components: { pcenterHeader,WxcCell},
    data: () => ({
      fontSize: '15px',
      color: '#292b32',
      userNumber:'',  
      userPassword:'',
      data:{title:""}
    }),
    computed: {
     
    },
    created () {
   
    },
    methods:{  
       wxcCellClicked (e) {
        console.log(e)
      },
      goLogin(){
        var swifter = weex.requireModule('event');
        swifter.openURL("http://192.168.3.178:8080/dist/index.js");
      }
    }  
  }
</script>

<style scoped>
.personal_info{
    width: 750px;
    margin-top: 20px;
    margin-bottom: 200px
}
.phone_image{
    width: 55px;
    height: 55px;
    margin-right: 20px;
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
