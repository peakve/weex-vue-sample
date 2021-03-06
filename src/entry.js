/**
 * Created by zwwill on 2017/8/28.
 */
import App from './App.vue'

import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import mixins from './mixins'
// import FastClick from 'fastclick'


// import 'font-awesome/css/font-awesome.css';
//import 'animate.css/animate.css'; // get animate.css
// import 'bulma/css/bulma.css'

// import 'bulma'

// import jquery from 'jquery'

// import VueSocketio from 'vue-socket.io';
// import socketio from 'socket.io-client';
// Vue.use(VueSocketio, socketio('http://socketserver.com:1923'), store);

// import * as dd from './assets/js/kline';
// Vue.use(dd);
// import VueECharts from 'vue-echarts/components/ECharts.vue'
// Vue.component('chart', VueECharts)

//300s
// if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function() {
//         FastClick.attach(document.body)
//     }, false)
// }

// sync the router with the vuex store.
// this registers `store.state.route`
// import weexVueRouter from 'weex-vue-router'
// Vue.use(weexVueRouter, { router, weex })


sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// register global mixins.
Vue.mixin(mixins)

Vue.config.productionTip = false

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
new Vue(Vue.util.extend({ el: '#root', router }, App));

let path = '/'

//TODO
let bundleUrl = weex.config.bundleUrl
if (bundleUrl) {
    let idx = bundleUrl.indexOf("#")
    if (idx > 0) {
        let burl = bundleUrl.slice(idx + 1)

        if (burl.indexOf("#") > 0) {

            burl = burl.slice(0, burl.indexOf("#"))
        }

        path = burl
    }
}
console.info(11111111)
console.info(weex.config.bundleUrl)
console.info(path)
console.info(11111111)
router.push(path)