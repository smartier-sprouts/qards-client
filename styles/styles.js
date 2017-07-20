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
    width: 150
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
  }
});

export default styles;