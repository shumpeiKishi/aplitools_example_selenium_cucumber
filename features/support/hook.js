'use strict';

let { Before, After } = require('cucumber');
var fs = require('fs');
var path = require('path');
var sanitize = require('sanitize-filename');

Before(function (testCase) {
  this.scenarioName = testCase.pickle.name;
  this.safeScenarioName = sanitize(testCase.pickle.name).replace(/ /g, "_");
});

After(function (testCase) {
  if (testCase.result.status === 'failed') {
    this.driver.takeScreenshot()
      .then(imgData => {
        fs.writeFile(path.join('features', 'screenshots','error_' + sanitize(testCase.pickle.name + ".png").replace(/ /g, "_")), imgData, 'base64', (err) => console.log(err));
      })
      .catch(err => console.log(err));
  }

  if (this.eyes) {
    // If the test was aborted before eyes.close was called ends the test as aborted.
    this.eyes.abortIfNotClosed();
  }
  return this.driver.quit();
});