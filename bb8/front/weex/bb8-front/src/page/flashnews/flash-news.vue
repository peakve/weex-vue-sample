<template>
    <div class="wrapper">
        <top-tab></top-tab>
        <router-view></router-view>
    </div>
</template>

<script>
    import topTab from './topTab.vue';

    export default {
        components: {
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
