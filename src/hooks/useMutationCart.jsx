import { useMutation } from '@tanstack/react-query'
import axios from 'axios'


export default function useMutationCart() {
    let token = localStorage.getItem('token')

    function addTocart(productId)
    {
      return axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId},{
        headers:{
          token
        }
      })
    }
    return useMutation ({mutationFn:addTocart})

 
}
