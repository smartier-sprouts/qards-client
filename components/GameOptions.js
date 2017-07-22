import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class GameOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'Gin Straight',
      players: '2'
    }
    this.launchGame = this.launchGame.bind(this);
  }

  launchGame() {
    const { navigate } = this.props.navigation;
    let gameType = this.state.game;
    fetch('https://qards.herokuapp.com/api/createGame', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        type: gameType,
        name: 'Big Ballers',
        public: true,
        open: true,
        complete: false,
        winner: null,
        owners: [{
          name: 'Jake',
          username: 'WarriorsChamps',
          turn: 0
        }]
      })
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson);
      navigate('PreGameArea', {
        gameId: responseJson.gameId,
        playerId: responseJson.playerId,
        isCreator: true
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
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
        <Button
            color='darkviolet'
            onPress={this.launchGame}
            title="Launch Game"
          />
      </View>
    );
  }
}