import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'straight gin',
      players: '2'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Game Options</Text>
        <View>
          <Text>Games</Text>
          <Picker
            selectedValue={this.state.game}
            onValueChange={(itemValue, itemIndex) => this.setState({ game: itemValue })}
            style={styles.picker}>
            <Picker.Item label="Straight Gin" value="straight gin" />
          </Picker>
        </View>
        <View>
          <Text>Number of Players</Text>
          <Picker
            selectedValue={this.state.players}
            onValueChange={(itemValue, itemIndex) => this.setState({ players: itemValue })}
            style={styles.picker}>
            <Picker.Item label="2" value="2" />
          </Picker>
        </View>
        <Text>Button to launch game here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  },
  picker: {
    width: 150
  }
});