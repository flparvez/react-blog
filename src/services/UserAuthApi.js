import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://flparvez.up.railway.app/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'api/user/register/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'api/user/login/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    getLoggedUser: builder.query({
      query: (access_token) => {
        return {
          url: 'api/user/profile/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
   


    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: 'api/user/changepassword/',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'api/user/send-reset-password-email/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `api/user//reset-password/${id}/${token}/`,
          method: 'POST',
          body: actualData,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    addPost: builder.mutation({
      query: (candidate) => {
        return {
          url: 'api/blogs/',
          method: 'POST',
          body: candidate
        }
      }
    }),
    getBlog: builder.query({
      query: () => {
        return {
          url: 'api/blogs/',
          method: 'GET'
        }
      }
    }),
    editPost: builder.mutation({
      query: (candidate) => {
        const { id, ...data } = candidate
        return {
          url: `api/blogs/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
           }
        }
      }
    }),
    

  }),

 


})

export const { useRegisterUserMutation, useLoginUserMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation, useSendPasswordResetEmailMutation, useResetPasswordMutation,useAddPostMutation, useGetBlogQuery, useEditPostMutation } = userAuthApi