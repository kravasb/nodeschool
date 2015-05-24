var http = require('http');
var bl = require('bl');
var cstream = require('concat-stream');

var url = process.argv[2];

//1)
http.get(url, function (response) {
	response.setEncoding('utf8');
	var datas = '';
	response.on('data', function(data){
		 datas += data;
	});
	response.on('error', function(err){
		console.error(err);
	});
	response.on('end', function(){
		console.log(datas.length);
		console.log(datas);
	})
});

//2)
http.get(url, function (response) {
	response.setEncoding('utf8');
	var datas = '';
	response.pipe(bl(function (err, data) {
		if (err) throw err;
		console.log(data.length);
		console.log(data);
	}))    
});

//3)
http.get(url, function (response) {
	response.setEncoding('utf8');
	var datas = '';
	response.pipe(concatStream(function (data) { 
		if (err) throw err;
		console.log(data.length);
		console.log(data);
	}))    
});