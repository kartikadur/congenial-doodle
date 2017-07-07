'use strict';

const path = require('path');

const webpack = require('webpack');

// Point to root folder
const source = path.resolve(__dirname, '..', 'src');

// debug env vars
const ENV = process.env.NODE_ENV = process.env.ENV = 'testing';

module.exports = {
  context: source,
  resolve: {
    extensions: ['.ts', '.js', '.html']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        // All CSS files except *.component.css
        test: /\.(css|sass|scss)$/,
        exclude: path.resolve(source, 'app'),
        use: ['null-loader']
      },
      {
        // All CSS/SASS/SCSS *.component.css files
        test: /\.(css|sass|scss)$/,
        include: path.resolve(source, 'app'),
        use: ['to-string-loader',
          {
            loader: 'css-loader', options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: {
              // Includes a list of paths/folders where node-sass can look for @import files
              includePaths: [path.resolve(source, 'assets').toString()],
              sourceMap: true
            }
          }]
      }
    ]
  },
  plugins: [

    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      source, // location of your src
      {} // a map of your routes
    ),

    // Set Env vars
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
  ]

}