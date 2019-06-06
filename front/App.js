import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './Components/Navigation'

import result from './user.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({result}));


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}
