import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Lobby extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lobby</Text>
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
  }
});