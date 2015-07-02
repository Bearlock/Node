var fileSys   = require('fs');
var path      = require('path');
var args 	  = process.argv;
var filePath  = args[2];
var exts      = args[3];

if (!filePath) {
	console.log("You forgot to enter a file name");
}

else {
	fileSys.readdir(filePath, function callback(err, fileList) {
		for (list in fileList) {
			if (path.extname(fileList[list]) == "." + exts) {
				console.log(fileList[list]);
			}
		}
	});
}
