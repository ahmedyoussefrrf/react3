import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function Brands() {

 function getBrands(){
return axios.get('https://ecommerce.routemisr.com/api/v1/brands')

 } 
let{data,isLoading,isError,error,refetch} = useQuery({queryKey:['brands'],
  queryFn:getBrands,
  enabled:true

})
console.log(data);

  return (
    <div>
    <h1 onClick={refetch} >Brands</h1>
    
      { data?.data.map((brands) => 
        <p key={brands._id}>{brands.name}</p>
        
      )}
      
  
  </div>
    
  )
  
 
}
