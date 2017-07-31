const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');

exports.devServer = ({ host, port, contentBase } = {}) => ({
  devServer: {
    contentBase,
    compress: true,
    historyApiFallback: true,
    host,
    port,
    overlay: {
      errors: true,
      warnings: true,
    },
    stats: 'errors-only',
  },
});

exports.loadTS = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      include,
      exclude,
      test: /\.ts$/,
      use: ['awesome-typescript-loader', 'angular2-template-loader'],


    }]
  }
});

exports.loadHTML = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      include,
      exclude,
      test: /\.html$/,
      use: ['html-loader'],
    }]
  }
});

exports.loadFiles = ({ testpattern, include, exclude } = {}) => ({
  module: {
    rules: [{
      include,
      exclude,
      test: testpattern || /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      use: [{
        loader: 'file-loader',
        options: {
          'name': 'assets/[name].[ext]'
        }
      }],
    }]
  }
});

// TODO: ADD postcss-loader
// exports.post = ({ plugins } = {}) => ({
//   loader: 'postcss-loader',
//   options: {
//     sourceMap: true,
//     plugins: () => (plugins),
//   }
// });

exports.css = () => ({
  loader: 'css-loader',
  options: {
    sourceMap: true,
  }
});

exports.sass = ({ includePaths } = {}) => ({
  loader: 'sass-loader',
  options: {
    includePaths,
    sourceMap: true
  },
});

exports.loadStyles = ({ include, exclude, use } = {}) => ({
  module: {
    rules: [{
      include,
      exclude,
      test: /\.(css|scss|sass)$/,
      use,
    }]
  }
});

exports.extractStyles = ({ include, exclude, use } = {}) => {
  const plugin = new ExtractTextPlugin({
    allChunks: true,
    disable: false,
    filename: '[name].css',
  });
  return {
    module: {
      rules: [{
        include,
        exclude,
        test: /\.(css|scss|sass)$/,
        use: plugin.extract({
          fallback: 'style-loader',
          use
        }),
      }]
    },
    plugins: [plugin]
  };
};

exports.replaceContext = ({ source } = {}) => {
  const replace = new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)@angular/,
    source, // location of your src
    {} // a map of your routes
  );
  return {
    plugins: [replace]
  }
}

exports.optimizeChunks = () => {
  const optimize = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: ({ resouce }) => /node_modules/.test(resouce),
  });
  return {
    plugins: [optimize]
  };
};

exports.outputHTML = () => {
  const html = new HTMLPlugin({
    template: 'index.html'
  });
  return {
    plugins: [html]
  };
};