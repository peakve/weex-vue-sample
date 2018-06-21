<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']" >
        <div :class="['toolbar', isipx?'t-ipx':'']">
            <div class="left">
                <text class="btnTxt iconfont"  @click="back">&#xe606;</text>
            </div>
            <text class="tlt">{{title}}</text>
            <div class="right">
                <!-- <text class="btnTxt iconfont" @click="reload">&#xe601;</text> -->
            </div>
        </div>
    </div>
</template>
<style scoped>

    .wrapper{
        position: absolute;
        left: 0;
        right:0;
        bottom: 0;
        top:0;
    }
    .iconfont {
        font-family:iconfont;
    }

    .toolbar{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 114px;
        padding-top: 44px;
        background-color: #fafafa;
        opacity: .99;
        z-index: 101;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .t-ipx{
        height: 154px;
        padding-top: 84px;
    }
    .tlt{
        flex: 1;
        font-size: 36px;
        padding-top: 10px;
        color:#333;
        text-align: center;
    }
    .left,.right{
        height: 68px;
        width: 150px;
        padding-top:10px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    }
    .left{
        justify-content: flex-start;
        padding-left: 20px;
    }
    .right{
        justify-content: flex-end;
        padding-right: 20px;
    }
    .btnTxt{
        font-size: 40px;
        width: 70px;
        color:#666;

        text-align: center;
    }
   
</style>
<script>
 
 const navigator = weex.requireModule('navigator')
    export default {
         props:["title"],
        data () {
            return {
            }
        },
        created () {
        },
        methods: {
            back:function(){
               navigator.pop({
                    animated:"true"
                });
            }   
        }
    }
</script>