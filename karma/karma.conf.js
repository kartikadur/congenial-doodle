'use strict';

const webpackConfig = require('../webpack/webpack.test');

module.exports = (config) => {
  config.set({
    basePath: '../src',
    frameworks: ['jasmine'],
    files: [
      { pattern: './test.ts', watched: false },
      { pattern: './assets/**/*', watched: false, included: false, served: true, nocache: false },
    ],
    exclude: [
    ],
    preprocessors: {
      './**/*.spec.ts': ['webpack', 'sourcemap'],
    },
    mime: { 'text/x-typescript': ['ts'] },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true,
    }
  })
}