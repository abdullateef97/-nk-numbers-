
import {level_loading_start, level_loading_success, level_loading_failed, select_level} from './actionTypes';
import {getCurrentLevel, setLevel as setNewLevel} from '../../api/async'

const LevelLoadingStart = (dispatch) => {
    dispatch({
        type: level_loading_start,
        payload: {
            isLoadingLevel: true,
        }
    })
}

const LevelLoadingSuccess = (dispatch, activeLevel) => {
    dispatch({
        type: level_loading_success,
        payload: {
            isLoadingLevel: false,
            activeLevel: activeLevel
        }
    })
}

const SelectLevel = (dispatch, level) => {
    dispatch({
        type: select_level,
        payload: {
            selectedLevel: level
        }
    })
}

export const getLevel = () => {

    return dispatch => {
        LevelLoadingStart(dispatch);
        return getCurrentLevel().then(currentLev => {
            LevelLoadingSuccess(dispatch, currentLev)
        })
    }
};

export const setLevel = () => {
    return dispatch => {
        return setNewLevel().then(newLev => {
            LevelLoadingSuccess(dispatch, newLev)
        })
    } 
}

export const selectLevel = (level) => {
    return dispatch =>{
        SelectLevel(dispatch, level)
    }
}