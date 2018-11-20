
import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { applyMiddleware, createStore} from 'redux';
import {Provider, } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/store/reducers';
import {isDbLoaded} from './src/api/async';
import Kernel from './src/Kernel';
import colors from './src/api/colors';


const store = applyMiddleware(ReduxThunk)(createStore);
const storeWithRed = store(reducers)


export default class App extends Component {

  state = {
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
        <Provider store={storeWithRed} >
          <View>
            <StatusBar
                backgroundColor={colors.primaryLight}
                barStyle="light-content"
            />
            <Kernel loaded={this.state.isDbLoaded} />
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