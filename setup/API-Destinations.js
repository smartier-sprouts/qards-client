let api = {};
<<<<<<< 113c4e8ae8cb58ce39ef843f53f8a6460d393e51
=======
api.socketServer = 'http://10.6.67.239:3000/';
api.getHand = 'http://10.6.67.239:3000/api/getHand/';
api.checkDiscard = 'http://10.6.67.239:3000/api/discardChange/';
api.discard = 'http://10.6.67.239:3000/api/discard/';
api.pickUpCard = 'http://10.6.67.239:3000/api/drawCard/';

>>>>>>> pregame lobby player count updates w/ sockets

api.main = 'https://qards.herokuapp.com/';
api.socketServer = 'https://qards.herokuapp.com/';
api.addPlayer =     api.main + 'api/addPlayer';
api.getHand =       api.main + 'api/getHand/';
api.getOpenGames =  api.main + 'api/games';
api.checkDiscard =  api.main + 'api/discardChange/';
api.discard =       api.main + 'api/discard/';
api.pickUpCard =    api.main + 'api/drawCard/';
api.headers = { Accept: 'application/json', 'Content-Type': 'application/json' };

module.exports = api;