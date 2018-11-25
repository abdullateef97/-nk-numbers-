import Realm from 'realm';
// import {dbOptions} from './dbOption'
import {numberListSchema, numberSchema} from './numberModel'
export const QUIZ_LEVELS_LIST = "quiz_levels_list";
export const QUIZ_ITEM  = "quiz_item";
export const OPTIONS ='options';



export const quizListSchema = {
    name: QUIZ_LEVELS_LIST, 
    primaryKey: "level",
    properties: {
        level: "int",
        unlocked: 'bool',
        arithmetic: {type: 'list', objectType: QUIZ_ITEM}
    }
}

export const arithSchema = {
    name: QUIZ_ITEM,
    primaryKey: "exp",
    properties: {
        exp: 'string',
        options: {type: 'list', objectType: 'string'},
        correctOption: 'int'
    }
}
export const optionSchema = {
    name : OPTIONS,
    primaryKey: 'a',
    properties: {
        a: 'string',
        b:'string',
        c:'string',
        d:'string',
    }
}
const dbOptions = {
    path: 'oonka.realm',
    schema: [quizListSchema, arithSchema],
    schemaVersion: 0
};


export const addQuiz = quiz => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            quiz.forEach(ari => {
                realm.create(QUIZ_LEVELS_LIST, ari);
            })
        })
        return resolve();
    }).catch(err => reject(err));
})


export const fetchQuiz = () => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let quiz = realm.objects(QUIZ_LEVELS_LIST);
            return resolve(quiz);
        })
    }).catch(err => reject(err))
})

export const fetchQuizLevel = level => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let quizLevel = realm.objectForPrimaryKey(QUIZ_LEVELS_LIST, level);
            return resolve(quizLevel);
        })
    }).catch(err => reject(err));
})


export const unLockQuizLevel = level => new Promise((resolve, reject) => {
    Realm.open(dbOptions).then(realm => {
        realm.write(() => {
            let quizLevel = realm.objectForPrimaryKey(QUIZ_LEVELS_LIST, level);
            quizLevel.unlocked = true;
            return resolve(quizLevel);
        })
    }).catch(err => reject(err));
})

