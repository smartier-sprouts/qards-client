import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import styles from '../styles/styles.js';

import fbFirebaseAuth from '../services/fbFirebaseAuth.js';

export default class WelcomeLogin extends Component {
  render() {
    return (
      <View style={styles.bottomPart}>
          <Button color='steelblue'
            style={{ fontSize: 90 }}
            onPress={
                      async () => {
                      console.log('off to fBook login');//
                      await fbFirebaseAuth();
                      this.props.chk();
                    }} // forceUpdate() ?
            title = "LOGIN WITH FACEBOOK"
          />
      </View>
    );
  }
}
