import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
          <Button color='steelblue'
            title = "LOGIN WITH FACEBOOK"
            style = {{ fontSize: 90 }}
            onPress = {
              async () => {
                await fbFirebaseAuth();
                this.props.chk();
              }
            }
          />
      </View>
    );
  }
}
