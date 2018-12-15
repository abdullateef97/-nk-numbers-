
import {numbers_loading_failed, numbers_loading_success, numbers_loading_start} from './actionTypes';
import {fetchNumber} from '../../models/numberModel'

const numberFetchingStart = dispatch => {
    dispatch({
        type: numbers_loading_start,
        payload: {
            isFetching: true,
            failed: false,
        }
    })
}

const numberFetchingSuccess = (dispatch, numberObj) => {
    dispatch({
        type: numbers_loading_success,
        payload: {
            isFetching: false,
            numberObj: numberObj,
            failed: false
        }
    })
}

const numberFetchingFailed = (dispatch, err) => {
    dispatch({
        type: numbers_loading_failed,
        payload: {
            isFetching: false,
            failed: true,
            error: err
        }
    })
}

export const fetchNumberObj = level =>{
    return (dispatch) => {
        numberFetchingStart(dispatch);
        return fetchNumber(level).then(numberObj => numberFetchingSuccess(dispatch, numberObj))
            .catch(err => numberFetchingFailed(dispatch, err))
    }
}

export const fetchNumberLoading = () => {
    return dispatch => {
        numberFetchingStart(dispatch)
    }
}