var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
    console.log('User connected via Socket.io!');

    socket.on('message', function(message){
        console.log(`Message received: ${message.text}`);
        socket.broadcast.emit('message', message)
    })

    socket.emit('message', {
        text: "Welcome to chat application!"
        })
})

http.listen(PORT, function(){
    console.log('Server started!');
})