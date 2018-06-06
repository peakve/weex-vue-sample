<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']" >
        <div class="scan">
            <text class="ic iconfont">&#xe65c;</text>
        </div>
        <text class="iconfont"  @click="jumpWeb()">用户中心</text>
        <div class="notice">
            <text class="ic iconfont">&#xe70a;</text>
        </div>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 114px;
        padding-top: 44px;
        display:flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        z-index: 101;
        background-color: #fafafa;
        opacity: .99;
    }
    .w-ipx{
        height: 154px;
        padding-top: 84px;
    }
    .scan,.notice{
        height: 80px;
        width: 96px
    }
    .ic,.txt,.search{
        text-align: center;
        color:#666;
        font-weight: 300;
    }
    .ic{
        font-size: 32px;
    }
    .txt{
        font-size: 18px;
     }
    .search {
        flex: 1;
        height: 60px;
        font-size: 26px;
        padding-top: 13px;
        background-color: #ededed;
        border-radius: 8px;
    }
</style>
<script>
 

    export default {
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