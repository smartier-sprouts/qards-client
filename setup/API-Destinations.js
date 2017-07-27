let api = {};
    api.server       = 'https://qards-pr-15.herokuapp.com/api/';
    api.openGamesURL = api.server + 'games';
    api.newGameURL   = api.server + 'createGame';
    api.headers      = {Accept: 'application/json', 'Content-Type': 'application/json'};
    // api.roomURL      = api.server + '/' + roomID + '/' + userID;
    api.socketServer = 'https://qards-pr-15.herokuapp.com/';
    api.getHand = 'https://qards.herokuapp.com/api/getHand/';
    api.checkDiscard = 'https://qards.herokuapp.com/api/discardChange/';
    api.discard = 'https://qards.herokuapp.com/api/discard/';
    api.pickUpCard = 'https://qards.herokuapp.com/api/drawCard/';

module.exports = api;
