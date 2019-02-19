import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity, FlatList,
Image } from 'react-native';
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
        console.log('count', count)
        return(
            <View style={styles.viewStyle}>
                {this._renderObjects(count)}
            </View>
        )
    }

    _renderObjects(count){
        console.log('count1', count)
        if(count <= 15){
            
            return Array.from(new Array(count), (val, index) => index+1).map((val, index) => {
                return (
                <View style={{padding: 7}}>
                <Icons name={IconNames.FOOTBALL} size= {40} color={colors.primaryLight} />
                </View>
                )
            })
        }else{
            let main = Math.floor(count / 5);
            let rem = count % 5;

            console.log('main', main, ' ', rem)
            return this._renderMain(main)
            // this._renderRem(rem)
        }
    }

    _renderMain(main){
        console.log('main', main)
        return Array.from(new Array(main), (val, index) => index+1).map((val, index) => {
            console.log(index, 'ind', val)
            return (
            <View style={{padding: 7}}>
                <Image
                    source={require('../icons/five.png')}
                    style={{width: 40, height: 40}}
                />
                {/* <Icons name={IconNames.FOOTBALL} size= {40} color={colors.primary} /> */}

            </View>
            )
        })
    }

    _renderRem(rem){
        if(rem <= 0) return null
           return Array.from(new Array(rem), (val, index) => index+1).map((val, index) => {
                return this._remImg(rem)
            })
        
    }

    _remImg(rem){
        switch(rem){
            case 1:
            return (
                <View style={{padding: 7}}>
                    <Image
                        source={require('../icons/one.png')}
                        style={{width: 30, height: 30}}
                    />
                </View>
                )
            case 2:
            return (
                <View style={{padding: 7}}>
                    <Image
                        source={require('../icons/two.png')}
                        style={{width: 30, height: 30}}
                    />
                </View>
                )
            case 3:
            return (
                <View style={{padding: 7}}>
                    <Image
                        source={require('../icons/three.png')}
                        style={{width: 30, height: 30}}
                    />
                </View>
                )
            case 4:
            return (
                <View style={{padding: 7}}>
                    <Image
                        source={require('../icons/four.png')}
                        style={{width: 30, height: 30}}
                    />
                </View>
                )
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
