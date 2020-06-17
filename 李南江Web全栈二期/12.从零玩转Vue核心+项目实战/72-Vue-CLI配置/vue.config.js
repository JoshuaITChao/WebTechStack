const path = require("path");
const webpack = require("webpack");

module.exports = {
    // output: {
    //     path: path.resolve(__dirname, 'bundle')
    // }

    /**
     * Vue-CLI 为了方便起见对 webpack 原有对属性进行了一层封装，如果我们需要修改 webpack 的配置
     * 那么我们可以在项目中新建一个 vue.config.js 的文件,然后去查询 Vue-CLI 的封装是否能够满足我们的需要
     * 如果可以满足我们的需要，那么就使用 Vue-CLI 封装的属性来修改 webpack 的配置
     * 如果不可以满足我们的需求，那么我们可以通过 configureWebpack 的属性来编写原生的 webpack 配置
     */
    outputDir: 'bundle',
    configureWebpack: {
        // 就可以在这个对象中编写原生的 webpack 配置
        plugins: [
            new webpack.BannerPlugin({
                banner: '知播渔教育-www.it666.com'
            })
        ]
    }
}
