import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {connect} from 'react-redux';
import ActionCreators from '../store/actions';
import {bindActionCreators} from 'redux'

 class BaseNumber extends Component {
     componentDidMount(){
         this.props.fetchNumbers();
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseNumber)