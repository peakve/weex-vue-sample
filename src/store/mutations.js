import {
    RECORD_USERINFO,
    GET_USERINFO,
    RETSET_NAME
} from './mutation-types.js'

import { setStore, getStore } from '../config/mUtils'

export default {
    // 记录用户信息
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        state.login = true;
        setStore('user_id', info.user_id);
    },
    //修改用户名
    [RETSET_NAME](state, username) {
        state.userInfo = Object.assign({}, state.userInfo, { username });
    }
}