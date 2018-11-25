import React, { Component } from 'react'
import { Text, View, ToastAndroid } from 'react-native'
import {addNumbers, fetchNumbers} from '../models/numberModel';
import {fetchQuiz} from '../models/quizModel'

export default class Page1 extends Component {
  componentDidMount(){
    fetchQuiz().then((no) => {
      console.log('qq', no)
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