import React from 'react'



import InitComponent from '../InitComponent';
import P1Component from '../components/Page1';
import LevelsComponent from '../components/Levels';
import NumberComponent from '../components/Numbers'
import BaseNumber from './BaseNumbers'


export const Init = () => <InitComponent/>
export const P1 = () => <P1Component/>
export const LevelScene = () => <LevelsComponent/>
export const NumbersScene = (props) =>  (<BaseNumber ><NumberComponent /></BaseNumber>)