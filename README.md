# AutoBot

Data Driven Automation Framework to test UI components

### Prerequisites

things you need to install for AutoBot software to work

```
node
protractor
protractor-jasmine2-html-reporter
convert-excel-to-json
underscore

```
### Installing

make sure node is installed on your system.
once you have node installed on your machine run the following command to get all the tools

```
npm install -g protractor
npm install
```

### Run

To Run the Framework you need to first start webdriver by using the following command

```
webdriver-manager update
webdriver-manager start
```

open another terminal and run the following command to run AutoBot

```
protractor conf.js
```

### How to Write Tests

Open Conf.xlsx

create new test by adding test name in first sheet of the excel and create a new sheet with the testname 

example: googleTest

```
TestName	Run
google	  TRUE
```

```
action	   by	            element	                                  value
url			                                                http://www.google.com
enter	      id	    lst-ib	                                primitive logic
click	      css	    input[value="Google Search"]	
verify	    xpath	    //h3[1]/a	                                Primitive Logic | Digital Transformation & Business Consulting ... 
```
action will drive the type of event i.e. 
```
**click**  -  clicking a button
**enter**  - entering text in a textbox
**verify** - compare text
**url**    - which page to open in the browser
```

**by** will find the element on the web page i.e

```
**id**    - finding element by using id
**css**   - finding element by using css
**xpath** - finding element by using xpath
**name**  - finding element by using name
```
element will be the corresponding id,css,xpath,name of the element i.e. element present on the DOM

value will be the value you use to either enter into textfields, url value or to compare something on the webpage.

### Authors
* **Dinesh Gudibandi** - *Software Engineer* - [@AMEX](https://www.americanexpress.com/)
* **Hema Pala Loganathan** - *Quality Engineer* - [@PrimitiveLogic](https://www.primitivelogic.com/)

