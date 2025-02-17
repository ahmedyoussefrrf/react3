import axios from 'axios'
import products from './Products'
import ProductItem from './ProductItem'
import Loding from './Loding'
import { useQuery } from '@tanstack/react-query'
import useProducts, { getProduct } from '../hoooks/useProducts'

export default function Featuredproducts() {
    
   


  let {data,isError,error,isLoading} = useProducts('products',getProduct)

 if(isLoading)
  return <Loding></Loding>
  return (
    <div className="container">
        <div className='flex flex-wrap' >
            {data?.map(prod=><ProductItem key={prod._id} prod={prod} ></ProductItem>)}

        </div>
    </div>
  )
} 
