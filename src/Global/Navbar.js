import { Container, Grid } from '@mui/material'
import React from 'react'
import logo from '../Global/image/logoaks.png'
import './Global.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='navbar--wrapper'>
    <Container>
        <Grid container>
            <Grid xs={3}>
                <div className='logo--container'>
                    <img src={logo}/>
                </div>
            </Grid>

            <Grid xs={9}>
                <ul>
                    <li>
                    <Link to='/' style={{textDecoration:'none',color:'white'}}>
                        Home
                    </Link>
                    </li>
                    <li>  <Link to='/aboutus' style={{textDecoration:'none',color:'white'}}>
                        About Us
                    </Link></li>
                  
                  <li>  <Link to='/contactus' style={{textDecoration:'none',color:'white'}}>
                        Contact Us
                    </Link></li>
                  

                  <li> <Link to='/news' style={{textDecoration:'none',color:'white'}}>
                        News
                    </Link></li>
                   
                </ul>
                
                </Grid>
        </Grid>
    </Container>
   </div>
   </>
  )
}

export default Navbar