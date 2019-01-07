import React, { Component } from 'react'
import { Text, View, ViewPagerAndroid } from 'react-native';
import {connect} from 'react-redux';
import NumberObj from './NumberObjects'
import Loading from './_partials/Loading'

 class NumbersViewPager extends Component {

    state = {
        pages : []
    }
    
    componentDidMount(){
        let pages = this.props.numberObj.numbers.map((value, index) => this._renderPageElement(value, index));
        this.setState({pages: pages})
    }
  render() {
      console.log(this.state.pages)
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
          <View style={{flex: 1}} key={key}>
            <View style={{height: 150}}>
              <NumberObj count={pageItem.number}/>
            </View>
            <View>
                
            </View>
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