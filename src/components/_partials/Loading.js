import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native';
import colors from '../../api/colors'

export default class Loading extends Component {
  render() {
      console.log(900)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
        <ActivityIndicator size={35} color={colors.primaryLight}/>
      </View>
    )
  }
}