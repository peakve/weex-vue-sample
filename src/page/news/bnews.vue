<template>
    <div class="wrapper">
        <home-header></home-header>
        <navtab></navtab>
        <router-view></router-view>
    </div>
</template>

<script>

    import header from './header.vue';
   import navtab from './navtab.vue';

    export default {
        components: {
            'home-header': header,
             'navtab': navtab,
        },
        data () {
            return {
                showLoading: 'hide'
            }
        },
        created () {
        },
        methods: {
        }
    }
</script>