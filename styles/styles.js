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
  homePageDisplay: {
    height: 150,
    width: 150,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
    item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default styles;