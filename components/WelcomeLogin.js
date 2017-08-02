import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import fbFirebaseAuth from '../services/fbFirebaseAuth.js';
import Spinner from './Spinner.js';
import styles from '../styles/styles.js';

export default class WelcomeLogin extends Component {
  constructor(props){
    super(props);
    this.state = {isDoingBackgroundStuff: false}
  }

  render() {
    return (
      <View style={styles.bottomPart}>
        <TouchableHighlight 
          underlayColor='transparent'
          activeOpacity={0.7}
          onPress={
            async () => {
              await fbFirebaseAuth();
              this.props.chk();
            }}
          >
          <View style={styles.fbButton}>
            <Image source={require('../assets/icons/logo_facebook.png')} style={styles.loginLogo}/>
            <Text style={styles.loginButtonText}>
              Sign in with Facebook
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
