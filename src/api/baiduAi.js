import service from "../utils/request";
import {getToken} from "../utils/auth";

const qs = require('qs');

// 百度ai
// const path = process.env.VUE_APP_ENV === "production"? "" : "/api";
const path = "";

//
export function getAccessToken({grant_type, client_id, client_secret}) {
    return service({
        url: path + `/oauth/2.0/token?client_id=${client_id}&grant_type=${grant_type}&client_secret=${client_secret}`,
        method: "POST",
    });
}

//  通用物体和场景识别
export function getAdvancedGeneral(data) {
    return service({
        url: path + `/rest/2.0/image-classify/v2/advanced_general?access_token=${getToken()}`,
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data),
    });
}


//  身份证识别
export function getIdCard(data) {
    return service({
        url: path + `/rest/2.0/ocr/v1/idcard?access_token=${getToken()}`,
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data),
    });
}

//  文章标签
export function getTextKeyWord(data) {
    return service({
        url: path + `/rpc/2.0/nlp/v1/keyword?access_token=${getToken()}`,
        method: "POST",
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        data: data,
    });
}

//  文章分类
export function getTextClass(data) {
    return service({
        url: path + `/rpc/2.0/nlp/v1/topic?charset=UTF-8&access_token=${getToken()}`,
        method: "POST",
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        data: data,
    });
}
