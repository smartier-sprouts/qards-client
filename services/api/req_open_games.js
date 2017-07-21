/* API Calls TO Server */
let api = require('../setup/API-Destinations');

module.exports getOpenGames()=> {
  fetch(api.openGamesURL)
    .then((res) => { return res.json(); })
    .catch(console.error('BAD REQ For Open Games'));
};