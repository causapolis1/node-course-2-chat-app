const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user');

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  io.emit('newMessage', {
    from: message.from,
    text: message.text,
    createAt: new Date().getTime()
  });
});


  socket.on('disconnect', () => {
  console.log('user was disconnected');

  });

});

app.use(express.static(publicPath));
server.listen(port, () => {
    console.log(`Server is up on port 3000 ${port}`);

});
