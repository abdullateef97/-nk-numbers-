import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card, Icon} from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-elements';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import constants from '../api/constants';
import ActionCreators from '../store/actions';
import * as IconNames from '../api/IconNames'
import colors from '../api/colors'

 class Levels extends Component {

    state = {
        isModalVisible: false
    }
  render() {
    return (
        <View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {this._renderLevelsContent()}
                    {this._renderModal()}
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
          if(index+1 === activeLevel){
              return this._renderLevel(index+1, true, true)
          }
          if(index + 1 < activeLevel){
              return this._renderLevel(index+1, true,false);
          }
          return this._renderLevel(index+ 1, false, false)
      })

  }

  _renderModal(){
    return (
        <Modal isVisible={this.state.isModalVisible}
                    onBackdropPress={() => this.setState({isModalVisible: false})}
                    onBackButtonPress={() => this.setState({isModalVisible: false})}
                    style={{ marginVertical: 130, padding: 20, marginHorizontal: 35, backgroundColor: 'white'}}
                    >
                        <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                            <View style={styles.modalViewStyle}>
                                <Icons name={IconNames.LOCK} size={25} color={colors.primary}/>
                                <Text style={styles.modalText}> Ìpele kò sí ní sísí </Text>
                            </View>

                            <Button
                                raised large backgroundColor={colors.primary}
                                title= "Pa àgbéjáde dé"
                                onPress={() => this.setState({isModalVisible: false})}
                                fontWeight= 'bold' fontSize={19}
                            />
                        </View>
                    </Modal>
      )
  }

  _renderLevel(index, unlocked, active){
      const style = active ? styles.activeLevel: null
    return(
        <TouchableOpacity onPress={() => this._onPress(index, unlocked) } activeOpacity={0.8}>
        <Card containerStyle={style}>
            <View>
                <Text style={styles.text}> Ìpele {constants.levels[index]}</Text>
                <View style={styles.icon}>
                    {unlocked === true ?  <Icons name={IconNames.UNLOCKED} size={18} color={colors.primary}/> : <Icons name={IconNames.LOCK} size={18} color={colors.primary} />}
                </View>
            </View>
        </Card>
        </TouchableOpacity>
    )
  }

  _onPress(index,unlocked){
    //   if(unlocked){
        this.props.selectLevel(index)
        Actions.numbers()
    //   }else{
    //       this.setState({isModalVisible: true})
    //       return null;
    //   }
  }
}

const mapStateToProps = state => {
    return {
        level: state.level
    }
}

const mapDispatchToProp = (dispatch) => {
    return bindActionCreators({
        getLevel: ActionCreators.getLevel,
        selectLevel: ActionCreators.selectLevel
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
    },
    modalViewStyle: {
        flexDirection: 'row',
        marginBottom: 25
    },
    modalText: {
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 10
    },
    activeLevel: {
        borderWidth: 4,
        borderColor: colors.primaryLight
    }
})

export default connect(mapStateToProps, mapDispatchToProp)(Levels)