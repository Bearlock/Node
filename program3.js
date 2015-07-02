var fileSys   = require('fs');
var args 	  = process.argv;
var filePath  = args[2];

if(!filePath) {
	console.log("You forgot to enter a file name");
}

else {
	var fileBuff  = fileSys.readFileSync(filePath);
	var fileStr   = fileBuff.toString();
	var newline   = fileStr.split('\n');
	var linecount = newline.length - 1;
	console.log(linecount);
}