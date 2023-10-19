const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');
compareSnapshotCommand();

Cypress.Commands.add('generateReport', () => {
    return merge().then((report) => {
      generator.create(report, {
        reportDir: 'visual-test/report-test', // Directory where the reports will be stored
        reportTitle: 'Visual Test Report', // Title of the report
  
        // Use the custom filenames for HTML and JSON reports
        reportFilename: config.REPORT.HTML_FILENAME,
        reportJsonFile: config.REPORT.JSON_FILENAME,
  
        inlineAssets: true, // Embed assets in the HTML report
      });
    });
  });
  