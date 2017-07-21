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
    fetch('/createGame', {
      method: 'POST',
      body: JSON.stringify({
        type: gameType,
        owners: [{
          name: 'Jake',
          username: 'WarriorsChamps',
          turn: 0
        }]
      })
    })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      navigate('PreGameArea', {
        gameId: responseJson.gameID,
        playerId: responseJson.playerId
      })
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
            onPress={() => navigate('PreGameArea', { gameId: 'winning', playerId: 'winning' })}
            title="Launch Game"
          />
      </View>
    );
  }
}