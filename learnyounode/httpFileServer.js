var http = require('http');
var fs = require('fs');

var server =  http.createServer(function (request, response){
	response.writeHead(200, { 'content-type': 'text/plain' });
	var data = fs.createReadStream(process.argv[3]);
	data.pipe(response);
})


server.listen(process.argv[2]);
console.log('started on port' + process.argv[2]);