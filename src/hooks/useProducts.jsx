import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


export function getProduct()
    {
      return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }


export default function useProducts(key,fn) {

    
    return useQuery({queryKey:[key],queryFn:fn,
        select:(data)=>data?.data?.data,
    })
      
 
}
