import React from 'react';


import {Router, Stack, Scene,Drawer} from 'react-native-router-flux';
import InitComponent from './InitComponent';
import P1 from './components/Page1'

const Kernel = ({loaded}) => {
    return (
        <Router>
            <Stack>
            <Scene key="init" component={InitComponent} initial={!loaded}/>
            <Scene key="p1" component={P1} initial={loaded}/></Stack>
        </Router>
    )
}

export default Kernel; 