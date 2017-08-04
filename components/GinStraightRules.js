import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, ScrollView, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';
import straight_gin_rules from '../assets/rules/rules_GinStraight.js';

export default class GinStraightRules extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image source={require('../assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.rulesContainer}> 
          <View style={styles.rulesTitleContainer}> 
            <Text style={styles.rulesTitle}>GIN STRAIGHT RULES</Text>
          </View>
          <ScrollView style={styles.rulesScrollView} showsVerticalScrollIndicator={true}>
            <Text style={styles.rulesBody}>{straight_gin_rules}</Text>
          </ScrollView>
        </View>
      </Image>
    );
  }
}