'use strict';

const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// debug env vars
const ENV = process.env.NODE_ENV = process.env.ENV = 'testing';

module.exports = WebpackMerge(CommonConfig, {
  devtool: 'inline-source-map',
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    }),

    // Check for all node_module imports and add them to vendor.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),

    new HtmlWebpackPlugin({
      template: './index.html'
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
})