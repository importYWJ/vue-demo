const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { DefinePlugin } = require('webpack');

module.exports = {
  target: 'web',
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
  },
  // watch: true,
  module: {
    rules: [
      {
        test: /\.(css|less)$/, // 正则表达式匹配
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6].[ext]'  // 方式一
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",

        }
      },
      {
        test:/\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  plugins: [
    // 插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack案例',  // 利用html-webpack-plugin的default_index.ejs模块生成默认
      template: "./public/index.html"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
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
    new VueLoaderPlugin(),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,    // 作用：对Vue2做适配，true则做Tree Shaking.
      __VUE_PROD_DEVTOOLS__: false  // 作用：生产环境下要不要支持DevTool, true则做Tree Shaking.
    })
  ]
}