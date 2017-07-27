import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';
import straight_gin_rules from '../assets/rules/rules_GinStraight.js';

export default class GinStraightRules extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Gin Straight Rules</Text>
        <ScrollView showsVerticalScrollIndicator= {true} >
          <Text style={{padding: 10, color:'white'}}>
            {straight_gin_rules}
          </Text>
        </ScrollView>
      </View>
    );
  }
}