import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://northwind.vercel.app/api/products/'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl
  }),
  endpoints: builder => ({
    getAllProduct: builder.query({
      queryKey: 'getAllProduct',
      query: () => '/'
    })
  })
})

export const { useGetAllProductQuery } = productApi
