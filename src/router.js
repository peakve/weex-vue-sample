/**
 * Created by zwwill on 2017/8/29.
 */

import Router from 'vue-router'

import ViewHome from './page/home/home.vue'
import ViewMy from './page/home/home.vue'
import bbtop from './page/home/bbtop.vue'
import homeOptional from './page/home/home-optional.vue'
//import kline from './page/home/bbkline.vue'
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

import serInformation from './page/flashnews/search-information.vue'
import serExchangeNotice from './page/flashnews/search-exchange-notice.vue'

import alertFocus from './page/flashnews/alertfocus.vue'
import synopsis from './page/flashnews/synopsis.vue'
import focusDetail from './page/flashnews/focus-detail.vue'
import focusDetail1 from './page/flashnews/focus-detail1.vue'
import focusDetail2 from './page/flashnews/focus-detail2.vue'
import focusDetail3 from './page/flashnews/focus-detail3.vue'
import alertContent from './page/flashnews/alertcontent.vue'
import modifySendCode from './page/login/modifySendCode.vue'
import modifyPwd from './page/login/modifyPwd.vue'
import aboutUs from './page/pcenter/aboutUs.vue'
import contactUs from './page/pcenter/contactUs.vue'
import disclaimer from './page/pcenter/disclaimer.vue'
import modifyInfo from './page/login/modifyInfo.vue'
// const ViewHome = r => require.ensure([], () => r(require('./page/home/home.vue')), 'ViewHome')
// const ViewMy = r => require.ensure([], () => r(require('./page/home/home.vue')), 'ViewMy')
// const bbtop = r => require.ensure([], () => r(require('./page/home/bbtop.vue')), 'bbtop')
// const homeOptional = r => require.ensure([], () => r(require('./page/home/home-optional.vue')), 'homeOptional')
// const kline = r => require.ensure([], () => r(require('./page/home/bbkline.vue')), 'kline')


import tmp from './page/home/tmp.vue'

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
        { path: '/', redirect: '/login' },
        { path: '/tmp', name: "tmp", component: tmp },
        {
            path: '/home',
            component: ViewHome,
            children: [
                { path: '/bbtop/:symbol', name: "bbtop", component: bbtop },
                { path: '/chat', component: chat },
                { path: '/dd', 　　　component: homeOptional }
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
                { path: '/information', component: information },
                { path: '/globalmedia', name: "globalmedia", component: globalMedia },
                { path: '/exchangenotice', name: "exchangenotice", component: exchangeNotice },
                { path: '/exchangetwitter', name: "exchangetwitter", component: exchangeTwitter },
                { path: '/policy', name: "policy", component: policy },
                { path: '/newcoin', name: "newcoin", component: newcoin },
                { path: '/voice', name: "voice", component: voice },
            ],
            redirect: '/information'
        },
        {
            path: '/alertfocus',
            name: 'alertfocus',
            component: alertFocus,
            children: [
                { path: '/synopsis', name: "synopsis", component: synopsis },
                { path: '/focusDetail', name: "focusDetail", component: focusDetail },
                { path: '/focusDetail1', name: "focusDetail1", component: focusDetail1 },
                { path: '/focusDetail2', name: "focusDetail2", component: focusDetail2 },
                { path: '/focusDetail3', name: "focusDetail3", component: focusDetail3 },
            ]
        },
        { path: '/alertcontent', name: "alertcontent", component: alertContent },

        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/pcenter', component: pcenter },
        { path: '/modifySendCode', component: modifySendCode },
        { path: '/modifyPwd', component: modifyPwd },
        { path: '/aboutUs', component: aboutUs },
        { path: '/contactUs', component: contactUs },
        { path: '/disclaimer', component: disclaimer },
        { path: '/modifyInfo', component: modifyInfo },

        { path: '/serinformation', component: serInformation },
        { path: '/serexchangeNotice', component: serExchangeNotice },
    ]
})