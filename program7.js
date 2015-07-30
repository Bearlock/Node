var http = require('http');
var site = process.argv[2];

http.get(site, function callback(response) {
	response.setEncoding("utf8");
	response.on("data", function(data) {
	//	for (stuff in data) {
			console.log(data);
       // }
	});
});
