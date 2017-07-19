var socket = io();

  socket.on('connect', function () {

  console.log('connected to server');

      socket.emit('createEmail', {
        to:'jen@example.com',
        text:'Youre welcome!'

  });
});
    socket.on('disconnect', function () {

  console.log('disconnected from the server');
});
    socket.on('newEmail', function (email) {

  console.log('new email', email);
});
