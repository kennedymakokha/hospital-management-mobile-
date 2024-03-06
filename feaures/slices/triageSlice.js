import { apiSlice } from "./apiSlice";
const USER_URL = "/api/triage";

export const triageApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       
        getTriageByPatient: builder.query({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
            })
        }),
      
    })
})

export const { useCreateTriageMutation,useGetAllTriageByPatientQuery, useDeleteTriageMutation, useFetchTriageQuery, useGetTriageByPatientQuery, useUpdateTriageMutation } = triageApiSlice