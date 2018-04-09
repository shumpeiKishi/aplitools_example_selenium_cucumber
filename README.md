# Visual Regression testing with AI
This is an example of Applitools (https://applitools.com/) JavaScript SDK with Cucumber.js + Selenium web driver.

Requirement:
 - Node.js (version 7 or above)
 
Instruction: 
  1. Get API key from https://applitools.com/
  2. Put your API key to example.config.js and rename it to "config.js"
  3. Use your terminal and go to the root directory and run "npm install" from terminal.
  4. Run "npm test" to run the example test at features/applitools.feature

Note: 
 - If there's an error "The ChromeDriver could not be found on the current PATH.", download chromedriver and set the environment path. This tutorial is helpful (https://stackoverflow.com/questions/26191142/selenium-nodejs-chromedriver-path).