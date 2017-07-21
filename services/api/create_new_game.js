/* Theoretical possible API Calls TO Server for creating a new Game*/
let api = require('../setup/API-Destinations');

const makeNewGame = function(gameType, userID ){
  let bodyData = JSON.stringify( { type: gameType, userID: userID } );

  fetch(api.newGameURL, {
      headers: api.headers,
      method: 'POST',
      body: bodyData
  })
  .then((response) => {
    const newGame = response.json();
    console.log(newGame);
    navigate('PreGameArea', {
      room: newGame.room,
      playerId: newGame.playerId
    })
    .catch((error) => {
      console.error(error);
    });
  }
};

module.exports = makeNewGame;