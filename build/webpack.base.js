const webpack = require('webpack')
const path = require('path')
const sass = require('sass')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const resolve = (filePath) => path.resolve(__dirname, filePath)

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle',
        path: resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            // {
            //     test: /\.tsx$/,
            //     use: 'ts-loader',
            // },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/[name].[hash:8].[ext]',
                    }
                }],
            },
            {
                test: /\/.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    resolve: {
        // can use '@/view' instead of 'src/view'
        alias: {
            '@': path.resolve('src')
        },
        // don't need to specify .js .json .tsx at the end when importing 
        extensions: ['.js', 'json', 'css', '.vue'],
        modules: [resolve('../node_modules'), 'node_modules'] // improve performance
    }
}