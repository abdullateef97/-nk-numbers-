import React, { Component } from 'react'
import { Text, View, ToastAndroid } from 'react-native'
import {addNumbers, fetchNumbers} from '../models/numberModel';

export default class Page1 extends Component {
  componentDidMount(){
    fetchNumbers().then((no) => {
        ToastAndroid.show('gggggg', ToastAndroid.LONG)
    }).catch(err => console.log('errrrr', err))
}
  render() {
    return (
      <View>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
        <Text> Page 1 </Text>
      </View>
    )
  }
}