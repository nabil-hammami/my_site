// Declarations for Cucumber
const {Given, When, Then, After} = require('cucumber');
const assert = require('assert').strict;

// Declarations for Selenium
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

// Driver creation for Firefox
let driver = new webdriver.Builder().forBrowser('firefox').build();

Given('I am connected to the website', function () {
    return driver.get('http://localhost:1337/index.html');
});

When('I click on the logbook picture', function () {
    return driver.findElement({id: 'imgLogBook'}).click();
});

Then('the main frame must contain LogBook', function () {
    driver.switchTo().frame(0);
    return driver.findElement(By.xpath('/html/body/h1')).getText().then(function (foundElement) {
        assert.strictEqual(foundElement, 'Logbook');
    });
});

After(function () {
    return driver.quit();
});