import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
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
import FAB from 'react-native-fab'

class NumberObjects extends Component{

    render(){
        const {count} = this.props;
        return(
            <View style={styles.viewStyle}>
                {this._renderObjects(count)}
            </View>
        )
    }

    _renderObjects(count){
        if(count < 15){
            return Array.from(new Array(count), (val, index) => index+1).map((val, index) => {
                return <Icons name={IconNames.FOOTBALL} size= {17} />
            })
        }
    }


}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
})

export default NumberObjects
