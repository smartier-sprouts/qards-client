import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class PreGameArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Get Ready to Play</Text>
        <Button
            color='darkviolet'
            onPress={() => navigate('GameArea')}
            title="Start Game"
          />
      </View>
    );
  }
}