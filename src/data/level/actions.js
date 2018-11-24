
import {Db_loading_start, Db_loading_success, Db_loading_failed} from './actionTypes';

const DbLoadingStart = (dispatch) => {
    dispatch({
        type: Db_loading_start,
        payload: {
            isLoading: true,
            loaded: false
        }
    })
}