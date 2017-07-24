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
        message : 1,
        name : 'Demetrius',
        turn: true,
        winner: true,
        draw : [{'pictureId': 4}],
        hand : [{'pictureId': 4}, {'pictureId': 4},{'pictureId': 4},{'pictureId': 4},{'pictureId': 4},{'pictureId': 4},{'pictureId': 4}],
        discard : [{'pictureId': 4}],
        gameId: '59752549ef1d2b0011112574',
        playerId: '5975255aef1d2b001111257d'
    };

    this.dropCardToDiscard = this.dropCardToDiscard.bind(this);
    this.pickUpDiscard = this.pickUpDiscard.bind(this);
    this.reOrderHand = this.reOrderHand.bind(this);
}

componentDidMount() {
  var _this = this;
var url = ['https://qards.herokuapp.com/api/getHand/', 
'https://qards.herokuapp.com/api/getHand/59750dc13f15600011dc2410/59750dd33f15600011dc2419'];
 
 //create game to find name - owners.name
 console.log('in component mounted')
console.log(url[0] + _this.state.gameId + '/' + _this.state.playerId)
  // set hand
  fetch(url[0] + _this.state.gameId + '/' + _this.state.playerId)
      .then((res) => res.json())
      .then((data) => { 
      
    // var handArray = [];
    // for (var i = 0 ; i < data.length ; i++ ) {
    // var count = 0; 
   
      // if (data[i].desc > 1 && data[i].desc < 11 ) {
      //   count = (data[i].desc - 2) * 4 + 1;
      // } else if (data[i].desc === 'J') {
      //   count = 37
      // } else if (data[i].desc === 'Q') {
      //   count = 41
      // } else if (data[i].desc === 'K') {
      //   count = 45
      // } else if (data[i].desc === 'A') {
      //   count = 48
      // }

      // if (data[i].suit.charCodeAt(0) === 9829) {
      //   //hearts
      //   count = count;
      // } else if (data[i].suit.charCodeAt(0) === 9830) {
      //   //diamonds
      //   count += 3;
      // } else if (data[i].suit.charCodeAt(0) === 9824) {
      //   //spads
      //   count += 2;
      // } else if (data[i].suit.charCodeAt(0) === 9827) {
      //   //clubs
      //   count += 1;
      // }
    //   handArray.push(count)
    // }
    if (data) {
      console.log(data)

      this.setState({
        hand: data.hand,
        discard: [data.discard]
      }) 
    }
      }).catch((err) => {
        console.log(err)
        console.log(url[0] + _this.state.gameId + '/' + _this.state.playerId)
      })
}


dropCardToDiscard(discardCard, callback){
let url = ['https://qards.herokuapp.com/api/discard/', 'https://qards.herokuapp.com/api/discard/59750dc13f15600011dc2410/59750dd33f15600011dc2419/']

  let _this = this;

  let newArray = [];
  let otherArray = [];


  for (var i = 0; i < _this.state.hand.length; i++ ) {
      otherArray.push(_this.state.hand[i].pictureId)
  }

  let index = otherArray.indexOf(discardCard.pictureId)
  let newHand = _this.state.hand.splice(index, 1)

  _this.setState({
    hand : _this.state.hand,
    discard : [discardCard]
  })
  console.log('discardCard id', discardCard._id)
  
 // POST to discard
     fetch(url[0] + _this.state.gameId + '/' + _this.state.playerId + '/' + discardCard._id)
      .then((res) => res.json())
      .then((data) => { 
      console.log('new card ', data) 
     }).catch((err) => {
        console.log(err)
      })

 callback();

}

pickUpDiscard(card, handPositionVar, disOrDraw){
let url = ['https://qards.herokuapp.com/api/drawCard/', '/Draw']

  let _this = this; 

  if (disOrDraw) {
  _this.state.hand.splice(handPositionVar, 0, card)  

    _this.setState({
      hand: _this.state.hand
    })

   // POST to discard
    fetch(url[0] + _this.state.gameId + '/' + _this.state.playerId + '/' + card._id)
      .then((res) => res.json())
      .then((data) => { 
      
      console.log('discard hand ', data) 
      this.setState({
        discard: [data]
      })

     }).catch((err) => {
        console.log(err)
      })
  } else {

   // POST to draw
    fetch(url[0] + _this.state.gameId + '/' + _this.state.playerId + url[1])
      .then((res) => res.json())
      .then((data) => { 

      console.log('draw hand ', data) 
      _this.state.hand.splice(handPositionVar, 0, data)  

      this.setState({
        hand: _this.state.hand
      })

     }).catch((err) => {
        console.log(err)
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

   let possible = ['Your Turn', 'Not your turn idiot', 'The next banner has no title'];
   let Message = '';

   if (_this.state.message === 1) {
     Message = _this.state.name + "'s turn"
   } else {
     Message = possible[_this.state.message]
   }


    return (
        <View>
          <View style={styles.container} >
            <Text style={styles.bannerText}>{Message}</Text>
          </View>
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
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        height : Window.height*(80/568),
        width : Window.width
    },
    bannerText: {
        color: 'white',
        textAlign : 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    circle      : {
        height              : Window.height*(70/568),
        width               : Window.width*(72/320)
    }
});