import {combineReducers} from 'redux';
import levelRed  from '../data/level/reducers';
import NumbersReducer from '../data/numbers/reducers';

const test = (state = {}, action) => {
    switch(action.type){
        default:
            return state
    }
}

 export default combineReducers({
    level : levelRed,
    number: NumbersReducer
})

