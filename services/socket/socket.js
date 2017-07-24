import io from 'socket.io-client';
const api = require('../../setup/API-Destinations');
const socket = io.connect(api.socketServer, {transports: ['websocket']});


const socketStart = (gameId,cb) => {
  console.log(gameId);
  // console.log('lol in socket start');
  // console.log('game id is: ', gameId);
  // socket.emit('create', gameId);
  //
  // socket.on('join', (data) => {
  //   console.log(data); // 'G5p5...'
  // });
  // //
  // socket.on('join', function (data) {
  //   console.log(data);
  //   //cb();
  // });
  // socket.on(gameId, function (data) {
  //   console.log(data);
  // });

}

export default socketStart;
