import { useQuery } from '@tanstack/react-query'

import React from 'react'
import Loding from '../componnents/Loding'
import ProductItem from './ProductItem'
import useProducts, { getProduct } from './../hoooks/useProducts';



export default function products() {


  let {data,isError,error,isLoading} = useProducts('products',getProduct)
 if(isLoading)
  return <Loding></Loding>
 
  return (
    <div className='flex flex-wrap' >
      {data?.map(prod=><ProductItem prod={prod} key={prod?._id}></ProductItem>)}
    </div>
  )
}
