import {numbers_loading_failed, numbers_loading_start, numbers_loading_success} from './actionTypes';

const initState = {
    isFetching: true,
    numberObj: null,
    failed: false,
    err: ''   
}

export default (state = initState, actions) => {
    switch(actions.type){
        case numbers_loading_start:
            return {...state, ...actions.payload}
        case numbers_loading_success:
            return {...state, ...actions.payload}
        case numbers_loading_failed:
            return {...state,...actions.payload}
        default:
            return {...state}
    }
}