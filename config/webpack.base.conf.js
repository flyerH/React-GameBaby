/*
 * Created  by flyerH on 2017/7/9.
 * Modified by flyerH on 2018/12/20 12:40:16.
 */

const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/
      }
    ]
  }
};
