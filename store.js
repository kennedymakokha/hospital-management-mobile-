import { configureStore } from '@reduxjs/toolkit'
import authReducer from './feaures/slices/authSlice.js'
import { apiSlice } from './feaures/slices/apiSlice.js'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
   
})
