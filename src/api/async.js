import React from 'react';

import {AsyncStorage} from 'react-native';

const key = "OOnka__opeit986ihhi";

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