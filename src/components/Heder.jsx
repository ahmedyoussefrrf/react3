import React from 'react'
import Slider from 'react-slick'

import slider1 from '../../../finalProject assets/finalProject assets/images/slider-image-1.jpeg'
import slider2 from '../../../finalProject assets/finalProject assets/images/slider-image-2.jpeg'
import slider3 from '../../../finalProject assets/finalProject assets/images/slider-image-3.jpeg'
import plog1 from '../../../finalProject assets/finalProject assets/images/blog-img-1.jpeg'
import plog2 from '../../../finalProject assets/finalProject assets/images/blog-img-2.jpeg'

export default function Heder() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,

      };
  return (


    <header className=' hidden lg:block  mb-10 mt-8 dark:bg-black dark: text-white  ' >
        <div className='container'>
            <div className="flex">
                <div className="w-2/3">
                <Slider {...settings} >
                    <img className='h-[500px] object-cover '  src={slider1} alt="" />
                    <img className='h-[500px] object-cover' src={slider2} alt="" />
                    <img className='h-[500px] object-cover' src={slider3} alt="" />

                </Slider>
                </div>
                <div className="w-1/3">
                <img className='h-[250px] object-cover' src={plog1} alt="" />
                <img className='h-[250px] object-cover' src={plog2} alt="" />
                </div>
               
            </div>


        </div>
    </header>
    
  )
}
