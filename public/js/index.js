var socket = io();

  socket.on('connect', function () {
    console.log('connected to server');

      socket.emit('createMessage', {
        from:'Matheus',
        text:'It works!'

  });
});
    socket.on('disconnect', function () {
      console.log('disconnected from the server');
});
    socket.on('newMessage', function (message) {
      console.log('newMessage', message);
});
