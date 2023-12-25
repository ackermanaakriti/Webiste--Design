import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeSlider from '../Components/Home/Slider/HomeSlider'
import Home from '../Components/Home/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import ContactUs from '../Components/Contactus/ContactUs'
import NewsList from '../Components/News/NewsCard'
import News from '../Components/News/News'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/news' element={<News/>}/>
        
    </Routes>
  )
}

export default Router