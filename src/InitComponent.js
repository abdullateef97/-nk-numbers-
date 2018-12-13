import React, {Component} from 'react';
import {View, Text, ToastAndroid, StyleSheet, ProgressBarAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect,} from 'react-redux';
import {bindActionCreators} from 'redux'
import {addNumbers, } from './models/numberModel';
import {addQuiz} from './models/quizModel'
import Numbers from './db/numbers';
import Quiz from './db/quiz'
import ActionsCreators from './store/actions';
import {loadDb} from './api/async';
import colors from './api/colors';


class InitComponent extends Component {
    state = {
        stage : 'Ònkà'
    }
    componentDidMount(){
        setTimeout(() => {
            addNumbers(Numbers).then(() => {
                this.setState({stage: 'ìdánwò'})
                setTimeout(() => {
                    addQuiz(Quiz).then(() => {
                        loadDb();
                        this.props.setLevel();
                        Actions.main();
                    })
                },500)     
            }).catch(err => console.log('errrrr', err))
        }, 500)
    }
    render(){
        return(

            <View style={styles.containerStyle}>
                <Text style={styles.onka}>Ònkà Yorùbá</Text>
                <Text style={styles.number}>Yoruba Numerals</Text>

                <View style={styles.progressContainer}>
                    <Text style={{color: colors.tert, fontWeight: '400'}}>Eto awọn ikojọpọ -- {this.state.stage}</Text>
                    <ProgressBarAndroid styleAttr="Horizontal" style={{width: '100%', marginTop: 10}}/>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    onka: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 9,
        color: colors.white,
        marginBottom: 8
    },
    number: {
        fontSize: 17,
        fontWeight: '400',
        letterSpacing: 4,
        color: colors.tert
    },
    progressContainer: {
        marginTop: 140,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setLevel: ActionsCreators.setLevel
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(InitComponent);