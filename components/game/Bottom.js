import React, {Component} from 'react';
import { Image, Stylesheet, PanResponder, Dimensions, StyleSheet, Text, Animated, View } from 'react-native';

export default class Bottom extends Component {
  constructor(props){
    super(props); 
    }; 

renderDraggable(){
  let _this = this;

  return (
    <View style={_this.props.position}>
      <Image style={styles.circle}
        resizeMode='contain' 
        source={require('./card-images/Back.png')} />
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
        height  : Window.height*(100/568),
        width   : Window.width*(90/320)
    }
});
