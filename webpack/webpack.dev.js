const path = require('path');

const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const root = path.resolve(__dirname, '..');

// debug env vars
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

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
    }),

    // Set Env vars
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    // new UglifyJSPlugin()
    // new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(root, 'dist'),
    compress: true,
    stats: 'minimal'
  }
})