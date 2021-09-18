/**
 * vue、webpack等配置
 * https://cli.vuejs.org/zh/config
 */
module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': { // 测试环境
                target: 'http://172.16.24.248:8480', //
                changeOrange: true,
                pathRewrite: { '^/api': '' },
            },
        },
    },
};