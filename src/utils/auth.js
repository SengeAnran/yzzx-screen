import {getStorage} from './storage'

export function getToken() {
    return getStorage('access_token') || '';
}
