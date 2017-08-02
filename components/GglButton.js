import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import styles from '../styles/styles.js';
import gglLogin from '../services/googleExpoAuth.js';

export default class GglButton extends Component {
  render() {
    return (
      <TouchableHighlight 
        onPress={async () => {
            await alert('To use Google Login, you must have Google Chrome installed on your phone!');
            await gglLogin();
            this.props.chk();
          }}>
        <View style={styles.gglButton}>
          <Text style={styles.loginButtonText}>
            <Image source={require('../assets/icons/logo_google.png')} style={styles.loginLogo}/>
            Sign in with Google
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
} 

// 
