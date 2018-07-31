<template>
  <div class="wrapper bg_gray">
     <scroller show-scrollbar="false">
      <pcenterHeader></pcenterHeader> 
      <div class="personal_out">
             <div class="personal_info">
                <wxc-cell 
                    label="邮箱"
                    :title="resData.email"
                    :has-top-border="false">
                </wxc-cell>
                <wxc-cell 
                    label="用户名"
                    :title="resData.account"
                    @wxcCellClicked="modifyInfo()"
                    :has-arrow="true"
                    :has-top-border="false">
                </wxc-cell>
                <wxc-cell 
                    label="注册时间"
                    :title="resData.registTime"
                    :has-top-border="false">
                </wxc-cell>
                <wxc-cell 
                    label="最后登录时间"
                    :title="resData.lastLoginTime"
                    :has-top-border="false">
                </wxc-cell>
                <wxc-cell 
                    label="密码"
                    :title="resData.pwd"
                    @wxcCellClicked="modifyPassword()"
                    :has-arrow="true"
                    :has-top-border="false">
                </wxc-cell>
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
        isLogin:true,
        cellStyle: {
            height: "160px"
        }
    }),
    computed: {
     
    },
    created () {
        var self= this;
        self.userInfo();
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
        wxcCellClicked (e) {
            console.log(e)
            event.openURL(apis.apiURL.basepath+"index.js?#/contactUs","联系我们","push");
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
     width: 750px;
    justify-content: center;
    align-items: center;
}
.user_logo{
    width:120px;
    height: 120px;
}

</style>
