<template>
    <div class="wrapper">
        <home-header></home-header>
        <top-tab></top-tab>
        <router-view></router-view>
    </div>
</template>

<script>
    import header from '../home/header.vue';
    import topTab from './topTab.vue';
// import topTab from '../home/topChannel.vue';
    export default {
        components: {
            'home-header': header,
            'top-tab': topTab,
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
