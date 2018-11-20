import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {addNumbers, fetchNumbers} from './models/numberModel';
import Numbers from './db/numbers';
import {} from './api/async';


class InitComponent extends Component {
    componentDidMount(){
        fetchNumbers().then((no) => {
            console.log('90', no)
            Actions.p1();
        }).catch(err => console.log('errrrr', err))
    }
    render(){
        return(        
            <View>
                <Text>olooofoog</Text>
                <Text>olooofoog</Text>
                <Text>olooofoog</Text>
                <Text>olooofoog</Text>
                <Text>olooofoog</Text>
            </View>
        )

    }
}

export default InitComponent;