import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class GameOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'straight gin',
      players: '2'
    }
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
              <Picker.Item label="Straight Gin" value="straight gin" />
            </Picker>
          </View>
        </View>
        <View>
          <Text style={styles.smallTitle}>Number of Players</Text>
          <View style={styles.pickerView}>
            <Picker
              selectedValue={this.state.players}
              onValueChange={(itemValue, itemIndex) => this.setState({ players: itemValue })}
              style={styles.picker}>
              <Picker.Item label="2" value="2" />
            </Picker>
          </View>
        </View>
        <Button
            color='darkviolet'
            onPress={() => navigate('GameArea')}
            title="Launch Game"
          />
      </View>
    );
  }
}