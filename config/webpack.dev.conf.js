/*!
 * Created by He on 2017/7/9.
 * E-mail:h@strawtc.cn
 */
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[path][name]_[local]-[hash:base64:5]'
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
    // open: true,已不支持
    port: 8088,
    inline: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin()
  ],
});