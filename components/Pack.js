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



          if (Window.height*(gesture.moveY/568) > Window.height*(430/568)) {
          

            if (Window.width*(gesture.moveX/320) < Window.width*(35/320)) {
              handPositionVar = 0
            } else if (Window.width*(gesture.moveX/320) < Window.width*(70/320)) {
              handPositionVar = 1
            } else if (Window.width*(gesture.moveX/320) < Window.width*(105/320)) {
              handPositionVar = 2
            } else if (Window.width*(gesture.moveX/320) < Window.width*(140/320)) {
              handPositionVar = 3
            } else if (Window.width*(gesture.moveX/320) < Window.width*(175/320)) {
              handPositionVar = 4
            } else if (Window.width*(gesture.moveX/320) < Window.width*(210/320)) {
              handPositionVar = 5
            } else if (Window.width*(gesture.moveX/320) < Window.width*(245/320)) {
              handPositionVar = 6
            } else if (Window.width*(gesture.moveX/320) > Window.width*(245/320)) {
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





let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    circle      : {
        height              : Window.height*(100/568),
        width               : Window.width*(90/320)
    }
});





