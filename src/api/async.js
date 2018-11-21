import React from 'react';

import {AsyncStorage} from 'react-native';

const key = "OOnka__opeit98iogk6ihhi_-db";
const levelKey = "OOnka__opeit98iogk6ihhi_-level";

export const getCurrentLevel = async () => {
    try {
        const currentLevel = await AsyncStorage.getItem(levelKey);
        return (JSON.parse(currentLevel).level);
    }catch(err){
        console.log('err getting current level', err)
    }
}

export const setLevel = async () => {
    const currentLevel = await getCurrentLevel();
    if(currentLevel){
        let newLevel = currentLevel+1;
        return AsyncStorage.setItem(levelKey, JSON.stringify({level: newLevel}));
    }
    return;
}
export const loadDb = () => {
    return AsyncStorage.setItem(key, JSON.stringify(true));
}

export const isDbLoaded = async () => {
    try {
        const loaded = await AsyncStorage.getItem(key);
        if(loaded && JSON.parse(loaded)) return true;
        return false;
    }catch(error){
        console.log('error checking if DB is Loaded')
    }
}