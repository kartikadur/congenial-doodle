var path = require('path');
var webpackConfig = require('../webpack/webpack.config')('test');

const base = path.resolve(__dirname, '..');

module.exports = function (config) {
  config.set({
    basePath: base,
    frameworks: ['jasmine'],
    client: {
      clearContext: false,
    },
    files: [
      { pattern: './src/test.js', watched: false }
    ],
    preprocessors: {
      './src/test.js': ['webpack', 'sourcemap']
    },

    // webpack stuff
    webpack: webpackConfig,
    webpackMiddleware: {
      // more stuff to add?
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true,
    },

    reporters: ['mocha', 'kjhtml'],
    port: 9876,
    colors: true,
    logLeverl: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,

  })
}