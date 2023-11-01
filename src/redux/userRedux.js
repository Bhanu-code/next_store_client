import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers:{
        loginStart: (state)=>{
           state.isFetching = true;
        },
        loginSuccess: (state, action)=>{
           state.isFetching = false;
           state.currentUser = action.payload;
           toast.success('Successfully logged in', {
            position: toast.POSITION.TOP_CENTER,
           });
           
        },
        loginFail: (state)=>{
           state.isFetching = false;
           state.error = true;
        },
        logOut: (state)=>{
            state.isFetching = false;
            state.currentUser = null;
            state.error = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFail, logOut } = userSlice.actions
export default userSlice.reducer;