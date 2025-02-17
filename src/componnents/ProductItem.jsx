import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { Link, useMatch } from 'react-router-dom'
import useMutationCart from '../hoooks/useMutationCart'

export default function ProductItem({prod}) {

  
    let { imageCover,titel,price,category,id,ratingsAverage,priceAfterDiscount} = prod
    
  let {mutate, data,isSuccess,isError,error}= useMutationCart()

  if(isSuccess)
 toast.success(data?.data?.message);
 
 if(isError)
 toast,error(error?.response?.date?.message);


 

return (

    <div className='lg:w-1/6 md:w-1/3 sm:w-1/2 w-full p-4 product ' >
      <Link to={`/Productdetails/${id}/${category?._id}`} className ='cursor-pointer'>
        <img src={imageCover} className='w-full' alt="" />
        <p className='text-green-color font-bold text-sm my-2' >{category.name} </p>
        <p className='line-clamp-1' >{titel}</p>
        <div className='felx justify-between my-4 ' >
          <div>
            <p className={priceAfterDiscount&&'line-through'}>{price} EGP </p>
          </div>
          <p>{priceAfterDiscount && priceAfterDiscount+'EGP'}  </p>
          <div>
            <div>
              <p> {ratingsAverage} <i className='fa-solid fa-star text-rating-color'></i> </p>
              <p> <i className='fa-solid fa-heart text-rating-color'></i> </p>
            </div>

          </div>

        </div>
      </Link>
      <button onClick={()=>{mutate(id)}} className='btn bg-green-color p-3 text-white rounded '>add to cart</button>
      <button onClick={()=>{mutate(id)}} className='btn bg-green-color p-3 text-white rounded '>wishlist</button>

    </div>
    )
  
}
  

