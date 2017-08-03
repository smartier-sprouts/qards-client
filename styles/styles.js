import { Platform, StyleSheet } from 'react-native';
import { PixelRatio } from 'react';
import { Constants } from 'expo';
import { normalize, normalizeFont } from './normalize.js';
const {width, height} = require('Dimensions').get('window');

/*
PixelRatio.get() === 1
mdpi Android devices (160 dpi)
PixelRatio.get() === 1.5
hdpi Android devices (240 dpi)
PixelRatio.get() === 2
iPhone 4, 4S
iPhone 5, 5c, 5s
iPhone 6
xhdpi Android devices (320 dpi)
PixelRatio.get() === 3
iPhone 6 plus
xxhdpi Android devices (480 dpi)
PixelRatio.get() === 3.5
Nexus 6
*/

// if (PixelRatio.get() )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
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
    paddingBottom: (Platform.OS === 'ios') ? 0 : 20,
    fontWeight: 'bold', 
    fontSize: (Platform.OS === 'ios') ? normalizeFont(5.5) : normalizeFont(5),
    justifyContent: 'flex-start',
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: '800'
  },

  smallTitle: {
    fontSize: 16,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'transparent'
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 100,
  },

  gameTypesContainer: {
    flex: (Platform.OS === 'ios') ? 3.5 : 1.5,
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  },

  gameTypesPicker: {
    flex: (Platform.OS === 'ios') ? .75 : .33,
    flexDirection: 'column-reverse',
    width: (Platform.OS === 'ios') ? 150 : 150,
    backgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white'
  },

  rulesButton: {
    alignSelf: 'flex-end',
    color: 'white',
    borderWidth: 2
  },

  textInput: {
    width: 175,
    height: 35,
    backgroundColor: 'white'
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
    borderWidth: 2,
    borderRadius: (Platform.OS === 'ios') ? 10 : 7,
    borderColor: 'white',
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


});

export default styles;