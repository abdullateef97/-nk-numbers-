
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, ActivityIndicator} from 'react-native';
import { applyMiddleware, createStore} from 'redux';
import {Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/store/reducers';
import {isDbLoaded} from './src/api/async';
import Routes from './src/Routes';
import colors from './src/api/colors';


const store = applyMiddleware(ReduxThunk)(createStore);
const storeWithRed = store(reducers)


export default class App extends Component {

  state = {
    isDbLoaded:  false,
    loading: true
  }

  async componentDidMount(){
      return isDbLoaded().then(loaded => {
        this.setState({isDbLoaded: loaded, loading: false});
        return;
      })
  }
  
  render() {
    return (
      <View style={{flex: 1}}>
            <StatusBar
                backgroundColor={colors.primaryLight}
                barStyle="light-content"
            />
          {this._renderContent()}
      </View>
    );
  }

  _renderContent(){
    if(this.state.loading) {
      return (
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={colors.primary} size={'large'}/>
        </View>
      )
    }else{

      return ( 
        <Provider store={storeWithRed} >          
            <Routes loaded={this.state.isDbLoaded} />
        </Provider>
      )
    }
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