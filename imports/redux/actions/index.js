/**
 ********* Action Types
 **/

export const CHANGE_IS_MOBILE = 'CHANGE_IS_MOBILE';
export const SET_USER = 'SET_USER';


/**
 ********* Action Creators
 **/


export function setUser({ user }) {
    return {
        type: SET_USER,
        user,
    };
}

export function changeIsMobile(isMobile) {
    return {
        type: CHANGE_IS_MOBILE,
        isMobile
    };
}
