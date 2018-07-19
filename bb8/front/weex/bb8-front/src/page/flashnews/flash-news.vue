<template>
    <div class="wrapper">
        <home-header :message="data" ></home-header>
        <top-tab v-on:listenToChildEvent="showMsgFromChild"></top-tab>
        <router-view></router-view>
    </div>
</template>

<script>
import header from './news-header.vue';
import topTab from './topTab.vue';
//import topTab from '../home/topChannel.vue';
var modal = weex.requireModule('modal');

export default {
    components: {
        'home-header': header,
        'top-tab': topTab,
    },

    data () {
        return {
            data:'default',
        }
    },

    created () {
        var self =this;
        self.data = 'default';
    },

    methods: {
        showMsgFromChild:function(data){
            //modal.toast({message : data,duration : 2});
            var self = this;
            self.data = data;
        },

    }

}
</script>
