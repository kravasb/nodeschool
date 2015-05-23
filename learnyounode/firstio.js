var fs = require('fs');

var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);

var fileContent = buffer.toString();

var linesCount = fileContent.split('\n').length-1;

console.log(linesCount);