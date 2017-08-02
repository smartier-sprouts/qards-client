import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  topPart: {
    flex: 1.25,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  bottomPart: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },

  welcomeTitle: {
     color: 'green',
     alignSelf: 'center',
     fontSize: 120,
     position: 'absolute',
  },

  title: {
    flex: 1,
    fontSize: 40,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    color: 'green'
  },

  gameTypes: {
    flex: 2,
    justifyContent: 'flex-start'
  },

  smallTitle: {
    fontSize: 20,
    justifyContent: 'flex-start',
    color: 'black'
  },

  picker: {
    width: 150,
    height: 35
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
    flex: 3,
    borderRadius: 5,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 30,
    paddingLeft: 20,
    width: 380,
    maxHeight: 350
  },

  rulesButton: {
    alignSelf: 'flex-end',
    color: '#1E8449',
    borderRadius: 2,
    borderColor: '#1E8449'
  },

  createButton: {
    color: 'darkgreen'
  }

});

export default styles;