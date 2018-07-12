<template>
  <div class="wrapper bg_white">
     <scroller>
      <pcenterHeader></pcenterHeader> 
      
      <div class="main_out">
        
         <div class='main_centent'>
            <text class='text_one'>{{titleone}}</text>
            <text class='text_one'>{{titletwo}}</text>
            <text class='text_one'>{{textone}}</text>
            <text class='text_one'>{{texttwo}}</text>
            <text class='text_one'>{{textthree}}</text>
            <text class='text_one'>{{textfour}}</text>
            <text class='text_one'>{{textfive}}</text>
            <text class='text_one'>{{textsix}}</text>
            <text class='text_one'>{{textseven}}</text>
        </div>
      </div>
    </scroller>
  </div>
</template>
<style src="../../assets/style/app.css"></style>
<script>
  import pcenterHeader from './pcenterHeader.vue'
  import { WxcLoading,WxcCell } from 'weex-ui';
  import util from '../../common/util'
  var apis = require('../../common/action.js');
  const modal = weex.requireModule('modal');
  const event = weex.requireModule('event');
  export default {
    components: {WxcLoading,pcenterHeader,WxcCell},
    data: () => ({
        titleone:'在您使用本网站各项服务之前，请仔细阅读本声明的所有条款。凡以任何方式登陆浏览本网站内容或直接、间接使用本网站内容者，视为无条件接受本声明。',
        titletwo:'风险提示：本网站承诺提供专业资讯服务，但不承诺投资者获取收益，也不与投资者约定分享投资收益或分担投资损失。市场有风险，投资需谨慎。',
        textone:'一、本网站依法提供数字货币行情资讯业务。如有发现任何机构或个人冒用本网站或本网站工作人员在网络上非法从事投资咨询业务，请及时与本网站联系，本网站保留对侵权机构或个人追究法律责任的权利。',
        texttwo:'二、本网站的内容受法律法规及国际条约的保护。除法律另有规定或本网站与第三方另有约定外，本网站提供的所有资料以及相关软件程序的知识产权均归属本网站所有。',
        textthree:'三、任何机构或者个人使用本网站，均应遵守有关法律法规、国际条约及本声明，不得破坏本网站运行安全，不得利用本网站进行任何违法活动，不得损害本网站的合法权益。',
        textfour:'四、未经本网站书面许可，任何机构或个人不得以向他人出售牟利为目的使用本网站的任何内容，此种使用包括但不限于拷贝、下载、存贮、通过硬盘拷贝或电子抓取系统获取、发送、转换、出租、演示、转载、复制、修改、销售、传播、出版或任何其它形式的散发。',
        textfive:'五、 本网站对所提供的内容力求准确、完整和及时，但并不对其准确性、完整性和及时性做出任何保证。对任何因直接或间接使用本网站内容而造成的损失，包括但不限于因有关内容不准确、不完整而导致的损失，本网站不承担任何法律责任。本网站亦不保证所设置的外部链接的准确性和完整性，该外部链接指向的任何网页内容，本网站对其合法性概不负责，亦不承担任何法律责任。',
        textsix:'六、 权利人认为本网站所提供的信息存储空间、搜索或链接服务存储、搜索或链接的内容所涉及的作品侵犯了其信息网络传播权或者被删除、改变了自己的权利管理电子信息的，可依法向本网站提交书面通知。权利人应对通知书的真实性负责，并承担由于通知书内容不真实所导致的全部法律责任。',
        textseven:'七、 本声明受相关法律及国际条约的约束并依据其解释。如出现纠纷，双方应友好协商，协商不成，任何一方可提请本网站所在地人民法院诉讼解决。在法律允许的最大范围内，本条款最终解释权归本网站享有。',
       
    }),
    computed: {
     
    },
    created () {
        var self= this;
    },
    methods:{  

    }  
  }
</script>

<style scoped>
.main_out{
    width: 750px;
    border-top-color:#E2E2E2;
    border-top-width: 1px;
}
.main_centent{
    padding-top:20px;
    padding-left:40px;
    padding-right:30px
}
    .text_one{
    color:#3a3a3a;
    font-size: 28px;
    line-height: 55px;
}
.phone_image{
    width: 55px;
    height: 55px;
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
    justify-content: center;
    align-items: center;
}
.user_logo{
    width:120px;
    height: 120px;
}

</style>
