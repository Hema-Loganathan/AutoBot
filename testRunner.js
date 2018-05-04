/**
 * Created by Hema on 04/26/2018
 */
'use strict';
var utils = require("./testUtils.js");

const excelToJson = require('convert-excel-to-json');
var file = browser.params.tests;

var result = excelToJson({
    sourceFile: file,
    header: {
        rows: 1
    },
    columnToKey: {
        "*": "{{columnHeader}}"
    }
});

var configObj = {};
for (var testName in result) {
    if (testName == "tests") {
        for (var type in result[testName]) {
            configObj[result[testName][type]["TestName"]] = result[testName][type]["Run"];
        }

    } else {
        if (configObj[testName] == "TRUE") {
            console.log(testName + " Started");
            runTest(testName, result[testName]);
        }
    }
}

function runTest(testName, tasks) {
    describe(testName + 'Test', function () {
        it('check if ' + testName + ' is working', function () {

            browser.waitForAngularEnabled(false);
            browser.get(browser.baseUrl);
            for (var type in tasks) {
                var _action = "";
                var _by = "";
                var _elem = "";
                var _value = "";
                var _element = "";
                var _elements = "";
                try {
                    _action = result[testName][type]['action'];
                    _by = result[testName][type]['by'];
                    _elem = result[testName][type]['element'];
                    _value = result[testName][type]['value'];
                    if (_value == undefined) {
                        _value = "";
                    } else if (_value == "utils.getRandomEmail()") {
                        _value = utils.getRandomEmail();
                    } else if (_value == "utils.getRandomName()") {
                        _value = utils.getRandomName();
                    }

                    switch (_by) {
                        case "name":
                            _element = element(by.name(_elem));
                            _elements = element.all(by.name(_elem));
                            break;
                        case "id":
                            _element = element(by.id(_elem));
                            _elements = element.all(by.id(_elem));
                            break;
                        case "css":
                            _element = element(by.css(_elem));
                            _elements = element.all(by.css(_elem));
                            break;
                        case "model":
                            _element = element(by.model(_elem));
                            _elements = element.all(by.model(_elem));
                            break;
                        case "linkText":
                            _element = element(by.linkText(_elem));
                            _elements = element.all(by.linkText(_elem));
                            break;
                        case "partialLinkText":
                            _element = element(by.partialLinkText(_elem));
                            _elements = element.all(by.partialLinkText(_elem));
                            break;
                        case "xpath":
                            _element = element(by.xpath(_elem));
                            _elements = element.all(by.xpath(_elem));
                            break;
                    }

                } catch (err) {

                }
                switch (_action) {
                    case "url":
                        browser.get(_value);
                        break;
                    case "pageUp":
                        utils.pressPageUp(1);
                        break;
                    case "pageDown":
                        utils.pressPageDown(1);
                        break;
                    case "goto":
                        utils.scrollTo(_element);
                        break;
                    case "wait":
                        utils.waitUntilVisible(_element);
                        utils.waitUntilClickable(_element);
                        break;
                    case "enter":
                        _element.sendKeys(_value);
                        break;
                    case "click":
                        utils.click(_element);
                        break;
                    case "verify":
                        expect(_element.getText()).toEqual(_value);
                        break;
                    case "get":
                        _elements.getText().then(function (res) {
                            console.log("Element Found: " + res[_value]);
                        });
                        break;

                }

            }
            browser.close();
        });
    });
}