/*!
 * Created by He on 2017/7/9.
 * E-mail:h@strawtc.cn
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
          emitWarning: true,
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
};
