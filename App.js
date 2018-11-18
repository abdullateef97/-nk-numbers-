/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider, } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/store/reducers';
import {isDbLoaded} from './src/api/async';
import Kernel from './src/Kernel'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



const store = applyMiddleware(ReduxThunk)(applyMiddleware)
export default class App extends Component {

  state={
    isDbLoaded:  false
  }

  async componentDidMount(){
      try{
        const loaded = isDbLoaded();
        if(loaded) this.setState({isDbLoaded: true});
        return;
      }catch(error){
        console.log('err here in App.js');
      }
  }
  
  render() {
    return (
      <Provider store={store(reducers)} >
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});