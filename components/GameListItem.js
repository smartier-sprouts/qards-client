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
      <View>
        <Text onPress={this.props.onPressListItem} style={{ fontSize: 16, color: 'blue', textDecorationLine: 'underline' }}>{this.props.game.name}</Text>
        <Text style={{ fontSize: 16, color: 'white' }}>created by {this.props.game.owners[0].name} with {this.props.game.owners.length} players in waiting room</Text>
      </View>
    );
  }
}