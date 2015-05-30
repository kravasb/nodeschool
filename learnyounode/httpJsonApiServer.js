var http = require('http');
var url = require('url');
var port = 1000;

var routes = {	
'/api/parsetime': function (req, resp) {
	var dt= new Date();
	var date = Date.parse(url.parse(req.url, true).query.iso);
	dt.setTime(date);
	console.log('Conv date ' + date);
	var respDate = { hour: dt.getHours(), minute: dt.getMinutes(), second: dt.getSeconds() };
	resp.end(JSON.stringify(respDate));
},

'/api/unixtime': function (req, resp) {
	var date = Date.parse(url.parse(req.url, true).query.iso);
	var respDate = {unixtime: date};
	resp.end(JSON.stringify(respDate)); 
}
};

var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'application/json' });
	if (request.method!='GET') 
		return response.end();
	routes[url.parse(request.url).pathname](request,response);
})

server.listen(process.argv[2]);

// Official solution
var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
