import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class Lobby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: 'Gin Straight',
      games: []
    }
  }

  componentWillMount() {
    fetch('https://qards.herokuapp.com/api/games')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        games: data
      });
    })
    .catch((error) => {
      console.error(error);
    });
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
          <View>
            <Text style={styles.smallTitle}>Join a {this.state.game} Game</Text>
            { this.state.games.filter((game) => game.type === this.state.game).map((game, i) => <Text onPress={(yes, no) => console.log(no)} style={{ fontSize: 16, color: 'blue', textDecorationLine: 'underline' }} key={i} index={i}>{game.name}: created by {game.owners[0].name} with {game.owners.length} players</Text>) }
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