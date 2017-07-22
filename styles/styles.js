import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black'
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
  }
});

export default styles;