// cypress-image-diff.config.js
const config = {
    ROOT_DIR: 'visual-test/image-test',
    FAILURE_THRESHOLD: 0.1,
    RETRY_OPTIONS: {
      log: true,
      limit: 50, // max number of iterations
      timeout: 30000, // time limit in ms
      delay: 300, // delay before next iteration, ms
    },
    REPORT: {
      // Customize the HTML and JSON report filenames here
      HTML_FILENAME: 'report-testing.html',
      JSON_FILENAME: 'report-testing.json',
      OVERWRITE: true, // default true
    },
    FAIL_ON_MISSING_BASELINE: false, // default to false
  };
  
  module.exports = config;