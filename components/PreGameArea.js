import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';
import socketStart from '../services/socket/socket.js';

export default class PreGameArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      playerId: '',
      isCreator: false,
      numberOfPlayers: this.props.navigation.state.params.turn + 1,
      turn: -1
    };

    this.createGame = this.createGame.bind(this);
  }

  componentWillMount() {
    const { navigate } = this.props.navigation;
    this.setState({
      gameId: this.props.navigation.state.params.gameId,
      playerId: this.props.navigation.state.params.playerId,
      turn: this.props.navigation.state.params.turn
    }, () => {
      if (this.props.navigation.state.params.isCreator) {
        this.setState({
          isCreator: this.props.navigation.state.params.isCreator
        });
      }
    });
  }

  componentDidMount() {
    const { navigate } = this.props.navigation;
    socketStart(this.state.gameId, (count)=> {
      this.setState({numberOfPlayers: count});
    }, () => {
         fetch('https://qards.herokuapp.com/api/hasStarted/' + this.state.gameId)
         .then(response => { return response.json(); })
         .then(responseJson => {
           if (responseJson) {
             navigate('GameArea', {
               gameId: this.state.gameId,
               playerId: this.state.playerId,
               turn: this.state.turn
             });
           } else {
             console.log('no responseJson');
           }
         })
         .catch(error => console.error(error));
      });
    }

  createGame() {
    const { navigate } = this.props.navigation;
    let gameId = this.state.gameId;
    let playerId = this.state.playerId;
    let turn = this.state.turn;
    fetch('https://qards.herokuapp.com/api/dealCards/' + gameId)
    // .then((response) => {
    //   navigate('GameArea', {
    //     gameId: gameId,
    //     playerId: playerId,
    //     turn: turn
    //   });
    // })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <Image source={require('../assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.preGameContainer}>
          <Text style={styles.preGameTitle}>
          GET READY TO PLAY
          </Text>
          <Text style={styles.preGameLine}>
          ___________________
          </Text>
          <Text style={styles.preGameSubtitle}>NUMBER OF PLAYERS:</Text>
          <Text style={styles.preGameNumber}>{this.state.numberOfPlayers}</Text>
          {this.state.isCreator 
          ? <Button
              color='red'
              onPress={this.createGame}
              title="START GAME"
            /> 
          : <View style={styles.waitingContainer}>
              <Text style={styles.waitingText}>
                WAITING FOR CREATOR
              </Text>
              <Text style={styles.waitingText}>
                TO PRESS START...
              </Text>
            </View>
          }
        </View>
      </Image>
    );
  }
}

/*
The TouchableHighlight portion of this code does not work for reasons unknown to me
<Image source={require('../assets/background.png')} style={styles.backgroundImage}>
  <View style={styles.container}>
    <Text style={styles.title}>GET READY TO PLAY</Text>
    <Text style={styles.smallTitle}>Number of players: {this.state.numberOfPlayers}</Text>
    {this.state.isCreator ? <TouchableHighlight 
        onPress={this.createGame}
        underlayColor='transparent'
        activeOpacity={0.7}>
        <View style={styles.startButton}>
          <Text style={styles.startButtonText}>
            START GAME
          </Text>
        </View>
      </TouchableHighlight> : null}
  </View>
</Image>
*/
