import { Container, Grid } from '@mui/material'
import React ,{useEffect} from 'react'
import '../Home/Home.css'
import habout from '../../Global/image/Explore Our Services.png'
import WhatweDo from '../Home/WhatweDo'
import WhychooseUs from './WhychooseUs'
import ContactLocation from '../Home/ContactLocation'
import AOS from "aos";
import "aos/dist/aos.css";


const AboutUs = () => {
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
        <div data-aos='slide-up' className='haboutus--content'>
            <h1>
              Who <span>We</span> Are?
            </h1>
            <p>
          Aakash Labs combines technology with business intelligence to catalyze change and deliver data driven results. 
         </p>
          <button className='main--button'>
           Learn More..
          </button>
          </div>

        </Grid>
        <Grid xs={12} md={6}>
        <div className='haboutus--img'>
                <img src={habout}/>
            </div>
            
            </Grid>
       </Grid>
    </Container>


   </div>
   <WhatweDo/>
   <WhychooseUs/>
   <ContactLocation/>
   
   </>
  )
}

export default AboutUs;