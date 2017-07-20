import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    alignSelf: 'center'
  },
  picker: {
    width: 150
  },
    item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default styles;