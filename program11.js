var http   = require('http');
var fs     = require('fs');
var port   = Number(process.argv[2]);
var file   = process.argv[3];


var server = http.createServer(function callback(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    var stream = fs.createReadStream(file);
    stream.pipe(res);
})
server.listen(port);