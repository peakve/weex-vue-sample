<template>
  <div class="wrapper">
      <alertfocus-header></alertfocus-header>
      <alertfocus-tab></alertfocus-tab>
      <router-view></router-view>
  </div>
</template>

<script>
import header from './alertheader.vue';
import tab from './alerttab.vue';

const dom = weex.requireModule('dom');
const animation = weex.requireModule('animation');
const modal = weex.requireModule('modal');

export default {
    components: {
        'alertfocus-header' : header,
        'alertfocus-tab' : tab,
    },

    created(){
        modal.toast({ message: '进入alertfocus页面！',  duration: 2 });
    },
}
</script>