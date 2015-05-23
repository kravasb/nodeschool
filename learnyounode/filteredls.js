var fs = require('fs');
var path = require('path'); 

var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, function(err,list){
	if (err) throw err;
	for (var i = 0; i < list.length; i++) {
		if (list[i].indexOf('.'+extension)!=-1)
			console.log(list[i]);
	};
	//Another way to solve this task
	// for (var i = 0; i < list.length; i++) {
	// 	if (path.extname(list[i])==='.'+extension )
	// 		console.log(list[i]);
	// };
});