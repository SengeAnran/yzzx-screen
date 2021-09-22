import * as request from '../utils/mapRequest'
let api = '';

// 获取浙江省JSON
export const getProviceJSON = (path,params) => request.get(api+`/map/330000_full.json`,params)

// 获取市级JSON
export const getCityJSON = (path,params) => request.get(api+`/map/city/${path}.json`,params)