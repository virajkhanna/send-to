import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Header, Button} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {TextInput} from 'react-native-paper';
import db from "../config"

export default class SendData extends React.Component {
  constructor() {
    super();
    this.state = {
      ranNum: '',
      messg: '',
    }
  }

  render() {
    var ranNum;
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
      label="Message"
      type="flat"
      multiline={true}
      style={{
        height: 300,
        textAlign: 'center',
        justifyContent: 'center',
         fontWeight: 'bold'
      }}
      onChangeText={(text) => {
        this.setState({
          messg:text,
        })
      }}
      />
      <Button
      title="Generate Message Code"
      style={{
        alignItems: 'center',
        marginTop: 70,
      }}
      onPress={() => {
        ranNum = Math.floor(Math.random() * 10000000) + 1;
        db.ref('/messages/' + ranNum + '/').update({
          "msg":this.state.messg,
        })
        this.setState({
          ranNum:ranNum,
        })
      }}
      />
      <Text style={{marginTop: 50, fontSize: 22, fontWeight: 'bold'}}>
      Message Code: {this.state.ranNum}
      </Text>
      </View>
    );
  }
}