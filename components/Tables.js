import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class Tables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: 'Straight Gin',
      tables: ['A Game!']
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tables</Text>
          <View>
            <Text>Games</Text>
            <Picker
              selectedValue={this.state.game}
              onValueChange={(itemValue, itemIndex) => this.setState({ game: itemValue })}
              style={styles.picker}>
              <Picker.Item label="Straight Gin" value="Straight Gin" />
            </Picker>
            <Button
              onPress={() => navigate(this.state.game.split(' ').join('') + 'Rules')}
              title="Rules"
            />
          </View>
          <View>
            <Text>Join a {this.state.game} game</Text>
          </View>
          <Button
            onPress={() => navigate('Create')}
            title="Create a Game"
          />
      </View>
    );
  }
}