import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ListItem, Input, Button } from 'react-native-elements';
import {connect} from 'react-redux'

import socketIOClient from "socket.io-client";

console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

class PageB extends React.Component {

  constructor() {
    super();
    this.state= ({
      messageToSend: '',
      messageList: [],
    })
  }

  componentDidMount(){
    this.socket = socketIOClient("https://fast-shore-29443.herokuapp.com");
    this.socket.on('sendMessage', (message)=> {
      var messageListCopy = [...this.state.messageList];
      messageListCopy.push(message);
      this.setState({messageList: messageListCopy})
    });
  }

  inputChange = (value) => {
    this.setState({ messageToSend: value})
  }

  button = () => {
   this.socket.emit("sendMessage", {message:this.state.messageToSend, user: this.props.result.firstName + ' ' + this.props.result.lastName, picture: this.props.result.picture})
   this.setState({messageToSend:''})
  }



  render() {
    var messages = this.state.messageList.map((message, i) => {
      return (
        <ListItem
          key = {i}
          leftAvatar={{ source: { uri: decodeURIComponent(message.picture) } }}
          title={message.user}
          subtitle={message.message}
        />
      )
    })

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ScrollView>
          {messages}
        </ScrollView>
        <Input onChangeText={(value) => this.inputChange(value)} value= {this.state.messageToSend} />
        <Button
          title= 'Envoyer'
          onPress= {this.button}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

function mapStateToProps(state) {
 return { result: state.result }
}

export default connect(
  mapStateToProps,
  null
)(PageB);
