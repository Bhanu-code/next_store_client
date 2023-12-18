
import { loginFail, loginStart, loginSuccess, logOut } from './userRedux';
import { publicRequest } from '../pages/requestMethods';
// import { useDispatch } from 'react-redux';


export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
        console.log(res.data)
    } catch (error) {
        dispatch(loginFail())
    }
}

export const register = async (user) => {

    try {
        const res = await publicRequest.post('/auth/register', user)
        console.log(res);
        // return res;
    } catch (error) {
        console.log(error);
    }
}

export const logout = (dispatch) => {
    dispatch(logOut());
}
