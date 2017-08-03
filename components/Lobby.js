import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TextInput, AsyncStorage, AppRegistry, Button, Picker, TouchableHighlight, Image } from 'react-native';
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
    fetch(api.getOpenGames)
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
        .then(data => { return JSON.parse(data); })
        .then(userData => {
          let postDataObj = { 
            gameId: game._id,
            player: {
              name: userData.firstName,
              username: userData.uID
            }
          };
          return postDataObj;
        })
        .then(obj => { postToJoinGame(obj); })
        .catch(err => console.error('Error building a joinGameObject:', err) );
    };

    joinExistingGame();
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(Platform);
    return (
      <Image source={require('../assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>LOBBY</Text>
          <View style={styles.gameTypesContainer}>
            <Text style={styles.smallTitle}>GAME TYPES</Text>
            <Picker
              selectedValue={this.state.gameType}
              onValueChange={itemValue => this.setState({ gameType: itemValue })}
              style={styles.gameTypesPicker} >
              <Picker.Item style={{textColor: 'white'}} key={1} label="Gin Straight" value="Gin Straight" />
              <Picker.Item style={{textColor: 'white'}} key={2} label="War" value="War" />
              <Picker.Item style={{textColor: 'white'}} key={3} label="Bluffshtop" value="Bluffshtop" />
            </Picker>
            <Button
              style={styles.rulesButton}
              onPress={() => navigate(this.state.gameType.split(' ').join('') + 'Rules')}
              title="Rules"
            />
          </View>
          <View style={styles.lowerGamesSection}>
            <View style={styles.listContainer}>
              <Text style={styles.smallTitle}>AVAILABLE GAMES</Text>
              <GameList
                games={this.state.games.filter(game => game.type === this.state.gameType)}
                onPressListItem={this.onPressListItem}
                refreshing={this.state.refreshing}
                onRefresh={this.getOpenGames}>
              </GameList>
            </View>
            <TouchableHighlight 
              underlayColor='transparent'
              activeOpacity={0.7}
              style={styles.createButtonContainer} 
              onPress={() => navigate('GameOptions')}>
              <View style={styles.createButton}>
                <Text style={styles.createButtonText}>CREATE A GAME</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Image>
    );
  }
}
