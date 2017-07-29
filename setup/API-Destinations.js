let api = {};

api.main = 'https://qards.herokuapp.com/';
api.socketServer = 'https://qards.herokuapp.com/';
api.addPlayer =     api.main + '/api/addPlayer';
api.getHand =       api.main + '/api/getHand/';
api.getOpenGames =  api.main + '/api/games';
api.checkDiscard =  api.main + '/api/discardChange/';
api.discard =       api.main + '/api/discard/';
api.pickUpCard =    api.main + '/api/drawCard/';
api.headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

module.exports = api;