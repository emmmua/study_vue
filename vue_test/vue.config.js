const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, /*关闭语法检查*/
  // 开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/api': ''}, // 重写路径，去掉路径中开头的/api，保证交给后台服务器的是正常请求路径(必须配置)
        ws: true, // 用于支持websocket
        changeOrigin: true  // 用于控制请求头中的host值，保证请求的是配置的target，而不是当前的服务器地址
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo': ''}, // 重写路径，去掉路径中开头的/api，保证交给后台服务器的是正常请求路径(必须配置)
        ws: true, // 用于支持websocket
        changeOrigin: true  // 用于控制请求头中的host值，保证请求的是配置的target，而不是当前的服务器地址
      }
    }
  }
})
