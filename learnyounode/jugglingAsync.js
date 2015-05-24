var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

//1)
http.get(url1, function (response) {
	response.setEncoding('utf8');
	var datas1 = '';
	response.on('data', function(data){
		 datas1 += data;
	});
	response.on('error', function(err){
		console.error(err);
	});
	response.on('end', function(){
		console.log(datas1);
		http.get(url2, function(response2){
				response2.setEncoding('utf8');
		var datas2 = '';
		response2.on('data', function(data){
			datas2 += data;
		});
		response2.on('error', function(err){
			console.error(err);
		});
		response2.on('end', function(){
			console.log(datas2);
			http.get(url3, function(response3){
				response3.setEncoding('utf8');
				var datas3 = '';
				response3.on('data', function(data){
					datas3 += data;
				});
				response3.on('error', function(err){
					console.error(err);
				});
				response3.on('end', function(){
					console.log(datas3);
				})
			})
		})
	})
	})
});

//4) Official solution
// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
    
//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(err)
    
//           results[index] = data.toString()
//           count++
    
//           if (count == 3)
//             printResults()
//         }))
//       })
//     }
    
//     for (var i = 0; i < 3; i++)
//       httpGet(i)