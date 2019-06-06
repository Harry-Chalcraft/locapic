import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './home';
import PageA from './pageA';
import PageB from './pageB';

class Navigation extends React.Component {
  render() {
    return (
      <StackNavigator/>
    );
  }
}

var BottomTabNavigator = createBottomTabNavigator({
  PageA: PageA,
  PageB: PageB
})

var StackNavigator = createStackNavigator({
  Home:Home,
  BottomTabNavigator: BottomTabNavigator
}, {headerMode: 'none'})


export default Navigation = createAppContainer(StackNavigator);
