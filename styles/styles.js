import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
    color: 'green'
  },
  picker: {
    width: 150,
    height: 35
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  pickerView: {
    backgroundColor: 'white'
  },
  smallTitle: {
    fontSize: 20,
    color: 'white'
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