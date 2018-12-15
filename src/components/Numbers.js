import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, ViewPagerAndroid, FlatList } from 'react-native';
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

  state= {
    isFetching: true,
    numbersArr: []
  }
    

    componentDidMount(){

    }

    static getDerivedStateFromProps(nextProps, prevState){
      if(nextProps.isFetching !== prevState.isFetching){
        return {
          isFetching: nextProps.isFetching,
          numbersArr: nextProps.numberObj.numbers
        }
      }
      return null
    }

    componentWillUnmount(){ 
      this.props.fetchNumberLoading()
    }
  render() {
    // {this._renderContent()}
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        {this._renderContent()}
      </View>
    )
  }

  _renderContent(){
    if(this.state.isFetching){
      return <Loading/>
    }else{
      console.log(this.state.numbersArr)
      return (
        <View style={{flex: 1, flexDirection: 'row', }}>
        <FlatList
        data={this.state.numbersArr}
        renderItem = {
          ({item}) => this._renderFlatListItem(item)      }
        keyExtractor = {(item) => item.number.toString()}
        numColumns={2}
        contentContainerStyle={{justifyContent: "space-between"}}
        />
        </View>
      )
    }
    
  }

  _renderFlatListItem(item){
    const {number, yoruba} = item
    return (
        <Card containerStyle={{flex: 0.5, borderWidth: 2, borderColor: colors.tert, justifyContent: 'center', alignItems: "center"}}>
            <Text style={{fontSize: 19, fontWeight: '900', color: colors.primary}}>{number}</Text>
            <Text style={{fontSize: 16, fontStyle: "italic"}}>{yoruba}</Text>
        </Card>
    )
  }

  _renderViewPagerElement(){
    // const numberArr = this.props.numberObj.numbers;
    console.log(this.state.numbersArr)
    
     this.state.numbersArr.map((value, index) => {
      return (
        <View key={index}>
          <Text> {value.number}</Text>
        </View>
      )
    })
  }

  
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    isFetching: state.number.isFetching,
    numberObj: state.number.numberObj,
    selectedLevel: state.level.selectedLevel,
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchNumberLoading: ActionCreators.fetchNumberLoading
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Numbers)

const styles = StyleSheet.create({

})