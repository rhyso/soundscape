var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/layout', function (req, res) {
	res.sendFile(__dirname + '/layout.html');
});


app.get('/p', function (req, res) {
  res.sendFile(__dirname + '/player.html');
});

app.use(express.static('static'));

io.on('connection', function (socket) {

	socket.on('play', function (data) {
		console.log(data)
		io.sockets.emit('play', data);
	});

	socket.on('play-random', function (data){
		io.sockets.emit('play-random', data);
	})
});