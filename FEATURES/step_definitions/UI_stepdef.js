// Declarations for Cucumber
const {Given, When, Then, After} = require('cucumber');
const assert = require('assert').strict;

// Declarations for Selenium
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');


// Driver creation for Firefox
let driver;

Given('I am connected to the website', function () {
    driver = new webdriver.Builder().forBrowser('firefox').build();
    return driver.get('http://localhost:63342/My_Website/my_site/index.html');

});

When('I click on the logbook picture', function () {
    return driver.findElement({id: 'imgLogBook'}).click();
});

When('I click on the Latest test results link', function () {
    return driver.findElement({id: 'menu_latestTestResult'}).click();
});

When('I click on the Roadmap link', function () {
    return driver.findElement({id: 'menu_roadmap'}).click();
});

Then('the main frame must contain LogBook', function () {
    driver.switchTo().frame(0);
    return driver.findElement(By.xpath('/html/body/h1')).getText().then(function (foundElement) {
        assert.strictEqual(foundElement, 'Logbook');
    });
});

Then('the main frame must contain Cucumberjs Report', function () {
    driver.switchTo().frame(0);
    return driver.findElement(By.xpath('/html/body/div[1]/div/div/a')).getText().then(function (foundElement) {
        assert.strictEqual(foundElement, 'Cucumberjs Report');
    });
});

Then('the main frame must contain roadmap.png', function () {
    driver.switchTo().frame(0);
    return driver.findElement(By.xpath('/html/body/img')).getAttribute("src").then(function (foundElement) {
        let isTrue = foundElement.endsWith('roadmap.png');
        assert.strictEqual(isTrue, true);
    });
});

After(function () {
    return driver.close();
});