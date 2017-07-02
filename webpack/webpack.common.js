var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

//extra config vars?
// Point to root folder
var root = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    // context: path.resolve(root, 'src'),
    main: './src/main.ts',
    vendor: './src/vendor.ts',
    polyfills: './src/polyfills.ts'
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
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        // All CSS files except *.component.css
        test: /\.css$/,
        exclude: path.resolve(root, 'src/app'),
        use: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
      },
      {
        // All CSS *.component.css files
        test: /\.css$/,
        include: path.resolve(root, 'src/app'),
        use: ['to-string-loader', 'css-loader']
      }
      // {
      //   // SASS/SCSS
      //   test: /\.(scss|sass)$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }

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
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
