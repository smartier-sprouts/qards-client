import React from 'react';
import io from 'socket.io-client';
const api = require('../../setup/API-Destinations');


//import { View, ActivityIndicator } from 'react-native';
const socket = io.connect(api.socketServer, {transports: ['websocket']});
let _this;
socket.on(chat, (message) => {
  let messages = _this.state.messages;
  messages.push(message);
  _this.setState({messages: messages});
});


export default class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [{username: 'henri', message: 'lolsafdsadf as asfd asdf asdfa sfdas d'}]
    }
  }
  componentWillMount() {
    _this = this;
  }


  render() {
    return (
      <View style={styles.bottomPart}>
          <Button
            onPress = { () => socket.emit("chat", {username: 'henri', message: 'lolol'}) }
          />
      </View>
    );
  }
}
