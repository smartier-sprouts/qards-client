import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class GameListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text onPress={this.props.onPressListItem} style={{ fontSize: 16, color: 'aqua', textDecorationLine: 'underline' }}>{this.props.game.name}</Text>
        <Text style={{ fontSize: 16, color: 'white' }}>  creator: {this.props.game.owners[0].name}  players: {this.props.game.owners.length}</Text>
      </View>
    );
  }
}