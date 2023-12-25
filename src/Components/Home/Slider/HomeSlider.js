import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomeabtUs from './HomeabtUs';
import HomeService from './Homeserv';
import AOS from "aos";
import "aos/dist/aos.css";


const HomeSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
   <>
   <div className='homepage--wrapper'>
    <div className='slider--wrapper'>
         <Slider {...settings}>
            <div>
                <HomeabtUs/>
            </div>
            <div><HomeService/></div>
            
         </Slider>
    </div>
    

   </div>
   
   </>
  )
}

export default HomeSlider;