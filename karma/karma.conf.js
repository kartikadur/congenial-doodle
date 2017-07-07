var path = require('path');
var webpackConfig = require('../webpack/webpack.test');

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

    // // Istanbul coverage stuff
    // coverageIstanbulReporter: {
    //   reports: ['html', 'lcovonly', 'text-summary'],

    //   // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
    //   dir: path.join(__dirname, 'coverage'),

    //   // if using webpack and pre-loaders, work around webpack breaking the source path
    //   fixWebpackSourcePaths: true,

    //   // stop istanbul outputting messages like `File [${filename}] ignored, nothing could be mapped`
    //   // skipFilesWithNoCoverage: true,

    //   // Most reporters accept additional config options. You can pass these through the `report-config` option
    //   'report-config': {

    //     // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
    //     html: {
    //       // outputs the report in ./coverage/html
    //       subdir: 'html'
    //     },
    //   }
    // },

    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLeverl: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,

  })
}