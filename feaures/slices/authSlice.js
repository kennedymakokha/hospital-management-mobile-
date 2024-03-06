import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
    // user: ,
    userInfo: AsyncStorage.getItem("userInfo") ? JSON.parse(AsyncStorage.getItem("userInfo")) : null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            AsyncStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        login: (state, action) => {

        },
        logout: (state, action) => {
            state.userInfo = null;
            AsyncStorage.removeItem('userInfo')

        },

    }
})
export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
