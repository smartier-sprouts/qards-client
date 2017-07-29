import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import styles from '../styles/styles.js';

import fbLogin from '../services/fbookExpoAuth.js';
import gglLogin from '../services/googleExpoAuth.js';

export default class WelcomeLogin extends Component {
  render() {
    return (
      <View style={styles.bottomPart}>
          <Button color='steelblue'

            onPress={
                      async () => {
                      console.log('off to fBook login');//
                      await fbLogin();
                      this.props.chk();
                    }} // forceUpdate() ?
            title = "LOGIN WITH FACEBOOK"
          />
          <Button color='green'
            onPress={ async () => {
              await alert('To use Google Login, you must have Google Chrome installed on your phone!');
              await gglLogin();
              this.props.chk();
            } }
            title="LOGIN WITH GOOGLE"
          />
      </View>
    );
  }
}
