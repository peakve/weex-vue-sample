<template>
 <div class="close_out">
      <image class="close_content" resize="cover" :src="get_img_path('wx_close.png')"  @click="closeBack()"></image>
     <div class="login_title"><text class="login_text color1">{{data.title}}</text></div>
 </div>
</template>
<style scoped>
.close_out{
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
    methods: {
        closeBack(){
          //  modal.toast({ message:this.data.title});
            if(this.data.title=='登录'){
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