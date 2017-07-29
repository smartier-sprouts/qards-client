import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, AppRegistry, Button, Picker, Switch, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class GameOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'Gin Straight',
      gameName: 'Small Ballers',
      isPublic: true
    };
    this.launchGame = this.launchGame.bind(this);
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

 launchGame() {
    const { navigate } = this.props.navigation;
    const gameType = this.state.game;
    const gameName = this.state.gameName;

    const requestNewGame = (newGameObj) => {
      fetch('https://qards.herokuapp.com/api/createGame', {
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(newGameObj)
      })
      .then( (response) => {
        return response.json();
      })
      .then((responseJson) => {
  console.log('Response from Server after new game create POST: ', responseJson);//
        navigate('PreGameArea', {
          gameId: responseJson.gameId,
          playerId: responseJson.player._id,
          turn: responseJson.player.turn,
          isCreator: true
        });
      })
      .catch((error) => { console.error('ERR Fetching for new game:', error); });
    };

    const createGame = () => {
      AsyncStorage.getItem('asyncUserObj')
                  .then( (data) => { return JSON.parse(data); })
                  .then( (userDataObj) => {
                      let newGameDataObj = {
                            type: gameType,
                            name: gameName,
                            public: true,
                            open: true,
                            complete: false,
                            winner: null,
                            owners: [{
                              name: userDataObj.firstName,
                              username: userDataObj.uID,
                              turn: 0
                            }]
                          };
                    return newGameDataObj;
                  })
                  .then( (gameDataObj) => { requestNewGame(gameDataObj); })
                  .catch( (err) => { console.error('Bad New Game Req:', err); });
    };

    createGame();
  }

  handleSwitchChange() {
    let isPublic = this.state.isPublic;
    this.setState({
      isPublic: !isPublic
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Game Options</Text>
        <View>
          <Text style={styles.smallTitle}>Games</Text>
          <View style={styles.pickerView}>
            <Picker
              selectedValue={this.state.game}
              onValueChange={(itemValue, itemIndex) => this.setState({ game: itemValue })}
              style={styles.picker}>
              <Picker.Item label="Gin Straight" value="Gin Straight" />
            </Picker>
          </View>
        </View>
        <View>
          <Text style={styles.smallTitle}>Enter Game Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => this.setState({ gameName: name })}
            value={this.state.gameName}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.smallTitle}>Public:</Text>
          <Switch
            onValueChange={this.handleSwitchChange}
            value={this.state.isPublic}
            onTintColor='chartreuse'
            tintColor='darkred'
          />
        </View>
        <Button
            color='darkviolet'
            onPress={this.launchGame}
            title="Launch Game"
          />
      </View>
      <KeyboardAvoidingView behavior={'padding'}>
      </KeyboardAvoidingView>
      </View>
    );
  }
}
