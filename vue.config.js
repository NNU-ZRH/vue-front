const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//禁用eslint校验,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',//跨域域名，后端域名
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
