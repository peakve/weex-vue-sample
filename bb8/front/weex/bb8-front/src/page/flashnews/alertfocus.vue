<template>
  <div class="wrapper">
      <alertfocus-header></alertfocus-header>
      <alertfocus-tab :category="category" :memberId="memberId" :source="source"></alertfocus-tab>
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
    data () {
        return{
            page : 1,
            size : 20,
            category : '',
            memberId : '',
            source : '',
            
        }
    },

    components: {
        'alertfocus-header' : header,
        'alertfocus-tab' : tab,
    },

    created(){
        var self = this;
        self.category = this.$route.params.Category;
        self.memberId = this.$route.params.MemberId;
        self.source = this.$route.params.Source;
    },

    methods:{

    }
}
</script>