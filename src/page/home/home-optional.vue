<template>
    <div class="wrapper">
        <scroller :class="['main-list', isIpx&&isIpx()?'ml-ipx':'']" offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore">
            <refresher @loadingDown="loadingDown"></refresher>
            <div class="cell-button" @click="jumpWeb('https://m.you.163.com/act/pub/DxDpYNfbBd.html')">
                <yx-slider :imageList="banners" ></yx-slider>
            </div>
            <div class="cell-button">
                <block1 :goods="goodsList"></block1>
            </div>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">...</text>
            </loading>
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
    }
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

    .cell-button{
        padding-bottom: 18px;
    }
    .slogan{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: #fff;
    }
    .i-slg{
        height: 66px;
        font-size: 26px;
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }

</style>

<script>
    var modal = weex.requireModule('modal')
    var navigator = weex.requireModule('navigator')
    import util from '../../common/util';
    import refresher from '../components/refresh.vue';
    import YXSlider from '../components/YXSlider.vue';
    import block1 from './home-block1.vue';
     

    export default {
        components: {
            'refresher': refresher,
            'yx-slider': YXSlider,
            'block1':block1,
        },
        data () {
            return {
                banners: [
                    {src:"http://www.awakenpay.com/xfile/download?path=ad/2017527/adv_two.png"},
                     {src:"http://www.awakenpay.com/xfile/download?path=ad/2017728/%E8%B4%B7%E5%BE%97%E6%9B%B4%E5%A4%9A.jpg"},
                     {src:"http://www.awakenpay.com/xfile/download?path=ad/2017527/adv_four.png"},
                     {src:"http://www.awakenpay.com/xfile/download?path=ad/2017830/iosAPP%E4%B8%8A%E7%BA%BF.jpg"}
                ],
                goodsList:[],
                showLoading: 'hide'
            }
        },
        created () {
            
            // this.GET('api/home/pullGoods', res => {
            //     let result = res.data.result;
            //     this.goodsList = result['goods'];
            // })
            this.goodsList =[
                {url:"dd",info:"BTC--ETH",tlt:"xxxxBTC",price:"2.1"},
                {url:"dd",info:"BTC--ETH",tlt:"xxxxBTC",price:"2.1"},
                {url:"dd",info:"BTC--ETH",tlt:"xxxxBTC",price:"2.1"},
                {url:"dd",info:"BTC--ETH",tlt:"xxxxBTC",price:"2.1"}];
        },
        methods: {
            jumpWeb (_url) {
                const url = this.$getConfig().bundleUrl;
                console.log(util.setBundleUrl(url, 'page/webview.js?weburl='+_url));
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            },
            onloading () {
                modal.toast({ message: 'loading', duration: 0.3 })
                this.showLoading = 'show';
                setTimeout(() => {
                    // this.goodsList.push(...this.recommend.goods1);
                    this.showLoading = 'hide'
                }, 300)
            },
            onloadmore () {
                setTimeout(() => {
                    // this.goodsList.push(...this.recommend.goods1);
                }, 100)
            },
            loadingDown(){
                this.goodsList =[];
                // this.goodsList.push(...this.recommend.goods2);
                // this.goodsList.push(...this.recommend.goods1);
            }
        }
    }
</script>