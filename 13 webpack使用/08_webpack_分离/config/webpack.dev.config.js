const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.comm.config")

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: "../public",  // 作用：如果资源没有从Webpack得到服务，则从public文件夹得到
    hot: true,
    // host: '0.0.0.0',
    port: 8081,
    open: true,  // 是否打开浏览器
    compress: true,  // 是否为静态文件开启gzip compression
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,  // 默认(true)不接受https且证书无效的后端服务器，代理不成功。
        changeOrigin: true
        // 现在：(客户端)源代码发送网络请求(发送给代理, 代理发送请求,再返回), 本质通过/api/...发送, Origin是port:7777,
        // 而经过代理变成代理的源。服务器接收到的源会解析header, 作验证再决定是否返回, 而该设置将devServer将源改成代理的port:8888
      }
    }
  },
})