import api from '../../setup/API-Destinations.js';


var pickDraw = function (gameId, playerId, callback) {
  fetch(api.pickUpCard + gameId + '/' + playerId + '/Draw')
    .then((res) => res.json())
    .then((data) => { 
    callback(data)
   }).catch((err) => {
      console.log(err)
  })
}

module.exports = pickDraw;