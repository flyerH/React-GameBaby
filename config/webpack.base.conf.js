/*!
 * Created by He on 2017/7/9.
 * E-mail:h@strawtc.cn
 */
const path = require('path');


module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: ['./src/index.js'],
  },
  /* output: {
    // [name]对应entry的key（也就是app）
    // filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist/static'),
    // publicPath: './static/',
  }, */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
};
