import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

let token = localStorage.getItem('token')

 export function deleteItem(prodId)
{
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,{header:token})
}


export function updateItem (prodId,count)
{
    return axios.put (`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,{count},{header:token})
}


export default function useDeletupdatecart(fn)
{
    const queryClient = useQueryClient()

    return useMutation({mutationFn:fn,onSuccess:()=>{
        queryClient.invalidateQueries({ queryKey:['cart'] })

    }})
}
                   