var http = require('http');
var site = process.argv[2];

// Executes http GET on a site. Takes site response as callback.
// Encodes response to utf8 and prints it to stdout
http.get(site, function callback(response) {
	response.setEncoding("utf8");
	response.on("data", function(data) {
			console.log(data);
	});
});
