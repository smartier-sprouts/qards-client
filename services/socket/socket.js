import io from 'socket.io-client';
const api = require('../../setup/API-Destinations');

export default socketStart = (gameId,cb) => {
  const socket = io.connect(api.socketServer, {transports: ['websocket']});
  console.log('lol in socket start');
  console.log('game id is: ', gameId);
  socket.emit('create', gameId);

  socket.on('join', (data) => {
    console.log(data); // 'G5p5...'
  });
  //
  socket.on(gameId, function (data) {
    console.log(data);
    cb();
  });
  // socket.on('time', function (data) {
  //   console.log(data);
  // });

}
