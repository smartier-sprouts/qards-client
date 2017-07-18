import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    console.log('props: ', props)
  }

  render() {
    {console.log(this.props.navigation.state.params)}      
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rules for {this.props.navigation.state.params.game}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  },
  picker: {
    width: 150
  }
});