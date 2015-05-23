var dirname = process.argv[2];
var ext = process.argv[3];
var dirFilter = require('./dirFilter');

dirFilter(dirname, ext, function(err, list){
	if (err)
		throw err;
	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	};
})