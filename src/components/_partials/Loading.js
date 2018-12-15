import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native';
import colors from '../../api/colors'

export default class Loading extends Component {
    
  render() {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size={35} color={colors.primaryLight}/>
      </View>
    )
  }
}