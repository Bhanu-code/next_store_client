
import { loginFail, loginStart, loginSuccess, logOut } from './userRedux';
import { publicRequest } from '../pages/requestMethods';
// import { useDispatch } from 'react-redux';


export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail())
    }
}

export const logout = (dispatch) => {
    dispatch(logOut());
}