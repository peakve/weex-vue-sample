/**
 * Created by zwwill on 2017/8/29.
 */

import Router from 'vue-router'
import ViewHome from './page/home/home.vue'
import ViewMy from './page/home/home.vue'
import bbtop from './page/home/bbtop.vue'
import homeOptional from './page/home/home-optional.vue'
// import kline from './page/home/bbkline.vue'
//import kline from './page/home/bbkline.1.vue'

import usercenter from './page/user/UserView.vue'
import chat from './page/chat/chat.vue'
import bnews from './page/news/bnews.vue'
import newlist from './page/news/newlist.vue'
import flashnews from './page/flashnews/flash-news.vue'
import login from './page/login/login.vue'
import register from './page/login/register.vue'
import pcenter from './page/pcenter/personal.vue'

import information from './page/flashnews/information.vue'
import globalMedia from './page/flashnews/global-media.vue'
import exchangeNotice from './page/flashnews/exchange-notice.vue'
import exchangeTwitter from './page/flashnews/exchange-twitter.vue'
import policy from './page/flashnews/policy.vue'
import newcoin from './page/flashnews/newcoin.vue'
import voice from './page/flashnews/voice.vue'
import alertFocus from './page/flashnews/alertfocus.vue'
import synopsis from './page/flashnews/synopsis.vue'
import focusDetail from './page/flashnews/focus-detail.vue'
import alertContent from './page/flashnews/alertcontent.vue'


// const ViewHome = r => require.ensure([], () => r(require('./page/home/home.vue')), 'ViewHome')
// const ViewMy = r => require.ensure([], () => r(require('./page/home/home.vue')), 'ViewMy')
// const bbtop = r => require.ensure([], () => r(require('./page/home/bbtop.vue')), 'bbtop')
// const homeOptional = r => require.ensure([], () => r(require('./page/home/home-optional.vue')), 'homeOptional')
// const kline = r => require.ensure([], () => r(require('./page/home/bbkline.vue')), 'kline')

Vue.use(Router)

// Story view factory
// function createBbView(type) {
//     return {
//         name: `bb-view-${type}`,
//         render(createElement) {
//             return createElement(bbtop, { props: { type } })
//         }
//     }
// }


export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            component: ViewHome,
            children: [　　
                { path: '/bbtop/:symbol', name: "bbtop", component: bbtop },
                { path: '/chat', component: chat },
                { path: '', 　　　component: homeOptional }
            ]
        },
        {
            path: '/bnews',
            component: bnews,
            children: [
                { path: '', component: newlist },
            ]
        },
        // {　 path: '/bbtop/:symbol', name: "bbtop", component: bbtop },
        // { path: '/bb', component: bbtop },
        { path: '/my', component: usercenter },

        {
            path: '/flashnews',
            component: flashnews,
            children: [
                { path: '/information', name: "information", component: information },
                { path: '/globalmedia', name: "globalmedia", component: globalMedia },
                { path: '/exchangenotice', name: "exchangenotice", component: exchangeNotice },
                { path: '/exchangetwitter', name: "exchangetwitter", component: exchangeTwitter },
                { path: '/policy', name: "information", component: policy },
                { path: '/newcoin', name: "information", component: newcoin },
                { path: '/voice', name: "information", component: voice },
            ]
        },
        {
            path: '/alertfocus',
            component: alertFocus,
            children: [
                { path: '/synopsis', name: "synopsis", component: synopsis },
                { path: '/focusDetail', name: "focusDetail", component: focusDetail }
            ]
        },
        { path: '/alertcontent', component: alertContent },

        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/pcenter', component: pcenter },


    ]
})