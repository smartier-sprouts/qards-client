import React, {Component} from 'react';
import { Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';
//import Images from './assets/playingcards/images.js';

export default class Discard extends Component {
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
              // replace dropped card with discard card remove from hand
            this.props.pickUpDiscard(this.props.hand, handPositionVar, true);
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
    circle      : {
        height              : Window.height*(100/568),
        width               : Window.width*(90/320)
    }
});
