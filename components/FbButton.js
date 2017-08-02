import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import styles from '../styles/styles.js';
import fbLogin from '../services/fbookExpoAuth.js';

export default class FbButton extends Component {
  render() {
    return (
      <TouchableHighlight 
        onPress={async () => {
            console.log('off to fBook login');
            await fbLogin();
            this.props.chk();
          }}
        underlayColor='transparent'
        activeOpacity={0.7}>
        <View style={styles.fbButton}>
          <Text style={styles.loginButtonText}>
            <Image source={require('../assets/icons/logo_facebook.png')} style={styles.loginLogo}/>
            Sign in with Facebook
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}
