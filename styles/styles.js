import { StyleSheet } from 'react-native';
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
    paddingTop: 75
  },

  bottomPart: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 150
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },

  welcomeTitle: {
    color: 'green',
    alignSelf: 'center',
    fontSize: 120,
    position: 'absolute',
    backgroundColor: 'transparent'
  },

  title: {
    paddingTop: 10,
    flex: .25,
    fontWeight: 'bold', 
    fontSize: 60,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent'
  },

  gameTypesContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },

  smallTitle: {
    flex: .25,
    fontSize: 16,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent'
  },

  picker: {
    flex: .5,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    width: 150,
    height: 15,
    backgroundColor: 'white'
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 100,
  },

  pickerView: {
    flex: 1,
    backgroundColor: 'white'
  },

  textInput: {
    width: 175,
    height: 35,
    backgroundColor: 'white'
  },

  listContainer: {
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 30,
    paddingLeft: 20,
    width: 380,
    maxHeight: 350,
    backgroundColor: 'transparent'
  },

  rulesButton: {
    flex: .5,
    alignSelf: 'flex-end',
    color: '#1E8449',
    borderWidth: 2,
    borderColor: '#1E8449'
  },

  createButton: {
    color: 'darkgreen'
  },

  buttonText: {
    fontSize: 40
  },

  buttonContainer: {
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    width: 275,
  },

  playButton: {
    backgroundColor: 'limegreen',
    borderWidth: 20,
    borderRadius: 30,
    borderColor: 'limegreen',
    height: 50,
    width: 275,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },

  playButtonText: {
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  loginLogo: {
    width: 25,
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },

  fbButton: {
    flexDirection: 'row',
    backgroundColor: '#3b5998',
    borderWidth: 20,
    borderRadius: 30,
    borderColor: '#3b5998',
    height: 50,
    width: 325,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-start'
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

  loginButtonText: {
    justifyContent: 'space-around',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  logoutButton: {
    paddingTop: 20,
    fontSize: 20,
    textDecorationColor: 'red'
  }

});

export default styles;