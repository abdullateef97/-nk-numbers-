import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {connect} from 'react-redux';
import ActionCreators from '../store/actions';
import {bindActionCreators} from 'redux'

 class BaseNumber extends Component {
     componentDidMount(){
         console.log(1222)
        //  this.props.fetchNumbers();
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
    console.log('ddd', state)
    return {
        level: state.level
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseNumber)