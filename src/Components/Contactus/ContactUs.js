import { Container, Grid } from '@mui/material'
import React ,{useEffect} from 'react'

import habout from '../../Global/image/contactus2.png'
import ContactForm from './ContactForm'
import './Contactus.css'
import AOS from "aos";
import "aos/dist/aos.css";



const ContactUs = () => {
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
             Get In <span>Touch</span> 
            </h1>
               
            </div>
        

       
      
    </Container>


   </div>
   <ContactForm/>
  
   
   </>
  )
}

export default ContactUs;