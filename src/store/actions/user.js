import * as actionTypes from '../constants/actionTypes'

export const login = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.USER_LOGIN,
            data: {
                id: 1,
                username: 'ydc',
                age: 23
            }
        })
    }
}
