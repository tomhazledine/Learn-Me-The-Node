var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

var server = net.createServer(function (socket) {

    console.log('client connected');

    socket.on('end', function() {
        console.log('client disconnected');
    });

    var datetime = strftime('%F %H:%M', new Date());
    
    socket.write(datetime + '\n');
    socket.end();

});

server.listen(port, function (){
   console.log('server bound'); 
});