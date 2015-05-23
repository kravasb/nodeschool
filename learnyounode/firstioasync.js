var fs = require('fs');

var filePath = process.argv[2];

//var buffer = fs.readFile(filePath, 'utf8',function (err, stringContent) {
var buffer = fs.readFile(filePath, function (err, dataBuffer) {
	if (err) throw err;
	var fileContent = dataBuffer.toString();
	var linesCount = fileContent.split('\n').length-1;
	console.log(linesCount);
});