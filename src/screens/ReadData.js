import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Header, Button} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {TextInput} from 'react-native-paper';
import db from "../config"

export default class ReadData extends React.Component {
  constructor(){
    super();
    this.state = {
      msg: '',
      msgCode: ''
    };
  }

  render() {
    return (
      <View>
      <SafeAreaProvider>
      <Header
      centerComponent={{ text: 'SendTo', style: {color: "#FFFFFF", fontSize: 24, fontWeight: 'bold',} }}
      containerStyle={{
        backgroundColor: '#f05716'
      }}
      />
      </SafeAreaProvider>
      <TextInput
      label="Message Code"
      type="flat"
      style={{
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}
      keyboardType={'numeric'}
      />
      <Button
      title="Check Message"
      style={{
        alignItems: 'center',
        marginTop: 70,
      }}
      onPress={() => {
        this.getMsg();
      }}
      />
      <Text style={{marginTop: 50, fontSize: 22, fontWeight: 'bold'}}>
      Message: {this.state.msg}
      </Text>
      </View>
    );
  }
  getMsg = () => {
    var msgs = [];
    var msgRef = db.ref('messages/' + this.state.msgCode + '/');
    msgRef.on('value', (data) => {
      var msgData = data.val();
      for (var msg in msgData) {
        msgs.push(msgData[msg]);
      }
      console.log(msgs[0].msg);
      this.setState({
        msg:msgs[0].msg,
      });
    })
  }
}