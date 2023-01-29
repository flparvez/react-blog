// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogdetails',
  baseQuery: fetchBaseQuery({ baseUrl: `http://127.0.0.1:8000/blog-api/` }),
  endpoints: (builder) => ({

    getBlogData: builder.query({
      query: () => {
        return {
          url: `blogs/`,
          method: 'GET',
          // headers: {
          //   'Content-Type': 'application/json',

          // }
        }
      }
    }),

    

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogDataQuery } = blogApi