'use strict';

const path = require('path');

const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// Point to root folder
const source = path.resolve(__dirname, '..', 'src');

module.exports = {
  context: source,
  entry: {
    main: './main.ts',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {

        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        // All *.component.html files
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        // All CSS files except *.component.css
        test: /\.(css|sass|scss)$/,
        exclude: path.resolve(source, 'app'),
        use: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: ['css-loader?sourceMap', 'sass-loader?sourceMap'] })
      },
      {
        // All CSS/SASS/SCSS *.component.css files
        test: /\.(css|sass|scss)$/,
        include: path.resolve(source, 'app'),
        use: ['to-string-loader', 'css-loader?sourceMap', {
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
  ]
}
