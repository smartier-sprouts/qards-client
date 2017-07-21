import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class PreGameArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      playerIds: []
    }
  }

  componentWillMount() {
    this.setState({
      gameId: this.props.navigation.state.params.gameId,
      playerIds: [this.props.navigation.state.params.playerId]
    }, () => console.log(this.state.gameId, this.state.playerIds));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Get Ready to Play</Text>
        <Button
            color='darkviolet'
            onPress={() => navigate('GameArea')}
            title="Start Game"
          />
      </View>
    );
  }
}