import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {connect} from 'react-redux';
import ActionCreators from '../store/actions';
import {bindActionCreators} from 'redux';
import constants from '../api/constants';
import {Actions} from 'react-native-router-flux'

 class BaseNumber extends Component {
     
     componentDidMount(){
         this.props.fetchNumbers(this.props.level.selectedLevel);
     }
  render() {
    return this.props.children
  }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchNumbers : ActionCreators.fetchNumberObj
    }, dispatch)
}

const mapStateToProps = state => {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseNumber)