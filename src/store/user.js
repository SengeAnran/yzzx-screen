import {getStorage, setStorage} from "../utils/storage";
import {getAccessToken} from "../api/baiduAi";
// 自己的
// const client_id = 'cmy8oSHHPHr0VlowAfUYhEDS';
// const client_secret = 'hxV0QPk0qHWgpXhf11XelCWu6QQSfbrf';
//  公司的
const client_id = '6ZXBXKhIYz5yLVTU25JxtOJ7'; // Api Key
const client_secret = 'TjWkXPgXV40ieD00TREMa7GXmAYwWnh1';
export default {
    namespaced: true,
    state: {
        userInfo: '',
        token: getStorage('access_token') || '',

    },
    mutations: {
        SET_TOKEN(state, value) {
            state.token = value;
            setStorage('access_token', value);
        },
    },
    actions: {
        getToken({commit}) {
            return new Promise((resolve, reject) => {
                const data = {
                    grant_type: 'client_credentials',
                    client_id: client_id,
                    client_secret: client_secret,
                }
                getAccessToken(data).then(res => {
                    commit('SET_TOKEN', res.access_token);
                    resolve();
                }).catch(() => {
                    reject();
                })
            })
        }
    }
};
