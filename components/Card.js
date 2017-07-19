import React, {Component} from 'react';
import { Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
//import Images from './assets/playingcards/images.js';

export default class Card extends Component {
  constructor(props){
    super(props); 
    this.state = {
        pan     : new Animated.ValueXY()   //Step 1
    };
     

    this.panResponder = PanResponder.create({    
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove           : Animated.event([null,{ 
            dx : this.state.pan.x,
            dy : this.state.pan.y
        }]),
        onPanResponderRelease        : (e, gesture) => {
        

           console.log('gesture X', gesture.moveX)
           console.log('gesture Y', gesture.moveY)
            console.log('this state pan', this.state.pan)

          let Xcoord = JSON.stringify(this.state.pan.x)
          let Xcord = JSON.parse(Xcoord)

          let Ycoord = JSON.stringify(this.state.pan.y)
          let Ycord = JSON.parse(Ycoord)

          console.log('X', Xcord)
          console.log('Y', Ycord)


          if (gesture.moveX > 200 && gesture.moveY < 200) {
              // replace dropped card with discard card remove from hand
              let _this = this;
              console.log('triggering dicard', this.props.hand)
              
              this.props.dropCardToDiscard(this.props.hand, function(){

                  Animated.spring(          
                    _this.state.pan,       
                    {toValue:{x:0,y:0}}    
                ).start();

              });


          } else if (gesture.moveY > 400) {
          let handPositionVar = 0

           if (gesture.moveX < 35) {
              handPositionVar = 0
            } else if (gesture.moveX < 70) {
              handPositionVar = 1
            } else if (gesture.moveX < 105) {
              handPositionVar = 2
            } else if (gesture.moveX < 140) {
              handPositionVar = 3
            } else if (gesture.moveX < 175) {
              handPositionVar = 4
            } else if (gesture.moveX < 210) {
              handPositionVar = 5
            } else if (gesture.moveX < 245) {
              handPositionVar = 6
            } else if (gesture.moveX > 245) {
              handPositionVar = 7
            }

            this.props.reOrderHand(this.props.hand, handPositionVar)

            Animated.timing(           
                this.state.pan,         
                {toValue:{x:0,y:0},
                duration: 1}     
            ).start();
          } else {
              Animated.spring(          
                this.state.pan,       
                {toValue:{x:0,y:0}}   
            ).start();
          }


        } 
    });
}

renderDraggable(){
  let _this = this;
  let card;

  let imageArray = [null ,
  require('./card-images/2H.png'),
  require('./card-images/2S.png'),
  require('./card-images/2C.png'),
  require('./card-images/2D.png'),
  require('./card-images/3H.png'),
  require('./card-images/3S.png'),
  require('./card-images/3C.png'),
  require('./card-images/3D.png'),
  require('./card-images/4H.png'),
  require('./card-images/4C.png'),
  require('./card-images/4S.png'),
  require('./card-images/4D.png'),
  require('./card-images/5H.png'),
  require('./card-images/5C.png'),
  require('./card-images/5S.png'),
  require('./card-images/5D.png'),
  require('./card-images/6H.png'),
  require('./card-images/6C.png'),
  require('./card-images/6S.png'),
  require('./card-images/6D.png'),
  require('./card-images/7H.png'),
  require('./card-images/7C.png'),
  require('./card-images/7S.png'),
  require('./card-images/7D.png'),
  require('./card-images/8H.png'),
  require('./card-images/8C.png'),
  require('./card-images/8S.png'),
  require('./card-images/8D.png'),
  require('./card-images/9H.png'),
  require('./card-images/9C.png'),
  require('./card-images/9S.png'),
  require('./card-images/9D.png'),
  require('./card-images/10H.png'),
  require('./card-images/10C.png'),
  require('./card-images/10S.png'),
  require('./card-images/10D.png'),
  require('./card-images/JH.png'),
  require('./card-images/JC.png'),
  require('./card-images/JS.png'),
  require('./card-images/JD.png'),
  require('./card-images/QH.png'),
  require('./card-images/QC.png'),
  require('./card-images/QS.png'),
  require('./card-images/QD.png'),
  require('./card-images/KH.png'),
  require('./card-images/KC.png'),
  require('./card-images/KS.png'),
  require('./card-images/KD.png'),
  require('./card-images/AH.png'),
  require('./card-images/AC.png'),
  require('./card-images/AS.png'),
  require('./card-images/AD.png')
  ]
  
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={imageArray[_this.props.hand]} />

    return (
        <View style={_this.props.position}>
            <Animated.View 
                {...this.panResponder.panHandlers}                       
                style={[this.state.pan.getLayout(), styles.circle]}>  
                
                <View>{card}</View>
                
            </Animated.View>
            
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
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : 20,
        left        : 20,
    },
    circle      : {
        width               : 90,
        height              : 100
    }
});
