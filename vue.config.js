/**
 * vue、webpack等配置
 * https://cli.vuejs.org/zh/config
 */
// 引入等比适配插件
const px2rem = require('postcss-px2rem')
// 配置基本大小
const postcss = px2rem({
    //配置rem基准值 基准大小 baseSize，
    remUnit: 192
})
const publicPath = process.env.VUE_APP_ENV === "production" ? "/screen" : "/";
module.exports = {
    publicPath: publicPath,
    devServer: {
        open: true,
        proxy: {
            '/api': { // 测试环境
                target: 'https://aip.baidubce.com/', //
                changeOrange: true,
                pathRewrite: {'^/api': ''},
            },
            '/login': { // 测试环境
                target: 'https://jqy.zjagri.cn/', //
                changeOrange: true,
                pathRewrite: {'^/login': ''},
            },
        },
    },
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [postcss]
            }
        }
    }
};
