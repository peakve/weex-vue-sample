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
                { path: '/bbtop/:symbol', name: "bbtop", component: bbtop }　,
                { path: '/chat', component: chat },
                { path: '', 　　　component: homeOptional }
            ]
        },
        {　
            path: '/bnews',
            component: bnews,
            children: [
                {　 path: '', component: newlist },
            ]
        },
        // {　 path: '/bbtop/:symbol', name: "bbtop", component: bbtop },
        // { path: '/bb', component: bbtop },
        { path: '/my', component: usercenter }
    ]
})