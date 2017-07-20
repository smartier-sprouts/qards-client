import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class Tables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: 'Straight Gin',
      tables: [{ type: 'Straight Gin', name: 'A Game!' }, { type: 'Straight Gin', name: 'Another Game!' }]
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
              <Picker.Item label="Straight Gin" value="Straight Gin" />
            </Picker>
            </View>
            <Button
              color='darkviolet'
              onPress={() => navigate(this.state.game.split(' ').join('') + 'Rules')}
              title="Rules"
            />
          </View>
          <View>
            <Text style={styles.smallTitle}>Join a {this.state.game} Game</Text>
            { this.state.tables.filter((table) => table.type === this.state.game).map((table, i) => <Text style={{ fontSize: 16, color: 'white' }} key={i}>{table.name}</Text>) }
          </View>
          <Button
            color='darkviolet'
            onPress={() => navigate('Create')}
            title="Create a Game"
          />
      </View>
    );
  }
}