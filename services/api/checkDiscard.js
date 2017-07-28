import api from '../../setup/API-Destinations.js';


var checkDiscard = function (gameId, callback) {

  fetch(api.checkDiscard + gameId)
    .then((res) => res.json())
    .then((data) => {
  if (data) {
    callback(data)
  }
    }).catch((err) => {
      console.log(err)
    })

}

module.exports = checkDiscard;
