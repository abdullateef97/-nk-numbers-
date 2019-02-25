import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card} from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux'
import constants from '../api/constants';
import Loading from './_partials/Loading';
import NumberObjects from './NumberObjects'
import ActionCreators from '../store/actions';
import * as IconNames from '../api/IconNames'
import colors from '../api/colors'
import FAB from 'react-native-fab'

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
      return (
        <View style={{flex: 1, flexDirection: 'row', }}>
          <FlatList
          data={this.state.numbersArr}
          renderItem = {
            ({item, index}) => this._renderFlatListItem(item, index)      }
          keyExtractor = {(item) => item.number.toString()}
          numColumns={2}
          />
          <View
            style={{height: 25, flex: 1}}
            />
          <FAB 
          buttonColor={colors.primaryLight}
          iconTextColor={'black'}
          iconTextComponent= {<Icons name={IconNames.FORWARD}/>}
          onClickAction = {() => Actions.numbers_pager({index: 0})}
          />
        </View>
      )
    }
    
  }

  _renderFlatListItem(item, index){
    const {number, yoruba} = item
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => Actions.numbers_pager({index: index})} style={{ borderRightColor: 'blue', borderRightWidth: 2}}>
        <Card containerStyle={{ flex: 1,justifyContent: 'center', alignItems: "center", borderWidth: 3, borderColor: colors.tert,}}>
            <Text style={{fontSize: 19, fontWeight: '900', color: colors.primary}}>{number}</Text>
            <Text style={{fontSize: 16, fontStyle: "italic"}}>{yoruba}</Text>
        </Card>
      </TouchableOpacity>
    )
  }

  _renderViewPagerElement(){
    // const numberArr = this.props.numberObj.numbers;
    
     this.state.numbersArr.map((value, index) => {
      return (
        <View key={index}>
            <NumberObjects count={value}/>
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