const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.comm.config")

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    // 插件对象
    new CleanWebpackPlugin(),
    // 路径相对于根目录
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public",
          to: "./",
          globOptions: {
            ignore: [
              "**/filtertest.txt", 
              "**/index.html"
            ]
          }
        }
      ]
    }),
  ]
})