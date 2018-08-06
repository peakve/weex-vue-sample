<template>
  <div class="wrapper">
    <!--<candy-header></candy-header>-->
    <candy-content></candy-content>
  </div>
</template>

<script>
import header from './candy-header.vue';
import content from './candy-content.vue';

export default {
    components:{
        'candy-header' : header,
        'candy-content' : content,
    },

    data(){
        return{

        }
    },

    created(){

    },

    methods:{

    }
}
</script>