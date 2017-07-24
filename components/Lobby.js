import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';
import ReactNativeComponentTree from 'react-native/Libraries/Renderer/src/renderers/native/ReactNativeComponentTree';
import GameListItem from './GameListItem.js';

export default class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'Gin Straight',
      games: [],
      name: null,
      uID: null,
      username: null
    },
    this.onPressListItem = this.onPressListItem.bind(this);
  }

  componentWillMount() {
    AsyncStorage.getItem('asyncUserObj')
                .then( (storeObj) => { return storeObj ? JSON.parse(storeObj) : {};  })
                .then( (data) => {
                  this.setState( { name: data.firstName, uID: data.uID, username: data.uID });
                })
                .catch( (err) => console.error(err) );

    fetch('https://qards.herokuapp.com/api/games')
    .then((response) => { return response.json(); })
    .then((data) => { this.setState({games: data }); })
    .catch((err) => { console.error(err); });
  }


  onPressListItem(e) {
    const { navigate } = this.props.navigation;
    let selectedGameName = ReactNativeComponentTree.getInstanceFromNode(e.nativeEvent.target)._stringText;
    let selectedGame = this.state.games.find((game) => game.name === selectedGameName);
    console.log(selectedGame);
    if (selectedGame !== undefined) {
      // joinGame()
      let data = {
        gameId: selectedGame._id,
        player: {
          name: this.state.name,
          username: this.state.uID,
          uID: this.state.uID
        }
      };

      fetch('https://qards.herokuapp.com/api/addPlayer', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then((response) => {return response.json(); })
      .then((responseJson) => {
        navigate('PreGameArea', {
          gameId: responseJson.gameId,
          playerId: responseJson.player.id
        });
      })
      .catch((err) => { console.error(err); });
    }
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
              onValueChange={(itemValue, itemIndex) => this.setState({ game: itemValue })}
              style={styles.picker}>
              <Picker.Item label="Gin Straight" value="Gin Straight" />
            </Picker>
            </View>
            <Button
              color='darkviolet'
              onPress={() => navigate(this.state.game.split(' ').join('') + 'Rules')}
              title="Rules"
            />
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'white', textDecorationLine: 'underline' }}>Join a Table Playing the Selected Game</Text>
            { this.state.games.filter((game) => game.type === this.state.game).map((game, i) => i < 3 ? <GameListItem game={game} key={i} onPressListItem={this.onPressListItem}/> : null) }
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