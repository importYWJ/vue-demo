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
  devServer: {
    contentBase: "./public",  // 作用：如果资源没有从Webpack得到服务，则从public文件夹得到
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
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx"],
    alias: {
      "js": path.resolve(__dirname, "./src/js"),
      "@": path.resolve(__dirname, "./src")
    }
  },
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