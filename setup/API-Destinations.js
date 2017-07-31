let api = {};

api.main = 'http://10.6.67.239:3000/';
api.socketServer = 'http://10.6.67.239:3000/';
api.addPlayer =     api.main + 'api/addPlayer';
api.getHand =       api.main + 'api/getHand/';
api.getOpenGames =  api.main + 'api/games';
api.checkDiscard =  api.main + 'api/discardChange/';
api.discard =       api.main + 'api/discard/';
api.pickUpCard =    api.main + 'api/drawCard/';
api.headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

module.exports = api;
