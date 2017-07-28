import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, AppRegistry, Button, Picker, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import styles from '../styles/styles.js';

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      games: null
    };
  }

  componentWillMount() {
    this._refetch();
  }

  _refetch() {
    this.setState({refreshing: true});
    fetch('https://qards.herokuapp.com/api/games')
    .then((response) => { return response.json(); })
    .then((data) => {
      this.setState({games: data, refreshing: false});
    })
    .catch((error) => { console.error('Error updating available Games:', error); });
  }
  
  render() {
    return (
      <FlatList
        data={this.state.games}
        refreshing={this.state.refreshing}
        onRefresh={() => this._refetch()}
        renderItem={({item }) => {
          const badge = {
            value: `👤${item.owners.length}`,
            badgeContainerStyle: {right: 10, backgroundColor: '#00B6FF'},
            badgeTextStyle: {fontSize: 14}
          };
          return (
            <ListItem
              hideChevron
              onPress={() => this.props.onPressListItem(item)}
              badge={badge}
              key={item._id}
              title={`test ${item.name}`}
              subtitle={`Created by ${item.owners[0].name}`}
              containerStyle={{backgroundColor: 'white'}}>
            </ListItem>
          );
        }}
      /> 
    );
  }
}