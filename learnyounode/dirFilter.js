var path = require('path');
var fs = require('fs');

module.exports = function(dirname, extension, callback) {
	fs.readdir(dirname, function(err, list){
	if (err)
		callback(err, null);
	else {
		var result=[];
		for (var i = 0; i < list.length; i++) {
			if (list[i].indexOf('.' + extension)!=-1)
				result.push(list[i]);
		};
		callback(null, result);
	}
});
}