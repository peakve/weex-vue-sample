<template>
 <div class="close_out">
     <wxc-icon name="close" class="close_content" size="small" @wxcIconClicked="jumpBack()"></wxc-icon>
     <div class="login_title"><text class="login_text color1">{{data.title}}</text></div>
 </div>
</template>
<style scoped>
.close_out{
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px
}
.login_title{
    font-size: 30px
}
.close_content{
    position: absolute;
    left: 40px;
}
</style>
<script>
import { WxcIcon } from 'weex-ui'  
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
        
    }
}
</script>