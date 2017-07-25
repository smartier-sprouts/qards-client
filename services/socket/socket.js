import io from 'socket.io-client';
const api = require('../../setup/API-Destinations');


const socketStart = (gameId,cb) => {
  console.log('in socket start', gameId);
  const socket = io.connect(api.socketServer, {transports: ['websocket']});

  socket.emit('create', gameId);

  socket.on('join', (data) => {
    console.log(data); // 'G5p5...'
  });
  //
  socket.on('join', function (data) {
    console.log(data);
    //cb();
  });
  socket.on('playerJoin', function (data) {
    console.log('a new playerJoined!')
    console.log(data);
    //cb();
  });
  socket.on(gameId, function (data) {
    console.log('we got a message in gameId!!!')
    console.log(data);
  });

}

export default socketStart;
