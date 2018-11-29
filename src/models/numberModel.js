import Realm from 'realm';
// import {dbOptions} from './dbOption'
import {quizListSchema, arithSchema} from './quizModel'

export const NUMBER_LEVELS_LIST = "number_levels_list";
export const NUMBER_ITEM  = "number_item";


export const numberListSchema = {
    name: NUMBER_LEVELS_LIST, 
    primaryKey: "level",
    properties: {
        level: "int",
        unlocked: 'bool',
        numbers: {type: 'list', objectType: NUMBER_ITEM}
    }
}

export const numberSchema = {
    name: NUMBER_ITEM,
    primaryKey: "number",
    properties: {
        number: 'int',
        yoruba: 'string',
        explanation: 'string',
        alaye: 'string',
        ekun: {type: 'string', default: ''}
    }
}

const dbOptions = {
    path: 'oonka_number.realm',
    schema: [ numberListSchema, numberSchema],
    schemaVersion: 0
};


export const addNumbers = numbers => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            numbers.forEach(number => {
                realm.create(NUMBER_LEVELS_LIST, number)
            })
            return resolve();
        })
    }).catch(err => reject(err));
    
})


export const fetchNumbers = () => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let numbers = realm.objects(NUMBER_LEVELS_LIST);
            return resolve(numbers);
        })
    })
})

export const fetchLevel = (level) => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let number = realm.objectForPrimaryKey(NUMBER_LEVELS_LIST, level);
            return resolve(number)
        })
    }).catch(err => reject(err))
})

export const unLockLevel = (level) => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let number = realm.objectForPrimaryKey(NUMBER_LEVELS_LIST, level);
            number.unlocked = true;
            return resolve(number);
        })
    }).catch(err => reject(err))
})


