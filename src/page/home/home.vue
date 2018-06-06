<template>
    <div class="wrapper">
        <home-header></home-header>
        <top-channel></top-channel>
        <router-view></router-view>
    </div>
</template>

<script>

    import header from './header.vue';
   import topChannel from './topChannel.vue';

    export default {
        components: {
            'home-header': header,
             'top-channel': topChannel,
        },
        data () {
            return {
                YXBanners: [
                ],
                goodsList:[],
                showLoading: 'hide'
            }
        },
        created () {
        },
        methods: {
        }
    }
</script>