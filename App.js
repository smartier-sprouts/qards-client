import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, AppRegistry, Button, Picker, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Lobby from './components/Lobby.js';
import GameOptions from './components/GameOptions.js';
import GinStraightRules from './components/GinStraightRules.js';
import styles from './styles/styles.js';
import GameArea from './components/game/GameArea.js';
import PreGameArea from './components/PreGameArea.js';

import verifyUserStatus from './services/verifyUserStatus.js';
import fbLogin from './services/fbookExpoAuth.js';
import gglLogin from './services/googleExpoAuth.js';
import logout from './services/logout.js';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: verifyUserStatus()
    };
  }

  render() {
      const { navigate } = this.props.navigation;

    if (this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
           <View style={{ justifyContent: 'center' }}>
            <Image style={{ width: 170, height: 202 }}
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
            color='red'
            onPress={() => { this.setState({isLoggedIn: false}, () => {logout();} ); } }
            title="Logout"
          />

        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={{ justifyContent: 'center' }}>
            <Image style={{ width: 170, height: 202 }}
              source={require('./components/other-images/cards_PNG8479.png')}
            />
            <Text style={{ color: 'green', alignSelf: 'center', fontSize: 120, position: 'absolute' }}>Qards</Text>
          </View>

          <Button
            color='steelblue'
            onPress={
              () => { fbLogin(); this.setState({isLoggedIn: verifyUserStatus()}) }
            }
            title="LOGIN WITH FACEBOOK"
          />
          <Button
            color='green'
            onPress={
              () => {gglLogin(); this.setState({isLoggedIn: verifyUserStatus()}) }
            }
            title="LOGIN WITH GOOGLE"
          />
        </View>
      );
    }
  }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const SimpleApp = StackNavigator({
  Home: { screen: Welcome },
  Lobby: { screen: Lobby },
  GameOptions: { screen: GameOptions },
  GinStraightRules: { screen: GinStraightRules },
  PreGameArea: { screen: PreGameArea },
  GameArea: { screen: GameArea }
});

export default SimpleApp;