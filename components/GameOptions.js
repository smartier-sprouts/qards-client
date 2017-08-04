import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, AppRegistry, Button, Picker, Switch, KeyboardAvoidingView, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class GameOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'Gin Straight',
      gameName: '',
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
      <Image source={require('../assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.container}> 
          <Text style={styles.title}>GAME OPTIONS</Text>
            <View style={styles.createGameData}>
            </View>    
              <Text style={styles.smallTitle}>GAME TYPES</Text>
              <View style={styles.gameOptionsGameTypesContainer}>
                <Picker
                  selectedValue={this.state.game}
                  onValueChange={(itemValue, itemIndex) => this.setState({game: itemValue})}
                  style={styles.gameOptionsGameTypesPicker}>
                  <Picker.Item label="Gin Straight" value="Gin Straight" />
                  <Picker.Item label="Blackjack" value="Blackjack" />
                  <Picker.Item label="Rummy" value="Rummy" />
                </Picker>
              </View>
            </View>
          <View>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder='ENTER GAME NAME'
              placeholderTextColor='white'
              underlineColorAndroid='white'
              tintColor='transparent'
              style={styles.textInput}
              onChangeText={(name) => this.setState({ gameName: name })}
              value={this.state.gameName}
            />
          </View>
          <View style={styles.publicStatusAndSwitch}>
            <Text style={styles.publicStatusText}>{this.state.isPublic ? 'PUBLIC GAME' : 'PRIVATE GAME'}</Text>
            <Switch
              onValueChange={this.handleSwitchChange}
              value={this.state.isPublic}
              onTintColor='chartreuse'
              tintColor='darkred'
            />
          </View>
            <TouchableHighlight 
              underlayColor='transparent'
              activeOpacity={0.7}
              style={styles.launchButtonContainer} 
              onPress={this.launchGame}>
              <View style={styles.launchButton}>
                <Text style={styles.launchButtonText}>LAUNCH GAME</Text>
              </View>
            </TouchableHighlight>
        </View>
        <KeyboardAvoidingView behavior={'padding'}>
        </KeyboardAvoidingView>
      </Image>
    );
  }
}
