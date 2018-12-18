/*!
 * Created by He on 2017/7/9.
 * E-mail:h@strawtc.cn
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [
        'style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[local]'
          },
        }, {
          loader: 'postcss-loader'
        }
      ],
    }],
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    port: 8088,
    inline: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    })
  ]
});