var Factory = require("./_pageObject.js").PageObjectFactory;
module.exports = Factory
    .create({
        click: function (element) {
            this.scrollTo(element);
            this.waitUntilVisible(element);
            this.waitUntilClickable(element);
            element.click();
        },
        scrollTo: function (element) {
            browser.executeScript("arguments[0].scrollIntoView();", element
                .getWebElement());
        },
        // wait seconds//
        randomNumber: function () {
            return Math.floor(Math.random() * 100);
        },
        randomName: function () {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random()
                    * possible.length));

            return text;
        },
        randomNumberOfAdults: function () {
            return Math.floor(Math.random() * 6) + 1;
        },

        randomNumberOfChildren: function () {
            return Math.floor(Math.random() * 5);
        },

        getRandomZipcode: function () {
            var zip = Math.floor(Math.random() * 90000) + 10000;
            return zip.toString();
        },

        getRandomPhone: function () {
            var phone = Math.floor(Math.random() * 9000000000) + 1000000000;
            return phone.toString();
        },

        getRandomEmail: function () {
            var email = Math.floor(Math.random() * 9000).toString();
            return email + "@gmail.com";
        },

        sendKeys: function (text) {
            browser.actions().sendKeys(text).perform();
        },

        clearActiveField: function () {
            return browser.driver.switchTo().activeElement().clear();
        },

        waitUntilVisible: function (element) {
            browser.sleep(250);
            browser.wait(protractor.ExpectedConditions
                .visibilityOf(element), 9900);
        },

        waitUntilInvisible: function (element) {
            browser.sleep(250);
            browser.wait(protractor.ExpectedConditions
                .invisibilityOf(element), 9900);
        },

        waitUntilClickable: function (element) {
            browser.sleep(250);
            browser.wait(protractor.ExpectedConditions
                .elementToBeClickable(element), 9900);
        },

        waitUntilUrlContains: function (url) {
            browser.sleep(250);
            browser.wait(protractor.ExpectedConditions.urlContains(url),
                9900);
        },

        waitUntilContainsText: function (element, text) {
            browser.sleep(250);
            browser.wait(protractor.ExpectedConditions
                .textToBePresentInElement(element, text), 9900);
        },

        waitUntilNotClickable: function (element) {
            browser.sleep(250);
            browser.wait(protractor.ExpectedConditions
                .not(protractor.ExpectedConditions
                    .elementToBeClickable(element)), 9900);
        },
        waitNSeconds: function (seconds) {
            browser.waitForAngular();
            var milliseconds = seconds * 1000;
            browser.sleep(milliseconds);
            browser.waitForAngular();
        },

        waitOneSecond: function () {
            browser.sleep(1000);
        },
        mouseMoveTo: function (element) {
            browser.actions().mouseMove(element).perform();
        },

        pressPageDown: function (n) {
            for (var i = 0; i <= n; i++) {
                browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform();
            }
        },

        pressPageUp: function (n) {
            for (var i = 0; i <= n; i++) {
                browser.actions().sendKeys(protractor.Key.PAGE_UP).perform();
            }
        },
        getXDaysFromNowFormatted: function (days) {
            return moment().add(days, 'days').format("M/DD/YYYY");
        }

    });