import { Container, Grid } from '@mui/material'
import React,{useEffect} from 'react'
import '../Home.css'
import habout from '../../../Global/image/App Development.png'
import OurStory from '../OurStory'
import AOS from "aos";
import "aos/dist/aos.css";

const HomeService = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
   <>
   <div className='homeservice--wrapper'>
    <Container>
       
       <div className='hservice--img'>
                <img src={habout}/>
            </div>

            <div className='hservice--content'>
                <h1>Welcome To <span>Aakash Labs</span></h1>
                <p> We Are Always Ready For Your Service</p>
            </div>
       
     

    </Container>


   </div>
   
   </>
  )
}

export default HomeService