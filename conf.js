var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    baseUrl: 'http://www.google.com',
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
           // args: ["--headless", "--disable-gpu", "--window-size=1200,800"]
            args:["--window-size=1200,800"]
        }
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'reports/',
                screenshotsFolder: 'screenshots/',
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true,
                fixedScreenshotName: true,
                fileNamePrefix: '',
                cleanDestination: true,
                showPassed: true,
                fileName: 'AutoBotReport',
                fileNameSeparator: ''

            })
        );
    },
    specs: ["specs/test.js","./testRunner.js"],
    suites: {
        e2e: []
    },
    params: {
        tests: 'conf.xlsx'
    }
};
