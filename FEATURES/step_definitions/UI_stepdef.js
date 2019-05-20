// Declarations for Cucumber
const {Given, When, Then, After} = require('cucumber');
const assert = require('assert').strict;

// Declarations for Selenium
const webdriver = require('selenium-webdriver');
const {By, until} = require('selenium-webdriver');

// Driver creation for Firefox
let driver = new webdriver.Builder().forBrowser('firefox').build();

Given('I am connected to the website', function () {
    return driver.get('https://nabil-hammami.github.io/my_site/');
});

When('I click on the logbook picture', function () {
    return driver.findElement({id: 'imgLogBook'}).click();
});

Then('the main frame must contain LogBook', function () {
    driver.switchTo().frame(0);
    driver.findElement(By.xpath('/html/body/h1')).getText().then(function (foundElement) {
        assert.strictEqual(foundElement, 'Logbook');
    });
});