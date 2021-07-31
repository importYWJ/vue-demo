const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    // 指定输出路径，必须为绝对路径
    // path: 'E:/01_Code/Web/Vue学习/13 webpack使用/01 webpack基础/dist'
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
}