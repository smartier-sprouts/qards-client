import io from 'socket.io-client';
import { runCheckDiscard } from '../../components/game/GameArea.js';
const api = require('../../setup/API-Destinations');

const socketStart = (gameId, cb, cb2) => {
  const socket = io.connect(api.socketServer, {transports: ['websocket']});
  let hasGameStarted = false;
  // socket.emit('create', gameId);
  socket.on(gameId, function (data) {
    if (data.checkDiscard) {
      runCheckDiscard();
    } else if (data.players) {
      cb(data.players);
    } else if (data.gameStarted) {
      if (!hasGameStarted) {
        cb2();
        hasGameStarted = true;
      }
    }
  });
};

export default socketStart;