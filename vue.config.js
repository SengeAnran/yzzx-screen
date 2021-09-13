/**
 * vue、webpack等配置
 * https://cli.vuejs.org/zh/config
 */
module.exports = {
    // configureWebpack: {
    //     devtool: 'eval-source-map',
    //     externals: {
    //         AMap: 'window.AMap',
    //     },
    // },

    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'http://172.16.24.248:8480', //
                changeOrange: true,
                pathRewrite: { '^/api': '' },
            },
            '/guoyan': {
                // target: 'http://47.110.254.132:8005/',
                target: 'http://10.25.17.237:18156/wydaas/public/rs/dataService',
                // target: 'http://192.168.1.125:8100', // 安武本地
                changeOrange: true,
                pathRewrite: { '^/guoyan': '' },
            },
        },
    },
};