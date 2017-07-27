import api from '../../setup/API-Destinations.js';


var checkDiscard = function (gameId, callback) {
 setInterval(() => {
    fetch(api.checkDiscard + gameId)
      .then((res) => res.json())
      .then((data) => { 
    if (data) {
      callback(data)
    }
      }).catch((err) => {
        console.log(err)
      })
    }, 2000) 
}

module.exports = checkDiscard;