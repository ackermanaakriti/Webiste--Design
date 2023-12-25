import { Container, Grid } from '@mui/material'
import React ,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Home/Component.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
    <>
    <div className='contactlocation--wrapper'>
       <Container>
        <Grid container >
            <Grid xs={12} md={7}>
               
                <h1>Aakash Labs</h1>
                <div className='allmedia--wrapper'>
                <div className='location--'>
                <div className='location--wrapper'>
                    <LocationOnIcon/>
                    <h2>Location:</h2>
                   <p>23 kathmandu putalisadak</p>
                </div>
                <div className='location--wrapper'>
                    <LocalPhoneIcon/>
                    <h2>Phone No:</h2>
                   <p>987543899</p>
                </div>

                <div className='location--wrapper'>
                    <div> <EmailIcon/></div>
               
               
                    <h2>  Email:</h2>
                    <p>aakashlab@gmail.com</p>
                 
                </div>
                </div>
               
               
                </div>
               
                
            </Grid>
            <Grid xs={12} md={5} justifyContent='center'>
                <form>
                        <input placeholder='Enter Your Name'/>   
                        <input placeholder='Enter Your Email Address'/> 
                    
                        <textarea  placeholder='Enter Your Message' cols={40} rows={6}></textarea>
                        <button>Submit</button>
                </form>
            </Grid>
        </Grid>
       </Container>
    </div>
    </>
  )
}

export default ContactForm;