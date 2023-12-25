import { Container, Grid } from '@mui/material'
import React ,{useEffect} from 'react'

import habout from '../../Global/image/contactus2.png'

import '../Contactus/Contactus.css'
import AOS from "aos";
import "aos/dist/aos.css";
import NewsList from './NewsCard';

import ContactLocaton from '../Home/ContactLocation'


const News = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
   <>
   <div className='mainContactus--wrapper'>
    <Container>
       
        
        <div className='mainContactus--img'>
                <img data-aos='zoom-out-up' data-aos-duration={10000} src={habout}/>
                <h1 data-aos='slide-up'>
              <span>News</span> 
            </h1>
               
            </div>
        

       
      
    </Container>


   </div>
   <NewsList/>
   <ContactLocaton/>
  
   
   </>
  )
}

export default News;