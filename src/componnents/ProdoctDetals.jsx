import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';

export default function ProdoctDetals() {

    let {id,catid} = useParams()

    let [loding,setLoding] = useState([])
    let [productObj,setProductObj] = useState({})
    let [imgSrc,setImgSrc] = useState('')
    let [ProductArr,setProductArr] = useState([])


function changeSrc (e)
{
   setImgSrc(e.target.src);
}

async function getProductDetails (){

    setLoding(true)
   try {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`) 

    setProductObj(data.data);
    setLoding(false)
    
   } catch (error) {
   
    console.log(error);
    setLoding(false)
     
   }
}

async function getRelativeProducts (){

  setLoding(true)
 try {
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${catid}`) 

  setProductArr(data.data);
  setLoding(false)
  
 } catch (error) {
 
  console.log(error);
  setLoding(false)
   
 }
}
useEffect(()=>{
  getRelativeProducts()
},[])

useEffect(()=>{
  getProductDetails()
  
},[id])

  return (
    <div className='container'>
        <div className=" flex gap-4 items-center ">

            <div className='w-1/3'>
            <img src={ imgSrc?imgSrc:productObj?.imageCover} className='w-full' alt="" />
            
            <div className='flex gap-3' >
                {productObj?.images?.map(img=><img onClick={changeSrc}  src={img} className='w-[20%] cursor-pointer ' key={img} />)}
            </div>
            </div>
            
            <div className='w-2/3'>
              <h2 className='text-[2rem] my-3 font-bold' >{productObj?.title}</h2>
              <p>{productObj?.description}</p>
              <div className='flex justify-betwee ' >
                <div>
                    <p className='text-green-color font-bold text-sm ' >{productObj?.category?.name} </p>
                    <p>{productObj?.price}EGP </p>
                    
                </div>
                <div>
                    <p> {productObj?.ratingsAverage} <i className='fa-solid fa-star text-rating-color' ></i> </p>
                </div>

              </div>
              <button className='bg-green-color w-full my-5 rounded p-3 ' >add to cart </button>

            </div>

        </div>
        <div className="flex flex-wrap my-4">
        {ProductArr.map(prod=><ProductItem key={prod._id} prod={prod} ></ProductItem>)}
        </div>
    </div>
  )
}
