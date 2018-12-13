import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card} from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons'
import constants from '../api/constants';
import ActionCreators from '../store/actions';
import * as IconNames from '../api/IconNames'
import colors from '../api/colors'

 class Levels extends Component {

  render() {
    return (
        <View>
            <ScrollView style={styles.scrollStyle} showsVerticalScrollIndicator={false}>
                    <View style={styles.ipeleViewStyle}>
                        <Text style={styles.ipeleTextStyle}>
                        Ìpele 
                        </Text>
                    </View>
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
        <View>
            <View style={styles.itemView}>
                <View style={styles.icon}>
                    {unlocked === true ?  <Icons name={IconNames.UNLOCKED} size={18} color={colors.primaryLight}/> : <Icons name={IconNames.LOCK} size={18} color={colors.primaryLight} />}
                </View>
                <Text style={styles.text}> Ìpele {constants.levels[index]}</Text>
            </View>
                <View
                    style={{
                        flex:1,
                        width: '100%',
                        marginVertical: 15,
                        height: 1,
                        backgroundColor: 'black'
                    }}
                />
            </View>
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
    
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
       marginRight: 6
    },
    text: {
        fontSize: 19,
        fontWeight: '400',
    },
    scrollStyle: {
    },
    ipeleViewStyle: {
        height: 90,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        marginBottom: 15
    },
    ipeleTextStyle: {
        color: 'black',
        letterSpacing: 9,
        fontSize: 17
    }
})

export default connect(mapStateToProps, mapDispatchToProp)(Levels)