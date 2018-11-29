import React from 'react';


import {Router, Stack, Scene,Drawer} from 'react-native-router-flux';
import colors from './api/colors'
import {Init,P1} from './containers/kernel'

const Kernel = ({loaded}) => {
    return (
        <Router sceneStyle={{flex: 1}} navigationBarStyle={{backgroundColor : colors.primary}} headerMode="screen" titleStyle={{color: 'white'}}>
            <Stack key="root">
                <Scene key="init" component={Init} initial={!loaded} hideNavBar={true}/>

                <Stack key="main" initial={loaded} hideNavBar={true}>
                    <Scene key="p1" component={P1}  title="ooo" hideNavBar={false}/>
                </Stack>
            </Stack>
        </Router>
    )
}

export default Kernel; 