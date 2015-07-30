var port = Number(process.argv.slice(2)[0]);
var net  = require('net');

// Function to prepend 0 to datetime if i is less than 10
// Correctly format numbers for datetime, e.g '05:05'
function zero(i) {
    return (i < 10 ? "0" : "") + i;
}

// Creates a raw TCP server that listens to arg-specified port
// Callback function returns formatted datetime on connection
var server = net.createServer(function callback(socket) {
    var date  = new Date();
    var year  = zero(date.getFullYear());
    var month = zero(date.getMonth() + 1); // Month 0-based so we need an offset of 1
    var day   = zero(date.getDate());
    var hours = zero(date.getHours());
    var mins  = zero(date.getMinutes());
        
    var frmt  = year + "-" + month + "-" + day + " " + hours + ":" + mins;
    
    socket.write('\nThe current time is: ' + frmt + '\n');
    socket.end('\n');
})
server.listen(port);