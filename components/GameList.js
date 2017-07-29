import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, AppRegistry, Button, Picker, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import styles from '../styles/styles.js';

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  
  render() {
    return (
      <FlatList
        data={this.props.games}
        refreshing={this.props.refreshing}
        onRefresh={() => this.props.onRefresh()}
        renderItem={({item}) => {
          item.key = item._id;
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