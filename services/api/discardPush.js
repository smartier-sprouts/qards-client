import api from '../../setup/API-Destinations.js';

var discardPush = function (gameId, playerId, discardCardid, callback) {
  fetch(api.discard + gameId + '/' + playerId + '/' + discardCardid)
    .then((res) => res.json())
    .then((data) => { callback(data); })
    .catch((err) => { console.error(err); });
  };

module.exports = discardPush;