var path = require('path');
var WebpackMerge = require('webpack-merge');
var CommonConfig = require('./webpack.common');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var root = path.resolve(__dirname, '..');

module.exports = WebpackMerge(CommonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(root, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
})