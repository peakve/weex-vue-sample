<template>
 <div class="close_out">
     <wxc-icon name="close" class="close_content" size="small" @wxcIconClicked="closeBack()"></wxc-icon>
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
                event.dismissViewController("");
            }else{
                this.jumpBack();
            }
        }
    }
}
</script>