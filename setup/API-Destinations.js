let api = {
  const serverURL = 'https://qards.herokuapp.com/api/';
  const openGamesURL = serverURL + 'games';
  const newGameURL = serverURL + 'createGame';
  const roomURL = server + '/' + roomID + '/' + userID;
  const headers = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                    };

}
module.exports = api;