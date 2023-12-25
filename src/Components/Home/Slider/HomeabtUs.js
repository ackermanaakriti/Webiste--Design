import { Container, Grid } from '@mui/material'
import React,{useEffect} from 'react'
import '../Home.css'
import habout from '../../../Global/image/About Us.png'
import OurStory from '../OurStory'
import AOS from "aos";
import "aos/dist/aos.css";

const HomeabtUs = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
   <>
   <div className='homeabtus--wrapper'>
    <Container>
       <Grid container>
        <Grid xs={12} md={6}>
        <div data-aos="slide-left" className='haboutus--img'>
                <img src={habout}/>
            </div>

        </Grid>
        <Grid xs={12} md={6}>
            <div data-aos="slide-up" className='haboutus--content'>
            <h1>
              Grow <span>Your</span>  Business With <span>Us.</span>
            </h1>
            <p>
          Aakash Labs combines technology with business intelligence to catalyze change and deliver data driven results. 
          We're a dynamic team of passionate people with technical, creative & digital expertise. </p>
          <button className='main--button'>
           Get Free Consultation
          </button>
          </div>

        
            
            </Grid>
       </Grid>

    </Container>


   </div>
   
   </>
  )
}

export default HomeabtUs