import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import './setup/ReactotronConfig'; // <~~~ FOR DEBUGGING WITH REACTOTRON
import * as firebase from 'firebase';
import Keys from './config/Keys';

import Lobby from './components/Lobby.js';

import WelcomeScreenTop from './components/WelcomeScreenTop.js';
import WelcomeLogin from './components/WelcomeLogin.js';
import Spinner from './components/Spinner.js';

import verifyLoginStatus from './services/verifyLoginStatus.js';
import logout from './services/logout.js';

import styles from './styles/styles.js';
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, isWaitingForAsync: true };

    this.checkStatus = this.checkStatus.bind(this);
  }

  componentWillMount() { firebase.initializeApp(Keys.FIREBASE_CONFIG); }
  componentDidMount() { this.checkStatus(); }

  checkStatus() {
    verifyLoginStatus( this.necessaryCallback.bind(this) );
  }
  necessaryCallback(arg) { this.setState( {isWaitingForAsync: false, isLoggedIn: arg} ); }

  renderLoadingView() {
    return ( <View style={styles.bottomPart}><Text style={styles.smallTitle}>LOADING</Text><Spinner /></View>);
  }

  renderLoggedInView() {
    const { navigate } = this.props.navigation;
    return ( 
      <View style={styles.bottomPart}>
      <TouchableHighlight 
        onPress={() => navigate('Lobby')}
        underlayColor='transparent'
        activeOpacity={0.7}>
        <View style={styles.playButton}>
          <Text style={styles.playButtonText}>
            LET'S PLAY!
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight 
        onPress={() => {
          this.setState({isLoggedIn: false}, () => { logout(); }); 
          }}
        underlayColor='white'
        activeOpacity={0.7}>
        <View>
          <Text style={styles.logoutButton}>
            LOGOUT
          </Text>
        </View>
      </TouchableHighlight>
      </View>
    );
  }

  render() {
    return (
      <Image source={require('./assets/background.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <WelcomeScreenTop />
          {
            this.state.isRetrievingData ? this.renderLoadingView()
            : this.state.isLoggedIn ? this.renderLoggedInView()
            : <WelcomeLogin chk={this.checkStatus} />
          }
        </View>
      </Image>
    );
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

import GameOptions from './components/GameOptions.js';
import GinStraightRules from './components/GinStraightRules.js';
import { GameArea } from './components/game/GameArea.js';
import PreGameArea from './components/PreGameArea.js';

const SimpleApp = StackNavigator({
  Home: { screen: Welcome, navigationOptions: { header: null } },
  Lobby: { screen: Lobby, navigationOptions: { header: null } },
  GameOptions: { screen: GameOptions, navigationOptions: { header: null } },
  GinStraightRules: { screen: GinStraightRules, navigationOptions: { header: null } },
  PreGameArea: { screen: PreGameArea, navigationOptions: { header: null } },
  GameArea: { screen: GameArea, navigationOptions: { header: null } }
});

export default SimpleApp;