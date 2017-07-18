import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Lobby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: 'Straight Gin'
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lobby</Text>
        <View>
          <Text>Games</Text>
          <Picker
            selectedValue={this.state.game}
            onValueChange={(itemValue, itemIndex) => this.setState({ game: itemValue })}
            style={styles.picker}>
            <Picker.Item label="Straight Gin" value="Straight Gin" />
          </Picker>
          {console.log('this.state.game: ', this.state.game)}
          <Button
            onPress={() => navigate('Rules', { game: this.state.game })}
            title="Rules"
          />
        </View>
        <View>
          <Text>Join a {this.state.game} game</Text>
            <Button
              onPress={() => navigate('RCTWebRCTDemo')}
              title="VIDEO TEST"
            />
        </View>
        <Button
          onPress={() => navigate('Create')}
          title="Create Game"
        />
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
