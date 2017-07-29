import io from 'socket.io-client';
import { runCheckDiscard } from '../../components/game/GameArea.js';
const api = require('../../setup/API-Destinations');



const socketStart = (gameId,cb) => {
  console.log('in socket start', gameId);
  const socket = io.connect(api.socketServer, {transports: ['websocket']});

  socket.emit('create', gameId);

  socket.on('join', (data) => {
    console.log(data); // 'G5p5...'
  });
  //
  socket.on('time', function (data) {
    console.log(data);
     //cb();
  });
  socket.on('playerJoin', function (data) {
    console.log('a new playerJoined!')
    console.log(data);
    //cb();
  });
  socket.on(gameId, function (data) {
    console.log('we got a message in gameId!!!', data)
    if (data.checkDiscard) {
        runCheckDiscard();
    };
  });

}

export default socketStart;
