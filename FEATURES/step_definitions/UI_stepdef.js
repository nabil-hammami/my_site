// Declarations for Cucumber
const {Given, When, Then} = require('cucumber');
const assert = require('assert').strict;

// Declarations for Selenium
const webdriver = require('selenium-webdriver');
const {By, until} = require('selenium-webdriver');

// Driver creation for Firefox
let driver = new webdriver.Builder().forBrowser('firefox').build();

async function connection() {
    await driver.get('https://nabil-hammami.github.io/my_site/');
    await driver.wait(until.elementLocated(By.id('imgLogBook')), 10000);
}

async function clicLogBook() {
    await driver.findElement({id: 'imgLogBook'}).click();
}

function expected(){
    driver.switchTo().frame(0);
    let promiseValue = driver.findElement(By.xpath('/html/body/h1')).getText();

    console.log('returnValue = ' + returnValue);
}

Given('I am connected to the website', function () {
    let retour = connection();
    console.log('connection() = ' + retour);
});

When('I click on the logbook picture', function () {
    let retour = clicLogBook();
    console.log('clicLogBook() = ' + retour);
});

Then('the main frame must contain LogBook', function () {
    let expectedReturn = expected();
    assert.strictEqual(expectedReturn,"Logbook");
});
