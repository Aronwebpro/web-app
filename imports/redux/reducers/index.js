import { combineReducers } from 'redux';

import {
    CHANGE_IS_MOBILE,
    SET_USER,
} from '../actions';


function isMobile(state = false, action) {
    switch (action.type) {
        case CHANGE_IS_MOBILE:
            return action.isMobile;
        default:
            return state;
    }
}

function userState(
    state = {
        user: undefined,
    },
    action
) {
    switch (action.type) {
        case SET_USER :
            return {
                user: action.user,
            };
        default:
            return state;
    }
}

export default combineReducers({
    isMobile,
    userState,
});