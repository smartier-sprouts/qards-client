export default straight_gin_rules =
`OBJECT:
  The object of the game is to be the first player to have a full hand of with two valid Melds.
  There are two kinds of Melds:
    1. A set of three or four of-a-kind with the same face value (examples: three Jacks or four Sevens)
    2. A Straight set of three or four cards of the same suit in squential order (example: 2,3,4,5 of Spades or the Jack,Queen,and King of Hearts).
        Note: Aces are special as they can be used in a Straight as EITHER the lowest card (below 2) or the highest card (above King) in the Suit. HOWEVER, Aces may NOT be used as a bridge between the two in the same Straight: King-Ace-2 is NOT valid, but Ace-2-3 or Queen-King-Ace are).
  In order to complete a hand, a player must either have a hand with one Meld of each kind, or may alternately possess two Melds of the same kind.


GAMEPLAY:
  Everyone is dealt seven cards, and one card is placed faced up next to the deck of undealt cards to start the face-up pile. One player is selected to go first.
  During a player’s turn, that player must either take the one card that is at the very top of the face-up pile or the a face-down card from top of the deck. After a player looks at their new card, the player must choose a card from their hand to discard so they return to only having seven cards. In order to discard, the player must drag the card from their hand and put it on top of the pile of face-up cards.
  At this point, if the player does not have a winning hand, it is the next player’s turn, and play continues in the same manner.
  Any card in the face-up discard pile that is covered at the end of discarding will not be available again until a situation when the undealt cards pile is empty, at which point the discard pile is shuffled and reused as a new pile of undealt cards.
`