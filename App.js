import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Lobby from './components/Lobby.js';
import GameOptions from './components/GameOptions.js';
import GinStraightRules from './components/GinStraightRules.js';
import styles from './styles/styles.js';
import GameArea from './components/game/GameArea.js';
import PreGameArea from './components/PreGameArea.js';
const fbLogin = require('./services/fbookExpoAuth.js');
const gglLogin = require('./services/googleExpoAuth.js');

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
        <Button
          color='blue'
          onPress={
            () => {fbLogin();}
          }
          title="FACEBOOK LOGIN"
        />
        <Button
          color='green'
          onPress={
            () => {gglLogin();}
          }
          title="GOOGLE LOGIN"
          />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: Welcome },
  Lobby: { screen: Lobby },
  GameOptions: { screen: GameOptions },
  GinStraightRules: { screen: GinStraightRules },
  PreGameArea: { screen: PreGameArea },
  GameArea: { screen: GameArea }
});

export default SimpleApp;