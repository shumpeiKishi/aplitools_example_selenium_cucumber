'use strict';
var { Given, When, Then } = require('cucumber');
var { Eyes } = require('eyes.selenium');
var { By } = require('selenium-webdriver');
var { expect } = require('chai');
var config = require('../environment/config');

Given('I start Applitools test named {string}', function(testName, next) {
  this.eyes = new Eyes();
  this.eyes.setApiKey(config.Applitools.APIKey);
  this.eyes.open(this.driver, 'My App', testName,
    { width: 800, height: 600 });
  next();
});

When('I go to {string}', function (url, next) {
  // Navigate the browser to the "hello world!" web-site.
  this.driver.get(url)
    .then(() => next())
});

When('I click the button', function(next) {
  this.driver.findElement(By.tagName('button')).click();
  next();
})

Then('I should see the same page visual of {string}', function (testPage, next) {
  this.eyes.checkWindow(testPage)
    .then(() => {
      this.eyes.close(false) // add false parameter to prevent close method to throw and Exception in case of error.
        .then((result) => {
          expect(result.isPassed).to.equal(true);
          next();
        });
    });
});