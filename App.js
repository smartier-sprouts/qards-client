import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Tables from './components/Tables.js';
import Create from './components/Create.js';
import StraightGinRules from './components/StraightGinRules.js';
import styles from './styles/styles.js';
import GameArea from './components/gameArea/GameArea.js';

class Welcome extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <View style={styles.homePageDisplay}>
          <Text style={{ color: 'white' }}>Qards</Text>
        </View>
        <Button
          onPress={() => navigate('Tables')}
          title="Let's Play"
        />
        <View>
          <Text>Login Button Goes Here</Text>
        </View>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: Welcome },
  Tables: { screen: Tables },
  Create: { screen: Create },
  StraightGinRules: { screen: StraightGinRules },
  GameArea: { screen: GameArea }
});


export default SimpleApp;
