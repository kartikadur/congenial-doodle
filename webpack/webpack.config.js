const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

// TODO: autoprefixer

const parts = require('./webpack.parts');

const PATHS = {
  source: path.resolve(__dirname, '..', 'src'),
  build: path.resolve(__dirname, '..', 'dist'),
  node_modules: path.resolve(__dirname, '..', 'node_modules'),
};


const commonConfig = merge([
  // BASIC CONFIG
  {
    context: PATHS.source,
    entry: {
      main: './main.ts',
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    output: {
      path: PATHS.build,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js',
    },
  },
  parts.outputHTML(),

  // MODULE: RULES
  parts.loadHTML(),
  parts.loadStyles({
    include: path.resolve(PATHS.source, 'app'),
    use: [
      'to-string-loader',
      parts.css(),
      parts.sass({
        includePaths: [path.resolve(PATHS.source, 'assets')]
      }),
    ],
  }),

  // PLUGINS
  parts.replaceContext({ source: PATHS.source }),
]);

const productionConfig = merge([
  {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'ENV': JSON.stringify('production'),
        }
      })
    ]
  }
]);

const developmentConfig = merge([
  // MODULE: RULES
  parts.loadTS({
    exclude: [/\.(spec|e2e)\.ts$/]
  }),
  parts.loadFiles(),
  parts.extractStyles({
    exclude: path.resolve(PATHS.source, 'app'),
    use: [
      parts.css(),
      parts.sass()
    ],
  }),
  parts.optimizeChunks(),

  // DEV SERVER
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  })
]);

const testConfig = merge([
  // MODULE: RULES
  parts.loadTS(),
  parts.loadStyles({
    exclude: [path.resolve(PATHS.source, 'app')],
    use: ['null-loader'],
  }),
]);


module.exports = (env) => {
  if (env === 'production' || env === 'prod') {
    return merge(commonConfig, productionConfig);
  }

  if (env === 'development' || env === 'dev') {
    return merge(commonConfig, developmentConfig);
  }
  if (env === 'testing' || env === 'test') {
    return merge(commonConfig, testConfig);
  }
}
