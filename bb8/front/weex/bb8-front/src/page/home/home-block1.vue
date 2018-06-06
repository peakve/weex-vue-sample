<template>
    <div class="wrapper">
        <!-- <text class="tlt">猜你喜欢</text> -->
        <div class="gb-box">
            <div class="i-gd" v-for="i in goods"  @click="jumpWeb(i.url)">
                <image class="gd-img" resize="cover" :src="i.img"></image>
                 <div class="gd-div">
                    <text class="gd-info">{{i.info}}</text>
                    <text class="gd-tlt">{{i.tlt}}</text>
                    <text class="gd-price">¥{{i.price}}</text>
                 </div>
            </div>
        </div>
    </div>
</template>
<style src="../../assets/style/common.css" scoped></style>

<script>
    var navigator = weex.requireModule('navigator')
    import util from '../../common/util';
    export default {
        props:["newGoods","hotGoods","head","hasMore","goods"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) _url = 'http%3A%2F%2Fm.you.163.com%2Fitem%2Fdetail%3Fid%3D1009024%23%2F%3F_k%3Dfakdg7';
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>