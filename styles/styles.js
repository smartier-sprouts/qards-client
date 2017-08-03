import { Platform, StyleSheet } from 'react-native';
import { PixelRatio } from 'react';
import { Constants } from 'expo';
import { normalize, normalizeFont } from './normalize.js';
const {width, height} = require('Dimensions').get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  topPart: {
    flex: 1.25,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 85
  },

  bottomPart: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 125
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: (Platform.OS === 'ios') ? 'contain' : 'stretch'
  },

  loginButtonText: {
    justifyContent: 'space-around',
    fontSize: (Platform.OS === 'ios') ? normalizeFont(3.5) : normalizeFont(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  loginLogo: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 5
  },

  fbButton: {
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    borderWidth: 20,
    borderRadius: 30,
    borderColor: '#3b5998',
    height: (Platform.OS === 'ios') ? normalizeFont(7) : normalizeFont(5.5),
    width: (Platform.OS === 'ios') ? normalize(240) : normalize(250),
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-end'
  },

  gglButton: {
    backgroundColor: '#3F82F8',
    borderWidth: 20,
    borderRadius: 30,
    borderColor: '#3F82F8',
    height: 50,
    width: 325,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },

  logoutButton: {
    paddingTop: 50,
    fontSize: normalizeFont(3),
    color: 'white'
  },

  title: {
    flex: .8,
    paddingTop: 40,
    paddingBottom: (Platform.OS === 'ios') ? 10 : 30,
    fontWeight: 'bold', 
    fontSize: (Platform.OS === 'ios') ? normalizeFont(5.5) : normalizeFont(5),
    justifyContent: 'flex-start',
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: (Platform.OS === 'ios') ? '200' : '100'
  },

  frontPic: {
    width: (Platform.OS === 'ios') ? normalize(290) : normalize(310),
    height: (Platform.OS === 'ios') ? normalize(170) : normalize(180)
  },

  smallTitle: {
    fontSize: normalizeFont(2.2),
    justifyContent: 'flex-end',
    alignSelf: 'center',
    color: 'white',
    paddingTop: normalize(0),
    paddingBottom: normalize(25),
    backgroundColor: 'transparent'
  },

  item: {
    padding: 10,
    fontSize: normalizeFont(2.5),
    height: 100,
  },

  gameTypesContainer: {
    flex: (Platform.OS === 'ios') ? normalize(3) : normalize(2),
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  },

  gameTypesPicker: {
    flex: (Platform.OS === 'ios') ? 2 : .33,
    flexDirection: 'column-reverse',
    width: (Platform.OS === 'ios') ? 150 : 150,
    backgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white'
  },

  gameOptionsGameTypesContainer: {
    flex: (Platform.OS === 'ios') ? normalize(2.5) : normalize(.5),
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  },

  gameOptionsGameTypesPicker: {
    flex: (Platform.OS === 'ios') ? 2 : .33,
    flexDirection: 'column-reverse',
    width: (Platform.OS === 'ios') ? 150 : 150,
    backgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white'
  },

  rulesButton: {
    alignSelf: 'flex-end',
    color: 'white',
    borderWidth: 2
  },

  lowerGamesSection: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  listContainer: {
    flex: 5,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 20,
    width: (Platform.OS === 'ios') ? normalize(300) : normalize(320),
    maxHeight: (Platform.OS === 'ios') ? normalize(270) : normalize(245),
    backgroundColor: 'transparent'
  },

  createButtonText: {
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
    fontSize: (Platform.OS === 'ios') ? 20 : 12,
    padding: (Platform.OS === 'ios') ? 10 : 7
  },

  createButton: {
    borderWidth: 1,
    borderRadius: (Platform.OS === 'ios') ? 10 : 7,
    borderColor: 'white',
  },

  createGameData: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
    
  textInputContainer: {
    paddingTop: (Platform.OS === 'ios') ? normalize(20) : normalize(10),
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: (Platform.OS === 'ios') ? 1 : 0,
    borderColor: 'white',
    width: (Platform.OS === 'ios') ? normalize(120) : normalize(120)
  },

  textInput: {
    width: normalize(175),
    height: normalize(35),
    fontSize: normalizeFont(2),
    backgroundColor: 'transparent'
  },

  publicStatusAndSwitch: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? normalize(30): normalize(30)
  },
  
  publicStatusText: {
    fontSize: normalizeFont(2),
    justifyContent: 'flex-end',
    alignSelf: 'center',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'transparent'
  },

  buttonText: {
    fontSize: (Platform.OS === 'ios') ? normalizeFont(6) : normalizeFont(4.5)
  },

  playButton: {
    backgroundColor: 'limegreen',
    borderWidth: 20,
    borderRadius: 30,
    borderColor: 'limegreen',
    height: 50,
    width: (Platform.OS) ? normalize(220) : normalize(170),
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },

  playButtonText: {
    justifyContent: 'center',
    fontSize: (Platform.OS === 'ios') ? normalizeFont(5) : normalizeFont(4.5),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  createButtonContainer: {
    paddingTop: (Platform.OS === 'ios') ? normalize(10) : normalize(0), 
    paddingBottom: 30, 
    alignSelf: 'center'
  },
  
  createButton: {
    backgroundColor: 'limegreen',
    borderWidth: 20,
    borderRadius: 30,
    borderColor: 'limegreen',
    height: (Platform.OS === 'ios') ? normalize(40) : normalize(25),
    width: (Platform.OS === 'ios') ? normalize(230) : normalize(200),
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },

  createButtonText: {
    justifyContent: 'center',
    fontSize: normalizeFont(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  launchButtonContainer: {
    paddingTop: (Platform.OS === 'ios') ? normalize(120) : normalize(90), 
    paddingBottom: 30, 
    alignSelf: 'center'
  },
  
  launchButton: {
    backgroundColor: 'limegreen',
    borderWidth: 20,
    borderRadius: 30,
    borderColor: 'limegreen',
    height: 50,
    width: (Platform.OS === 'ios') ? normalize(230) : normalize(220),
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },

  launchButtonText: {
    justifyContent: 'center',
    fontSize: (Platform.OS === 'ios') ? normalizeFont(4) : normalizeFont(3.75),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }



});

export default styles;