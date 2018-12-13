import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card} from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux'
import constants from '../api/constants';
import ActionCreators from '../store/actions';
import * as IconNames from '../api/IconNames'
import colors from '../api/colors'

 class Levels extends Component {

  render() {
    return (
        <View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {this._renderLevelsContent()}
                    <View
                    style={{height: 25, flex: 1}}
                    />
            </ScrollView>
        </View>
    )
  }

  _renderLevelsContent(){
      const {activeLevel} = this.props.level
      const NO_OF_LEVELS = constants.number_of_levels;

      return Array.from(new Array(NO_OF_LEVELS), (val, index) => index+1).map((val, index) => {
          if(index + 1 <= activeLevel){
              return this._renderLevel(index+1, true);
          }
          return this._renderLevel(index+ 1, false)
      })

  }

  _renderLevel(index, unlocked){
    return(
        <TouchableOpacity onPress={() => Actions.p1()} activeOpacity={0.8}>
        <Card >
            <View>
                <Text style={styles.text}> Ìpele {constants.levels[index]}</Text>
                <View style={styles.icon}>
                    {unlocked === true ?  <Icons name={IconNames.UNLOCKED} size={18} color={colors.primaryLight}/> : <Icons name={IconNames.LOCK} size={18} color={colors.primaryLight} />}
                </View>
            </View>
        </Card>
        </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => {
    return {
        level: state.level
    }
}

const mapDispatchToProp = (dispatch) => {
    return bindActionCreators({
        getLevel: ActionCreators.getLevel
    }, dispatch)
}

const styles = StyleSheet.create({
    
    scrollView: {
        // marginBottom: 20,
        // marginHorizontal: 20
    },
    icon: {
       alignSelf: 'flex-end'
    },
    text: {
        fontSize: 19,
        fontWeight: '400',
    }
})

export default connect(mapStateToProps, mapDispatchToProp)(Levels)