import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from '../styles/styles.js';

import logout from '../services/logout.js';

const frontPic = { uri: '../assets/frontPic.png' };

export default class WelcomeOK extends Component {
  render() {
    return (<View style={styles.container}>
      <View style={{ justifyContent: 'center' }}>
        <Image source={frontPic} style={{ width: 170, height: 202 }} />
        <Text style={{ color: 'green', alignSelf: 'center', fontSize: 120, position: 'absolute' }}>
          Qards
        </Text>
      </View>
      <Button color='darkviolet'
        onPress={ () => this.props.nav('Lobby') }
        title="Let's Play"
      />
      <Button color='red'
        onPress={ () => {
            logout();
            this.props.updateLogin();
          }
        }
        title="Logout"
      />
    </View>);
  }
}