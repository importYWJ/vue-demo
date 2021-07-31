const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    // 指定输出路径，必须为绝对路径
    // path: 'E:/01_Code/Web/Vue学习/13 webpack使用/01 webpack基础/dist'
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    // assertModuleFilename: 'img/[name]_[hash:6].[ext]'  // 方式二
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/, // 正则表达式匹配
        // // 1.loader的写法(语法糖)
        // // loader: 'css-loader'
        // use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }]
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // use: [
        //   {
        //     // loader: "file-loader",
        //     loader: "url-loader",
        //     options:  {
        //       outputPath: 'img',
        //       name: '[name]_[hash:6].[ext]'
        //     }
        //   }
        // ]
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
      }
    ]
  }
}