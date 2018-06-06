import fetch from '../config/fetch'
import { getStore } from '../config/mUtils'


/**
 * 获取用户信息
 */

export const getUser = () => fetch('/v1/user', { user_id: getStore('user_id') });