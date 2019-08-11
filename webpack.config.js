const path = require('path')
    var htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js',
        // publicPath: process.env.NODE_ENV === 'production' ?
        //     config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            title:"ASDASDS",
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
              },
            filename:"index.html",
            template:'./src/index.html'
        }),
    ],
    // devServer: {
    //     hot: true,
    //     open: true,
    //     port: 4321,
    // },
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
            { test: /\.(gif|png|jpg)$/, use: ["url-loader?limit=70000&name=[hash:8]-[name].[ext]"] },
            { test: /\.(woff|woff2|ttf)$/, use: ["url-loader"] },
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {

        alias: {

            vue: 'vue/dist/vue.js'

        }

    }
}