import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
export default function Brands() {

//  function getBrands(){
// return axios.get('https://ecommerce.routemisr.com/api/v1/brands')

//  } 
// let{data,isLoading,isError,error,refetch} = useQuery({queryKey:['brands'],
//   queryFn:getBrands,
//   enabled:true

// })
// console.log(data);
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:1000,
  arrows:false,

};
let [brands,setBrands] = useState ([])
 async function getBrands()
{
  let{data} =  await axios.get('https://ecommerce.routemisr.com/api/v1/brands')

  setBrands(data.data)
}
useEffect(()=>{
  getBrands()
},[])
console.log(brands)
return (
  <div className='container hidden lg:block my-10 ' >
  <Slider {...settings} >
  {brands.map(ele=><CatItem  key={ele._id } ele={ele}></CatItem>)}

    </Slider>  

  </div>
)
  
 
}
function CatItem({ele})
{
return <img src={ele.image} className='h-[200px] object-cover' alt="" />
}