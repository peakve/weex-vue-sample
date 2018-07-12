<template>
 <div class="close_out"  :class="[isIPhoneX?'ipx_login_header':'login_header']">
      <image class="close_content" resize="cover" :src="get_img_path('wx_close.png')"  @click="closeBack()"></image>
     <div class="login_title"><text class="login_text color1">{{data.title}}</text></div>
 </div>
</template>
<style scoped>
.login_header{
    margin-top: 70px;
}
.ipx_login_header{
    margin-top: 120px;
}
.close_out{
 width: 750px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color:white;
}
.login_text{
    font-size: 35px
}
.close_content{
    position: absolute;
    left: 40px;
    width: 60px;
    height: 60px;
}
</style>
<script>
import { WxcIcon } from 'weex-ui'  
import util from '../../common/util'
const modal = weex.requireModule('modal');
const event = weex.requireModule('event');
export default {
    components: { WxcIcon },
    props:["data"],
    data () {
        return {
        }
    },
    created () {
    },
    computed: {
      isIPhoneX () {
        return util.env.isIPhoneX()
      },
    },
    methods: {
        closeBack(){
          //  modal.toast({ message:this.data.title});
            if(this.data.title=='登录' || this.data.title=='修改用户名' || this.data.title=='修改密码'){
                if(event.dismissViewController("") != undefined){
                        event.dismissViewController("");
                }
               
            }else{
                this.jumpBack();
            }
        }
    }
}
</script>