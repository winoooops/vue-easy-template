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
    alias: {
        '@': path.resolve('src')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
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
    }
}