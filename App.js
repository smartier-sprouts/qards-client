import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Lobby from './components/Lobby.js';
import Create from './components/Create.js';
import Rules from './components/Rules.js';
import RCTWebRCTDemo from './components/RCTWebRTCDemo.js';


class Welcome extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.display}>
          <Text style={styles.nameText}>Qards</Text>
        </View>
        <Button
          onPress={() => navigate('Lobby')}
          title="Let's Play"
        />
        <View>
          <Text>Login Button Goes Here</Text>
          <Button
            onPress={() => navigate('RCTWebRCTDemo')}
            title="VIDEO TEST"
          />
        </View>
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
  display: {
    height: 150,
    width: 150,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    color: 'white',
  },
  title: {
    fontSize: 24
  }
});

const SimpleApp = StackNavigator({
  Home: { screen: Welcome },
  Lobby: { screen: Lobby },
  Create: { screen: Create },
  Rules: { screen: Rules },
  RCTWebRCTDemo: { screen: RCTWebRCTDemo },
});


export default SimpleApp;
