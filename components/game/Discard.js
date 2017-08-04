import React, {Component} from 'react';
import { Image, PanResponder, Dimensions, StyleSheet, Animated, View } from 'react-native';

const viewHeight = Dimensions.get('window').height;
const viewWidth = Dimensions.get('window').width;

export default class Discard extends Component {
  constructor(props) {
    super(props);
    this.state = { pan: new Animated.ValueXY() };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event( [null, {dx: this.state.pan.x, dy: this.state.pan.y}] ),
      onPanResponderRelease: (e, gesture) => {
        let Xcoord = JSON.stringify(this.state.pan.x);
          let Xcord = JSON.parse(Xcoord);

        let Ycoord = JSON.stringify(this.state.pan.y);
          let Ycord = JSON.parse(Ycoord);

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
          this.props.pickUpDiscard(this.props.hand, handPositionVar, true);
          Animated.timing( this.state.pan, { toValue: {x: 0,y: 0}, duration: 1} ).start();
        } else {
          Animated.spring( this.state.pan, { toValue: {x: 0,y: 0}} ).start();
        // const someConst = viewWidth * (gesture.moveX / 320);
        // if ( ( viewHeight * (gesture.moveY / 568) ) > (viewHeight * (430 / 568)) ) {
        //   if ( someConst < ( viewWidth * (35 / 320)) ) {
        //     handPositionVar = 0;
        //   } else if ( someConst < viewWidth * (70 / 320)) {
        //     handPositionVar = 1;
        //   } else if ( someConst < viewWidth * (105 / 320)) {
        //     handPositionVar = 2;
        //   } else if ( someConst < viewWidth * (140 / 320)) {
        //     handPositionVar = 3;
        //   } else if ( someConst < viewWidth * (175 / 320)) {
        //     handPositionVar = 4;
        //   } else if ( someConst < viewWidth * (210 / 320)) {
        //     handPositionVar = 5;
        //   } else if ( someConst < viewWidth * (245 / 320)) {
        //     handPositionVar = 6;
        //   } else if ( someConst > viewWidth * (245 / 320)) {
        //     handPositionVar = 7;
        }
      } // end PanRelease
    }); //end PanResponder
  }

  renderDraggable() {
    let _this = this;
    let imageArray = [
      require('./card-images/Back.png'),
      require('./card-images/AH.png'),
      require('./card-images/2H.png'),
      require('./card-images/3H.png'),
      require('./card-images/4H.png'),
      require('./card-images/5H.png'),
      require('./card-images/6H.png'),
      require('./card-images/7H.png'),
      require('./card-images/8H.png'),
      require('./card-images/9H.png'),
      require('./card-images/10H.png'),
      require('./card-images/JH.png'),
      require('./card-images/QH.png'),
      require('./card-images/KH.png'),
      require('./card-images/AC.png'),
      require('./card-images/2C.png'),
      require('./card-images/3C.png'),
      require('./card-images/4C.png'),
      require('./card-images/5C.png'),
      require('./card-images/6C.png'),
      require('./card-images/7C.png'),
      require('./card-images/8C.png'),
      require('./card-images/9C.png'),
      require('./card-images/10C.png'),
      require('./card-images/JC.png'),
      require('./card-images/QC.png'),
      require('./card-images/KC.png'),
      require('./card-images/AD.png'),
      require('./card-images/2D.png'),
      require('./card-images/3D.png'),
      require('./card-images/4D.png'),
      require('./card-images/5D.png'),
      require('./card-images/6D.png'),
      require('./card-images/7D.png'),
      require('./card-images/8D.png'),
      require('./card-images/9D.png'),
      require('./card-images/10D.png'),
      require('./card-images/JD.png'),
      require('./card-images/QD.png'),
      require('./card-images/KD.png'),
      require('./card-images/AS.png'),
      require('./card-images/2S.png'),
      require('./card-images/3S.png'),
      require('./card-images/4S.png'),
      require('./card-images/5S.png'),
      require('./card-images/6S.png'),
      require('./card-images/7S.png'),
      require('./card-images/8S.png'),
      require('./card-images/9S.png'),
      require('./card-images/10S.png'),
      require('./card-images/JS.png'),
      require('./card-images/QS.png'),
      require('./card-images/KS.png')
    ];

    let card = (<Image style={styles.circle}
                resizeMode='contain'
                source={_this.props.hand ? imageArray[_this.props.hand.pictureId] : imageArray[0]} />);

    return (
      <View style={_this.props.position}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={ [this.state.pan.getLayout(), styles.circle] }>
          <View>{card}</View>
        </Animated.View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        { this.renderDraggable() }
      </View>
    );
  }

}

let styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  circle: {
      height: viewHeight * (100 / 568),
      width: viewWidth * (90 / 320)
  }
});