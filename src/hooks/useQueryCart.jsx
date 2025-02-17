import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


export default function useQueryCart() {

    let token = localStorage.getItem('token')

 function getCart()
 {
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{headers:{token}})
 }
  
 return useQuery({queryKey:['cart'],queryFn:getCart})

  
}
