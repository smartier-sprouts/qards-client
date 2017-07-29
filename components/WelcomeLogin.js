import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button, Image } from 'react-native';
import styles from '../styles/styles.js';

import fbLogin from '../services/fbookExpoAuth.js';
import gglLogin from '../services/googleExpoAuth.js';

const frontPic = { uri: '../assets/frontPic.png' };

export default class WelcomeLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Image source={frontPic} style={{ width: 170, height: 202 }} />
          <Text style={{ styles.welcomeTitle; }}>
            Qards
          </Text>
        </View>
        <Button color='steelblue'
          onPress={ () => { fbLogin(); this.props.updateLogin(); } }
          title = "LOGIN WITH FACEBOOK"
        />
        <Button color='green'
          onPress={ () => {
            alert('Google Login Will Now Launch in Another Window');
            gglLogin();
            this.props.updateLogin();
          } }
          title="LOGIN WITH GOOGLE"
        />
      </View>
    );
  }
}
