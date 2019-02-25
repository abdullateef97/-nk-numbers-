import React, { Component } from 'react'
import { Text, View, ViewPagerAndroid, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import {List} from 'react-native-elements'
import NumberObj from './NumberObjects'
import Loading from './_partials/Loading';
import NumberItem from './NumberItem'

 class NumbersViewPager extends Component {

    state = {
        pages : []
    }
    
    componentDidMount(){
        let pages = this.props.numberObj.numbers.map((value, index) => this._renderPageElement(value, index));
        this.setState({pages: pages})
    }
  render() {
    return (
      <View style={{flex: 1}}>
          {this._renderContent()}
      </View>
    )
  }

  _renderContent(){
      if(this.state.pages.length <= 0){
        return <Loading/>
      }
      return (
        <ViewPagerAndroid ref='viewPager' 
        initialPage={this.props.index}
        style={[{flex: 1}, {marginBottom: this.state.pages.length % 2 == 0 ? 1 : 0 }]}
        >
            {this.state.pages}
        </ViewPagerAndroid>
      )
  }

  _renderPageElement(pageItem, key){
      return (
        <View style={{flex: 1}}>
          <ScrollView>
            <List containerStyle={{borderBottomWidth :0,borderTopWidth : 0,marginTop:0,
            paddingBottom : 50}}>
            
                <View style={{flex: 1}}>
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
export default connect(mapStateToProps)(NumbersViewPager)