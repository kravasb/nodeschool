var net = require('net');
var port = process.argv[2];
var date = new Date();

var server = net.createServer(function(socket){
	var year = date.getFullYear();
    var month = date.getMonth() >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() +1);     // starts at 0
    var todayDate = date.getDate();      // returns the day of month
    var hours = date.getHours();
    var minutes = date.getMinutes();
	var data = year + '-' + month + '-' + todayDate + ' ' + hours + ':' + minutes + '\n';
	socket.write(data);
	socket.end();
});

server.listen(port);