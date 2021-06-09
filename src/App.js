import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Header, Button, Icon} from "react-native-elements";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {TextInput} from 'react-native-paper';
import db from "./config";
import SendData from "./screens/SendData";
import ReadData from "./screens/ReadData";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const Tab = createBottomTabNavigator({
  "Make Announcement": {
    screen: SendData,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='bullhorn'
          type='font-awesome'
          color={tintColor}
        />
      ),
      tabBarOptions: {
        activeTintColor: '#23cfdb',
        labelStyle: {
          fontSize: 12,
        }
      },
    }
  },
  "View Announcement": {
    screen: ReadData,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='assistive-listening-systems'
          type='font-awesome'
          color={tintColor}
        />
      ),
      tabBarOptions: {
        activeTintColor: '#23cfdb',
        labelStyle: {
          fontSize: 12,
        }
      }
    }
  }
})

const AppContainer = createAppContainer(Tab);