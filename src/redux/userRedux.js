import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload.username;
            state.error = false;
            document.cookie = `jwt=${action.payload.accessToken}`
            toast.success('Successfully logged in', {
                position: toast.POSITION.TOP_CENTER,
            });
            window.location.href = '/';

        },
        loginFail: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logOut: (state) => {
            state.isFetching = false;
            state.currentUser = null;
            state.error = false;
            document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            alert('logged out');
        },
    },
});

export const { loginStart, loginSuccess, loginFail, logOut } = userSlice.actions
export default userSlice.reducer;