const { resolve } = require('path')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.base')

const resovle = (filePath) => path.resolve(__dirname, filePath)

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 3030,
        hot: true,
    },
    module: {},
    output: {
        filename: 'js/[name]:[hash:8].js',
        path: resolve('../dist')
    },
    mode: 'development',
})