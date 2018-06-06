<template>
  <div class="wrapper">
      <div :class="['main-list', isIpx&&isIpx()?'ml-ipx':'']" append="tree">
        <!-- <app-header></app-header> -->
        
        <list class="story-list" @loadmore="loadMoreStories" loadmoreoffset="50">
           <refresher @loadingDown="loadingDown"></refresher>
          <cell class="story-cell" @click="showbbDetail(story.title)" v-for="story in stories" :key="story.id" append="tree">
            <bbItem :story="story"></bbItem>
          </cell>
           <loading class="loading" @loading="onloading" :display="loading">
                <text class="indicator">loading...</text>
          </loading>
        </list>
      </div>
  </div>
</template>

<script>
//   import AppHeader from '../components/app-header.vue'
  import bbItem from './bbItem.vue'
  import refresher from '../components/refresh.vue';

  const modal = weex.requireModule('modal')
  var websocket = weex.requireModule('webSocket')

  var navigator = weex.requireModule('navigator')

 import util from '../../common/util';

  export default {
    components: { 
       bbItem,refresher
    },
    props: {
      symbol: {
        type: String,
        required: false,
        default: 'top'
      }
    },
    data () {
      return {
        loading: true
      }
    },

    computed: {
      stories () {
        // return this.$store.getters.activeItems  this.symbol|
        var  symbol =this.$route.params.symbol;
         modal.toast({ message: symbol,  duration: 1 })
        return [{sysmbol:"BTC",title:"BTC--ETH"+symbol,tlt:"xxxxBTC",price:"2424124.1",compare:1,increase:"20.18%"},
            {sysmbol:"EOS",title:"EOS--ETH"+symbol,tlt:"xxxxBTC",price:"515342.1",compare:0,increase:"-31.34%"},
            {sysmbol:"TRX",title:"TRX--ETH"+symbol,tlt:"xxxxBTC",price:"432.1",compare:1,increase:"30.31%"},
            {sysmbol:"BTM",title:"BTM--ETH"+symbol,tlt:"xxxxBTC",price:"532.1",compare:1,increase:"40.51%"}]
      }
    },

    methods: {
      fetchListData () {
        this.loading = true
        // this.$store.dispatch('FETCH_LIST_DATA', {
        //   type: this.type
        // }).then(() => {
        //   this.loading = false
        // })
        // this.loading = false
      },
      loadMoreStories () {
        this.loading = true
        // this.$store.dispatch('LOAD_MORE_ITEMS').then(() => {
        //   this.loading = false
        // })
      },
      showbbDetail (t) {
         console.log('showbbDetail');
        // this.$router.push({ name: 'kline', params: { "symbol": 100 }})
        // this.$router.push({ name: 'kline1', params: { "symbol": 100 }})

        // this.jumpWeb('http://www.fintechawaken.com');
        console.info(t);
        //
        //  this.jumpWeb("https://block.cc/market.html?symbol=gate-io_BTM_ETH");
        // this.jumpWeb("http://192.168.3.193:8080/kline/examples/polling.html&title="+t);
        // let burl=util.setBundleUrl(this.$getConfig().bundleUrl,'page/bb/bbinfo.js');
        //  console.info(burl);

        this.jumpUrl('page/bb/binfo.js?title='+t);

        console.info("jump line");
      },
      openWebSocket(){
         websocket.WebSocket('ws://echo.websocket.org','');
        var self = this;
        self.onopeninfo = 'connecting...'
        websocket.onopen = function(e)
        {
          self.onopeninfo = 'websocket open';
        }
        websocket.onmessage = function(e)
        {
          self.onmessage = e.data;
        }
        websocket.onerror = function(e)
        {
          self.onerrorinfo = e.data;
        }
        websocket.onclose = function(e)
        {
          self.onopeninfo = '';
          self.onerrorinfo = e.code;
        }
      },
       close:function(e) {
        websocket.close();
      },
       loadingDown:function(){

    },
    onloading:function(){}
    },

    created () {
      this.fetchListData()
      // this.openWebSocket();
    },
   

  }
</script>

<style scoped>
 .main-list{
        position: fixed;
        top: 168px;
        bottom: 90px;
        left: 0;
        right: 0;
        /*margin-top: 167px;*/
        /*margin-bottom: 90px;*/
    }
    .ml-ipx{
        top: 208px;
        bottom:140px;
    }
  .story-cell {
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #FFFFFF;
  }

  .story-cell:active{
     background-color:#e5640d
  }
  
  .loading {
    width: 750px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading-text {
    margin: auto;
    text-align: center;
    font-size: 40px;
    color: #BBB;
  }
</style>
