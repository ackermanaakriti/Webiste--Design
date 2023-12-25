import { Container, Grid } from '@mui/material'
import React,{useEffect} from 'react'
import ourstory from '../../Global/image/our-story.png'
import './Component.css'
import AOS from "aos";
import "aos/dist/aos.css";


const OurStory = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <>
    <div className='ourstory--wrapper'>
        <Container>
            <Grid container>
                <Grid xs={12} md={6}>
                 <div data-aos="slide-up" className='ourstory--img'>
                    <img src={ourstory}/>
                 </div>
                </Grid>
                <Grid xs={12} md={6}>
                    <div data-aos='slide-up' className='ourstory--content'>
                        <h1 className='section--header'>Our Story</h1>
                        <p>we have served diverse
                        clients from pharmaceuticals and automotive to tourism and government investment boards.
                        Growing from roots in the digital industry, we understand the importance of intuitive and
                        innovative technology in today’s world. And we have helped create a wave of profitable
                        realities for numerous national and international brands.</p>
                    </div>

                </Grid>
            </Grid>
        </Container>
    </div>
    </>
  )
}

export default OurStory