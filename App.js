import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Lobby from './components/Lobby.js';
import GameOptions from './components/GameOptions.js';
import StraightGinRules from './components/StraightGinRules.js';
import styles from './styles/styles.js';
import GameArea from './components/GameArea.js';

class Welcome extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Image
            style={{ width: 170, height: 202 }}
            source={require('./components/other-images/cards_PNG8479.png')}
          />
          <Text style={{ color: 'green', alignSelf: 'center', fontSize: 120, position: 'absolute' }}>Qards</Text>
        </View>
        <Button
          color='darkviolet'
          onPress={() => navigate('Lobby')}
          title="Let's Play"
        />
        <View>
          <Text style={{ color: 'white' }}>Login Button Goes Here</Text>
        </View>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: Welcome },
  Lobby: { screen: Lobby },
  GameOptions: { screen: GameOptions },
  StraightGinRules: { screen: StraightGinRules },
  GameArea: { screen: GameArea }
});


export default SimpleApp;