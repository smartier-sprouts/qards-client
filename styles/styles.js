import { Platform, StyleSheet } from 'react-native';
import { Constants } from 'expo';

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
    fontSize: (Platform.OS === 'ios') ? 30 : 20,
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
    height: (Platform.OS === 'ios') ? 50 : 40,
    width: (Platform.OS === 'ios') ? 325 : 275,
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
    fontSize: 20,
    color: 'white'
  },

  title: {
    flex: .5,
    paddingTop: 40,
    paddingBottom: (Platform.OS === 'ios') ? 0 : 20,
    fontWeight: 'bold', 
    fontSize: (Platform.OS === 'ios') ? 40 : 25,
    height: 40,
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
    flex: 3,
    justifyContent: 'space-around',
    backgroundColor: 'transparent'
  },

  gameTypesPicker: {
    flex: .33,
    flexDirection: 'column-reverse',
    width: (Platform.OS === 'ios') ? 150 : 150,
    paddingTop: (Platform.OS === 'ios') ? 30 : 0,
    backgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'transparent'
  },

  rulesButton: {
    alignSelf: 'flex-end',
    color: 'white'
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
    width: (Platform.OS === 'ios') ? 400 : 350,
    maxHeight: (Platform.OS === 'ios') ? 400 : 350,
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
    fontSize: (Platform.OS === 'ios') ? 40 : 30
  },

  playButton: {
    backgroundColor: 'limegreen',
    borderWidth: 20,
    borderRadius: 30,
    borderColor: 'limegreen',
    height: 50,
    width: (Platform.OS) ? 250 : 200,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },

  playButtonText: {
    justifyContent: 'center',
    fontSize: (Platform.OS === 'ios') ? 35 : 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },


});

export default styles;