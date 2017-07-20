import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry, Button, Picker } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles.js';

export default class StraightGinRules extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {   
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Straight Gin Rules</Text>
          <Text style={{ color: 'white' }}>OBJECT:
            The object of the game to be the first player to have a certain matching combination. A winning combination can consist of three of a kind and four of a kind (example: three Jacks and four 7s). You may also have a four card straight of the same suit and a three card straight of the same suit (2,3,4,5 of Spades, and Jack, Queen, and King of Hearts). A player may also win by combining three or four cards of the same value with a straight of the same suit (examples: 2,3,4,5 of Spades and three 7s; 9, 10, Jack of hearts and four Aces). Aces can be played as 1s or as the high card of the game. They cannot be used as both (King, Ace, 2 is not a straight, but. Ace, 2, 3 and Queen, King, Ace are).{'\n\n'}

            GAMEPLAY:
            Everyone is dealt seven cards, and one card is placed faced up next to the deck of undealt cards. One player is selected to go first. During a player’s turn, that player must take either the one card that is face up next to the deck, or the card on top of the deck. After a player looks at his or her new card, the player must choose a card from his or her hand to discard. Once the player has decided which card to discard, he or she will put the card face up next to the deck, on top of previously discarded cards if there are any (any card in the discard pile that is not selected will not be available again until the undealt cards pile is empty and the discard pile is shuffled and replaces the undealt cards pile). At this point, if the player does not have a winning hand, it is the next player’s turn, and play continues in the same manner.
          </Text>
      </View>
    );
  }
}