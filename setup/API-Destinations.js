let api = {};
    api.server       = 'https://qards.herokuapp.com/api/';
    api.openGamesURL = api.server + 'games';
    api.newGameURL   = api.server + 'createGame';
    api.headers      = {Accept: 'application/json', 'Content-Type': 'application/json'};
    // api.roomURL      = api.server + '/' + roomID + '/' + userID;
    api.socketServer = 'https://qards-pr-10.herokuapp.com/'


module.exports = api;
