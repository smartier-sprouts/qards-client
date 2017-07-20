import React from 'react';
import { Component, Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
import Card from './Card.js';
import Discard from './Discard.js';
import Below from './Below.js';
import Pack from './Pack.js';
import Bottom from './Bottom.js';


export default class GameArea extends React.Component {
  constructor(props){
    super(props);

  
   this.originPos = [{
        position    : 'absolute',
        top         : Window.height*(360/568),
        left        : Window.width*(0/320),
    },{
        position    : 'absolute',
        top         : Window.height*(360/568),
        left        : Window.width*(35/320),
    },{
        position    : 'absolute', 
        top         : Window.height*(360/568),
        left        : Window.width*(70/320),
    },{
        position    : 'absolute',
        top         : Window.height*(360/568),
        left        : Window.width*(105/320),
    },{
        position    : 'absolute',
        top         : Window.height*(360/568),
        left        : Window.width*(140/320),
    },{
        position    : 'absolute', 
        top         : Window.height*(360/568),
        left        : Window.width*(175/320),
    },{
        position    : 'absolute', 
        top         : Window.height*(360/568),
        left        : Window.width*(210/320),
    },{
        position    : 'absolute', 
        top         : Window.height*(360/568),
        left        : Window.width*(245/320),
    },{
        position    : 'absolute', 
        top         : Window.height*(50/568),
        left        : Window.width*(225/320),
    },{
        position    : 'absolute', 
        top         : Window.height*(50/568),
        left        : Window.width*(0/320),
    }]

    this.state = {
        position  : this.originPos,
        draw : [1, 30, 7, 32],
        hand : [1, 34, 3, 43, 5, 6, 47],
        discard : [8, 9, 21]
    };

    this.dropCardToDiscard = this.dropCardToDiscard.bind(this);
    this.pickUpDiscard = this.pickUpDiscard.bind(this);
    this.reOrderHand = this.reOrderHand.bind(this);
}

dropCardToDiscard(discardCard, callback){
  let _this = this;

  let newArray = [];
  let index = _this.state.hand.indexOf(discardCard)
  let newHand = _this.state.hand.splice(index, 1)

  _this.state.discard.push(discardCard)

  _this.setState({
    hand : _this.state.hand,
    discard : _this.state.discard
  })

 callback();
}

pickUpDiscard(card, handPositionVar, disOrDraw){

  let _this = this;

  _this.state.hand.splice(handPositionVar, 0, card)  

  if (disOrDraw) {
    _this.state.discard.pop()
    _this.setState({
      hand: _this.state.hand,
      discard : _this.state.discard
    })

  } else {

    _this.state.draw.pop()
    _this.setState({
      hand: _this.state.hand,
      draw : _this.state.draw
    })

  }
}


reOrderHand(pickedCard, handPositionVar){

  let _this = this;

  let pindex = _this.state.hand.indexOf(pickedCard);
  _this.state.hand.splice(pindex, 1);
  _this.state.hand.splice(handPositionVar, 0, pickedCard); 

  _this.setState({
      hand: _this.state.hand
    });
}


renderDraggable(){
    let _this = this;
    let eighth;
    if (_this.state.hand.length > 7) {
      eighth = <Card reOrderHand={ _this.reOrderHand } dropCardToDiscard={ _this.dropCardToDiscard } position={_this.state.position[7]} hand={_this.state.hand[7]}/> ;
    }

    return (
        <View>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDiscard={ _this.dropCardToDiscard } position={_this.state.position[0]} hand={_this.state.hand[0]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDiscard={ _this.dropCardToDiscard } position={_this.state.position[1]} hand={_this.state.hand[1]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDiscard={ _this.dropCardToDiscard } position={_this.state.position[2]} hand={_this.state.hand[2]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDiscard={ _this.dropCardToDiscard } position={_this.state.position[3]} hand={_this.state.hand[3]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDiscard={ _this.dropCardToDiscard } position={_this.state.position[4]} hand={_this.state.hand[4]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDiscard={ _this.dropCardToDiscard } position={_this.state.position[5]} hand={_this.state.hand[5]}/>
            <Card reOrderHand={ _this.reOrderHand } dropCardToDiscard={ _this.dropCardToDiscard } position={_this.state.position[6]} hand={_this.state.hand[6]}/>
            {eighth}

            <Below position={_this.state.position[8]} hand={_this.state.discard[_this.state.discard.length-2]}/>
            <Discard pickUpDiscard={ _this.pickUpDiscard } position={_this.state.position[8]} hand={_this.state.discard[_this.state.discard.length-1]}/>

            <Bottom position={_this.state.position[9]} />
            <Pack position={_this.state.position[9]} hand={_this.state.draw[_this.state.draw.length-1]} pickUpDiscard={ _this.pickUpDiscard }/>
        </View>
    );
}
   render(){
        return (
            <View style={styles.mainContainer}>
                {this.renderDraggable()}
            </View>
        );
    }
}



let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    circle      : {
        height              : Window.height*(70/568),
        width               : Window.width*(72/320)
    }
});

