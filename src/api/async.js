import React from 'react';

import {AsyncStorage} from 'react-native';

const key = "OOnka__opeit98iog_-db";
const levelKey = "OOnka__opeit98iog_-level";

export const getCurrentLevel = async () => {
    try {
        const currentLevel = await AsyncStorage.getItem(levelKey);
        if(!currentLevel) return null;
        return (JSON.parse(currentLevel).level);
    }catch(err){
        console.log('err getting current level', err)
    }
}

export const setLevel = async () => {
    let currentLevel = await getCurrentLevel();
    if(!currentLevel) currentLevel = 0
    
        let newLevel = currentLevel+1;
        await AsyncStorage.setItem(levelKey, JSON.stringify({level: newLevel}));
        return newLevel
    
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