/** @type import('@vue/cli-service').ProjectOptions */
const path = require('path')
const resolve = filePath => path.resolve(__dirname, filePath)


module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    // setting alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('config', resolve('src/config'))
      .set('utils', resolve('src/utils'))
      .set('components', resolve('src/components'))
      .end()
    // omit .ts ending
    config.resolve.extensions
      .add('ts')
      .end()
    // enable vue devtools
    config.devtool('source-map')
  }
}