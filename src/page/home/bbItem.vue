<template>
  <div class="cell-item">
    <text class="story-score">{{story.sysmbol}}</text>
    <div :url="story.url" class="story-link">
      <text class="story-title">{{story.title}}</text>
      <!-- <a class="button is-success">{{ story.increase }}</a> -->
      <!-- <text class="small-text" v-if="story.url">({{ story.url | host }})</text> -->
    </div>
    <div class="text-group">
      <!-- <text class="small-text text-cell">by </text> -->
      <div class="text-cell">
        <text class="small-text link-text">{{story.price}}</text>
      </div>
       <!-- <wxc-button :text='story.price'  @wxcButtonClicked="buttonClicked"></wxc-button> -->
        <div  :class="['text-cell','confirm_out', story.compare>0?'compare_up':'compare_down']">
          <!-- ↑↓ -->
          <text class="confirm ">{{story.increase}} </text>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .cell-item {
    position: relative;
    padding-top: 20px;
    padding-bottom: 25px;
    padding-left: 100px;
    padding-right: 40px;
  }
  /* .cell-item:active{
     background-color:#e5640d
  } */
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
    .compare_up{
      background-color:green;
    }
    .compare_down{
      background-color:rgb(156, 9, 9);
    }
     .confirm_out:active{
         background-color:#e5640d;
    }
     .confirm{
        color:white;
        font-size:32px;
    }

</style>

<script>
  // import ExternalLink from './external-link.vue'

    import { WxcButton, WxcPopup } from 'weex-ui'

  export default {
    // components: { ExternalLink },
    components: { WxcButton, WxcPopup },
    props: {
      story: {
        type: Object,
        required: true
      },
      'no-comment': {
        type: [String, Boolean],
        default: false
      }
    },
    methods:{

      buttonClicked () {
        // this.isShow = true;
      },
    }
  }
</script>
