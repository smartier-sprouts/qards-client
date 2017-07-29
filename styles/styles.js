import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight
  },

  topPart: {
    flex: 1.25,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  bottomPart: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  welcomeTitle: {
     color: 'green',
     alignSelf: 'center',
     fontSize: 120,
     position: 'absolute',
  },

  title: {
    fontSize: 40,
    alignSelf: 'center',
    color: 'green'
  },

  smallTitle: {
    fontSize: 20,
    color: 'white'
  },

  picker: {
    width: 150,
    height: 35,
    borderWidth: 5
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  pickerView: {
    backgroundColor: 'white'
  },

  textInput: {
    width: 175,
    height: 35,
    backgroundColor: 'white'
  },

  listContainer: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 30,
    paddingLeft: 20,
    width: 380,
    maxHeight: 350
  }
});

export default styles;