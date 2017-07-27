import React from 'react';
import { Component, Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
import Card from './Card.js';
import Discard from './Discard.js';
import Below from './Below.js';
import Pack from './Pack.js';
import Bottom from './Bottom.js';
import { StackNavigator } from 'react-navigation';
import getPlayerHand from '../../services/api/getPlayerHand.js';
import checkDiscard from '../../services/api/checkDiscard.js';
import discardPush from '../../services/api/discardPush.js';
import pickDiscard from '../../services/api/pickDiscard.js';

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
        activeName: 'Tiberius',
        playerTurnNum: 100,
        phase1: true,
        phase2: false,
        winner: null,
        draw : [{'pictureId': 4}],
        hand : [{'pictureId': 4}, {'pictureId': 4},{'pictureId': 4},{'pictureId': 4},{'pictureId': 4},{'pictureId': 4},{'pictureId': 4}],
        discard : [{'pictureId': 4}],
        gameId: '',
        playerId: ''
    };
    this.dropCardToDiscard = this.dropCardToDiscard.bind(this);
    this.pickUpDiscard = this.pickUpDiscard.bind(this);
    this.reOrderHand = this.reOrderHand.bind(this);
}

componentWillMount() {

    this.setState({
      gameId: this.props.navigation.state.params.gameId,
      playerId: this.props.navigation.state.params.playerId,
      playerTurnNum: this.props.navigation.state.params.turn
    }, function (){

var _this = this;

  getPlayerHand(_this.state.gameId, _this.state.playerId, function(data){
    _this.setState({
      hand: data.hand,
      discard: [data.discard]
    }) 
  })

  checkDiscard(_this.state.gameId, function(data){

      _this.setState({
        activeTurn: data.turnNum,
        activeName: data.activePlayerName,
        winner: data.winner,  
        discard: [data.topOfDiscard]

      }, function(){
        if (_this.state.playerTurnNum === _this.state.activeTurn) {
          _this.setState({
            phase1: true
          })
        }   
        if (!_this.state.playerTurnNum === _this.state.activeTurn) {
          _this.setState({
            discard: [data.topOfDiscard.pictureId]
          })  
        }
      })
    })
  }
)}


dropCardToDiscard(discardCard, callback) {
  let _this = this;

 if (_this.state.activeTurn === _this.state.playerTurnNum && _this.state.phase2) {
 
  let newArray = [];
  let otherArray = [];

  for (var i = 0; i < _this.state.hand.length; i++ ) {
      otherArray.push(_this.state.hand[i].pictureId)
  }

  let index = otherArray.indexOf(discardCard.pictureId)
  let newHand = _this.state.hand.splice(index, 1)

  _this.setState({
    hand : _this.state.hand,
    discard : [discardCard],
    phase1: false,
    phase2: false
  })
   discardPush(_this.state.gameId, _this.state.playerId, discardCard._id, function(data){
    console.log(data)
   })
  }
 callback();
}

pickUpDiscard(card, handPositionVar, disOrDraw){
  var url = ['https://qards.herokuapp.com/api/drawCard/', '/Draw']
  let _this = this; 

 if (_this.state.activeTurn === _this.state.playerTurnNum && _this.state.phase1) {

  if (disOrDraw) {
    _this.state.hand.splice(handPositionVar, 0, card);  
      _this.setState({
        hand: _this.state.hand
      })

   pickDiscard(_this.state.gameId, _this.state.playerId, function(data){
      _this.setState({
        discard: [{'pictureId': 0}],
        phase1: false,
        phase2: true
      })
   })
  } else {

   // pcik up draw
    fetch(url[0] + _this.state.gameId + '/' + _this.state.playerId + url[1])
      .then((res) => res.json())
      .then((data) => { 
      _this.state.hand.splice(handPositionVar, 0, data)  

      this.setState({
        hand: _this.state.hand,
        phase1: false,
        phase2: true
      })

     }).catch((err) => {
        console.log(err)
      })
    }
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
   let Message = '';
  
    var stylio = styles.bannerText;

   if (_this.state.winner) {
     Message = _this.state.winner + ' has won!';

     var stylio = {
        color: 'red',
        textAlign : 'center',
        fontSize: 80,
        fontWeight: 'bold'
        }
 
   } else {
     if (_this.state.message) {
       Message = _this.state.activeName + "'s turn"
     } 
   }

    return (
        <View>
          
            <Text style={stylio}>{Message}</Text>
          
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
        flex    : 1,
        backgroundColor: '#31A231'
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