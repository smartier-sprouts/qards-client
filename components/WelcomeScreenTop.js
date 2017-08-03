import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import styles from '../styles/styles.js';
const frontPic = require('../assets/logo.png');

export default class WelcomeScreenTop extends React.Component {
  render() {
    return (
      <View style={styles.topPart}>
        {Platform.OS === 'ios'
        ? <Image source={ frontPic } style={{ width: 345, height: 195 }} />
        : <Image source={ frontPic } style={{ width: 300, height: 165 }} />}
      </View>
    );
  }
}