let api = {};

api.main = 'https://qards.herokuapp.com/';
api.socketServer = 'https://qards.herokuapp.com/';

api.getHand =       api.main + '/api/getHand/';
api.checkDiscard =  api.main + '/api/discardChange/';
api.discard =       api.main + '/api/discard/';
api.pickUpCard =    api.main + '/api/drawCard/';

module.exports = api;