var fileSys   = require('fs');
var args      = process.argv;
var filePath  = args[2];

// Takes a command-line argument as a file path
// Displays error if argument was not passed,
// Opens file, counts new lines, returns total
// Asynchronous Method uses call-back function
if(!filePath) {
	console.log("You forgot to enter a file name");
}

else {
	fileSys.readFile(filePath, 'utf8', function(err, data) {
		 var lineCount = data.split('\n').length - 1;
		 console.log(lineCount);
	});
}
