<template>
    <div class="wrapper">
        <cheader :title="tlt"></cheader>
       <div class="cell-item">
            <div  class="story-link">
                <text class="story-title">{{tlt}}</text>
            </div>
            <div class="text-group">
                <div class="text-cell">
                    <text class="small-text link-text">$43214.43</text>
                </div>
            </div>
        </div>
         <tab-bar @tabTo="onTabTo" :symbol="tlt"></tab-bar> 
    </div>
</template>
<script>
    const navigator = weex.requireModule('navigator')
    const webview = weex.requireModule('webview')
    const modal = weex.requireModule('modal')
     import util from '../../common/util'

    import tabBar from './btabBar.vue';
    import header from '../components/header.vue'
    export default {

        date:{
            tlt:''
        },
         components: {
            'tab-bar': tabBar,
            'cheader':header
        },
        
         beforeCreate: function () {
                console.group('beforeCreate 创建前状态===============》');
        },
        created () {
            console.log('webPageURL...', weex.config.bundleUrl )
              let bundleUrl=weex.config.bundleUrl;
            // this.url=util.getUrlSearch(bundleUrl,'weburl')
            // modal.toast({ message: weburl,  duration: 1 })

            // this.url=util.setBundleUrl(bundleUrl,weburl,true);
             this.tlt=util.getUrlSearch(bundleUrl,'title')
             modal.toast({ message: this.tlt,  duration: 1 })
        },
        computed:{
            isipx : function() {
                return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
            }
        },
        methods: {
             onTabTo(_result){
                let _key = _result.data.key || '';
                this.$router && this.$router.push('/'+_key)
            },
           
           
        }
    }
</script>
<style scoped>
  .cell-item {
    position: relative;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-left: 100px;
    padding-right: 40px;
  }
  .story-score {
    position: absolute;
    width: 100px;
    text-align: center;
    left: 0;
    top: 20px;
    font-size: 32px;
    font-weight: bold;
    color: #000000;
  }
  .story-link {
    margin-bottom: 25px;
    width: 610px;
  }
  .story-title {
    font-size: 33px;
    color: #404040;
  }
  .small-text {
    color: #BBB;
    font-size: 22px;
    margin-bottom: 0;
    font-family: Verdana, Geneva, sans-serif;
  }
  .link-text {
    /*color: red;*/
    text-decoration: underline;
  }
  .text-group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .text-cell {
    flex-grow: 0;
  }
   .confirm_out{
        text-align:center;
        margin-right:5px;
        border-color:#EEEEEF;
        border-radius:6px;
        padding-top:15px;
        padding-bottom:15px;
        padding-left:30px;
        padding-right:30px;
    }

</style>
