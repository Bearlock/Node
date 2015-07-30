var http  	  = require('http');
var urls  	  = process.argv.slice(2);
var textArray = [];
var count 	  = 0;

// Function to print items in text array to stdout
function print() {
	for(var i = 0; i < urls.length; i++) {
		console.log(textArray[i]);
	}
}

// Executes http GET on sites. Takes sites' response as callback.
// Encodes responses to utf8 and concatenates it all to text var.
// Stores responses into an array of strings according accessed index.
// Increments callback count and checks to see if all urls are done
// Finishes up by callling print() function to print stored strings
function getText(index) {
	var text ='';
	
	http.get(urls[index], function callback(response) {
		response.setEncoding("utf8");
		response.on("data", function(data) {
			text += data;
		});
		response.on('error', console.error );
		response.on('end', function() {
			
			textArray[index] = text;
			count++
			
			if (count == urls.length) {
				print()
			}
		});
	});
}

for (var i = 0; i < urls.length; i++) {
	getText(i);
}
