var fileSys   = require('fs');
var args      = process.argv;
var filePath  = args[2];

// Takes a command-line argument for a file path
// Displays error if file name was forgotten
// Opens up file, counts new lines, and returns count
// Synchronous method requres no call-back function
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
