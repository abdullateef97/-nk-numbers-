import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, ViewPagerAndroid } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card} from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux'
import constants from '../api/constants';
import Loading from './_partials/Loading'
import ActionCreators from '../store/actions';
import * as IconNames from '../api/IconNames'
import colors from '../api/colors'


 class Numbers extends Component {

    

    componentDidMount(){

    }

    componentWillUnmount(){ 
      this.props.fetchNumberLoading()
    }
  render() {
    return (
      <View style={{flex: 1}}>
        {this._renderContent()}
      </View>
    )
  }

  _renderContent(){
    if(this.props.isFetching){
      return <Loading/>
    }
  }

  
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    isFetching: state.number.isFetching,
    numberObj: state.number.numberObj,
    selectedLevel: state.level.selectedLevel
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchNumberLoading: ActionCreators.fetchNumberLoading
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Numbers)