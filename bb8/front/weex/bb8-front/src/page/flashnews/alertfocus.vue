<template>
  <div class="wrapper">
      <alertfocus-header :memberId="memberId"></alertfocus-header>
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
        // self.category = this.$route.query.Category;
        // self.memberId = this.$route.query.MemberId;
        // self.source = this.$route.query.Source;
        //modal.toast({ message: (self.memberId), duration: 1 })
        let params = this.getParams();
        self.category = params.Category;
        self.memberId = params.MemberId;
        //self.source = params.Source;
    },
    mounted() {
        // const modal = weex.requireModule('modal');
        //  modal.toast({ message: JSON.stringify(this.getParams()), duration: 10 })
        //     // modal.toast({ message: "11111112222", duration: 10 })
        // 
    },

    methods:{

    }
}
</script>