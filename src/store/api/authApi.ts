import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AUTH_BASE_URL } from '../../utils/consts'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_BASE_URL,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: 'api/auth/login',
          method: 'post',
          body,
        }
      },
    }),
    registerUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: 'api/auth/register',
          method: 'post',
          body,
        }
      },
    }),
  }),
})

export const { useLoginUserMutation, useRegisterUserMutation } = authApi
