import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
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
      numberOfPlayers: 1
    }

    this.createGame = this.createGame.bind(this);
  }

  componentWillMount() {
    this.setState({
      gameId: this.props.navigation.state.params.gameId,
      playerId: this.props.navigation.state.params.playerId
    }, () => console.log('this is game & player', this.state.gameId, this.state.playerId));
    if (this.props.navigation.state.params.isCreator) {
      this.setState({
        isCreator: this.props.navigation.state.params.isCreator
      }, () => console.log(this.state.isCreator));
    }
  }

  componentDidMount() {
    socketStart(this.state.gameId, () => { this.setState(pre,{playerId: pre.playerId+1}) } ) ;
  }

  createGame() {
    const { navigate } = this.props.navigation;
    let gameId = this.state.gameId;
    let playerId = this.state.playerId;
    fetch('https://qards.herokuapp.com/api/dealCards/' + gameId)
    .then((response) => {
      navigate('GameArea', {
        gameId: gameId,
        playerId: playerId
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Get Ready to Play</Text>
        <Text style={styles.smallTitle}>Number of players: {this.state.numberOfPlayers}</Text>
        {this.state.isCreator ? <Button
            color='darkviolet'
            onPress={this.createGame}
            title="Start Game"
          /> : null}
      </View>
    );
  }
}
