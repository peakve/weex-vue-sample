// import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}

const state = {
        userInfo: {}, //用户信息
        geohash: '31.22299,121.36025', //地址geohash值
    }
    // state?: S;
    // getters?: GetterTree<S, S>;
    // actions?: ActionTree<S, S>;
    // mutations?: MutationTree<S>;
    // modules?: ModuleTree<S>;
    // plugins?: Plugin<S>[];
    // strict?: boolean;
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})