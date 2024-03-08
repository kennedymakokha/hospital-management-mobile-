import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getData } from '../../src/utils/AsyncStorageMethods'
const getAuth = async () => {
    return await getData("token")

}
const baseQuery = fetchBaseQuery({
    baseUrl: "https://76da-102-0-0-243.ngrok-free.app/",
    headers: { Authorization: `Bearer ${getAuth}` },
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})