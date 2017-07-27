import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, AsyncStorage, AppRegistry, Button, Picker } from 'react-native';
import ReactNativeComponentTree from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativeComponentTree'; // <~~ Rich doesn't think this is necessary
import { StackNavigator } from 'react-navigation';

import api from '../setup/API-Destinations.js';
import GameList from './GameList.js';

import styles from '../styles/styles.js';

export default class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: 'Gin Straight',
      games: [],
      refreshing: false
    };
    this.onPressListItem = this.onPressListItem.bind(this);
    this.getOpenGames = this.getOpenGames.bind(this);
  }

  componentWillMount() {
    this.getOpenGames();
  }

  getOpenGames() {
    this.setState({refreshing: true});
    fetch('https://qards.herokuapp.com/api/games')
    .then((response) => { return response.json(); })
    .then((data) => {
      this.setState({games: data, refreshing: false});
    })
    .catch((error) => { console.error('Error updating available Games:', error); });
  }

  onPressListItem(game) {
    const { navigate } = this.props.navigation;
    const postToJoinGame = (joinGameObj) => {
      fetch( api.addPlayer, {
        headers: api.headers,
        method: 'POST',
        body: JSON.stringify(joinGameObj)
      })
      .then((response) => { return response.json(); })
      .then((responseJson) => {
          navigate('PreGameArea', {
            gameId: responseJson.gameId,
            playerId: responseJson.player._id,
            turn: responseJson.player.turn
          });
      })
      .catch( (error) => { console.error('Error Trying to join Existing Game:', error); });
    };

    const joinExistingGame = () => {
      AsyncStorage.getItem('asyncUserObj')
                    .then( (data) => { return JSON.parse(data); })
                    .then( (userData) => {
                      let postDataObj = {
                                          gameId: game._id,
                                          player: {
                                            name: userData.firstName,
                                            username: userData.uID
                                          }
                                        };
                      return postDataObj;
                    })
                    .then( (obj) => {
                      postToJoinGame(obj);
                    })
                    .catch( (err) => console.error('Error building a joinGameObject:', err) );
    };

    joinExistingGame();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lobby</Text>
          <View>
            <Text style={styles.smallTitle}>Games</Text>
            <View style={styles.pickerView}>
              <Picker
                selectedValue={this.state.game}
                onValueChange={(itemValue, itemIndex) => this.setState({ gameType: itemValue })}
                style={styles.picker}>
                <Picker.Item key={1} label="Gin Straight" value="Gin Straight" />
                <Picker.Item key={2} label="Rummy" value="Rummy" />
                <Picker.Item key={3} label="Blackjack" value="Blackjack" />
              </Picker>
            </View>
            <Button
              color='darkviolet'
              onPress={() => navigate(this.state.game.split(' ').join('') + 'Rules')}
              title="Rules"
            />
          </View>
          <View style={styles.listContainer}>
            <GameList
                games={this.state.games.filter(game => game.type === this.state.gameType)}
                onPressListItem={this.onPressListItem}
                refreshing={this.state.refreshing}
                onRefresh={this.getOpenGames}>
            </GameList>
          </View>
          <Button
            color='darkviolet'
            onPress={() => navigate('GameOptions')}
            title="Create a Game"
          />
      </View>
    );
  }
}