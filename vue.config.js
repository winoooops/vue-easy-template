const path = require('path')
const resolve = filePath => path.resolve(__dirname, filePath)

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('config', resolve('src/config'))
      .set('utils', resolve('src/utils'))
      .set('components', resolve('src/components'))
      .end()
    // 设置文件扩展名，设置后在引入时，可省略扩展名
    config.resolve.extensions
      .add(['ts'])
      .end()
  }
}