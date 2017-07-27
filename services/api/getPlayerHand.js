import api from '../../setup/API-Destinations.js';


var getPlayerHand = function (gameId, playerId, callback) {
  fetch(api.getHand + gameId + '/' + playerId)
      .then((res) => res.json())
      .then((data) => { 
    if (data) {
      callback(data)
    }
      }).catch((err) => {
        console.log(err)
      })
  
}

module.exports = getPlayerHand;