import service from "../utils/request";

// 村落概况
export function getVillageOverview (params) {
    return service({
        url: '/api/villageOverview',
        method: 'get',
        params
    })
}
// 村景星级分类
export function getStarRating (params) {
    return service({
        url: '/api/starRating',
        method: 'get',
        params
    })
}
// 农家乐经营一件事
export function getFarmhouseManagement (params) {
    return service({
        url: '/api/farmhouseManagement',
        method: 'get',
        params
    })
}
// 农家乐数量分布
export function getAgritainmentDistribution (params) {
    return service({
        url: '/api/agritainmentDistribution',
        method: 'get',
        params
    })
}
// 历史文化重点保护村类型
export function getHistoryCultureType (params) {
    return service({
        url: '/api/historyCultureType',
        method: 'get',
        params
    })
}

// 历史文化重点保护村数量分布
export function getHistoryCultureDistribution (params) {
    return service({
        url: '/api/historyCultureDistribution',
        method: 'get',
        params
    })
}
// 24节气村数量分布
export function getSolarTermDistribution (params) {
    return service({
        url: '/api/solarTermDistribution',
        method: 'get',
        params
    })
}
// 农业文化遗产地数量分布
export function getAgriculturalHeritageDistribution (params) {
    return service({
        url: '/api/agriculturalHeritageDistribution ',
        method: 'get',
        params
    })
}
//  历史文化村落保护项目数量分布
export function getProtectionItem (params) {
    return service({
        url: '/api/protectionItem',
        method: 'get',
        params
    })
}