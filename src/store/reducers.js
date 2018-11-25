import {combineReducers} from 'redux';
import levelRed  from '../data/level/reducers';

const test = (state = {}, action) => {
    switch(action.type){
        default:
            return state
    }
}

 export default combineReducers({
    level : levelRed
})

