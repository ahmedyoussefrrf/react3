import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

export default function Categoris() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false,

  };
let [cats,setCats] = useState ([])
 async function getcat()
{
  let{data} =  await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
setCats(data.data)
}
useEffect(()=>{
  getcat()
},[])


  return (
    <div className='container hidden lg:block my-10 ' >
    <Slider {...settings} >
    {cats.map(ele=><CatItem  key={ele._id } ele={ele}></CatItem>)}

      </Slider>  

    </div>
  )
}

function CatItem({ele})
{
return <img src={ele.image} className='h-[200px] object-cover' alt="" />
}