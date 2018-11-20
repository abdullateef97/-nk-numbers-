import React from 'react';


import {Router, Stack, Scene,Drawer} from 'react-native-router-flux';
import InitComponent from './InitComponent';
import P1 from './components/Page1'

const Kernel = ({loaded}) => {
    return (
        <Router sceneStyle={{flex: 1}} >
            <Stack key="root">
            <Scene key="init" component={InitComponent} initial={!loaded} title="l"/>
            <Scene key="p1" component={P1} initial={loaded} title="ooo"/>
            </Stack>
        </Router>
    )
}

export default Kernel; 