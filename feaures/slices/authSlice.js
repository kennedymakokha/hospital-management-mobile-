import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getObjData, storeData, storeOBJData } from "../../src/utils/AsyncStorageMethods";
const initialState = {

    userInfo: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            console.log("SENT DATA",action.payload)
            state.userInfo = action.payload;

            storeData('token', action.payload.token)
        },
        login: (state, action) => {

        },
        logout: (state, action) => {
            state.userInfo = null;
            // AsyncStorage.removeItem('userInfo')

        },

    }
})
export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
