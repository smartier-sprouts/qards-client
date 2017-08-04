import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TextInput, AppRegistry, Button, Picker, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import styles from '../styles/styles.js';

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {refreshing: false};
  }

  render() {
    return (
      <FlatList
        borderRadius={20}
        data={this.props.games}
        refreshing={this.props.refreshing}
        onRefresh={() => this.props.onRefresh()}
        renderItem={({item}) => {
          item.key = item._id;
          const badge = {
            value: `👤${item.owners.length}`,
            containerStyle: {right: 10, backgroundColor: 'white'},
            textStyle: {color: 'black', fontSize: 14}
          };
          return (
            <ListItem
              hideChevron
              onPress={() => this.props.onPressListItem(item)}
              badge={badge}
              key={item._id}
              title={item.name}
              subtitle={`Created by ${item.owners[0].name}`}
              containerStyle={{backgroundColor: 'transparent', borderBottomWidth: 0, borderTopWidth: 0}}
              titleStyle={{color: 'white', fontWeight: 'bold'}}
              subtitleStyle={{color: 'lightgray'}}
              underlayColor={'orange'}>
            </ListItem>
          );
        }}
      />
    );
  }
}
