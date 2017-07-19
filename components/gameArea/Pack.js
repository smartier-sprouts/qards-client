import React, {Component} from 'react';
import { Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
//import Images from './assets/playingcards/images.js';

export default class Pack extends Component {
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

          let handPositionVar;

          if (gesture.moveY > 470) {
          

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
            
            console.log('handPositionVar', handPositionVar)
              // replace dropped card with discard card remove from hand
            this.props.pickUpDiscard(this.props.hand, handPositionVar, false);
             Animated.timing(            //Step 1
                this.state.pan,         //Step 2
                {toValue:{x:0,y:0},
                duration: 1}     //Step 3
            ).start();
          } else {
  
              Animated.spring(            //Step 1
                this.state.pan,         //Step 2
                {toValue:{x:0,y:0}}     //Step 3
            ).start();
          }


        } 
    });
}

renderDraggable(){
  let _this = this;
  let card;

  let imageArray = [
  require('./card-images/Back.png')
  ]
  
  card = <Image style={styles.circle}
                resizeMode='contain' 
                source={imageArray[0]} />


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


let CIRCLE_RADIUS = 36;
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