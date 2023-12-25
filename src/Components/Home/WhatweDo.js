import React,{useEffect} from 'react'
import devlopment from '../../Global/image/strategy-development.png'
import './Component.css'
import { Grid } from '@mui/material'
import { Container} from '@mui/material'
import AOS from "aos";
import "aos/dist/aos.css";

const WhatweDo = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
  <>
  <div className='whatwedo--wrapper'>
    <Container>
        <h1 className='section--header'>What We Do..</h1>
        <Grid container>
            <Grid xs={4}>
            <div data-aos='slide-up' className="services-icon-wrapper">
                    <div className="for-border">
                <img className="services--icon" src={devlopment} alt=""/>
                <p>SOFTWARE DEVELOPMENT</p>
            </div>
            </div>
            </Grid>
            <Grid xs={4}>
            <div data-aos='slide-up' className="services-icon-wrapper">
                    <div className="for-border">
                <img className="services--icon" src={devlopment} alt=""/>
                <p>WEB DEVELOPMENT</p>
            </div>
            </div>
            </Grid>
            <Grid xs={4}>
            <div data-aos='slide-up' className="services-icon-wrapper">
                    <div className="for-border">
                <img className="services--icon" src={devlopment} alt=""/>
                <p>MOBILE APPLICATION</p>
            </div>
            </div>
            </Grid>
        </Grid>
        

        <Grid container justifyContent='center'>
            <Grid  xs={4}>
            <div data-aos='slide-up' className="services-icon-wrapper">
                    <div className="for-border">
                <img className="services--icon" src={devlopment} alt=""/>
                <p>CHAT BOT DEVELOPMENT</p>
            </div>
            </div>
            </Grid>
            <Grid xs={4}>
            <div data-aos='slide-up' className="services-icon-wrapper">
                    <div className="for-border">
                <img className="services--icon" src={devlopment} alt=""/>
                <p>SEO MARKETING</p>
            </div>
            </div>
            </Grid>
           
        </Grid>

    </Container>
  </div>
  </>
  )
}

export default WhatweDo