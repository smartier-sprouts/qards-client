import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Lobby from './components/Lobby.js';


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
          <Text>Login</Text>
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
});


export default SimpleApp;