import api from '../../setup/API-Destinations.js';


var pickDiscard = function (gameId, playerId, callback) {
  fetch(api.pickUpCard + gameId + '/' + playerId + '/Discard')
    .then((res) => {
      return res.json()
    })
    .then((data) => { 
    callback(data)
   }).catch((err) => {
      console.log(err)
    })
}

module.exports = pickDiscard;