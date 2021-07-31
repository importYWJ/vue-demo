const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    // 指定输出路径，必须为绝对路径
    // path: 'E:/01_Code/Web/Vue学习/13 webpack使用/01 webpack基础/dist'
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/, // 正则表达式匹配
        // // 1.loader的写法(语法糖)
        // // loader: 'css-loader'
        // use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }]
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}