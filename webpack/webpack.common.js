const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// Point to root folder
const root = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    main: './src/main.ts',
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
        // All CSS files except *.component.css
        test: /\.(css|sass|scss)$/,
        exclude: path.resolve(root, 'src/app'),
        use: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: ['css-loader?sourceMap', 'sass-loader?sourceMap'] })
      },
      {
        // All CSS/SASS/SCSS *.component.css files
        test: /\.(css|sass|scss)$/,
        include: path.resolve(root, 'src/app'),
        use: ['to-string-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      }
    ]
  },
  plugins: [
    
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(root, 'src'), // location of your src
      {} // a map of your routes
    ),

    // Check for all node_module imports and add them to vendor.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
