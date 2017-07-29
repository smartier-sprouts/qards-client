import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

import styles from '../styles/styles.js';
const frontPic = require('../assets/frontPic.png');

export default class WelcomeScreenTop extends React.Component {
  render() {
    return (
        <View style={styles.topPart}>
          <Image source={ frontPic } style={{ width: 170, height: 202 }} />
          <Text style={styles.welcomeTitle}> Qards </Text>
        </View>
    );
  }
}