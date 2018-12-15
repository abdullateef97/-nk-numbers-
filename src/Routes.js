import React from 'react';


import {Router, Stack, Scene,Drawer} from 'react-native-router-flux';
import colors from './api/colors'
import {Init,P1, LevelScene, NumbersScene} from './containers/kernel';
import DrawerContainer from './components/Drawer';
import Icons from 'react-native-vector-icons/Ionicons';
import * as IconNames from './api/IconNames'

const menuIcon = () => <Icons name={IconNames.MENU} size={23}/>

const Kernel = (props) => {
    return (
        <Router sceneStyle={{flex: 1}} navigationBarStyle={{backgroundColor : colors.primary}} headerMode="screen">
            <Stack key="root">
                <Scene key="init" component={Init} initial={!props.loaded} hideNavBar={true}/>

                <Stack key="main" initial={props.loaded} hideNavBar={true}>
                    {/* <Drawer
                    key="drawer"
                    contentComponent={DrawerContainer}
                    drawerWidth={250}
                    drawerIcon={menuIcon}
                    > */}
                        <Scene key="levels" component={LevelScene}  title="Ìpele" hideNavBar={false}/>
                        <Scene key="numbers" component={NumbersScene} hideNavBar={false} title="Ònkà" />
                    {/* </Drawer> */}
                </Stack>
            </Stack>
        </Router>
    )
}

export default Kernel; 