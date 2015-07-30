var http = require('http');
var site = process.argv[2];
var text = '';

// Executes http GET on a site. Takes site response as callback.
// Encodes response to utf8 and concatenates it all to text var.
// Prints out length of string and then prints out datastring. 
http.get(site, function callback(response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
        text += data;
    });
    response.on('error', console.error );
    response.on('end', function() {
        console.log(text.length);
        console.log(text);
    });
});

