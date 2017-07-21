let api = {};
    api.server       = 'https://qards.herokuapp.com/api/';
    api.openGamesURL = api.server + 'games';
    api.newGameURL   = api.server + 'createGame';
    api.headers      = {Accept: 'application/json', 'Content-Type': 'application/json'};
    // api.roomURL      = api.server + '/' + roomID + '/' + userID;

module.exports = api;