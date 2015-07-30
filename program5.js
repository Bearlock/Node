var fileSys   = require('fs');
var path      = require('path');
var args      = process.argv;
var filePath  = args[2];
var exts      = args[3];

// Takes 2 command-line arguments; a file path
// And a file extension type. Opens specified
// File path directory. Filters by the extension
// type, and returns files only of that type. 
// Displays output line by line, if it exists.  
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
