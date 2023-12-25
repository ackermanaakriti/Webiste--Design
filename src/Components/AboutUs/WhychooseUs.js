import { Container,Grid } from '@mui/material'
import React,{useEffect} from 'react'
import './AboutUs.css'
import cardimg from '../../Global/image/5138237.jpg'
import cardimg2 from '../../Global/image/Digital Marketing.png'
import cardimg3 from '../../Global/image/contactus.jpg'
import AOS from "aos";
import "aos/dist/aos.css";



const WhychooseUs = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <>
    <div className='whychooseus--container'>
        <Container>
            <h1 className='section--header'>Why Choose Us</h1>
              <div data-aos='slide-up' className='card--wrapper'  >
                
              <Grid container>
                <Grid xs={12} md={4}>
                 <div className='chooseus--card'>
                    <div className='chooseus--img'>
                        <img src={cardimg}/>
                    </div>
                    <div className='chooseus--card--content'>
                        <h2>24/7 Service</h2>
                        <p>we do a bit of substantial research and brainstorming before moving on to the next phase. And we do a detailed study of your competitor’s app which.</p>
                    </div>
                 </div>
                 </Grid>
                 <Grid xs={12} md={4}>
                 <div className='chooseus--card'>
                    <div className='chooseus--img'>
                        <img src={cardimg2}/>
                    </div>
                    <div className='chooseus--card--content'>
                        <h2>Reliable</h2>
                        <p>we do a bit of substantial research and brainstorming before moving on to the next phase. And we do a detailed study of your competitor’s app which.</p>
                    </div>
                 </div>
                 </Grid>
                 <Grid xs={12} md={4}>
                 <div className='chooseus--card'>
                    <div className='chooseus--img'>
                        <img src={cardimg3}/>
                    </div>
                    <div className='chooseus--card--content'>
                        <h2>24/7 Service</h2>
                        <p>we do a bit of substantial research and brainstorming before moving on to the next phase. And we do a detailed study of your competitor’s app which.</p>
                    </div>
                 </div>
                 </Grid>
                 </Grid>
                 
              </div>
        </Container>
    </div>
    </>

  )
}

export default WhychooseUs