import * as request from '../utils/mapRequest'
let api = '/screen';

// 获取浙江省JSON
export const getProviceJSON = (path,params) => request.get(api+`/map/330000full.json`,params)

// 获取市级JSON
export const getCityJSON = (path,params) => request.get(api+`/map/city/${path}full.json`,params)