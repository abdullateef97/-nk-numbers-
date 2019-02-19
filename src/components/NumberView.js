import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import NumberObj from './NumberObjects'
import {connect} from 'react-redux';
import {List} from 'react-native-elements'
import Loading from './_partials/Loading';
import NumberItem from './NumberItem'

 class NumberView extends Component {
  render() {
      let {index} = this.props
      let pageItem = this.props.numberObj.numbers[index]
    return (
        <View style={{flex: 1}}>
        <ScrollView>
          <List containerStyle={{borderBottomWidth :0,borderTopWidth : 0,marginTop:0,
          paddingBottom : 50}}>
          
              <View style={{height: 120, marginBottom: 20}}>
                  <NumberObj count={pageItem.number}/>
                  </View>
              <NumberItem title="Ònkà" value={pageItem.number}/>
              <NumberItem title = {'Orúko̩'} value={pageItem.yoruba}/>
              <NumberItem title="Àlàyé ní ge̩e̩si" value={pageItem.explanation}/>
              <NumberItem title="Àlàyé ní yorùbá" value={pageItem.alaye}/>

          </List>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
    const {number} = state;
    return {
        numberObj: number.numberObj
    }
}
export default connect(mapStateToProps)(NumberView)