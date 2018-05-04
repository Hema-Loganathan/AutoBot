xlsxj = require("xlsx-to-json");
var fs = require('fs');
var file = "conf";
process.argv.forEach(function (val, index, array) {
    if (index == 2 && val != undefined) {
        file = val;
    }
});
if (!fs.existsSync(file)) {
    fs.mkdirSync(file);
}
xlsxj({
    input: file + ".xlsx",
    output: file + "/tests.json",
    sheet: "tests"
}, function (err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log("tests.json created");
        for (var i = 0; i < result.length; i++) {
            sheet(result[i].TestName);
        }
    }
});


function sheet(name) {
    xlsxj({
        input: file + ".xlsx",
        output: file + "/" + name + ".json",
        sheet: name
    }, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(name + ".json created");
        }
    });

}
